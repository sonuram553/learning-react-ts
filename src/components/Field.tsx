import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context.lang === "english" ? "Name" : "Naam";
    return (
      <div className="ui field">
        <label>{text}</label>
        <input type="text" />
      </div>
    );
  }
}

export default Field;
