// CHATBOT FIRST ATTEMPT

function addToChatLog(message){
    const chatLog = document.getElementById("chatLog");
    const newDiv = document.createElement("div");
    newDiv.textContent = message;
    chatLog.appendChild(newDiv);
}

function generateAIResponse(message) {
    const lower = message.toLowerCase();

    if (lower.includes("hello") || lower.includes("hi")){
        return `Hi! I'm chat, how can I help you?`;
    }
    if (lower.includes("who are you")) {
        return `I am a simple AI Chatbot assistant made by Alexia Moreno`;
    }
    if(lower.includes("how are you?") || lower.includes("how are you doing?")){
        return `I'm good! Thanks for asking me`
    }
    if (lower.includes("favorite color")) {
        return `Pink, of course!`;
    }
    if (lower.includes("bye")){
        return `Goodbye! Have a wonderful day!`;
    }
    else {
        return `Sorry:C I can't answer that, I'm still learning! Could you please ask me something else?`;
    }
}

function sendMessage(){
    const userInput = document.getElementById("userInput");
    const chatLog = document.getElementById("chatLog");

    const userMessage = userInput.value;
    if(!userMessage){
        return;
    }

    addToChatLog("You: " + userMessage);
    userInput.value = "";

    //SIMULATE AI RESPONSES
    const aiResponse = generateAIResponse(userMessage);
    setTimeout(() =>{
        addToChatLog("AI: " + aiResponse);
    }, 600);
}


