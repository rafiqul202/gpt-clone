import { useAuth } from "@clerk/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./dashbordpage.css";

const DashbordPage = () => {
  const { userId, isLoaded } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [userId, isLoaded, navigate]);

  if (!isLoaded) return "Loading...";
  return (
    <div className="dashboardPage">
      <div className="text">
        <div className="logo">
          <img src="./logo.png" alt="Logo" />
          <h1>AI</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src="/chat.png" alt="chatPicture" />
            <span>Create a New Chat</span>
          </div>
          <div className="option">
            <img src="/image.png" alt="chatPicture" />
            <span>Analyze Images</span>
          </div>
          <div className="option">
            <img src="/code.png" alt="chatPicture" />
            <span>Help Me AI</span>
          </div>
        </div>
      </div>
      <div className="formContent">
        <form action="">
          <input type="text" placeholder="Ask me anything..." />
          <button>
            <img src="/arrow.png" alt="Arrow" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashbordPage;
