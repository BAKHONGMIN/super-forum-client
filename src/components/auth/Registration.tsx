/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useReducer, useState } from "react";
import {
  PasswordTestResult,
  isPasswordValid
} from "../../common/validators/PasswordValidator";
import ReactModal from "react-modal";
import ModalProps from "../types/ModalProps";
import userReducer from "./common/UserReducer";
import "./Registration.css";
import { allowSubmit } from "./common/Helpers";

const Registration: FC<ModalProps> = ({ isOpen, onClickToggle }) => {
  const [isRegisterDisabled, setRegisterDisabled] = useState(true);
  const [
    { userName, password, email, passwordConfirm, resultMsg, isSubmitDisabled },
    dispatch
  ] = useReducer(userReducer, {
    userName: "davec",
    password: "",
    email: "admin@dzhaven.com",
    passwordConfirm: "",
    resultMsg: "",
    isSubmitDisabled: true
  });

  const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      payload: e.target.value,
      type: "userName"
    });
    if (!e.target.value) {
      allowSubmit(dispatch, "Username cannot be empty", true);
    } else {
      allowSubmit(dispatch, "", false);
    }
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ payload: e.target.value, type: "email" });
    if (!e.target.value) {
      allowSubmit(dispatch, "Email cannot be empty", true);
    } else {
      allowSubmit(dispatch, "", false);
    }
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ payload: e.target.value, type: "password" });
    const passwordCheck: PasswordTestResult = isPasswordValid(e.target.value);
    if (!passwordCheck.isValid) {
      allowSubmit(dispatch, passwordCheck.message, true);
      return;
    }
    passwordsSame(passwordConfirm, e.target.value);
  };

  const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      payload: e.target.value,
      type: "passwordConfrim"
    });
    passwordsSame(password, e.target.value);
  };

  const passwordsSame = (passwordVal: string, passwordConfrimVal: string) => {
    if (passwordVal !== passwordConfrimVal) {
      allowSubmit(dispatch, "Passwords do not match", true);
      return false;
    } else {
      allowSubmit(dispatch, "", false);
      return true;
    }
  };

  const onClickRegister = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    onClickToggle(e);
  };

  const onClickCancel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onClickToggle(e);
  };

  return (
    <ReactModal
      className="modal-menu"
      isOpen={isOpen}
      onRequestClose={onClickToggle}
      shouldCloseOnOverlayClick={true}
      appElement={document.getElementById("root") || undefined}
    >
      <form>
        <div className="reg-inputs">
          <div>
            <label>username</label>
            <input type="text" value={userName} onChange={onChangeUserName} />
          </div>
          <div>
            <label>email</label>
            <input type="text" value={email} onChange={onChangeEmail} />
          </div>
          <div>
            <label>password</label>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label>password confirmation</label>
            <input
              type="password"
              placeholder="Password Confirmation"
              value={passwordConfirm}
              onChange={onChangePasswordConfirm}
            />
          </div>
          <div className="reg-buttons">
            <div className="reg-btn-left">
              <button
                style={{ marginLeft: ".5em" }}
                className="action-btn"
                disabled={isSubmitDisabled}
                onClick={onClickRegister}
              >
                Register
              </button>
              <button
                style={{ marginLeft: ".5em" }}
                className="cancel-btn"
                onClick={onClickCancel}
              >
                Close
              </button>
            </div>
            <span className="form-btn-right">
              <strong>{resultMsg}</strong>
            </span>
          </div>
        </div>
      </form>
    </ReactModal>
  );
};
export default Registration;
