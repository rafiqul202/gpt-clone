import { SignIn } from "@clerk/react";
import "./signinpage.css";

const SignInPage = () => {
  return (
    <div className="signinpage">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
        forceRedirectUrl="/dashboard"
      />
    </div>
  );
};

export default SignInPage;
