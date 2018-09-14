from flask import Flask, render_template, jsonify, request
from werkzeug.contrib.fixers import ProxyFix
from flask_inputs import Inputs
from wtforms.validators import DataRequired
import os, json

app = Flask(__name__, template_folder='../dist', static_folder='../dist', static_url_path='')

@app.route('/')
def root():
    return render_template('index.html')

class CustomerInputs(Inputs):
    rule = {
        'date': [DataRequired()]
    }

@app.route('/dashboard/<date>', methods=['GET'])
def dashboard(date):
    inputs = CustomerInputs(request)

    if inputs.validate():
        data = get_static_json_file('data.json')
        if date in data:
            return jsonify(success=data[date], error=None)
        else:
            return jsonify(success=False, errors="Data by date `%s` does not exist" % date)
    else:
        return jsonify(success=False, errors=inputs.errors)

def get_static_json_file(filename):
    url = os.path.join(app.root_path, filename)
    return json.load(open(url))

app.wsgi_app = ProxyFix(app.wsgi_app)
if __name__ == '__main__':
    app.run(debug=True)
