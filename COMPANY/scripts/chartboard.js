// Function to send user message
function sendMessage() {
    const messageInput = document.getElementById('user-message');
    const messageText = messageInput.value.trim();

    if (messageText === '') return;

    // Display user message
    displayMessage(messageText, 'user-message');

    // Clear input field
    messageInput.value = '';

    // Simulate bot response after a delay
    setTimeout(() => {
        const botResponse = generateBotResponse(messageText);
        displayMessage(botResponse, 'bot-message');
    }, 1000);
}

// Function to display a message in the chatbox
function displayMessage(message, senderClass) {
    const chatboxBody = document.getElementById('chatbox-body');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', senderClass);
    messageDiv.textContent = message;
    chatboxBody.appendChild(messageDiv);
    chatboxBody.scrollTop = chatboxBody.scrollHeight;  // Auto-scroll to bottom
}

let userName = ""; // Variable to store the user's name

// Function to generate a bot response with expanded repair knowledge
function generateBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    // Greetings
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi') 
        || lowerCaseMessage.includes('how are you') || lowerCaseMessage.includes('hey')
        || lowerCaseMessage.includes('good morning') || lowerCaseMessage.includes('goog afternoon')
        || lowerCaseMessage.includes('good evening') || lowerCaseMessage.includes('how are you doing')
        || lowerCaseMessage.includes('how is life')) {
        return 'by the way i am not a human being , like you human being, any way am here to help you , how am i assist you ?';
    }

    
    {
      fetch('jav/greeting.txt') 
             .then(response => response.text())
             .then(text => {
                 displayMessage(text, 'bot-message');
             })
             .catch(error => {
                 displayMessage('Sorry, I couldn\'t fetch the content right now.', 'bot-message');
             });
         return '';  
     }



    // greet
    if ( lowerCaseMessage.includes('how is life')) {
            return 'by the way i am not a human being , like you human being, any way am here to help you , how am i assist you ?';
        }
    
    // Asking for user's name
    if (lowerCaseMessage.includes('who are you') || lowerCaseMessage.includes('what is your name') 
        || lowerCaseMessage.includes('your name') || lowerCaseMessage.includes('name')) {
        return 'I am Gin Global, by the way, what is your name?';
    }

    if (lowerCaseMessage.includes('ok') || lowerCaseMessage.includes('thanks') 
        || lowerCaseMessage.includes('thank you') || lowerCaseMessage.includes('ok thanks')
        || lowerCaseMessage.includes('ok thank you') || lowerCaseMessage.includes('alrigth thanks')
        || lowerCaseMessage.includes('alrigth thank you')) {{
                return `you are welcome ${userName}! is there anything you would like , to be assisted`;
            }
    }

    // Handling when the user responds with their name
    else if (userName === "" && lowerCaseMessage.includes('am')) {
        // Save the user's name and respond accordingly
        const nameStart = userMessage.indexOf('am') + 3;
        userName = userMessage.slice(nameStart).trim();
        return `Nice to meet you, ${userName}! How can I assist you today?`;
    }

    // After the user has given their name, responding with the stored name
    else if (userName !== "") {
        if (lowerCaseMessage.includes('how are you') || lowerCaseMessage.includes('hi') 
            || lowerCaseMessage.includes('hey')) {
            return `Hello ${userName}! How can I assist you today?`;
        }
    }

    // Battery Repair
    if (lowerCaseMessage.includes('battery') || lowerCaseMessage.includes('charging issue') 
        || lowerCaseMessage.includes('battery draining fast') || lowerCaseMessage.includes('how to fix battery')
        || lowerCaseMessage.includes('my battery') || lowerCaseMessage.includes('my battery is not working')
        || lowerCaseMessage.includes('i can not charge my battery') || lowerCaseMessage.includes('battery charging issue')
        || lowerCaseMessage.includes('battery charging issue')) {
        return 'If your battery drains quickly or has charging issues, try replacing the battery or checking the charging port. Would you like a full diagnosis?';
    }

    // Phone Screen Repair
    else if (lowerCaseMessage.includes('phone screen') || lowerCaseMessage.includes('cracked screen')
        || lowerCaseMessage.includes('broken screen')) {
        return 'For cracked or broken screens, I recommend replacing the screen at a certified repair center. I can guide you on how to replace it yourself if needed.';
    }

    // PC Static Issue
    else if (lowerCaseMessage.includes('pc static') || lowerCaseMessage.includes('laptop static')
        || lowerCaseMessage.includes('computer has static noise')) {
        return 'If your PC has static noise, try grounding the motherboard, checking the power supply, and replacing faulty cables. Do you need step-by-step help?';
    }

    // Touch Screen Replacement
    else if (lowerCaseMessage.includes('touch screen') || lowerCaseMessage.includes('replace touch')
        || lowerCaseMessage.includes('fix touch screen')) {
        return 'Replacing a touch screen requires removing the screen carefully and installing a new one. I can guide you through the process. Would you like a tutorial?';
    }

    // Installing a New Operating System
    else if (lowerCaseMessage.includes('install operating system') || lowerCaseMessage.includes('os installation')
        || lowerCaseMessage.includes('windows installation') || lowerCaseMessage.includes('linux installation')) {
        return 'Installing an OS involves creating a bootable USB and following installation steps. Do you need help with Windows or Linux installation?';
    }

    // Phone Bypass (Excluding iPhone)
    else if (lowerCaseMessage.includes('phone bypass') || lowerCaseMessage.includes('bypass android')
        || lowerCaseMessage.includes('remove lock screen')) {
        return 'I can assist with bypassing Android phone locks, but I do not support iPhone bypassing due to security policies. Do you need help with an Android device?';
    }

    // Network Configuration
    else if (lowerCaseMessage.includes('network configuration') || lowerCaseMessage.includes('setup wifi')
        || lowerCaseMessage.includes('internet settings') || lowerCaseMessage.includes('router setup')) {
        return 'For network setup, check router settings, configure IP addresses, and troubleshoot connectivity issues. Would you like a step-by-step guide?';
    }

    // Pricing Inquiry
    else if (lowerCaseMessage.includes('pricing') || lowerCaseMessage.includes('how much') || lowerCaseMessage.includes('cost')
        || lowerCaseMessage.includes('how much can it cost') || lowerCaseMessage.includes('what is the prici')
        || lowerCaseMessage.includes('what is the cost') || lowerCaseMessage.includes('what is the cost of ')
        || lowerCaseMessage.includes('what is the cost of fixing battery') || lowerCaseMessage.includes('it cost how much ')
        || lowerCaseMessage.includes('how much does it cost to buy that kind of the battery')
        || lowerCaseMessage.includes('it cost how much ') || lowerCaseMessage.includes('the prici')) {
        return 'Our repair services start at $50. Please tell us more about your device! use this line to reach us 0978871494 ';
    }

    // Default Response for Unrecognized Questions
    else {
        return 'I\'m sorry, I didn\'t understand that. Could you please clarify?';
    }
}

// Automatically add a welcome message on page load
window.onload = () => {
    displayMessage('hello,is there anything i can help you today?', 'bot-message');
};
