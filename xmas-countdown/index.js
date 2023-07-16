// Get the countdown element
const countdownElement = document.getElementById("countdown");

// Calculate the number of days until Christmas
const today = new Date();
const christmasDay = new Date(today.getFullYear(), 11, 25);
const oneDay = 1000 * 60 * 60 * 24;
const daysLeft = Math.ceil((christmasDay - today) / oneDay);

// Update the countdown element
countdownElement.textContent = `Only ${daysLeft} days until Christmas!`;

// Function to open a door and reveal the content
function openDoor(day) {
  const contentTextElement = document.getElementById("contentText");
  contentTextElement.textContent = `Surprise content for Day ${day}!`;

  const contentElement = document.getElementById("content");
  contentElement.style.display = "block";
}

// Function to close the content
function closeContent() {
  const contentElement = document.getElementById("content");
  contentElement.style.display = "none";
}
