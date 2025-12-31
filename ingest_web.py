import requests
from bs4 import BeautifulSoup

def ingest_website(url):
    r = requests.get(url)
    soup = BeautifulSoup(r.text, "html.parser")

    texts = []
    for p in soup.find_all("p"):
        if len(p.text) > 50:
            texts.append({
                "text": p.text.strip(),
                "source": url
            })
    return texts
