from flask import Flask, jsonify, request # type: ignore
from flask_cors import CORS # type: ignore

app = Flask(__name__)
CORS(app)

@app.route('/api/message', methods= ['GET'])
def get_message():
    return jsonify({"message": "Hello from flask!"})

if __name__ == '__main__':
    app.run(debug=True)