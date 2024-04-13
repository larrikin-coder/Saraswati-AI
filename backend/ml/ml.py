from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route('/ml', methods=['POST'])
def receive_data():
    data = request.json
    print('Received data:', data)
    # Process the data here
    return jsonify(success=True)

if __name__ == '__main__':
    app.run(debug=True)