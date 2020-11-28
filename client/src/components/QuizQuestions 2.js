/* 
PSEUDOCODE

(note: all quiz questions in modals)
declare empty object to store user's answers

modal1: welcome to quiz! let's get started!
        start button
        on click, clears answer object and moves to next modal
modal2: what is your skin type?
        answers - choose one - dry, normal, combination, oily
        each one is a button
        on click, the text in the button gets added to answer object and moves to next modal
modal3: what is your primary skincare goal?
        answers - checkbox - clear blemishes, anti-aging
        submit button
        on click, the text corresponding to the checkbox gets added to answer object and moves to next modal
modal4: do any of these apply to you?
        answers - checkbox - sensitive skin
        submit button
        on click, the text corresponding to the checkbox gets added to answer object and moves to next modal
modal5: how into this are you?
        answers - choose one - give me ALL THE PRODUCTS, 
        each one is a button
        on click, the id of the button gets added to answer object and moves to next modal
modal6: what's your price range?
        answers - choose one - $, $$, $$$
        each one is a button
        on click, the id of the button gets added to answer object
        and quiz finishes

if not logged in > modal7: to get your recommended routine, sign up

if logged in > do you have any products that are working well for you?
    if yes > display form 
             Q1 - name of product (text input)
             Q2 - category of product (radio button, 1 choice only)
             Q3 - another product to add?
                  if yes > add corresponding product to answer object
                           then repeat question
                  if no > add corresponding product to answer object
                          go to recommended routine
    if no > go to recommended routine




*/