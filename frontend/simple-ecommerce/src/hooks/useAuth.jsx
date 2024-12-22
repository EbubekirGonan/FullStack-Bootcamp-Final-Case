import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("authToken");
      // console.log("Token in useAuth:", token);
      setIsAuthenticated(!!token); 
    };
  
    checkAuth();
  }, []);

  return { isAuthenticated, loading: isAuthenticated === null }; 

};


