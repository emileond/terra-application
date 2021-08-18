import React from 'react';
import StyledContent from '../StyledContent';
import { WorkspaceContent } from '../../../../workspace-2c';

const Tab1 = () => {
  return (
    <WorkspaceContent label="Water">
      <StyledContent tab="Water" />
    </WorkspaceContent>
  );
};

Tab1.titleKey = 'derp';

export default Tab1;
