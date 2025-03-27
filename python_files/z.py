from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer, util
import sqlite3
import torch

model = SentenceTransformer("all-MiniLM-L6-v2")

app = FastAPI()

def get_db_connection():
    conn = sqlite3.connect("medical.db", check_same_thread=False)
    conn.row_factory = sqlite3.Row
    return conn

conn = get_db_connection() 

def load_data():
    cursor = conn.cursor()
    cursor.execute("SELECT question, answer FROM medical_data")
    data = cursor.fetchall()
    
    questions = [row["question"] for row in data]
    answers = [row["answer"] for row in data]
    question_embeddings = model.encode(questions, convert_to_tensor=True) 

    return questions, answers, question_embeddings

questions, answers, question_embeddings = load_data()

class QueryInput(BaseModel):
    question: str

def get_answer(question_text):
    question_embedding = model.encode(question_text, convert_to_tensor=True)
    
    scores = util.pytorch_cos_sim(question_embedding, question_embeddings.to("cpu"))[0]
    
    best_match_idx = torch.argmax(scores).item()
    return answers[best_match_idx]

@app.post("/chatbot")
def chatbot_response(input_data: QueryInput):
    try:
        question = input_data.question.lower()
        answer = get_answer(question)
        return {"answer": answer}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# run command : uvicorn z:app --reload

