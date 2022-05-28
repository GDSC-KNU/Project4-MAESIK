import React, { Component } from "react";
import { ACCESS_TOKEN } from "../Login/oauth_url";
import { Navigate } from "react-router-dom";

class OAuth2RedirectHandler extends Component<{ location?: Location }> {
  getUrlParameter(name: any) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

    var results = regex.exec(window.location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  render() {
    const token = this.getUrlParameter("token");
    const error = this.getUrlParameter("error");

    console.log(token);

    if (token) {
      localStorage.setItem(ACCESS_TOKEN, token);
      return <Navigate to="/" state={{ from: this.props.location }} />;
    } else {
      return (
        <Navigate to="/" state={{ from: this.props.location, error: error }} />
      );
    }
  }
}

export default OAuth2RedirectHandler;
