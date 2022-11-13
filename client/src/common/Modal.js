import React, { useRef } from "react";
import ReactDOM from "react-dom";

import { AiOutlineCloseCircle } from "react-icons/ai";
import "../styles/common/Modal.scss";
const portalRoot = document.getElementById("portal-root");


const Modal = ({ isOpen, close, children }) => {
  const contentRef = useRef();
  console.log(contentRef,portalRoot);


  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <div className="modal__background">
        <div className="modal__container" ref={contentRef}>
          <div className="modal__header-row">
            <AiOutlineCloseCircle 
            onClick={close}
            style={{ cursor: "pointer" }}
            width="30px"
            />
          </div>
          {children}
        </div>
      </div>
    </>,
    document.body
  );
};

export default Modal;