import React, { useEffect, useState } from "react";
import "./BigImg.css";

function ModalImage(props) {
  const [imgSrc, setImgSrc] = useState("");
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("click", (e) => {
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
        <img alt="test" className="bigImgDiv" src={imgSrc} alt={props.alt ? props.alt : "model image"} ></img>
        <div className="bigImgBackDiv" onClick={() => setShow(false)}></div>
        <div className="bigImgButtonDiv" onClick={() => setShow(false)}>
          Close
        </div>
      </div>
    </div>
  );
}
export default ModalImage;
