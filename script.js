document.addEventListener("DOMContentLoaded", function() {
    showTypingIndicator();
    
    setTimeout(function() {
        botResponse("default");
        document.getElementById("status").textContent = "Online";
        document.getElementById("typing").remove();
    }, 1000);

    // Listen for Enter key press to send message
    document.getElementById("userInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    // Modal logic
    var modal = document.getElementById("imageModal");
    var profilePic = document.getElementById("profilePic");
    var modalImg = document.getElementById("modalImage");
    var closeModal = document.getElementById("closeModal");
    var overlay = document.getElementById("overlay");

    profilePic.onclick = function() {
        overlay.style.display = "block"; // Show the overlay
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    closeModal.onclick = function() {
        overlay.style.display = "none"; // Hide the overlay
        modal.style.display = "none";
    }

    // Close modal when clicking outside the modal content
    window.onclick = function(event) {
        if (event.target === modal || event.target === overlay) {
            overlay.style.display = "none"; // Hide the overlay
            modal.style.display = "none";
        }
    }
});

function showTypingIndicator() {
    document.getElementById("status").textContent = "Typing...";
    var typingIndicator = document.createElement("div");
    typingIndicator.id = "typing";
    typingIndicator.className = "typing";
    typingIndicator.textContent = "Bot is typing...";
    document.getElementById("chatbox").appendChild(typingIndicator);
}

function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    appendMessage(userInput, "user");

    showTypingIndicator();

    setTimeout(function() {
        botResponse(userInput);
        document.getElementById("status").textContent = "Online";
        document.getElementById("typing").remove();
    }, 1000);

    document.getElementById("userInput").value = "";
}

function appendMessage(message, sender) {
    var chatbox = document.getElementById("chatbox");
    var messageDiv = document.createElement("div");
    messageDiv.className = sender + "-message";
    messageDiv.innerHTML = '<div class="message">' + message + '</div>';
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}

function botResponse(input) {
    var response = "";
    if (input === "default") {
        response = `Hello there 👋🏻,<br><br>
                    My name is Abdul Moiz.<br><br>
                    I am a Computer Science student at Muhammad Ali Jinnah University 👨🏻‍💻📚<br><br>
                    I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere.<br><br>
                    Send '<strong>help</strong>' to know more about me.`;
    } else {
        switch(input.toLowerCase()) {
            case 'help':
                response = `Send Keyword to get what you want to know about me...<br>
                            e.g<br>
                            '<strong>skills</strong>' - to know my skills<br>
                            '<strong>resume</strong>' - to get my resume<br>
                            '<strong>education</strong>' - to get my education details<br>
                            '<strong>address</strong>' - to get my address<br>
                            '<strong>contact</strong>' - to get ways to connect with me<br>
                            '<strong>projects</strong>' - to get details of my projects<br>
                            '<strong>clear</strong>' - to clear conversation<br>
                            '<strong>about</strong>' - to know about this site<br>
                            '<strong>social</strong>' - to get my social media links<br>
                            '<strong>feedback</strong>' - to leave feedback about the site`;
                break;
            case 'social':
                response = "You can find me on social media: <strong>[LinkedIn](https://www.linkedin.com/in/abdulmoiz)</strong>, <strong>[Twitter](#)</strong>, and <strong>[GitHub](#)</strong>.";
                break;
            case 'feedback':
                response = "I would love to hear your feedback! Please email me at <strong>feedback@example.com</strong>.";
                break;
            case 'skills':
                response = "I am skilled in JavaScript, Python, HTML, CSS, React, and Node.js.";
                break;
            case 'resume':
                response = "You can download my resume <strong>[here](#)</strong>.";
                break;
            case 'education':
                response = "I am a Computer Science student at Muhammad Ali Jinnah University.";
                break;
            case 'address':
                response = "I am based in Karachi, Pakistan.";
                break;
            case 'contact':
                response = "You can contact me via email at moiz@example.com or via LinkedIn.";
                break;
            case 'projects':
                response = "I have worked on various projects including web development and machine learning. You can view them <strong>[here](#)</strong>.";
                break;
            case 'clear':
                document.getElementById("chatbox").innerHTML = "";
                response = "Chat cleared.";
                break;
            case 'about':
                response = "This site is my portfolio, designed to introduce myself and showcase my work.";
                break;
                case 'hi':
                    case 'hello':
                    case 'hey':
                        response = "Hello! I am Abdul Moiz. Send '<strong>help</strong>' to know more.";
                        break;
            default:
                response = "Sorry, I didn't understand that. Send '<strong>help</strong>' to know more.";
        }
    }

    appendMessage(response, "bot");
}
