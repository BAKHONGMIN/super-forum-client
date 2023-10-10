import React from "react";

export default function Main() {
  const test = true;
  if (test) {
    throw new Error("Main fail");
  } else {
    return <main className="content">Main</main>;
  }
}
