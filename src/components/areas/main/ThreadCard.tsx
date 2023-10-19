import React, { FC } from "react";
import "./ThreadCard";
import Thread from "../../../models/Thread";
import { Link, useNavigate } from "react-router-dom";
import { faEye, faHeart, faReplyAll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

interface ThreadCardProps {
  thread: Thread;
}

const ThreadCard: FC<ThreadCardProps> = ({ thread }) => {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  const onClickShowThread = (e: React.MouseEvent<HTMLDivElement>) => {
    navigate("/thread/" + thread.id);
  };

  // 게시물에 대한 공감 개수
  const getPoints = (thread: Thread) => {
    if (width < 768) {
      return (
        <label style={{ marginRight: "0.75em", marginTop: "0.25EM" }}>
          {thread.points || 0}
          <FontAwesomeIcon
            icon={faHeart}
            className="points-icon"
            style={{ marginLeft: "0.2em" }}
          />
        </label>
      );
    }
    return null;
  };

  // thread에 대한 답변
  const getResponse = (thread: Thread) => {
    if (width <= 768) {
      return (
        <label style={{ marginRight: "0.5em" }}>
          {thread && thread.threadItems && thread.threadItems.length}
          <FontAwesomeIcon
            icon={faReplyAll}
            className="points-icon"
            style={{ marginLeft: "0.25em", marginTop: "0.25em" }}
          />
        </label>
      );
    }
    return null;
  };

  // 호감 수
  const getPointsNonMobile = () => {
    if (width <= 768) {
      return (
        <div className="threadcard-points">
          <div className="threadcard-points-item">
            {thread.points || 0}
            <br />
            <FontAwesomeIcon icon={faHeart} className="points-icon" />
          </div>
          <div
            className="threadcard-points-item"
            style={{ marginBottom: "0.75em" }}
          >
            {thread && thread.threadItems && thread.threadItems.length}
            <br />
            <FontAwesomeIcon icon={faReplyAll} className="points-icon" />
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="panel threadcard-container">
      <div className="threadcard-txt-container">
        <div className="content-header">
          <Link
            to={`/categorythreads/${thread.category.id}`}
            className="link-txt"
          >
            <strong>{thread.category.name}</strong>
          </Link>
          <span className="username-header" style={{ marginLeft: "0.5em" }}>
            {thread.userName}
          </span>
        </div>
        <div className="question">
          <div
            onClick={onClickShowThread}
            data-thread-id={thread.id}
            style={{ marginBottom: "0.4em" }}
          >
            <strong>{thread.title}</strong>
          </div>
          <div
            className="threadcard-body"
            onClick={onClickShowThread}
            data-thread-id={thread.id}
          >
            <div>{thread.body}</div>
          </div>
          <div className="threadcard-footer">
            <span style={{ marginRight: "0.5em" }}>
              <label>
                {thread.views}
                <FontAwesomeIcon icon={faEye} className="icon-lg" />
              </label>
            </span>
            <span>
              {width <= 768 ? (
                <ThreadPointsInline points={thread?.points || 0} />
              ) : null}
              {getPoints(thread)}
              {getResponse(thread)}
            </span>
          </div>
        </div>
      </div>
      {getPointsNonMobile()}
    </section>
  );
};
export default ThreadCard;
