from openai import OpenAI

# Use your API key directly
client = OpenAI(api_key="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")

# Quick test to generate an embedding
response = client.embeddings.create(
    model="text-embedding-3-small",
    input="Hello world"
)

print(response.data[0].embedding[:10])  # prints first 10 numbers of the embedding
