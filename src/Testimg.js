import React, { useEffect, useState } from "react";
import "./BigImg.css";

function Testimg(props) {
  const [imgSrc, setImgSrc] = useState("");
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("click", function (e) {
      const getClassName = () =>
        props.except.find((my) => {
          return my === e.target.className;
        });
      if (e.target.tagName === "IMG" && getClassName() !== e.target.className) {
        setImgSrc(e.target.src);
        setShow(true);
      }
    });
  });
  return (
    <div
      className="bigImgMainDiv"
      style={{ display: isShow ? "block" : "none" }}
    >
      <div className="bigImgContentDiv">
        <img alt="test" className="bigImgDiv" src={imgSrc}></img>
        <div className="bigImgBackDiv" onClick={() => setShow(false)}></div>
        <div className="bigImgButtonDiv" onClick={() => setShow(false)}>
          Close
        </div>
      </div>
    </div>
  );
}
export default Testimg;
