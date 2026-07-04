import { useAuth } from "@clerk/react"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashbordPage = () => {
  const { userId, isLoaded } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    
    if (isLoaded && !userId) {
      navigate("/sign-in")
    }
  }, [userId, isLoaded, navigate])
  

  if(!isLoaded) return "Loading..."
  return (
    <div>DashbordPage</div>
  )
}

export default DashbordPage