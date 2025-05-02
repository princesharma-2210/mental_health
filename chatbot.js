
function sendMessage() {
    const inputField = document.getElementById('userInput');
    const chatbox = document.getElementById('chatbox');
    const userMessage = inputField.value.trim();

    if (userMessage) {
    
        const userDiv = document.createElement('div');
        userDiv.className = 'message user-message';
        userDiv.textContent = userMessage;

        chatbox.appendChild(userDiv);

        
        const botResponse = getBotResponse(userMessage);
        const botDiv = document.createElement('div');
        botDiv.className = 'message bot-message';
        botDiv.innerHTML = botResponse;

        chatbox.appendChild(botDiv);


        inputField.value = '';
        chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
    }
}

function getBotResponse(message) {
    const lowerMsg = message.toLowerCase();

    
    if (lowerMsg.includes("exercise")) {
        return "Let's try a mindfulness exercise! Close your eyes and take deep breaths for one minute. Focus on your breathing.";
    } else if (lowerMsg.includes("game")) {
        return "How about a gratitude game? List three things you're grateful for today!";
    } else if (lowerMsg.includes("anxiety")) {
        return "It's okay to feel anxious sometimes. Let's try a grounding exercise! Name five things you can see around you.";
    } else if (lowerMsg.includes("stress")) {
        return "Stress can be overwhelming. How about a quick breathing exercise? Inhale for four counts, hold for four counts, and exhale for six counts.";
    } else if (lowerMsg.includes("sad")) {
        return "I'm here with you. Let's try listing three things you're grateful for today.";
    } else if (lowerMsg.includes("depression")) {
        return "You're not alone in this. Would you like me to suggest some helpful resources or exercises?";
    } else if (lowerMsg.includes("help")) {
        return "I'm here to help! Can you share more about what you're feeling so I can assist better?";
    } else if (lowerMsg.includes("thank you")) {
        return "You're welcome! I'm here whenever you need someone to talk to.";
    } else {
        return "Thank you for sharing that with me. How can I assist you further?";
    }
}
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    console.log('A new client connected');

    // Listen for messages from the client
    ws.on('message', function incoming(message) {
        console.log('Received:', message);

        // Simple response to the client (could be enhanced with a chatbot logic)
        ws.send(`You said: ${message}`);
    });

    // Send a welcome message when a new client connects
    ws.send('Welcome to the chat! How can I help you today?');
});

console.log('WebSocket server running on ws://localhost:8080');
