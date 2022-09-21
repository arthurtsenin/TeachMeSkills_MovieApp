import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { IRootState, useAppDispatch } from "../redux/store";
import { logoutUser } from "../redux/actionCreators";
import { LogButton } from "./logButton.styled";

export const Logout = () => {
  const profile = useSelector((state: IRootState) => state.auth.profileData.profile);
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    localStorage.setItem("profile", JSON.stringify(profile));
  }, [profile]);

  return (
    <div>
      <LogButton variant="secondary" onClick={handleShow}>
        {profile}
      </LogButton>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {profile}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Link to="/">
            <LogButton variant="secondary" onClick={() => dispatch(logoutUser())}>
              Logout
            </LogButton>
          </Link>
        </Modal.Body>
      </Modal>
    </div>
  );
};
