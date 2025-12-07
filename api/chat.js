import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // Check Method
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // 1. Debugging Log: Key එක තියෙනවද බලමු (Key එකේ අගය පෙන්වන්නේ නෑ, තියෙනවද නැද්ද කියලා විතරයි බලන්නේ)
  console.log("API Key Status:", process.env.GEMINI_API_KEY ? "Present" : "Missing");

  try {
    // Key එක නැත්නම් මෙතනින් නවත්වනවා
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("API Key is missing in Vercel Environment Variables");
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    // 2. Model එක අලුත් කළා (gemini-1.5-flash වඩා වේගවත් සහ ලේසියෙන් Error එන්නේ නෑ)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const { message } = req.body;

    const prompt = `
      You are a professional AI assistant for Supuna Anjana's portfolio website.
      Here is some context about Supun:
      - He is an IT undergraduate at SLIIT (BSc Hons in IT).
      - He is a Full Stack Developer skilled in React, Java, Tailwind CSS, and MySQL.
      - He has built projects like an E-Commerce Platform and a Task Management App.
      - His contact email is: supuna18.work@gmail.com
      
      Instructions:
      - Answer questions strictly based on Supuna's skills and background.
      - Keep answers short, professional, and friendly.
      User Question: ${message}
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ reply: text });

  } catch (error) {
    // Error එක Console එකට සම්පූර්ණයෙන්ම ලියනවා
    console.error("Gemini API Error Details:", error);
    return res.status(500).json({ error: error.message || "Something went wrong" });
  }
}