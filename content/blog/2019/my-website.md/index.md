---
title: My Website
date: '2019-05-21'
description: 'An overview of vcolavin.com.'
---

While I was job hunting, I put a fair amount of work into updating my website. You can see the current version at [vcolavin.com](https://vcolavin.com).

I wish the old version of my site was still available. I built it five years ago while I was still at code school. It needed some improvement.

For the kind of jobs I was applying for, I didn't need to communicate serious professionalism. I needed an online place which communicates a few important pieces of information, preferrably with a memorable and sincere brand.

## First, information.

The core purpose of my site is to allow people to learn about me if they want to, particularly if they're a recruiter or hiring manager. I wanted someone to be able to get the key information in very few clicks, but also be able to dig deeper if they were interested.

1. Name and pronouns. I highly recommend including your personal pronouns in communications, even (especially!) if you're cisgendered.
2. Job title
3. Resume
4. Contact information (which I put on the resume rather than directly on the site to decrease spam)
5. Portfolio
6. Blog
7. No tracking or analytics. I'm not interested in who is visiting it, and I think Google Analytics is evil and gross.

None of this was very complicated.

## Second, brand and style.

I am, at a spiritual level, grossed the heck out by branding. I understand that organizations have a need for it, and I respect the work of the people who specialize in branding, but it I can't escape how icky it feels. One is essentially constructing a personality for an inherently apersonal object. I can't get over the feeling of being mislead.

(As an aside, I think I'm not the only one who feels this way. This explains the rise of the [weirdly personal branded twitter](https://www.vice.com/en_us/article/pangw8/brand-twitter-is-absurd-and-it-will-only-get-worse). By peeling back the curtain and allowing a company's social media manager to speak sincerely in [their own voice](https://twitter.com/steak_umm/status/1045038141978169344), we are no longer being obliged to play along with the uncomfortable and absurd fiction that a brand itself is writing tweets. I prefer this paradigm.)

But these hangups don't apply so much when we're talking about personal branding, as long as one is sincere. Because then it's not so much branding as it is simply thinking about how you present yourself. Fundamentally it's no different from the process of choosing what you wear to work, or what you want to communicate through that clothing.

I went through my Instagram archives and found this image:

![An image of my face.](./face.jpg)

I really like this picture. I think it looks funny and cute and non-threatening, which is pretty important to me. I strive to reject toxic masculinity because [men are scary](https://www.youtube.com/watch?v=ENxbcvUXfnM), and I want this site to communicate that. Thus I chose this picture to take a central part of the experience.

And I went to Google Fonts and found a really silly and memorable sans called [Supermercado One by James Grieshaber](https://fonts.google.com/specimen/Supermercado+One). And then [Crimson Text by Sebastian Kosch](https://fonts.google.com/specimen/Crimson+Text) for the serif, which I felt looked elegant. I heard once that you're supposed pick your primary sans and serif fonts in tandem, making sure they somehow align. I'm not sure if I succeeded, because I don't know what I'm looking for. But I like the combination.

And just because I am never allowed to use default HTML colors in professional work, I chose `darkorange` as the primary brand color.

I then spent time ensuring that it was functional across a range of screen sizes. I took advantage of CSS's `calc` to make text (and thus the `rem` unit) resize smoothly according to screen width:

```css
:root {
	font-size: calc(15px + 1.5vw);
}
```

## Third, the behavior.

So I've got useful information, considered fonts, and a cute face. It was essentially done!

But I'm a front-end developer, and I was inclined to add a smidgen of fun behavior to the site. This was a site, not an app, and I wanted to keep it to a minimum. Just a dash, to make it memorable. I landed on the idea of animating the text so it comes out of my face. I was inspired by Terry Gilliam, and by the personal website of one of my college housemates.

The basic behavior was easy to implement. All it took was some light vanilla JavaScript to toggle classes, and some CSS `transition` rules.

It worked well, but I realized that it quickly got boring and annoying. If a repeat visiter wanted to quickly view my site just to check some information, they were subjected to the same unskippable loading animation. Although this wouldn't be a super-common use case, the surface area of this site is pretty small. I wanted it all to be well-considered.

My initial solution was to provide the user with a checkbox labelled "disable animation" which, when checked, saved a cookie used to disable animation on page load. It worked fine, but felt a little awkward. It was strange to ask the user to set configuration for such a small site, and cookies felt overbuilt anyways.

I decided to scrap the cookie solution, and use the location hash to store the state instead. Once the animation completes, `#welcome` is added to the hash. If `#welcome` is present on page load, the animation is skipped. This way, when the user refreshes, the default behavior is that they go directly to the content.

This had the bonus of making it possible to link directly to the post-animation view. However this behavior could be confusing for non-technical or Safari users, neither of whom know that the URL has changes once the animation completes.

To make it easy to replay the animation and restore the state, I added a "replay animation" button which both resets the animation and clears the location hash. This allows the user to play with the site as a toy, rather than merely being an intro animation.

## That's it!

It's a small site, but it took a few days of work to contrive and put together. It's proven useful in helping me find a job, but beyond that I hope it's enjoyable enough to use and play around with.
