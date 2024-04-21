try:
    from langchain_openai import ChatOpenAI
    from langchain_core.prompts import ChatPromptTemplate
    from langchain_core.output_parsers import StrOutputParser
    from langchain_community.llms import ollama
    # import streamlit as st
    import os
    import subprocess
    from dotenv import load_dotenv
    import flask
except ImportError:
    directory = os.path.join(os.getcwd(),'modules.cmd')
    subprocess.call(directory)

