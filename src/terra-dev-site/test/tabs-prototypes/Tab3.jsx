import React from "react";
import StyledContent from "./StyledContent"
import { WorkspaceContent } from "../../../workspace";

const Tab3 = () => {
  return (
    <WorkspaceContent label="Cardio">
      <StyledContent tab="Cardio" />
    </WorkspaceContent>
  );
};

Tab3.titleKey = "derp";

export default Tab3;
