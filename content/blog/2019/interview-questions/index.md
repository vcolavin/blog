---
title: Coding Interview Questions I've Been Asked
date: '2019-05-02'
description: 'Just a compendium of code questions.'
---

Maybe this

I'm only including the code and code-related questions here, but of course there's also been a lot of "tell me about a time you had a conflict with a coworker", "what is your perfect day at work", and "where do you see yourself in five years" type questions.

These questions are all in JavaScript unless otherwise noted, but usually I was given the choice of language.

## Esri (2019)

-   What does this code do?:

    ```js
    (function() {
    	blah();
    	console.log(a);
    	console.log(b);

    	var a = 3;
    	let b = 5;
    	function blah() {
    		console.log('hello');
    	}
    })();
    ```

-   Write a function which accepts an array of numbers and filters out the odds
-   Assuming the `Array.prototype.filter` method doesn't exist, monkeypatch the Array prototype to create your own version called `filt`.
-   Write a function which accepts a string and checks if it is a palindrome.

## SurveyMonkey (2019)

-   Write a function which tells you if a certain search term exists in a given array, assuming that array in unsorted.
-   Write the above function assuming the array is sorted (basically, implement binary search).
-   What happens when you press 'enter' in the browser's address bar?

## Mozilla (2019)

Mozilla mostly asked higher-level questions which don't require coding.

-   What happens when you press 'enter' in the address bar?
-   What are some things you might check for if you're auditing JavaScript code for security?
-   What triggers a DOM repaint?

## Periscopic (2017)

-   Implement an algorithm that accepts an array of numeric ranges `[start, end]` and returns an array where any that are overlapping have been merged. E.g.,

    ```js
    mergeOverlaps([[1, 3], [5, 7], [9, 11]]); // => [[1,3], [5,7], [9,11]]
    mergeOverlaps([[9, 11], [2, 7], [1, 3]]); // => [9,11], [1,7]]
    mergeOverlaps([[2, 7], [1, 3], [6, 11]]); // => [[1,11]]
    ```

-   Describe the algorithm that an elevator uses to decide what floor to go to, assuming there is a single elevator in the building. The interviewer asked specifically about [how to prevent "starvation"](<https://en.wikipedia.org/wiki/Starvation_(computer_science)>), where the algorithm might indefinitely ignore a person calling the elevator.
-   Estimate how many delivery drivers FedEx needs to employ to serve the city of Portland.
-   Given a function which draws a line between two points, e.g.,

    ```js
    drawLine({ from: [x1, y1], to: [x2, y2] });
    ```

    Write a function which draws a dashed line between two points, e.g.,

    ```js
    drawDashedLine({
    	from: [x1, y1],
    	to: [x2, y2],
    	dashLength: n,
    	gapLength: m
    });
    ```
