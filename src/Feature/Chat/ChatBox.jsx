import IndexChat from "./IndexChat";
import SingleChat from "./SingleChat";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import ChatInput from "./ChatInput";
const ChatBox = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleBackClick = () => {
    setCurrentUser(null); // Reset currentUser to null
    setIsChatOpen(false);
  };
  console.log(currentUser , " current")
  return (
    <div className="fixed bottom-20 right-10 rounded-xl overflow-hidden z-20 bg-slate-100">
      <div className="flex flex-col justify-between w-96 h-96">
        <div className="bg-btn-primary text-white p-2 px-3 font-medium flex items-center gap-2">
          {currentUser ? (
            <>
              <span
                className="rounded-full p-2 hover:cursor-pointer"
                onClick={handleBackClick}
              >
                <IoIosArrowBack />
              </span>
              <div className="rounded-full overflow-hidden">
                <img
                  src={currentUser?.url}
                  alt="User avatar"
                  className="w-8 h-8 object-cover"
                />
              </div>
              <span className="ml-2">{currentUser.name}</span>
            </>
          ) : (
            <span>INBOX</span>
          )}
        </div>
        {!isChatOpen ? (
          <IndexChat setshow={setIsChatOpen} setuser={setCurrentUser} />
        ) : (
          <>
            <SingleChat userData={currentUser} />
            <ChatInput currentUser={currentUser} />
          </>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
