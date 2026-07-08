
import NewPrompt from "../../newPrompt/NewPrompt";
import "./chatpage.css";



const ChatPage = () => {
 

  return (
    <div className="chatpage">
      <div className="wrapper">
        <div className="chat">
          {/* <div className="message user">
            Text message from User Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Neque error distinctio cupiditate ducimus ad unde.
          </div>
          <div className="message ">Text message from ai</div> */}
          <NewPrompt/>  
  
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
