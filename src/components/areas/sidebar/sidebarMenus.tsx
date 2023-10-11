import { useSelector } from "react-redux";
import { AppState } from "../../store/AppState";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { UserProfileSetType } from "../../store/user/Reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const SideBarMenus = () => {
  const user = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();

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
        <FontAwesomeIcon icon={faUser} />
        <span className="menu-name">{user?.username}</span>
      </ul>
    </>
  );
};
export default SideBarMenus;
