import React from "react";
import DropDown, { Option } from "react-dropdown";
import "react-dropdown/style.css";

interface ThreadCategoryProps {
  categoryName?: string;
}

function ThreadCategory({ categoryName }: ThreadCategoryProps) {
  const catOptions: Array<string | Option> = [
    { value: "1", label: "Programming" },
    { value: "2", label: "Cooking" }
  ];
  const defaultOption = catOptions[0];

  const onChangeDropDown = (arg: Option) => {
    console.log(arg);
  };

  return (
    <div className="thread-category-container">
      <strong>{categoryName}</strong>
      <DropDown
        className="thread-category-dropdown"
        options={catOptions}
        onChange={onChangeDropDown}
        value={defaultOption}
        placeholder="Select a category"
      />
    </div>
  );
}

export default ThreadCategory;
