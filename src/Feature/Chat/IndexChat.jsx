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
import logo from "../../assets/logo.webp";
import { BASE_URL } from "../../config/Config";

const IndexChat = ({ setuser, setshow }) => {
  const [inboxes, setInboxes] = useState([]); // To store all chat documents
  const [loading, setLoading] = useState(true); // To show loading state
  const [error, setError] = useState(null); // To store error messages

  const { user_id, username } = useUserinfo();
  const id = `user_id${username}${user_id}`;
  const senderid = id.replace(/ /g, "_");
  useEffect(() => {
    const fetchInboxes = async () => {
      try {
        // Create a query to get all chat documents for the current user
        const chatsRef = collection(db, "Chats", senderid, "Inbox");
        const q = query(chatsRef);

        // Fetch all documents matching the query
        const querySnapshot = await getDocs(q);
        const chatList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setInboxes(chatList); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching inboxes:", error);
        setError(error); // Update error state
      } finally {
        setLoading(false); // Set loading to false once fetching is complete
      }
    };

    fetchInboxes();
  }, [user_id, username]); // Add dependencies if necessary

  // const a = ["usman"];
  return (
    <div className="overflow-y-scroll h-full">
      {inboxes?.map((val, i) => {
        console.log(val);
        const { id, lastMsg, name, timeStamp, url } = val;
        console.log(url);
        const timestampNumber = parseInt(timeStamp, 10);
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
            onClick={() => setuser({ id, name, url }, setshow(true))}
            key={id}
            className="px-2 py-2 border-b hover:bg-slate-300 hover:cursor-pointer"
          >
            <div className="flex items-center uppercase gap-4  w-full">
              <div className=" rounded-full  overflow-hidden ">
                <img src={url} alt="" className="size-8" />
              </div>
              <div className="flex justify-between w-full items-center">
                <div className="">
                  <p className="font-bold ">{name}</p>
                  <div className="  text-xs"> {lastMsg}</div>
                </div>

                <p className="text-xs">{localTimeString}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IndexChat;
