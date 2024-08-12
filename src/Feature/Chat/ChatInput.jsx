import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useUserinfo } from "../../Context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Services/Firebase/Firebase.Config";

const ChatInput = ({ currentUser }) => {
  const { id: iddd, name, url } = currentUser;
  const [message, setmessage] = useState("");

  const { user_id, username, avatar } = useUserinfo();
  const [empty, setempty] = useState();
  const id = `user_id${username}${user_id}`;
  const senderid = id.replace(/ /g, "_");

  const ReciverID = `user_id${name}${iddd}`;
  const Rec = ReciverID.replace(/ /g, "_");
  const sendMessage = async () => {
    if (!message.trim()) {
      setempty("Message cannot be empty");
      return;
    }
    const timeStamp = Date.now().toString(); // Create chat model
    const chatModel = {
      timeStamp,
      message,
      senderID: senderid,
      receiverID: Rec,
    };
    try {
      const senderRef = doc(db, "Chats", senderid, Rec, timeStamp);

      await setDoc(senderRef, chatModel);

      const receiverRef = doc(db, "Chats", Rec, senderid, timeStamp);

      await setDoc(receiverRef, chatModel);

      const senderInbox = {
        id: user_id.toString(),
        name: username,
        lastMsg: message,
        url: avatar,
        timeStamp,
      };

      const receiverInbox = {
        id: currentUser.id.toString(),
        name: name,
        lastMsg: message,
        url: url,
        timeStamp,
      };

      const senderInboxRef = doc(db, "Chats", senderid, "Inbox", Rec);

      await setDoc(senderInboxRef, receiverInbox);

      const receiverInboxRef = doc(db, "Chats", Rec, "Inbox", senderid);

      console.log(senderInbox, receiverInbox);

      await setDoc(receiverInboxRef, senderInbox);

      console.log("Message Sent!");
      setmessage("");

    } catch (error) {
      console.error("Error writing document: ", error);
    } finally {
    }

  };

  return (
    <div className="">
      <div className="flex gap-1 p-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
          className={`w-full border-2 rounded-md ${
            empty ? "border-red-800" : "border-btn-primary"
          }`}
        />
        <button
          onClick={sendMessage}
          className=" rounded-md text-xl bg-btn-primary text-white p-2"
        >
          <IoIosSend />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
