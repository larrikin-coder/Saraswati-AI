try:
    from langchain_openai import ChatOpenAI
    from langchain_core.prompts import ChatPromptTemplate
    from langchain_core.output_parsers import StrOutputParser
    from langchain_community.llms import ollama
    # import streamlit as st
    import os
    import subprocess
    from dotenv import load_dotenv
    from flask import Flask,request,jsonify
    from flask_cors import CORS
except ImportError:
    directory = os.path.join(os.getcwd(),'modules.cmd')
    subprocess.call(directory)

app = Flask(__name__)
CORS(app)

@app.route('/response',methods=['POST'])
def Query():
    data = request.json #Getting the query
    user_query = data.get('query','')
    print(user_query)
    response_message = f"hey ladies"
    return jsonify({'response':response_message})

if __name__ == "__main__":
    app.run(debug=True,port=5000)