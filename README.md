# JavaScript - Modal

Fork this repo to begin your work.

Your assignment is to implement a modal window. Modal windows look like this:

![](https://cl.ly/gixI/Screen%20Shot%202016-07-17%20at%205.33.32%20PM.png)

Modals have two necessary components:

1. The triggering element - This is what the user clicks to reveal the modal window.
2. The modal content - This is what is shown when the user clicks the triggering element.

---

## Building Modals

### Modal Appearance

Hiding and showing content is not a very difficult matter with JavaScript. What makes the feature a _modal_ is how it looks. Modals appear to live on a layer above the website's base layer. As in the example above, they often have a semi-transparent _overlay_ between them and the website's base layer.

Consider how you would build a modal-like appearance using CSS. You would need the following:

- A simple `div` that takes up all of the viewport's width/height, which has a background color of (for example) semi-transparent black.
- A `div` of some fixed size that sits in the middle of the viewport.

Your first step in building a modal should be learning how to make the appearance of a modal. Don't worry about the JavaScript or the triggering element at all until you can do this.

Just make HTML and CSS that looks like this:

![](https://cl.ly/gixI/Screen%20Shot%202016-07-17%20at%205.33.32%20PM.png)

(Don't sweat the minor details of the design, like how the buttons look. Just get the modal window and overlay layouts correct.)

So that's your task, now. Go for it.

Note: You might want to look into CSS's `position` and `z-index` properties, although they are not stricty necessary depending on your approach.

### Modal Behavior

Now that you can build the appearance of a modal, use JavaScript to add behavior to the page so that the modal behaves like a modal.

First, use CSS to hide the modal content and overlay at first, when the page loads.

Then add an event listener to the triggering element. When the triggering element is clicked, it should show the modal content and overlay.

## Bonus: Close Button

As a bonus, see if you can add a feature such that the modal content contains a 'Close' button that hides the modal and overlay when it's clicked.