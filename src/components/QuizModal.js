import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap"
import Quiz from "../pages/Quiz";
import "../components/QuizModal.css";



function QuizModal(props) {
  const [show, setShow] = useState(false);
  const [questions, setQuestions] = useState(props)
  //or use useEffect and watch for props

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(props.questions)

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
                  return <Button>{answer}</Button>
                })}
              </React.Fragment>
            )
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Submit Answers
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default QuizModal;