import React, { useState } from "react";
import {  Modal } from "react-bootstrap";

import { LogButton } from "./modal.styled";


export interface Error {
  error: string;
}

export const ErrorModalPopUp = (error: Error) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{error.error}</Modal.Title>
        </Modal.Header>
        <Modal.Body>We`re having issues loading this page</Modal.Body>
        <Modal.Footer>
          <LogButton variant="secondary" onClick={handleClose}>
            Close
          </LogButton>
        </Modal.Footer>
      </Modal>
    </>
  );
};
