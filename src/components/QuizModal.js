import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap"
import Quiz from "../pages/Quiz";
import "../components/style/QuizModal.css";



function QuizModal(props) {
  const [show, setShow] = useState(false);
  const [userAnswers, setUserAnswers] = useState([])

  const [questions, setQuestions] = useState(props)
  //or use useEffect and watch for props

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log(props.questions)
  
  const handleSubmit = e => {
    e.preventDefault();
    // console.log("this works?")
  };
  const handleAnswers = e => {
    e.preventDefault();
    const selection = {id: parseInt(e.target.id), selected: e.target.value}
    setUserAnswers([...userAnswers, selection])
    const filtered = userAnswers.filter(a => a.id != e.target.id ? selection : {id: a.id, selected: e.target.value})
    // const filtered = userAnswers.map(answer => {
      // console.log("answer.id", answer.id)
      // console.log("selection.id", selection.id)
    //   return answer.id === selection.id ? answer.selected = e.target.value : answer
    // })
    // console.log(selection)
    // console.log(filtered)
    // setUserAnswers([...filtered])
    // console.log("===== these are =====")
    // console.log(e.target.id)
    console.log(filtered)
  };

  console.log(userAnswers)

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Begin Your Skin Assessment
        </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.questions.map(res => {
            return (
              <React.Fragment>
                <h3 key={res.question}>{res.question}</h3>
                {res.answers.map(answer => {
                  return <Button id={res.id} value={answer} key={res.answer} onClick={handleAnswers}>{answer}</Button>
                })}
              </React.Fragment>
            )
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose, handleSubmit}>
            Submit Answers
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default QuizModal;