# backend/app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from .core.rag import query_rag
from deep_translator import GoogleTranslator  # <-- using deep-translator now

# ---------------- App Setup ---------------- #
app = FastAPI(title="Spark HT Backend")

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can replace "*" with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- Models ---------------- #
class Query(BaseModel):
    question: str
    language: str = "en"

# ---------------- Routes ---------------- #
@app.get("/")
def root():
    return {"message": "Spark HT Backend is running!"}

@app.post("/query")
def query_backend(q: Query):
    text = q.question

    # Translate question to English if needed
    if q.language != "en":
        try:
            text = GoogleTranslator(source=q.language, target='en').translate(q.question)
        except Exception as e:
            return {"error": f"Translation failed: {str(e)}"}

    # Get answer from RAG
    answer = query_rag(text)

    # Translate answer back to user language
    if q.language != "en":
        try:
            answer = GoogleTranslator(source='en', target=q.language).translate(answer)
        except Exception as e:
            return {"error": f"Translation failed: {str(e)}"}

    return {"answer": answer}