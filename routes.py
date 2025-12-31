from fastapi import APIRouter
from pydantic import BaseModel
from app.core.rag import query_rag

router = APIRouter()

class QueryRequest(BaseModel):
    question: str
    language: str

@router.post("/query")
def ask_question(req: QueryRequest):
    answer, sources = query_rag(req.question)
    return {
        "answer": answer,
        "sources": sources
    }
