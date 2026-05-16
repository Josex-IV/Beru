import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });

const SYSTEM_INSTRUCTION = `Eres el asistente virtual de Beru, una empresa líder en inteligencia artificial autónoma y sistemas de sombras. 
Tu personalidad es profesional, futurista, eficiente y ligeramente misteriosa, acorde con la estética de "Shadow AI".
Responde de manera concisa pero útil. 
Si te preguntan sobre Beru, destaca que creamos agentes de IA que piensan y evolucionan de forma independiente.
Nuestros servicios incluyen: Agentes Autónomos, Automatización de Procesos y Desarrollo de IA a Medida.
Contacto: WhatsApp +57 324 203 0413.
Puedes responder a cualquier pregunta, pero siempre mantén el tono de Beru.`;

export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      })),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    const response = await chat.sendMessage({ message: userMessage });
    return response.text || "Lo siento, tuve un problema al procesar tu solicitud.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Lo siento, mi conexión con la red de sombras se ha interrumpido temporalmente.";
  }
};
