import { FormEvent, useState,ChangeEvent } from "react";
import { Form, Modal } from "react-bootstrap";
import styled from "styled-components";

import { useTheme } from "../theme/ThemeContext";

import { IRootState, useAppDispatch } from "../redux/store";
import { loginUser } from "../redux/actionCreators";

import { LogButton } from "./logButton.styled";

export const Login = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ login, password }));
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <LogButton variant="secondary" onClick={handleShow}>
        Enter
      </LogButton>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Authorization</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Login:</Form.Label>
              <Form.Control
                value={login}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setLogin(event.target.value)}
                type="text"
                placeholder="Enter login"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <LogButton variant="secondary" type="submit">
              Enter
            </LogButton>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
