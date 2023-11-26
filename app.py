# Ejemplo de servidor en Python usando un servidor Flask / pip install Flask / python app.py
from flask import Flask, render_template, request, jsonify
import openai

app = Flask(__name__)

# Configura tu clave de API de OpenAI
openai.api_key = 'TU_CLAVE_DE_API'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/chat', methods=['POST'])
def chat():
    user_message = request.json['message']

    # Llama a la API de OpenAI para obtener la respuesta
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=user_message,
        max_tokens=150
    )

    bot_message = response.choices[0].text.strip()

    return jsonify({'message': bot_message})

if __name__ == '__main__':
    app.run(debug=True)
