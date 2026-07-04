import { Link } from "react-router-dom";
import "./chatList.css";

const ChatList = () => {
  return (
    <div className="chatlist">
      <h2 className="title">DASHBOARD</h2>
      <Link to={"/dashboard"}>Create new Chat</Link>
      <Link to={"/"}>Explore AI</Link>
      <Link to={"/"}>Contact</Link>
      <hr />
      <h2 className="title">RECENT CHATS</h2>
      <div className="list">
        <Link to={`/dashboard/chat/111222`}> My chat title</Link>
        <Link to={`/dashboard/chat/111222`}> My chat title</Link>
        <Link to={`/dashboard/chat/111222`}> My chat title</Link>
        <Link to={`/dashboard/chat/111222`}> My chat title</Link>
        <Link to={`/dashboard/chat/111222`}> My chat title</Link>
        <Link to={`/dashboard/chat/111222`}> My chat title</Link>
        <Link to={`/dashboard/chat/111222`}> My chat title</Link>
        <Link to={`/dashboard/chat/111222`}> My chat title</Link>
        <Link to={`/dashboard/chat/111222`}> My chat title</Link>
        <Link to={`/dashboard/chat/111222`}> My chat title</Link>
        <Link to={`/dashboard/chat/111222`}> My chat title</Link>
        <Link to={`/dashboard/chat/111222`}> My chat title</Link>
        <Link to={`/dashboard/chat/111222`}> My chat title</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="./logo.png" alt="Logo" className="logo" />
        <div className="texts">
          <span>Upgrade to  ai pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
