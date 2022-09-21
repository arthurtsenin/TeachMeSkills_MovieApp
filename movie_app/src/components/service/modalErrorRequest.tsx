import React, { useState } from "react";
import {  Modal } from "react-bootstrap";

import { LogButton } from "./logButton.styled";
import { ErrorProps } from "./types";

export const ErrorModalPopUp = (error: ErrorProps) => {
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
