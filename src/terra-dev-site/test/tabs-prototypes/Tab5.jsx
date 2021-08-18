import React from "react";
import StyledContent from "./StyledContent"
import { WorkspaceContent } from "../../../workspace";

const Tab5 = () => {
  return (
    <WorkspaceContent label="Water">
      <StyledContent tab="Water" />
    </WorkspaceContent>
  );
};

Tab5.titleKey = "derp";

export default Tab5;
