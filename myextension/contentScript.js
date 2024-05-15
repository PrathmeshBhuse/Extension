document.addEventListener('DOMContentLoaded', function() {
    // Get all chat elements
    const chatElements = document.querySelectorAll('.chat');
    chatElements.forEach(chatElement => {
        // Access data from each chat element
        const chatNameElement = chatElement.querySelector('.chat-name');
        const lastMessageElement = chatElement.querySelector('.last-message');
        
        // Check if elements exist before accessing their content
        if (chatNameElement && lastMessageElement) {
            const chatName = chatNameElement.textContent;
            const lastMessage = lastMessageElement.textContent;

            // Manipulate data or perform actions   
            console.log(`Chat: ${chatName}, Last Message: ${lastMessage}`);
        } else {
            console.log("Chat name or last message element not found.");
        }
    });
});
