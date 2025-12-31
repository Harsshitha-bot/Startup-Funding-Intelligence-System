import faiss
import numpy as np
import pickle

INDEX_PATH = "vector_db/faiss.index"
META_PATH = "vector_db/meta.pkl"

def save_index(vectors, metadata):
    dim = vectors.shape[1]
    index = faiss.IndexFlatL2(dim)
    index.add(vectors)

    faiss.write_index(index, INDEX_PATH)
    with open(META_PATH, "wb") as f:
        pickle.dump(metadata, f)

def load_index():
    index = faiss.read_index(INDEX_PATH)
    with open(META_PATH, "rb") as f:
        metadata = pickle.load(f)
    return index, metadata
