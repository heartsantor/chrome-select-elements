import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
// import cache from 'webext-storage-cache';

function Popup() {

  const aa = () => {
    console.log("🚀 ~ file: popup.jsx ~ line 9 ~ aa ~ tab")
  }
  useEffect(() => {
    console.log("hlww");
  });
  return (
    <div>
      <div className="wrapper">
        <h2>Hello</h2>
        <button className="changeBtn" onClick={aa}>click</button>
        <p>Output</p>
        <textarea id="text_my_ex"></textarea>
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.querySelector("#root")).render(<Popup />);

