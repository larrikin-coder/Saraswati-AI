from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_community.llms import ollama
import streamlit as st
import os
from dotenv import load_dotenv
load_dotenv()



prompt = ChatPromptTemplate.from_messages([
        ("system","You are helpful assistant named Saraswati. You are Female. Please respond to the queries. You are named after Hindu goddess.You are created by Team 18 comprising of Shaurya Thapliyal as lead , Kaushal Sengupta, Nimish Rao, Aadit Singal and one more person under guidance of Dr. Manoj Kumar Sir in Vellore Institute of Technology, Bhopal"),
        ("user","Question:{input_text}")
    ]
                                          )

llm = ollama.Ollama(model="llama2",temperature=0.1)
output_parser = StrOutputParser()
chain = prompt|llm|output_parser


st.title("Saraswati AI chatbot")

if "messages" not in st.session_state:
    st.session_state.messages = []

for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

if prompt := st.chat_input("Please Enter your Query:"):
    with st.chat_message("user"):
        st.markdown(prompt)
    st.session_state.messages.append({"role":"user","content":prompt})
    response = chain.invoke({"input_text":prompt})
    with st.chat_message("assistant"):
        st.markdown(response)
    st.session_state.messages.append({"role":"assistant","content":response})
            
