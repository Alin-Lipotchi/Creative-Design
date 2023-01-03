// Variables
const storyBtns = document.querySelectorAll(".story-btn");

// Story Buttons
storyBtns.forEach(e => {
    e.addEventListener("click", () => {
        e.classList.toggle("change");
        e.nextElementSibling.classList.toggle("change");
    });
});