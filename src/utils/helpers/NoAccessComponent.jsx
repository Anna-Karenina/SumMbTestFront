import React from "react";
//import { useHistory, useLocation } from "react-router-dom";

export function NoAccess() {
  // let history = useHistory();
  //let location = useLocation();

  // let { from } = location.state || { from: { pathname: "/auth" } };


  return (
    <div>
      <p>Для просмотра авторизуйтесь как администратор</p>
    </div>
  );
}