---
title: Coding Interview Questions I've Been Asked
date: '2019-05-02'
description: "A compendium of code questions I've been asked. At least, the ones I can remember."
---

I'm coming towards the end of an interview cycle, and I thought I'd compile the code questions I've been asked over the years. At least, the ones I can remember. If and when I find myself interviewing again I'll update this list.

I'm only including code and code-adjacent questions here, but of course there's also been a lot of "tell me about a time you had a conflict with a coworker", "what is your perfect day at work", and "where do you see yourself in five years" type questions.

These questions are all in JavaScript unless otherwise noted, but I was often given the choice of language.

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

-   Write a function which accepts an array of strings and logs them out in order, with a one-second delay between them. I went over this in more detail in my [promise chaining](./../promise-chaining) post.
-   Write a function which accepts an array of numbers and filters out the odds
-   Assuming the `Array.prototype.filter` method doesn't exist, monkeypatch the Array prototype to create your own version called `filt`.
-   Write a function which accepts a string and checks if it is a palindrome.
-   What sorts of layout issues might occur when internationalizing an app, and what CSS rules might you apply to mitigate those issues?

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

## FocusVision (2015)

I don't remember much about this interview, except that they asked me to write [an entire video upload and encoding application](https://github.com/vcolavin/video-upload-example) that I spent a huge amount of time on.

-   Using Ruby, write a function which iterates over an array of strings and returns a hash that counts the occurence of each string. The hash should be of the form:

    ```ruby
      {
        'hello' => 5,
        'test' => 1,
        'string3' => 6
      }
    ```

## Dev Bootcamp (2013)

DBC is long-closed, but they did ask one tricky question during the application.

-   Imagine a pair of cubes which sit on your desk and can be rotated to display the current day of the month. These cubes [exist in real life](http://www.houseofideas.de/WebRoot/Store11/Shops/63830914/5125/EFEF/3210/1C41/C8A1/C0A8/28BB/98A3/IMG_4434-1.JPG). Given that each cube only has six faces, what numbers does each cube need in order to represent every number from 01 to 31?
