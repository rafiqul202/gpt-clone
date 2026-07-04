import { useEffect, useRef } from "react";
import "./chatpage.css";

const ChatPage = () => {
  const endRef = useRef(null);
  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className="chatpage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Text message from ai</div>
          <div className="message user">
            Text message from User Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Neque error distinctio cupiditate ducimus ad unde.
          </div>
          <div className="message ">Text message from ai</div>
          <div className="message user">Text message from User</div>
          <div className="message">Text message from ai</div>
          <div className="message user">Text message from User</div>
          <div className="message ">Text message from ai</div>
          <div className="message user">Text message from User</div>
          <div className="message">Text message from ai</div>
          <div className="message user">Text message from User</div>
          <div className="message ">Text message from ai</div>
          <div className="message user">Text message from User</div>
          <div className="message">Text message from ai</div>
          <div className="message user">Text message from User</div>
          <div className="message ">Text message from ai</div>
          <div className="message user">Text message from User</div>
          <div className="message">Text message from ai</div>
          <div className="message user">Text message from User</div>
          <div className="message ">Text message from ai</div>
          <div className="message user">Text message from User</div>
          <div className="message">Text message from ai</div>
          <div className="message user">Text message from User</div>
          <div className="message ">Text message from ai</div>
          <div className="message user">Text message from User</div>
          <div className="message">Text message from ai</div>
          <div className="message user">Text message from User</div>
          <div className="message ">Text message from ai</div>
          <div className="message user">Text message from User</div>
          <div className="message">Text message from ai</div>
          <div className="message user">Text message from User</div>
          <div className="message ">Text message from ai</div>
          <div className="message user">Text message from User</div>
          <div className="message">Text message from ai</div>
          <div className="message user">Text message from User</div>
          <div className="message ">Text message from ai</div>
          <div className="message user">Text message from User</div>
          <div className="message">Text message from ai</div>
          <div className="message user">Text message from User</div>
          <div className="message ">Text message from ai</div>
          <div className="message user">Text message from User</div>
          <div className="message">Text message from ai</div>
          <div className="message user">Text message from User</div>
          <div className="message ">Text message from ai</div>
          <div className="message user">Text message from User</div>
          <div ref={endRef} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
