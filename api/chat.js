import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
  // 1. check the POST request 
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // 2. Bot ගේ චරිතය (System Prompt) - මෙතන තමයි Bot ගේ මොළය තියෙන්නේ
    const prompt = `
      You are a professional AI assistant for Supuna Anjana's portfolio website.
      
      Here is some context about Supuna:
      - He is an IT undergraduate at SLIIT (BSc Hons in IT).
      - He is a Full Stack Developer skilled in React, Java (Spring Boot), Tailwind CSS, and MySQL.
      - He has built projects like an E-Commerce Platform and a Task Management App.
      - His contact email is: supuna18.work@gmail.com
      
      Instructions:
      - Answer questions strictly based on Supuna's skills and background.
      - Keep answers short, professional, and friendly.
      - If someone asks about something unrelated (e.g., "How to cook rice?", "Politics"), politely say you can only talk about Supuna.
      - Do not make up fake information.

      User Question: ${message}
    `;

    // 3. Google Gemini එකෙන් උත්තරේ ගන්නවා
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // 4. Frontend එකට උත්තරේ යවනවා
    return res.status(200).json({ reply: text });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}