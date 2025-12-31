# app/core/rag.py
import os
import faiss
import pickle
import numpy as np

# ---------------- PATHS ---------------- #
VECTOR_DB_PATH = os.path.join(os.path.dirname(__file__), "vector_db", "funding.index")
CHUNKS_PATH = os.path.join(os.path.dirname(__file__), "vector_db", "chunks.pkl")

# ---------------- LOAD VECTOR DB ---------------- #
index = faiss.read_index(VECTOR_DB_PATH)
with open(CHUNKS_PATH, "rb") as f:
    chunks = pickle.load(f)

# ---------------- FUNCTIONS ---------------- #
def get_embedding_mock(text):
    """
     embedding: returns a random vector.
    Used to simulate FAISS search without OpenAI API.
    """
    return np.random.rand(384).astype("float32")  # adjust dim if needed

def query_rag(query, k=5):
    """
     RAG query function:
    - searches FAISS with random embeddings
    - returns concatenated chunks + a friendly mock answer
    """
    try:
        # Use embedding
        q_emb = get_embedding_mock(query)

        # FAISS search
        D, I = index.search(np.array([q_emb]), k)
        retrieved_chunks = [chunks[i] for i in I[0]]

        # Combine context
        context = "\n\n".join(retrieved_chunks)

        #
        answer = (
            f"Based on the context I found, here's a possible answer:\n\n{context}\n\n"
            
        )
        return answer

    except Exception as e:
        return f"Error in RAG mock: {str(e)}"