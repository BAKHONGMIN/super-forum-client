import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store/AppState";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { UserProfileSetType } from "../../store/user/Reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered, faUser } from "@fortawesome/free-solid-svg-icons";
import Registration from "../../auth/Registration";

const SideBarMenus = () => {
  const [showRegister, setShowRegister] = useState(false);

  const user = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();

  const onClickToggleRegister = () => {
    setShowRegister(!showRegister);
  };

  useEffect(() => {
    dispatch({
      type: UserProfileSetType,
      payload: {
        id: 1,
        username: "testUser"
      }
    });
  }, [dispatch]);
  return (
    <>
      <ul>
        <li>
          <FontAwesomeIcon icon={faUser} />
          <span className="menu-name">{user?.username}</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faRegistered} />
          <span className="menu-name">register</span>
          <Registration
            isOpen={showRegister}
            onClickToggle={onClickToggleRegister}
          />
        </li>
      </ul>
    </>
  );
};
export default SideBarMenus;
