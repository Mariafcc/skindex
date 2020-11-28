import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button, Modal, Alert } from 'react-bootstrap';
import Quiz from '../pages/Quiz';
import '../components/style/QuizModal.css';
import { useHistory } from 'react-router-dom';

function QuizModal(props) {

	const [show, setShow] = useState(false);
	//set props to questions
	const [questions, setQuestions] = useState(props.questions);
	//set initial answers array mapping questions and getting id value of the question and selected answer, answer empty on the beginning, don't really need this, but makes your life easier
	const initialAnswers = [
		...questions.map(item => (item = { id: item.id, selection: '' })),
	];
	//user answers set to initialAnswers
	const [userAnswers, setUserAnswers] = useState([...initialAnswers]);
	//state for checking if the form has been submitted
	const [isSubmitted, setIsSubmitted] = useState(false);
	//or use useEffect and watch for props
	const handleClose = () => {
		setShow(false);
		//this is bootstrap close modal handler, setting here setIsSubmitted to false, so user can start the quiz again
		setIsSubmitted(false);
	};
	const handleShow = () => setShow(true);
	const handleSubmit = e => {
		e.preventDefault();
		//looking for empty selection values in userAnswers array
		const empties = userAnswers.find(item => item.selection === '');
		//if there are no empties, the .find method will return undefined, verifying that user selected answers to each series of questions
		empties !== undefined
			? //if user didn't answer all the questions, show it some message, for now just console.log
			  console.log('please select missing answers')
			: //if all questions has been answered, set isSubmited to true, also here you want to perform your axios call and send user data to DB
			  setIsSubmitted(true);
		console.log('ready to send userAnswers to DB');
	};
	const handleAnswers = e => {
		e.preventDefault();
		//get question id assigned to the button as data-d
		const id = parseInt(e.target.getAttribute('data-id'));
		//get value from selected button
		const selection = e.target.getAttribute('data-selection');
		//check if we already have it in array
		const inArray = userAnswers.find(item => item.selection === selection);
		//create a new object to add to our array, 
		//also checking if the selected button was already selected and we have the same object in the array, 
		//in that case so we are going to deselect it and set the selection value to emty string 
		const userSelection = { id, selection: inArray ? '' : selection };
		//here we are mapping user answers and checking if we already have the answer with that id, and if we do, we replace it's value
		const finalSelection = userAnswers.map(item => {
			if (item.id === id) {
				item = userSelection;
			}
			return item;
		});
		//finally assigning new state to user answers 
		setUserAnswers([...finalSelection]);
  };

  const history = useHistory()

	console.log(userAnswers);
	return (
		<>
			<Button
				size='lg'
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translateX(-50%) translateY(-50%)',
				}}
				variant='outline-dark'
				onClick={handleShow}
				className='text-uppercase font-weight-bold p-lg-4 p-3 rounded-0'
			>
				Begin Your Skin Assessment
			</Button>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}
				aria-labelledby='contained-modal-title-vcenter'
				centered
				size='lg'
			>
				<Modal.Header
					className='py-4'
					style={{
						backgroundColor: '#ffd7bf',
						color: '#21252d',
						height: '90px',
					}}
					closeButton
				>
					<h2
						style={{
							position: 'absolute',
							left: '50%',
							transform: 'translateX(-50%)',
						}}
						className='pb-5'
					>
						Skin Quiz
					</h2>
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
															? 'active'
															: ''
													}  py-lg-3 border rounded-0`}
													variant='secondary'
													data-selection={answer}
													data-id={question.id}
													key={question.id + answer}
													onClick={handleAnswers}
													style={{ overflowWrap: 'anywhere' }}
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
								Your submitted information:
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
											style={{ overflowWrap: 'anywhere' }}
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
              Go To Routine</Button>
						</React.Fragment>
					)}
				</Modal.Body>
				<Modal.Footer
					style={{
						backgroundColor: '#ffd7bf',
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

//   const [show, setShow] = useState(false);
//   const [userAnswers, setUserAnswers] = useState([])

//   const [questions, setQuestions] = useState(props)
//   //or use useEffect and watch for props

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   // console.log(props.questions)
  
//   const handleSubmit = e => {
//     e.preventDefault();
//     // console.log("this works?")
//   };
//   const handleAnswers = e => {
//     e.preventDefault();
//     const selection = {id: parseInt(e.target.id), selected: e.target.value}
//     setUserAnswers([...userAnswers, selection])
//     const filtered = userAnswers.filter(a => a.id != e.target.id ? selection : {id: a.id, selected: e.target.value})
//     // const filtered = userAnswers.map(answer => {
//       // console.log("answer.id", answer.id)
//       // console.log("selection.id", selection.id)
//     //   return answer.id === selection.id ? answer.selected = e.target.value : answer
//     // })
//     // console.log(selection)
//     // console.log(filtered)
//     // setUserAnswers([...filtered])
//     // console.log("===== these are =====")
//     // console.log(e.target.id)
//     console.log(filtered)
//   };

//   console.log(userAnswers)

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Begin Your Skin Assessment
//         </Button>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title></Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {props.questions.map(res => {
//             return (
//               <React.Fragment>
//                 <h3 key={res.question}>{res.question}</h3>
//                 {res.answers.map(answer => {
//                   return <Button id={res.id} value={answer} key={res.answer} onClick={handleAnswers}>{answer}</Button>
//                 })}
//               </React.Fragment>
//             )
//           })}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose, handleSubmit}>
//             Submit Answers
//             </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );

}
export default QuizModal;