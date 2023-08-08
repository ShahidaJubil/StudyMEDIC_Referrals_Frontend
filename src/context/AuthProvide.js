import React, { useState, useContext } from "react";


export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  var u_name = "User";
  var u_token = "";
  var u_role = "";
  var u_email = "";
  var u_id="";
  if (sessionStorage.getItem("username") && sessionStorage.getItem("token")) {
    //console.log("auth", sessionStorage.getItem("uid"))
    u_name = sessionStorage.getItem("username");
    u_token = sessionStorage.getItem("token");
    u_role = sessionStorage.getItem("role");
    u_email = sessionStorage.getItem("email");
    u_id = sessionStorage.getItem("uid");
  }
  const [userToken, setUserToken] = useState(u_token);
  const [userName, setUserName] = useState(u_name);
  const [userRole ,setuserRole] = useState(u_role);
  const [userMail ,setuserMail] = useState(u_email);
  const [userId ,setuserId] = useState(u_id);


  function updateContext(newToken, newName ) {
    setUserToken(newToken);
    setUserName(newName);
    //setuserRole(newRole);
  }

  return (
    <AuthContext.Provider value={{ userToken, userName, updateContext , userRole , userMail ,u_id}}>
      {children}
    </AuthContext.Provider>
  );
};
