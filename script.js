const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const userMessage = userInput.value;
    
    // Mostrar el mensaje del usuario en el chat
    appendMessage('user', userMessage);

    // Enviar el mensaje al servidor para obtener la respuesta de GPT-3.5
    fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
    })
    .then(response => response.json())
    .then(data => {
        // Mostrar la respuesta del modelo en el chat
        appendMessage('bot', data.message);
    })
    .catch(error => console.error('Error:', error));

    // Limpiar el cuadro de entrada
    userInput.value = '';
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender);
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
}
