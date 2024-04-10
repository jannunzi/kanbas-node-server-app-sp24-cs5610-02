import OpenAI from "openai";
const openai = new OpenAI();
async function main() {
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "Describe this image." },
          {
            type: "image_url",
            image_url: {
              url: "https://i.pinimg.com/originals/88/95/5d/88955d5d2045f4cae463be94ceb02f5e.jpg",
            },
          },
        ],
      },
    ],
  });
  console.log(response.choices[0]);
}
main();
