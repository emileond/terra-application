import React from 'react';
import StyledContent from '../StyledContent';
import { WorkspaceContent } from '../../../../workspace-3';

const Tab1 = () => {
  return (
    <WorkspaceContent label="Nutrition">
      <StyledContent tab="Nutrition" />
    </WorkspaceContent>
  );
};

Tab1.titleKey = 'derp';

export default Tab1;
