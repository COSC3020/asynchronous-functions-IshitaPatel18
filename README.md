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

This implementation uses callbacks for its asynchronous execution. Even though 
this implementation is not running in parallel, I broke the array down into sections
according to what is the best number of threads to have running in parallel. There is one
for loop that is running for $\sqrt{n}$ as it divides the given array into chunks and then
calls the callback function with the piece and the element desired. Then the callback function
has a for loop that goes through each section and totals the occurence of the desired element
and returns it, to continue the summation in the other for loop. The callback for loop runs 
for n because it will iterate over the whole array, even if it is iterating over smaller sections
at first. All of the variable initalizations are constant time, so they can be dropped. Putting
it together we get $n + \sqrt{n}$ and we can drop the $\sqrt{n}$ as in this case it is a lower
order term. Therefore, the worst-case $\Theta$ complexity of this implementation is $\Theta(n)$.
