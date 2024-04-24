[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/26dp6wek)
# Asynchronicity

Implement a function that takes an array and a key to search for and counts the
number of times key matches an element in the array (the count matches function
we talked about in lectures). Your implementation must count the number of
matches asynchronously, but does not need to do so in parallel. What type of
asynchronous execution you choose is up to you.

I have not provided a template; depending on how you choose to implement the
function, it will have a different signature.

I have also not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The [async library](https://caolan.github.io/async/v3/) may be helpful with
this.

## Runtime Analysis

What is the time complexity of your implementation (worst-case $\Theta$)? Add
your answer, including your reasoning, to this markdown file.

This implementation uses promises for its asynchronous execution, but it does not run in parallel.
There is a count function that uses and returns a promise to count the number of times an element occurs and then
calls the resolve with the value of the total count. The promise has a for loop that iterates over all the
elements in the array to find all of the occurences of the element we are looking for. The async recieve
function uses await to wait for the value from the promise to be returned and then that value is sent
to the callback, which is the assert in the test file to check if the total is the correct value. 
The for loop in the count function will still run for n times because all of the elements are being checked. 
Therefore, the worst-case $\Theta$ complexity of this implementation is $\Theta(n)$.
