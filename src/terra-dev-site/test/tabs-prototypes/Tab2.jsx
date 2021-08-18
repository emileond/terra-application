import React from "react";
import StyledContent from "./StyledContent"
import { WorkspaceContent } from "../../../workspace";

const Tab2 = () => {
  return (
    <WorkspaceContent label="Steps">
      <StyledContent tab="Steps" />
    </WorkspaceContent>
  );
};

Tab2.titleKey = "derp";

export default Tab2;
