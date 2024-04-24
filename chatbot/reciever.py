from flask import Flask, request, jsonify
from threading import Thread

app = Flask(__name__)

latest_data = None

@app.route('/response', methods=['POST'])
def receive_data():
    global latest_data
    data = request.data.decode('utf-8')  # Decode bytes to string
    print(data)
    latest_data = data
    return jsonify({'message': data})

@app.route('/response', methods=['GET'])
def get_latest_data():
    return f"<h1>{latest_data}</h1>"


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
