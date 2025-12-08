const APIManager = (props, { getState, setState }) => {
     return {
          api: {
               sendMessages: (message) => sendMessages(message),
          },
     };

     async function sendMessages(message) {
          try {
               const response = await fetch(`https://mnfm.cloud/webhook/81e21c32-9a42-49ba-abfd-2a3335cfaac2/chat`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message }),
               });

               if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
               }

               console.log(response);

               //    const data = await response.json();

               //    if (data) {
               //         setState("generatedCaptions");
               //         console.log("Generate Success!");
               //    }
          } catch (error) {
               console.error("Error fetching captions:", error);
          }
     }
};

export default APIManager;
