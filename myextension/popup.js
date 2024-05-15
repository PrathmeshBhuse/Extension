document.addEventListener('DOMContentLoaded', function() {
    // Handling clicks on contacts
    const contacts = document.querySelectorAll('.contact');
    const chatDisplay = document.getElementById('chat-display');

    contacts.forEach(contact => {
        contact.addEventListener('click', function() {
            // Remove active class from all contacts
            contacts.forEach(c => c.classList.remove('active'));
            // Add active class to clicked contact
            this.classList.add('active');

            // Clear chat display
            chatDisplay.innerHTML = '';

            // Show chat for selected contact
            const chatId = this.id.replace('contact', 'chat');
            const chat = document.getElementById(chatId);
            chatDisplay.appendChild(chat.cloneNode(true));
        });
    });

    // Handling clicks on navbar items
    const navItems = document.querySelectorAll(".nav-item");

    // Function to filter chats based on selected option
    function filterChats(filter) {
        const chatContainers = document.querySelectorAll(".chat-container");
        
        chatContainers.forEach(container => {
            const chats = container.querySelectorAll(".chat");
            chats.forEach(chat => {
                const displayStyle = (filter === "All" || chat.classList.contains(filter.toLowerCase())) ? "block" : "none";
                chat.style.display = displayStyle;
            });
        });
    }

    // Event listener to detect clicks on navbar items
    navItems.forEach(navItem => {
        navItem.addEventListener("click", function() {
            const filter = this.textContent;
            filterChats(filter);
            console.log("Navbar item clicked:", filter);
        });
    });
});
