import React, { FC, useEffect, useReducer } from "react";
import ModalProps from "../types/ModalProps";
import userReducer from "./common/UserReducer";
import { useDispatch } from "react-redux";
import { UserProfileSetType } from "../store/user/Reducer";
import { allowSubmit } from "./common/Helpers";
import ReactModal from "react-modal";

const Login: FC<ModalProps> = ({ isOpen, onClickToggle }) => {
  const [{ userName, password, resultMsg, isSubmitDisabled }, dispatch] =
    useReducer(userReducer, {
      userName: "",
      password: "",
      resultMsg: "",
      isSubmitDisabled: true
    });

  const reduxDispatch = useDispatch();

  useEffect(() => {
    // todo: replace with GraphQL call
    reduxDispatch({
      type: UserProfileSetType,
      payload: {
        id: 1,
        userName: "testUser"
      }
    });
  }, [reduxDispatch]);

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

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "password", payload: e.target.value });
    if (!e.target.value) {
      allowSubmit(dispatch, "Password cannot be empty", true);
      return;
    } else {
      allowSubmit(dispatch, "", false);
    }
  };

  const onClickLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onClickToggle(e);
  };

  const onClickCancle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    onClickToggle(e);
  };

  return (
    <ReactModal
      className="modal-menu"
      isOpen={isOpen}
      onRequestClose={onClickToggle}
      shouldCloseOnOverlayClick={true}
    >
      <form>
        <div className="reg-inputs">
          <div>
            <label>username</label>
            <input type="text" value={userName} />
          </div>
          <div>
            <label>password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={onChangePassword}
            />
          </div>
        </div>
        <div className="form-buttons form-buttons-sm">
          <div className="form-btn-left">
            <button style={{ marginLeft: "0.5em" }}></button>
          </div>
        </div>
      </form>
    </ReactModal>
  );
};
export default Login;
