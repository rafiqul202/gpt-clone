import { Link, Outlet } from "react-router-dom";
import { Show, UserButton } from "@clerk/react";
import "./rootlayout.css";

const RootLayout = () => {
  return (
    <div className="rootlayout">
      <header>
        <Link to={"/"} className="logo">
          <img src="./logo.png" alt="Logo" />
          <span>TANOY AI</span>
        </Link>
        <div className="user">
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
