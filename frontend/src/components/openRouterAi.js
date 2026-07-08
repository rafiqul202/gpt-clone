import { OpenRouter } from "@openrouter/sdk";

const client = new OpenRouter({
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
});

export const openRouterAI = async (message, model) => {
  const completion = await client.chat.send({
    chatRequest: {
      model: model || "openai/gpt-oss-120b:free",

      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    },
  });

  console.log(completion.choices[0].message.content);
  return completion.choices[0].message.content;
};
