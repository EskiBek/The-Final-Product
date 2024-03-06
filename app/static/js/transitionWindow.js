const boxElement = document.querySelector('.slideImage');
let timeoutId; // To store the timeout I
// Add an event listener for mouseenter (hover)
boxElement.addEventListener('mouseenter', () => {
	clearTimeout(timeoutId); // Clear any existing timeout
	boxElement.style.transform = 'translateX(-20%)'; // Move 20 pixels to the right
})
// Add an event listener for mouseleave
boxElement.addEventListener('mouseleave', () => {
	// Set a delay of 500 milliseconds before resetting the transformation
	timeoutId = setTimeout(() => {
		boxElement.style.transform = 'translateX(0)'; // Reset to the original position
	}, 500);
});