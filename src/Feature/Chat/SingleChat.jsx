import React, { useEffect, useState } from "react";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../Services/Firebase/Firebase.Config";
import { useUserinfo } from "../../Context/AuthContext";
import MiniLoader from "../../UI/MiniLoader";
const SingleChat = ({ userData }) => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { name, id, url } = userData;
  const { user_id, username } = useUserinfo();
  const sid = `user_id${username}${user_id}`;
  const senderid = sid.replace(/ /g, "_");
  useEffect(() => {
    if (!userData) return;
    const fetchMessages = async () => {
      try {
        const user_id = `user_id${name}${id}`;
        const receiverId = user_id.replace(/ /g, "_");
        console.log(receiverId);
        // Create a query to get all chat documents for the current user
        const chatsRef = collection(db, "Chats", senderid, receiverId);
        const q = query(chatsRef);

        // Subscribe to real-time updates
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const chatList = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setdata(chatList);
          setLoading(false);
          console.log(chatList);
        });
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchMessages();
  }, [userData, senderid, name, id]);
  if (loading)
    return (
      <div className="flex justify-center flex-col items-center">
        <MiniLoader />
        <p className="text-btn-primary">Loading Messages ...</p>
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center flex-col items-center text-btn-primary">
        {" "}
        Unable To Fetch Data Try Again Later !
      </div>
    );

  return (
    <div className="chat overflow-y-scroll  p-1">
      {data.map((val, i) => {
        const timestampNumber = parseInt(val.timeStamp, 10);
        const date = new Date(timestampNumber);
        const options = {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        };

        const localTimeString = date.toLocaleString("en-US", options);
        return (
          <div
            key={i}
            className={`${
              senderid == val.senderID
                ? "justify-end items-end text-white "
                : ""
            } space-y-3 p-1 w-full flex flex-col `}
          >
            <div
              className={`  ${
                senderid == val.senderID
                  ? "bg-btn-primary items-end"
                  : "bg-slate-300 "
              }    w-3/4   p-2`}
            >
              <p>{val.message}</p>
            </div>
            <p className="text-black">{localTimeString}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SingleChat;
