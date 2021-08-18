import React from 'react';
import StyledContent from '../StyledContent';
import { WorkspaceContent } from '../../../../workspace-2c';

const Tab1 = () => {
  return (
    <WorkspaceContent label="Steps">
      <StyledContent tab="Steps" />
    </WorkspaceContent>
  );
};

Tab1.titleKey = 'derp';

export default Tab1;
