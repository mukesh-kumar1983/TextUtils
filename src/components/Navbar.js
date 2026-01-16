import React from "react";

export default function Navbar(props) {
  // You no longer need local navColor state — we use `props.mode` from App.js
  return (
    <nav className="navbar navbar-expand-lg  bg-dark navbar-dark">
      <div className="container-fluid">
        <span className="navbar-brand">TextUtils</span>

        <div className="d-flex align-items-center">

          {/* Predefined Color Circles */}
          <span
            onClick={() =>
              props.changeTheme(
                "primary",
                "#e3f2fd",
                "linear-gradient(135deg, #e3f2fd, #ffffff)"
              )
            }
            style={{
              backgroundColor: "blue",
              height: "22px",
              width: "22px",
              borderRadius: "50%",
              display: "inline-block",
              cursor: "pointer",
              margin: "5px",
              border: "2px solid white"
            }}
          ></span>

          <span
            onClick={() =>
              props.changeTheme(
                "danger",
                "#fdecea",
                "linear-gradient(135deg, #fdecea, #ffffff)"
              )
            }
            style={{
              backgroundColor: "red",
              height: "22px",
              width: "22px",
              borderRadius: "50%",
              display: "inline-block",
              cursor: "pointer",
              margin: "5px",
              border: "2px solid white"
            }}
          ></span>

          <span
            onClick={() =>
              props.changeTheme(
                "success",
                "#e6fffa",
                "linear-gradient(135deg, #e6fffa, #ffffff)"
              )
            }
            style={{
              backgroundColor: "green",
              height: "22px",
              width: "22px",
              borderRadius: "50%",
              display: "inline-block",
              cursor: "pointer",
              margin: "5px",
              border: "2px solid white"
            }}
          ></span>

          <span
            onClick={() =>
              props.changeTheme(
                "warning",
                "#fff3cd",
                "linear-gradient(135deg, #fff3cd, #ffffff)"
              )
            }
            style={{
              backgroundColor: "yellow",
              height: "22px",
              width: "22px",
              borderRadius: "50%",
              display: "inline-block",
              cursor: "pointer",
              margin: "5px",
              border: "2px solid white"
            }}
          ></span>

          {/* Custom Color Picker */}
          <input
            type="color"
            className="form-control form-control-color ms-3"
            title="Choose your own color"
            onChange={(e) =>
              props.changeTheme(
                "dark",
                e.target.value,
                `linear-gradient(135deg, ${e.target.value}, #ffffff)`
              )
            }
          />
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes={title:PropTypes.string, aboutUs:PropTypes.string}
//TextForm.propTypes={heading:PropTypes.string}
