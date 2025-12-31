import pandas as pd

def ingest_csv(path, source_name):
    # Try 'utf-8' first, fallback to 'latin1' if error
    try:
        df = pd.read_csv(path, encoding="utf-8")
    except UnicodeDecodeError:
        df = pd.read_csv(path, encoding="latin1")  # Windows CSVs often need this

    docs = []
    for _, row in df.iterrows():
        text = " | ".join([f"{col}: {row[col]}" for col in df.columns])
        docs.append({
            "text": text,
            "source": source_name
        })
    return docs
