from app.ingestion.ingest_csv import ingest_csv
from app.ingestion.ingest_web import ingest_website
from app.core.embeddings import embed_texts
from app.core.vectorstore import save_index
import numpy as np

docs = []

# List of all CSV datasets
csv_files = [
    r"E:\start_up_rag2\backend\dataset\archive\AngelList_Startups.csv",
    r"E:\start_up_rag2\backend\dataset\archive\Indian Unicorn startups 2023 updated.csv",
    r"E:\start_up_rag2\backend\dataset\archive\indian_startup_funding_2020_2025_sample.csv",
    r"E:\start_up_rag2\backend\dataset\archive\Listofstartups.csv",
    r"E:\start_up_rag2\backend\dataset\archive\startup_funding.csv",
    r"E:\start_up_rag2\backend\dataset\archive\startup_funding2018.csv",
    r"E:\start_up_rag2\backend\dataset\archive\startup_funding2019.csv",
    r"E:\start_up_rag2\backend\dataset\archive\startup_funding2020.csv",
    r"E:\start_up_rag2\backend\dataset\archive\startup_funding2021.csv"
]

# Ingest all CSVs
for csv_file in csv_files:
    docs += ingest_csv(csv_file, source_name=csv_file.split("\\")[-1])

# Ingest website
docs += ingest_website("https://www.startupindia.gov.in")

# Embeddings
texts = [d["text"] for d in docs]
vectors = embed_texts(texts)

# Save to FAISS
save_index(np.array(vectors), docs)

print("✅ Ingestion complete for all datasets + Startup India website")
