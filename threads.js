// Description text for Threads by Instagram
const descriptionText = `Threads by Instagram is a standalone app designed for close friends to stay connected and share updates throughout the day. With Threads, you can communicate with your inner circle more quickly and effortlessly, sharing photos, videos, and messages in real-time.

Key Features:
- Close friends list: Create a list of close friends with whom you want to share your updates exclusively.
- Status updates: Share your current status with your close friends using auto-status, which automatically updates based on your location, activity, and battery level.
- Camera-first experience: Threads opens directly to the camera, allowing you to capture and share photos and videos instantly.
- Privacy and control: You have full control over who can reach you on Threads, with options to customize your notifications and preferences.

Stay connected with your close friends in a more intimate way with Threads by Instagram.`;

// Function to display Threads by Instagram description text
function displayDescriptionText() {
    const descriptionDiv = document.getElementById('descriptionText');
    descriptionDiv.innerText = descriptionText;
}

// Call the function to display Threads by Instagram description text
displayDescriptionText();
