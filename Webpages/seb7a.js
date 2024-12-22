// Function to increment the count for the corresponding container
function incrementCount(button) {
    // Find the closest container to the button
    const container = button.closest('.container');
    // Find the span with the class 'recite' within that container
    const reciteSpan = container.querySelector('.recite');
    // Parse the current count, increment it, and update the display
    let currentCount = parseInt(reciteSpan.innerText);
    reciteSpan.innerText = currentCount + 1;
}

// Select all buttons with the class 'plus'
const plusButtons = document.querySelectorAll('.plus');

// Loop through each button and add a click event listener
plusButtons.forEach((button) => {
    button.addEventListener('click', () => incrementCount(button));
});

incrementCount('.plus');
