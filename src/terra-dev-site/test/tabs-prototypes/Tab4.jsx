import React from "react";
import StyledContent from "./StyledContent"
import { WorkspaceContent } from "../../../workspace";

const Tab4 = () => {
  return (
    <WorkspaceContent label="Weight">
      <StyledContent tab="Weight" />
    </WorkspaceContent>
  );
};

Tab4.titleKey = "derp";

export default Tab4;
