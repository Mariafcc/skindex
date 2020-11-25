import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap"
import Quiz from "../pages/Quiz";
import "../components/style/QuizModal.css";



function QuizModal(props) {
  const [show, setShow] = useState(false);
  const [userAnswers, setUserAnswers] = useState(props)

  const [questions, setQuestions] = useState(props)
  //or use useEffect and watch for props

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(props.questions)
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log("this works?")
  };
  const handleAnswers = e => {
    e.preventDefault();
    console.log("these are" + userAnswers)
  };

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
                <h3>{res.question}</h3>
                {res.answers.map(answer => {
                  return <Button onClick={handleAnswers}>{answer}</Button>
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