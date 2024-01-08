// Modal.js
import React, { useState } from "react";
import Form from "./Form";

const Modal = ({ showModal, closeModal }) => {
  return (
    <div
      className={`${
        showModal
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } fixed inset-0 z-50 flex items-center justify-center`}
    >
      <div
        className="absolute inset-0 bg-gray-800 opacity-50"
        onClick={closeModal}
      ></div>
      <div className="bg-white p-8 rounded-lg z-10 ">
        <Form className="relative"></Form>

        
      </div>
    </div>
  );
};

export default Modal;
