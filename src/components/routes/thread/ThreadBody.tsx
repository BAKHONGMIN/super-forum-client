import React from "react";
import RichEditor from "../../editor/RichEditor";

interface ThreadBodyProps {
  body?: string;
}

export default function ThreadBody({ body }: ThreadBodyProps) {
  return (
    <div className="thread-body-container">
      <strong>Body</strong>
      <div className="thread-body-editor">
        <RichEditor existingBody="body" />
      </div>
    </div>
  );
}
