import { SignUp } from "@clerk/react";
import "./signuppage.css";

const SignUpPage = () => {
  return (
    <div className="signuppage">
      <SignUp path="/sign-up" signInUrl="/sign-in" />
    </div>
  );
};

export default SignUpPage;
