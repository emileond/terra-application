import React from 'react';
import { Workspace, WorkspaceItem } from '../../../workspace';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';

const WorkspaceTest = () => {
  const [activeTabKey, setActiveTabKey] = React.useState('tab-1'); // TODO do we need to externalize this for manipulation
  const [workspaceWidth, setWorkspaceWidth] = React.useState('500px'); // TODO do we need to externalize this for manipulation

  const onRequestSizeChange = (size) => {
    console.log('onRequestSizeChange', size);
  };

  const onRequestClose = () => {
    console.log('onRequestClose');
  };

  return (
    <div style={{ width: workspaceWidth }}>
       <button onClick={() => setWorkspaceWidth('1000px')}>Large</button>
       <button onClick={() => setWorkspaceWidth('500px')}>Small</button>
       <button onClick={() => setWorkspaceWidth('250px')}>Tiny</button>
      <Workspace
        id="test-id"
        activeItemKey={activeTabKey}
        ariaLabel="work space"
        onRequestActivate={metaData => setActiveTabKey(metaData.key)}
        activeSize="Large"
        sizeOptions={[{
          key: 'Large',
          text: 'Large',
          metaData: {},
        }, {
          key: 'Small',
          text: 'small',
          metaData: {},
        }]}
        onRequestSizeChange={onRequestSizeChange}
        onRequestDismiss={onRequestClose}
      >
        <WorkspaceItem
          itemKey="tab-1"
          label="tab-1"
          metaData={{ key: 'tab-1' }}
          render={() => <Tab1 />}
        />
        <WorkspaceItem
          itemKey="tab-2"
          label="tab-2"
          metaData={{ key: 'tab-2' }}
          render={() => <Tab2 />}
        />
        <WorkspaceItem
          itemKey="tab-3"
          label="tab-3"
          metaData={{ key: 'tab-3' }}
          render={() => <Tab3 />}
        />
        <WorkspaceItem
          itemKey="tab-4"
          label="tab-4"
          metaData={{ key: 'tab-4' }}
          render={() => <Tab4 />}
        />
      </Workspace>
    </div>
  );
};

export default WorkspaceTest;
