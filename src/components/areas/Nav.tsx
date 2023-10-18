import React, { useState } from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";
import ReactModal from "react-modal";
import SideBarMenus from "./sidebar/sidebarMenus";

export default function Nav() {
  const { width } = useWindowDimensions();
  const [showMenu, setShowMenu] = useState(false);

  const getMobileMenu = () => {
    if (width <= 768) {
      return (
        <FontAwesomeIcon
          icon={faBars}
          size="lg"
          className="nav-mobile-menu"
          onClick={onClickToggle}
        />
      );
    }
    return null;
  };

  const onClickToggle = (e: React.MouseEvent<Element, MouseEvent>) => {
    setShowMenu(!showMenu);
  };

  const onRequestClose = (e: React.MouseEvent<Element, MouseEvent>) => {
    setShowMenu(false);
  };

  return (
    <>
      <ReactModal
        className="modal-menu"
        // 여는지 닫는지 여부
        isOpen={showMenu}
        // 닫기 버튼을 누르면 동작
        onRequestClose={onRequestClose}
        // 화면 바깥을 누르면 닫는지 여부
        shouldCloseOnOverlayClick={true}
        // 에러발생(warning.js:34 Warning: react-modal: App element is not defined.)
        appElement={document.getElementById("root") || undefined}
      >
        <SideBarMenus />
      </ReactModal>
      <nav>
        {getMobileMenu()}
        <strong>SuperForum</strong>
      </nav>
    </>
  );
}
