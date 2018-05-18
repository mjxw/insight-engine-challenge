from flask import Flask
from flask import jsonify
from flask_cors import CORS
import json
import pprint


app = Flask(__name__)
CORS(app)

@app.route('/search', methods=['GET'])
def api():
    with open('query_specs.json') as f:
        data = json.load(f)
        pprint.pprint(data)

        resp = jsonify(data)
        resp.status_code = 200

    return resp

