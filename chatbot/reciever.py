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
except ImportError:
    directory = os.path.join(os.getcwd(),'modules.cmd')
    subprocess.call(directory)


app = Flask(__name__)
load_dotenv()

latest_data = None

#data ko .env se load kar rha huu
os.environ["LANGCHAIN_TRACING_V2"] = "true"
os.environ["LANGCHAIN_API_KEY"] = "ls__6dc7aed21be64650a4bc5286a430d7ac"

#prompt ka template 
prompt = ChatPromptTemplate.from_messages(
    [
        ("system","You are helpful assistant named Saraswati. You are Female. Please respond to the queries. You are named after Hindu goddess."),
        ("user","Question:{input_text}")
    ]
)

@app.route('/response', methods=['POST'])
def receive_data():
    global latest_data
    # data = request.data.decode('utf-8')  # Decode bytes to string
    # print(data)
    data = request.json.get('query')
    print(data)
    llm = ollama.Ollama(model="llama2",temperature='0.1')
    output_parser = StrOutputParser()
    chain = prompt|llm|output_parser
    latest_data = chain.invoke({"input_text":data})
    print(latest_data)
    return jsonify({'message': data})

@app.route('/response', methods=['GET'])
def get_latest_data():
    return f"<h1>{latest_data}</h1>"


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
