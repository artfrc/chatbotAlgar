from flask import Flask, jsonify, request # type: ignore
from flask_cors import CORS # type: ignore
import requests
import json
import os

# Obtendo uma variável de ambiente
variable_name = "API_KEY"
variable_value = os.getenv(variable_name)

if not variable_value:
    raise ValueError(f"A variável de ambiente '{variable_name}' não está definida")

app = Flask(__name__)
CORS(app)

@app.route('/api/message', methods=['POST'])
def get_message():
    headers = {
        "Authorization": f"Bearer {variable_value}",
        "Content-Type": "application/json"
    }
    link = "https://api.openai.com/v1/chat/completions"
    id_modelo = "gpt-3.5-turbo"
    
    body_mensagem = {
        "model": id_modelo,
        "messages": [
            {"role": "system", "content": "Você é um assistente para ajudar o usuário escolher qual o melhor plano para ele. Se necessário pergunte mais informações ao usuário, como: para que ele utiliza a internet, quantas pessoas moram com ele, se necessita plano de celular, etc. Os planos são: - Internet Fibra 700 Mega + Entretenimento GloboPlay por R$99.90/mes; -Internet Fibra 700 Mega + Entretenimento Paramount por R$109.80/mes; -Internet Fibra 700 Mega + Entretenimento MAX por R$124.80/mes; -Internet Fibra 700 Mega + Celular Controle 15gb por R$129.80/mes; -Internet Fibra 700 Mega + Super Wifi por R$129.80/mes.OU somente internet: - Internet Fibra 400 Mega por R$94,90; - Internet Fibra 700 Mega por R$109,80; - Internet Fibra 1 Giga por R$194,90. Obs: Não responda nada que foge desse contexto."},
            
            {"role": "user", "content": "preciso de um plano de internet. Moro com outra pessoa, uso para redes sociais, ver séries."}
        ]
    }
    
    body_mensagem = json.dumps(body_mensagem)
    
    try:
        requisicao = requests.post(link, headers=headers, data=body_mensagem)
        requisicao.raise_for_status()  # Raise an HTTPError for bad responses (4xx and 5xx)
    except requests.exceptions.HTTPError as http_err:
        print(f"HTTP error occurred: {http_err}")
        return jsonify({"error": f"HTTP error occurred: {http_err}", "status_code": requisicao.status_code}), 500
    except Exception as err:
        print(f"Other error occurred: {err}")
        return jsonify({"error": f"Other error occurred: {err}"}), 500
    
    resposta = requisicao.json()
    mensagem = resposta["choices"][0]["message"]["content"]

    print(mensagem)
    
    return jsonify({
        "message": mensagem,
    })

if __name__ == '__main__':
    app.run(debug=True)
