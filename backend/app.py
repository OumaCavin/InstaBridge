# from flask import Flask, jsonify
# from flask_cors import CORS  # Import CORS

# # Initialize Flask app
# app = Flask(__name__)

# # Enable CORS for the Flask app
# CORS(app)  # Allow cross-origin requests

# # Example route to serve data
# @app.route('/api/data', methods=['GET'])
# def get_data():
#     return jsonify({'message': 'Hello from Flask!', 'data': [1, 2, 3, 4]})

# # Example route to serve React frontend (if you are serving React with Flask)
# @app.route('/')
# def serve_react_app():
#     return send_from_directory(app.static_folder, 'index.html')

# if __name__ == '__main__':
#     app.run(debug=True)



# ===================================================

# Serve React with Flask

# In your app.py (Flask backend), add code to serve the static files from the build/ folder:
# from flask import Flask, jsonify, send_from_directory
# from flask_cors import CORS
# import os

# app = Flask(__name__, static_folder='../frontend/build', static_url_path='') # Points to React build folder

# # Enable CORS for cross-origin requests
# CORS(app)

# @app.route('/api/data', methods=['GET'])
# def get_data():
#     return jsonify({'message': 'Hello from Flask!', 'data': [1, 2, 3, 4]})

# # Serve React app
# @app.route('/')
# def serve_react_app():
#     return send_from_directory(app.static_folder, 'index.html')

# if __name__ == '__main__':
#     app.run(debug=True)

# =====================================


from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import os

# Initialize Flask app and point to React build folder
app = Flask(__name__, static_folder='../frontend/build', static_url_path='')

# Enable CORS for cross-origin requests
CORS(app)

# API endpoint example
@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({'message': 'Hello from Flask!', 'data': [1, 2, 3, 4]})

# Serve React app for all routes
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_react_app(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
