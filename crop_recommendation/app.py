from flask import Flask,render_template,url_for,request
import pickle
import numpy as np

app=Flask(__name__)

@app.route('/',methods=['POST','GET'])
def login():
  username=request.form.get('username')
  if username=='admin':
     return render_template('home.html')
  else:
      return render_template('login.html')
  
@app.route('/home')
def home():
     return render_template('home.html')  

@app.route('/croprecommdation')
def croprecommdation():
    return render_template('croprecommdation.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/predict',methods=['POST'])
def predict():
    nitrogen = float(request.form.get('Nitrogen_value'))
    phosphorus = float(request.form.get('Phosphorous_value'))
    potassium = float(request.form.get('Potassium_value'))
    temperature = float(request.form.get('Temperature_value'))
    humidity = float(request.form.get('Humidity_value'))
    phvalue = float(request.form.get('Ph_value'))
    rainfall = float(request.form.get('Rain_fall_value'))

    user_input = [nitrogen, phosphorus, potassium, temperature, humidity, phvalue, rainfall]

    result_img = {
        'coffee' : 'icons/coffee.png',
        'apple' : 'icons/apple.png',
        'banana' : 'icons/banan.png',
        'blackgram' : 'icons/backgram.png',
        'cantalaoupe' : 'icons/cantaloupe.png',
        'chickpeas' : 'icons/chickpeas.png',
        'coconut' : 'icons/coconut.png',
        'mungbean' : 'icons/kidneybeans.png',
        'cotton' : 'icons/cotton.png',
        'grapes' : 'icons/grapes.png',
        'jute' : 'icons/jute.png',
        'kidneybeans' : 'icons/kidneybeans.png',
        'lentils' : 'icons/lentils.png',
        'maize' : 'icons/maize.png',
        'orange' : 'icons/orange.png',
        'mango' : 'icons/mango.png',
        'papaya' : 'icons/papaya.png',
        'pomegranate' : 'icons/pomegranate.png',
        'rice' : 'icons/rice.png',
        'watermelon' : 'icons/watermelon.png',
        'muskmelon' : 'icons/muskmelon.webp',
        'mothbeans' : 'icons/kidneybeans.png'
    }
    
    # To load the model later
    with open('crop_prediction.pkl', 'rb') as model_file:
        loaded_model = pickle.load(model_file)

    # Make Prediction using model
    prediction = loaded_model.predict(np.array(user_input).reshape(1,-1))
    print(prediction)
    if len(prediction) == 1:
        prediction = prediction[0] 

    return render_template('result.html', user_input=user_input, prediction=prediction,result_img = result_img)


if __name__=='__main__':
  app.run(debug=True)