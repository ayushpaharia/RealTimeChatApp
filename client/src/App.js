import React, { useState } from "react";

import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    room: "",
    password: "",
  });
  // useEffect(() => {
  //   console.log(userInfo);
  // }, [userInfo]);
  return (
    <Router>
      <Route
        path="/"
        exact
        render={(props) => <Join {...props} setUserInfo={setUserInfo} />}
      />
      <Route
        path="/chat"
        component={(props) => <Chat {...props} userInfo={userInfo} />}
      />
    </Router>
  );
};

export default App;
