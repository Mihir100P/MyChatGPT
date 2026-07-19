import "dotenv/config";

const getOpenAIAPIResponse = async(message) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4.1-mini",
            messages: [{
                role: "user",
                content: message
            }]
        })
    };

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", options);
        const data = await response.json();
        console.log("Status:", response.status);
        console.log("Response:", data);
        return data.choices[0].message.content; //reply
    } catch(err) {
        console.log(err);
    }
}

export default getOpenAIAPIResponse;