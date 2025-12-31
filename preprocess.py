# app/core/preprocess.py
import os
import pandas as pd
from PyPDF2 import PdfReader
import faiss
import numpy as np
import pickle
from openai import OpenAI
from sentence_transformers import SentenceTransformer
import numpy as np

# ---------------- CONFIG ---------------- #
# Replace with your OpenAI key
OPENAI_API_KEY = "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"


client = OpenAI(api_key=OPENAI_API_KEY)

# Paths
DATA_DIR = os.path.join(os.path.dirname(__file__), "../../dataset/archive")

VECTOR_DB_DIR = os.path.join(os.path.dirname(__file__), "vector_db")
VECTOR_DB_PATH = os.path.join(VECTOR_DB_DIR, "funding.index")
CHUNKS_PATH = os.path.join(VECTOR_DB_DIR, "chunks.pkl")

# Ensure vector_db directory exists
os.makedirs(VECTOR_DB_DIR, exist_ok=True)

CHUNK_SIZE = 500  # words per chunk

# ---------------- FUNCTIONS ---------------- #
def read_csv_files():
    """Read all CSV files from datasets folder"""
    all_texts = []
    for file in os.listdir(DATA_DIR):
        if file.endswith(".csv"):
            file_path = os.path.join(DATA_DIR, file)
            try:
                df = pd.read_csv(file_path, encoding="utf-8")
            except UnicodeDecodeError:
                df = pd.read_csv(file_path, encoding="latin-1")
            for _, row in df.iterrows():
                text = " ".join([str(v) for v in row.values])
                all_texts.append(text)
    return all_texts


def read_pdf_files():
    all_texts = []
    for file in os.listdir(DATA_DIR):
        if file.endswith(".pdf"):
            reader = PdfReader(os.path.join(DATA_DIR, file))
            for page in reader.pages:
                text = page.extract_text()
                if text:
                    all_texts.append(text)
    return all_texts

def chunk_text(text, chunk_size=CHUNK_SIZE):
    words = text.split()
    return [" ".join(words[i:i+chunk_size]) for i in range(0, len(words), chunk_size)]



# Load model once


st_model = SentenceTransformer('all-MiniLM-L6-v2')

def generate_embeddings(texts):
    """
    Generate embeddings locally without OpenAI API.
    """
    embeddings = st_model.encode(texts, show_progress_bar=True)
    return np.array(embeddings, dtype="float32")




def build_vector_db():
    print("Reading CSV files...")
    csv_texts = read_csv_files()
    print("Reading PDF files...")
    pdf_texts = read_pdf_files()

    all_texts = csv_texts + pdf_texts
    print(f"Total documents before chunking: {len(all_texts)}")

    chunks = []
    for text in all_texts:
        chunks.extend(chunk_text(text))
    print(f"Total chunks: {len(chunks)}")

    print("Generating embeddings...")
    embeddings = generate_embeddings(chunks)
    dim = len(embeddings[0])
    print(f"Embedding dimension: {dim}")

    # Create FAISS index
    index = faiss.IndexFlatL2(dim)
    index.add(np.array(embeddings))
    faiss.write_index(index, VECTOR_DB_PATH)
    print(f"Vector DB saved to {VECTOR_DB_PATH}")

    # Save chunks
    with open(CHUNKS_PATH, "wb") as f:
        pickle.dump(chunks, f)
    print("Chunks saved for retrieval.")

# ---------------- MAIN ---------------- #
if __name__ == "__main__":
    build_vector_db()
