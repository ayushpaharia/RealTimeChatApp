import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const SignIn = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [email, setEmail] = useState("");
  const [emailColor, changeEmailColor] = useState("orangered");
  const onLinkClick = (e) =>
    !name || !room || !email ? e.preventDefault() : null;

  const checkColor = (e) => {
    let index = e.target.value.search(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    index === 0
      ? changeEmailColor("yellowgreen")
      : changeEmailColor("orangered");
    setEmail(e.target.value);
  };
  const liftState = () => {
    props.setUserInfo({
      email: email,
      name: name,
      room: room,
    });
  };
  return (
    <div className="join-outer-container">
      <div className="join-inner-container">
        <h1 className="heading">Realtime Chat App</h1>

        <div className="field">
          <input
            placeholder=""
            type="text"
            name="field-email"
            style={{ color: `${emailColor}` }}
            className="join-input"
            placeholder=""
            onChange={checkColor}
          />
          <label htmlFor="field-email" className="input-label">
            Email
          </label>
        </div>
        <div className="field">
          <input
            name="name"
            placeholder=" "
            className="join-input"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor="name" className="input-label">
            Name
          </label>
        </div>
        <div className="field">
          <input
            name="room"
            placeholder=" "
            className="join-input"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
          <label htmlFor="room" className="input-label">
            Room
          </label>
        </div>
        <div className="field">
          <input
            type={showPassword ? "text" : "password"}
            name="email"
            className="join-input"
            placeholder=" "
            // on:input={validatePassword}
            // class:valid={strength > 3}
          />
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <span
            style={{ height: "1.4rem", transform: "scale(170%)" }}
            className="toggle-password"
            onMouseEnter={() => setShowPassword(true)}
            onMouseLeave={() => setShowPassword(false)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>
        <div className="button-field">
          <Link
            onClick={(onLinkClick, liftState)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className="signin-button" type="submit">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
