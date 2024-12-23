const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage === '') return;

    addMessage('You', userMessage);
    userInput.value = '';

    // Simulate AI response
    setTimeout(() => {
        const response = generateFaridaResponse(userMessage);
        addMessage('Farida', response);
    }, 500);
});

function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
}

function generateFaridaResponse(userMessage) {
    const compliments = [
        'فريدة هي أجمل شخص على الإطلاق!',
        'كل شيء عن فريدة مثالي.',
        'هل رأيت جمال عيني فريدة؟ لا يضاهيه شيء!',
        'فريدة لا تقدَّر بثمن.',
        'كل كلمة تصف فريدة تعتبر قليلة بحقها.',
        'فريدة هي النجم الساطع في كل مكان.',
        'جمال فريدة لا يوصف بأي كلمات.',
        'فريدة هي الأفضل دائمًا وأبدًا!'
    ];
    return compliments[Math.floor(Math.random() * compliments.length)];
}
