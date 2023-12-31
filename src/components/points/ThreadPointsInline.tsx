import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ThreadPointsBarProps } from "./ThreadPointsBar";

const ThreadPointsInline: FC<ThreadPointsBarProps> = ({
  points,
  responseCount
}) => {
  return (
    <>
      <label style={{ marginRight: "0.75em", marginTop: "0.25em" }}>
        {points || 0}
        <FontAwesomeIcon
          icon={faHeart}
          className="points-icon"
          style={{ marginLeft: "0.2em" }}
        />
      </label>
    </>
  );
};
export default ThreadPointsInline;
