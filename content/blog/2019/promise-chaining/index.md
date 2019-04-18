---
title: Chaining Arbitrary Promises in JavaScript
date: '2019-04-17'
description: 'A neat lil JS trick'
---

Here's a neat trick I learned while building [The Nature of the Beast](https://github.com/vcolavin/nature-of-the-beast), and was able to apply in a code interview. I think it's nifty as hell and the interviewer did too. I think I first found this on Stack Overflow.

## The Interview Question

Take an array of numbers, e.g. `[1, 4, 10, 3]`, and print them out in order with one second delay between them.

The interviewer may have been looking for something like this, which immediately sets multiple timeouts with increasing wait periods based on the index:

```javascript
const myArr = [1, 2, 3];

myArr.forEach((num, i) => {
	window.setTimeout(() => {
		console.log(num);
	}, 1000 * i);
});
```

What I did instead was use my nifty promise trick, starting with this:

```javascript
function logThenWait(num) {
	console.log(num);

	return new Promise(resolve => {
		window.setTimeout(resolve, 1000);
	});
}
```

The `logThenWait` function just accepts a number, prints it, and returns a promise which resolves in one second. If you're comfortable with JS promises, it is not unusual.

I brought it together with this `reduce`:

```javascript
[1, 2, 3].reduce(
	(memo, val) => memo.then(() => logThenWait(val)),
	Promise.resolve(null)
);
```

It's fairly dense chunk of code that took me some time to get used to. The principle of `reduce` is that it takes a list of things and turns into a single thing. In this case, we're taking a list of numbers and turning them into a single promise. It's a little weird because that single promise is the last in a chain made up of promises for each value in the initial array.

We start with `Promise.resolve(null)`, which is passed into the reducer function. We create a new promise using `logThenWait` and return it. That new promise then gets passed to the reducer as the memo, and the process repeats with each item in the array.

The result is a promise which prints each item one second apart. The main advantage it has over the basic `setTimeout` technique is that the result of the reduce is itself thenable, so we know when its done. This is pretty useful in real-world UI work. Something like...

```javascript
const writerPromise = [1, 2, 3].reduce(/* see code above */);

writerPromise.then(() => console.log('all done!'));
```

## Using promises with the browser speech API

So in NotB, descriptions are read out loud using the [browser speech synthesis API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis). Each description is an array of strings. I needed the descriptions to be read out loud, one after the other. I knew I wanted to use promises in order to take advantage of chaining. The core function would look like this:

```javascript
function utter(description) {
	const utterance = new SpeechSynthesisUtterance(description);
	window.speechSynthesis.speak(utterance);

	return new Promise(resolve => {
		utterance.onend = resolve;
	});
}
```

And just like above, I reduced a list of strings to a single promise. While descriptions are being read, the user can't interact with the screen, so I take advantage of the promise resolution to unlock the screen.

```javascript
const descriptions = [
	'the ghoul is looking at you',
	"it's a very spooky ghoul",
	"don't get too freaked out please"
];

const descriptionPromise = descriptions.reduce(
	(memo, val) => memo.then(() => utter(val)),
	Promise.resolve(null)
);

descriptionPromise.then(() => {
	this.setState({ interactive: true });
});
```
