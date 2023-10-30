import React, { useEffect, useState } from "react";
import ThreadItem from "../../../models/ThreadItem";
import ThreadResponse from "./ThreadResponse";

interface ThreadResponsesBuilderProps {
  threadItems?: Array<ThreadItem>;
}

export default function ThreadResponsesBuilder({
  threadItems
}: ThreadResponsesBuilderProps) {
  const [responseElements, setResponseElements] = useState<
    JSX.Element | undefined
  >();

  useEffect(() => {
    if (threadItems) {
      const thResponses = threadItems.map((ti) => {
        return (
          <li key={`thr-${ti.id}`}>
            <ThreadResponse
              body={ti.body}
              userName={ti.userName}
              lastModifiedOn={ti.createdOn}
              points={ti.points}
            />
          </li>
        );
      });
      setResponseElements(<ul>{thResponses}</ul>);
    }
  }, [threadItems]);

  return (
    <div className="thread-body-container">
      <strong style={{ marginBottom: "0.75em" }}>Responses</strong>
      {responseElements}
    </div>
  );
}
