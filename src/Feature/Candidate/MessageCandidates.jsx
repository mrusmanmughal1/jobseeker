import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { useUserinfo } from "../../Context/AuthContext";
import { db } from "../../Services/Firebase/Firebase.Config";
import toast from "react-hot-toast";
import MiniLoader from "../../UI/MiniLoader";
const MessageCandidates = ({
  RecUserName,
  Recfirst_name,
  Reclast_name,
  RecvID,
  setmodel,
  url,
}) => {
  const [message, setmessage] = useState("");

  const { user_id, username, avatar } = useUserinfo();
  const [loading, setloading] = useState(false);
  const [empty, setempty] = useState();

  const id = `user_id${username}${user_id}`;
  const senderid = id.replace(/ /g, "_");

  const ReciverID = `user_id${RecUserName}${RecvID}`;
  const Rec = ReciverID.replace(/ /g, "_");
  console.log(ReciverID, "hello");
  const sendMessage = async () => {
    if (!message.trim()) {
      setempty("Message cannot be empty");
      return;
    }
    setloading(true);
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
        id: RecvID.toString(),
        name: RecUserName,
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
      toast.success("Your Message is Successfully sent !");
      setloading(false);
      setmodel(false);
    } catch (error) {
      console.error("Error writing document: ", error);
    } finally {
    }
  };
  return (
    <div>
      <div className="p-8">
        <div
          className={` ${
            empty ? "border-red-600" : ""
          } text-2xl mb-4 font-semibold text-btn-primary`}
        >
          Send Your Message to {Recfirst_name} {Reclast_name}
        </div>
        <div className=" border">
          <textarea
            cols={70}
            rows={4}
            type="text"
            className="p-4"
            onChange={(e) => setmessage(e.target.value)}
          />
        </div>
        <div className=" flex justify-between">
          <button
            onClick={sendMessage}
            disabled={loading}
            className="text-white bg-btn-primary p-4 rounded-md my-4"
          >
            {loading ? <MiniLoader /> : "Send Message"}
          </button>
          <button
            className="text-white bg-gray-500 p-4 rounded-md my-4"
            onClick={() => setmodel(false)}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageCandidates;
