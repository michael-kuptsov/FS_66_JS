import axios from "axios";
// import { GoogleGenAi} from "@google/genai"

// async function askAi(prompt) {
// // const apiKey = process.env.GEMINI_API_KEY;
// // const genAi = new GoogleGenAi({ apiKey: apiKey });
// const genAi = new GoogleGenAi({ apiKey: process.env.GEMINI_API_KEY });
// const response = await genAi.generateContent({
//     model: "gemini-3-flash-preview",
//     content: prompt,
//   });
//   return response.text;
// }

// async function main() {
//   const prompt = "Напиши что такое REST API и как его использовать в JavaScript";
//   const aiResponse = await askAi(prompt);
//   console.log("AI Response:", aiResponse);
// }

// main();
import { GoogleGenAI } from "@google/genai";

async function askAi(prompt) {
  const genAi = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
  });

  const response = await genAi.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });

  return response.text;
}

async function main() {
  const prompt =
    "Напиши что такое REST API и как его использовать в JavaScript";

  const aiResponse = await askAi(prompt);

  console.log("AI Response:", aiResponse);
}

main();