import React from "react";

import { WorkspaceContent } from "../../../../workspace-3b";
import MockContent from "./../MockContent";

const Tab4 = () => {
  return (
    <WorkspaceContent label="Pineapples">
      <MockContent fruit="pineapples" />
    </WorkspaceContent>
  );
};

Tab4.titleKey = "derp";

export default Tab4;
