# Setting up the project
- Clone the repository
```git
git clone https://github.com/larrikin-coder/Saraswati-AI.git
```
- Install packages and dependencies [Front-end running Sign-up and Login]
```js
npm install
npm start
```
# Basic details regarding LLM
- This run's backend and frontend concurrently no need to install any more packages or dependencies.
- Backend handles auth and database and API for the LLM Model.
- Using Langchain for checking the requests and response time and running the model <b>llama2-7b</b> locally using Ollama.
- Prompt template for the 
```py
prompt = ChatPromptTemplate.from_messages([
        ("system","You are helpful assistant named Saraswati. You are Female. Please respond to the queries. You are named after Hindu goddess.You are created by Team 18 comprising of Shaurya Thapliyal as lead , Kaushal Sengupta, Nimish Rao, Aadit Singal and one more person under guidance of Dr. Manoj Kumar Sir in Vellore Institute of Technology, Bhopal"),
        ("user","Question:{input_text}")
    ]
```
- Temperature, Model and Chain
```py
llm = ollama.Ollama(model="llama2",temperature=0.1)
output_parser = StrOutputParser()
chain = prompt|llm|output_parser
```
- Using Flask web framework to achieve API connection 
- Receiving the data using API
```py
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
```
- Sending back the response
```py
@app.route('/response', methods=['GET'])
def get_latest_data():
    return f"<h1>{latest_data}</h1>"
``` 
