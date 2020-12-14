import React, { useState } from 'react';
import { ButtonGroup, Button, Modal, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ResultService from "../services/results.service";
import "./style/quizmodal.css";


function QuizModal(props) {

  const [show, setShow] = useState(false);
  //set props to questions
  const [questions, setQuestions] = useState(props.questions);
  //user answers set to initialAnswers
  const [userAnswers, setUserAnswers] = useState([]);
  //state for checking if the form has been submitted
  const [isSubmitted, setIsSubmitted] = useState(false);


  //or use useEffect and watch for props
  const handleClose = () => {
    if (isSubmitted) {
      setShow(false);
    }

  };
  const handleShow = () => setShow(true);
  const handleSubmit = e => {
    e.preventDefault();
    //looking for empty selection values in userAnswers array
    //const empties = userAnswers.find(item => item.selection === '');
    if (userAnswers.length != questions.length) {
      //change to alert
      <Alert>
        Please select missing answers!
      </Alert>
      return;
    }

    
    userAnswers.forEach((x, index) => {
      let tempSelection = x.selection;
      if (x.id === 4) {
        //grabs number from question number four string 
        tempSelection = x.selection.replace(/[^0-9]/g, "");
      }

      ResultService.saveQuestion(x.id, questions[index].question, tempSelection);
    });

    setIsSubmitted(true);

  };



  const handleAnswers = e => {
    e.preventDefault();
    //get question id assigned to the button as data-d
    const id = parseInt(e.target.getAttribute('data-id'));
    //get value from selected button
    const selection = e.target.getAttribute('data-selection');
    //check if we already have it in array

    const inArray = userAnswers.find(item => item.id === id);
    let newArray = userAnswers;
    if (inArray) {
      newArray = userAnswers.filter(item => item.id !== id);
    }
    newArray.push({ id, selection })
    setUserAnswers(newArray);
    
  };

  const history = useHistory()

  
  return (
    <>
      <Button
        size='lg'
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
          marginTop: "100px"
        }}
        variant='outline-dark'
        onClick={handleShow}
        className='text-uppercase font-weight-bold p-lg-4 p-3 rounded-0 bg-light'
      >
        Begin Your SkinDex Assessment
			</Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        aria-labelledby='contained-modal-title-vcenter'
        centered
        size='lg'
        width="30rem"
      >
        <Modal.Header
          className='py-4'
          style={{
            backgroundColor: '#FFDD99',
            color: '#21252d',
            height: '90px',
          }}
        >
          <h1
            style={{
              paddingLeft: "20%",
              alignContent: 'center'
            }}
          >
            Skin Quiz
            <h6
              style={{
                fontSize: '0.75rem',
                fontStyle: 'italic',
              }}
            >
              Double click your selections.
          </h6>
          </h1>
        </Modal.Header>
        <Modal.Body className='bg-light my-3'>
          {!isSubmitted ? ( //checking if the user already submit the form, in that case we just show the submited information and if not, we show our questions
            props.questions.map(question => {
              return (
                <React.Fragment>
                  <h3
                    className='mt-4 mb-3'
                    style={{ textAlign: 'center', color: '#404950' }}
                    key={question.id}
                  >
                    {question.question}
                  </h3>
                  <ButtonGroup
                    aria-label='selection'
                    className='btn-group-justified w-100'
                  >
                    {question.answers.map(answer => {
                      //adding class 'active' if the button is selected
                      return (
                        <Button
                          className={`${
                            userAnswers.find(item => item.selection === answer)
                              ? 'option-btn-active'
                              : ''
                            }  option-btn py-lg-3 border rounded-0`}
                          variant='secondary'
                          data-selection={answer}
                          data-id={question.id}
                          key={question.id + answer}
                          onClick={handleAnswers}
                        >
                          {answer}
                        </Button>
                      );
                    })}
                  </ButtonGroup>
                </React.Fragment>
              );
            })
          ) : (
              <React.Fragment>
                <h2 style={{ textAlign: 'center' }}>
                  Your SkinDex Submission:
							</h2>
                <ButtonGroup
                  aria-label='selection'
                  className='btn-group-justified w-100 my-5'
                >
                  {userAnswers.map(item => {
                    return (
                      <Button
                        className={`py-lg-3 border rounded-0`}
                        variant='dark'
                        key={item.id + item.selection}
                        onClick={handleAnswers}
                        style={{ overflowWrap: 'normal' }}
                        disabled
                      >
                        {item.selection}
                      </Button>
                    );
                  })}
                </ButtonGroup>
                <Button
                  className={`py-lg-3 border rounded-0`}
                  variant='secondary'
                  onClick={() => history.push('/routine')}
                  style={{ overflowWrap: 'anywhere' }}
                >
                  My SkinDex Routine</Button>
              </React.Fragment>
            )}
        </Modal.Body>
        <Modal.Footer
          style={{
            backgroundColor: '#FFDD99',
            color: '#21252d',
            height: '80px',
          }}
        >
          {isSubmitted ? null : (
            <Button
              variant='link'
              size='lg'
              className='mx-auto text-uppercase font-weight-bold text-dark'
              onClick={(handleClose, handleSubmit)}
            >
              Submit Answers
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );


}
export default QuizModal;