// creates 8 bubbles by creating new div elements
// and adding the bubble class to them
for (let i=0;i < 12; i++) {
    const bowl = document.querySelector('.bowl');
    const bubble = document.createElement('div');

    bubble.classList.add('bubble');

    // set position to random x within the width of the bowl.
    // i use getComputedStyle and getPropertyValue to access the css variable
    const xpos = Math.random() * bowl.offsetWidth;
    bubble.style.left= xpos + 'px';
    
    //add delay to animation of bubbles - bc it looks better
    bubble.style.animationDelay = (Math.random() * 2) + 's';
    
    // add the bubbles to the page
    bowl.appendChild(bubble);
}