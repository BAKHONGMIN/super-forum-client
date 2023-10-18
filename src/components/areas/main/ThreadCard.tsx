import React, { FC } from "react";
import "./ThreadCard.css";
import Thread from "../../../models/Thread";
import { Link, useNavigate } from "react-router-dom";
import { faEye, faHeart, faReplyAll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

interface ThreadCardProps {
  thread: Thread;
}

export default function ThreadCard<T extends ThreadCardProps>(thread: T): T {
    const navigate = useNavigate();
    const {width} = useWindowDimensions();

    const onClickShowThread = (e:React.MouseEvent<HTMLDivElement>, thread:Thread) => {
        navigate("/thread/" + thread.id)
    }

    const getPoints = (thread:Thread) => {
        if(width < 768){
            return (
                <label style={{marginRight : "0.75em", marginTop : "0.25EM"}}>
                    {thread.points || 0}
                    <FontAwesomeIcon icon={faHeart} className="points-icon" style={{marginLeft : "0.2em"}}/>
                </label>
            );
        }
        return null;
    }

    const getResponse = (thread : Thread) => {
        if(width <= 768){
            return (
                <label style={{marginRight : "0.5em"}}>
                    {thread && thread.threadItems && thread.threadItems.length}
                </label>
            )
        }
    }

  return (

  );
}
