### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

making the function an async function
with an await response

- What is a Promise?

the object returned from an async/await function

- What are the differences between an async function and a regular function?

an async function is set up so it can await a response from where it is requested.  A regular function is resolved within the function and doesn't await an outside source to respond first? 

- What is the difference between Node.js and Express.js?

Node is a platform to make javascript able to be used for back end programming, and express is a framework for node to simplify APIs and add some features and organize functionality.

- What is the error-first callback pattern?

in node the first argument in the function is for the error object. So if any error is caused by the running of the code, the first object will be returned.


- What is middleware?

functions that can call req, res, and next.  It is a function that runs and calls the next function, one kind of in the middle.  Can run inbetween requests and responses.


- What does the `next` function do?

moves on to the next function

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

I would assume it would be better to return a list set with the names and the order should be in the order of the requests sent.  Right now it is returning elie, matt, and joel... but it is requesting elie, THEN joel, THEN matt, so it will have to wait for joel and matt to both respond to then return matt. And what the heck is up with the URL request for matt?  I think there are a few more efficient options to the request structure for usernames and possibly could set up a loop that sees what the /users/${username} is and works with that.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
