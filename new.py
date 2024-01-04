from flask import Flask, request
import pandas as pd
import os

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def add_email():
    email = request.form.get('email')
    file_path = 'emails.xlsx'
    
    if os.path.exists(file_path):
        df = pd.read_excel(file_path)
    else:
        df = pd.DataFrame(columns=['email'])

    new_data = pd.DataFrame({'email': [email]})
    df = df.append(new_data, ignore_index=True)

    df.to_excel(file_path, index=False)

    return 'Email added to Excel sheet', 200

if __name__ == '__main__':
    app.run(port=3001)
    app.debug = True