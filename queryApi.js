// src/api/queryApi.js

export async function askQuestion(query, language = "EN") {
  try {
    const response = await fetch("http://127.0.0.1:8000/query", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, language, k: 5 }), // match your backend expectation
    });

    if (!response.ok) {
      throw new Error("Failed to fetch from backend");
    }

    const data = await response.json();
    return data; // { answer: "..." }
  } catch (error) {
    console.error("Error in askQuestion:", error);
    return { answer: "Unable to connect to backend. Ensure FastAPI server is running on http://localhost:8000" };
  }
}