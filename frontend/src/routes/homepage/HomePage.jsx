import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import "./homepage.css";
import { useState } from "react";
const HomePage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");
  return (
    <div className="homepage">
      <img src="./orbital.png" alt="arbital" className="orbital" />
      <div className="left">
        <h1>TANOY AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          similique consectetur adipisci est minima omnis.
        </p>

        <Link to={"/dashboard"}>Get Started</Link>
      </div>
      <div className="right">
        <div className="imageContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="./bot.png" alt="bot picture" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "./human1.jpeg"
                  : typingStatus === "human2"
                    ? "/human2.jpeg"
                    : "bot.png"
              }
              alt="bot pic"
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Human: We produce food for Mice",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: We produce food for Hamsters",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2: We produce food for Guinea Pigs",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "We produce food for Chinchillas",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="./logo.png" alt="Logo" />
        <div className="Links">
          <Link to={"/"}>Terms of Service</Link>
          <span>|</span>
          <Link to={"/"}>Privacy Policy</Link>

        </div>

      </div>
    </div>
  );
};

export default HomePage;
