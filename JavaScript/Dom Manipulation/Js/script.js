const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);

//create a p element
const txt = document.createElement('p');

//places element into DOM
container.appendChild(txt);

//adds text to element
txt.textContent = "Hey i'm red";

//adds inline-style colour to text element
txt.style.color = 'red';


const head = document.createElement('h3');
container.appendChild(head);
head.textContent = "i'm blue h3!";
head.style.color = 'blue';

const stack = document.createElement('div');
container.appendChild(stack);
stack.style.backgroundColor = 'pink';
stack.style.borderStyle =  'solid';


const stackTxt = document.createElement('h1');
stack.appendChild(stackTxt);
stackTxt.textContent = "i'm in a div";

const stackP = document.createElement('p');
stack.appendChild(stackP);
stackP.textContent = "ME TOO!";


// const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");


// const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//   alert("Hello World");
// });

// // METHOD 2
// btn.onclick = alertFunction;

// // METHOD 3
// btn.addEventListener('click', alertFunction);

btn.addEventListener('click', function (e) {
    console.log(e.target);
  });

  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});