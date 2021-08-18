import React from "react";
import StyledContent from "./StyledContent"
import { WorkspaceContent } from "../../../workspace";

const Tab6 = () => {
  return (
    <WorkspaceContent label="Nutrition">
      <StyledContent tab="Nutrition" />
    </WorkspaceContent>
  );
};

Tab6.titleKey = "derp";

export default Tab6;
