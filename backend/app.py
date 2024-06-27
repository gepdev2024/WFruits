from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS from flask_cors
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for your Flask app

# Path to your trained model
model_path = 'model/your_trained_model.keras'

# Load your trained model
model = load_model(model_path)

# Function to preprocess image
def preprocess_image(image_path):
    img = image.load_img(image_path, target_size=(100, 100))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    return img_array

# Get class names dynamically from the training directory
train_dir = 'dataset_fruits/Training'  # Replace with your actual training directory
class_names = sorted(os.listdir(train_dir))

# Define a route to handle predictions
@app.route('/predict', methods=['POST'])
def predict():
    try:
        file = request.files['image']
        
        # Ensure the 'temp' directory exists
        temp_dir = 'temp'
        if not os.path.exists(temp_dir):
            os.makedirs(temp_dir)
            
        temp_image_path = os.path.join(temp_dir, 'temp_img.jpg')
        file.save(temp_image_path)
        
        img = preprocess_image(temp_image_path)
        prediction = model.predict(img)
        
        predicted_class_idx = np.argmax(prediction)
        predicted_class = class_names[predicted_class_idx]
        accuracy = float(prediction[0][predicted_class_idx])
        
        return jsonify({'predicted_class': predicted_class, 'accuracy': accuracy})

    except Exception as e:
        return jsonify({'error': str(e)})

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
