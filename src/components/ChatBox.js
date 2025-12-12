const ChatBox = (props, { getState, setState, APIManager }) => {
     const { username, password } = APIManager.secret();

     return {
          iframe: {
               src: `https://n8n.mnfm.cloud/webhook/81e21c32-9a42-49ba-abfd-2a3335cfaac2/chat?username=${username}&password=${password}`,
               width: "400",
               height: "600",
               title: "Chat",
          },
     };

     //  function generateId() {
     //       return `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
     //  }

     //  return {
     //       div: {
     //            className: " chat-panel",
     //            children: [
     //                 {
     //                      div: { id: "chatMessages", className: "chat-messages", text: () => getState("botReply") },
     //                 },
     //                 {
     //                      form: {
     //                           onsubmit: (e) => {
     //                                e.preventDefault();
     //                                const message = { message: getState("chatmessages", "") };
     //                                APIManager.chatBox(message);
     //                           },
     //                           className: "chat-input",
     //                           children: [
     //                                {
     //                                     input: {
     //                                          id: "chatInput",
     //                                          className: "chatInput",
     //                                          type: "text",
     //                                          placeholder: "Type your message...",
     //                                          value: () => getState("chatmessages", ""),
     //                                          onInput: (e) => {
     //                                               setState("chatmessages", e.target.value);
     //                                          },
     //                                     },
     //                                },

     //                                {
     //                                     button: { type: "submit", text: "Send" },
     //                                },
     //                           ],
     //                      },
     //                 },
     //            ],
     //       },
     //  };
};

export default ChatBox;
