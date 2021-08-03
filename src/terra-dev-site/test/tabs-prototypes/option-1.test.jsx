import React from "react";
import Workspace, { WorkspaceItem } from "../../../workspace";
import ActiveMainPageContext from "../../../application-container/private/active-main-page/ActiveMainPageContext";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import Tab5 from "./Tab5";
import Tab6 from "./Tab6";
import ButtonGroup from "terra-button-group";
import Button from "terra-button/lib/Button";
import IconEdit from "terra-icon/lib/icon/IconLeft";

const sizeMap = {
  small: "320px",
  medium: "500px",
  large: "1000px",
};

const WorkspaceTest = () => {
  const [activeItemKey, setActiveItemKey] = React.useState("tab-1");
  const [workspaceSize, setWorkspaceSize] = React.useState("large");
  const activeMainPageRef = React.useRef({
    pageKey: "page-1",
    pageLabel: "Test Page",
    pageMetaData: {
      data: "data here",
    },
  });

  const onRequestSizeChange = (size) => {
    setWorkspaceSize(size);
  };

  const onRequestClose = () => {
    console.log("onRequestClose"); // eslint-disable-line no-console
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(248,247,248,1) 0%, rgba(222,221,222,1) 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1 style={{fontSize: "26px", margin: "2rem 0 1.5rem 0"}} >Option 1 Prototype</h1>
      <Button
        href="./tabs-home"
        text="Back"
        icon={<IconEdit />}
        variant="ghost"
        style={{ position: "fixed", top: "32px", left: "32px" }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "32px",
          padding: "12px",
          borderRadius: "8px",
          boxShadow: "inset 0px 1px 2px 0px rgba(0,0,0,0.25)",
          background: "#ebeaeb",
        }}
      >
        <span
          id="buttongroupLabel"
          style={{ textAlign: "left", marginRight: "12px", fontWeight: "bold" }}
        >
          Adjust Viewport Size
        </span>
        <ButtonGroup
          role="group"
          aria-labelledby="buttongroupLabel"
          id="controlled-button-group"
          selectedKeys={[workspaceSize]}
          // eslint-disable-next-line react/jsx-indent-props
        >
          <ButtonGroup.Button
            text="Large"
            key="large"
            onClick={() => onRequestSizeChange("large")}
          />
          <ButtonGroup.Button
            text="Medium"
            key="medium"
            onClick={() => onRequestSizeChange("medium")}
          />
          <ButtonGroup.Button
            text="Small"
            key="small"
            onClick={() => onRequestSizeChange("small")}
          />
        </ButtonGroup>
      </div>
      <ActiveMainPageContext.Provider value={activeMainPageRef.current}>
        <div
          style={{
            height: "70vh",
            width: sizeMap[workspaceSize],
            boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.2)",
          }} // eslint-disable-line react/forbid-dom-props
        >
          <Workspace
            id="overlay-test-id"
            dismissButtonIsVisible
            isPresentedAsOverlay
            activeItemKey={activeItemKey}
            onRequestActivate={(key) => setActiveItemKey(key)}
            activeSize={workspaceSize}
            sizeOptions={[
              {
                key: "small",
                text: "Small",
              },
              {
                key: "medium",
                text: "Medium",
              },
              {
                key: "large",
                text: "Large",
              },
            ]}
            onRequestSizeChange={onRequestSizeChange}
            onRequestDismiss={onRequestClose}
          >
            <WorkspaceItem
              itemKey="tab-1"
              label="Continents"
              render={() => <Tab1 />}
            />
            <WorkspaceItem
              itemKey="tab-2"
              label="Countries"
              render={() => <Tab2 />}
            />
            <WorkspaceItem
              itemKey="tab-3"
              label="Cities"
              render={() => <Tab3 />}
            />
            <WorkspaceItem
              itemKey="tab-4"
              label="Landmarks"
              render={() => <Tab4 />}
            />
            <WorkspaceItem
              itemKey="tab-5"
              label="Languages"
              render={() => <Tab5 />}
            />
            <WorkspaceItem
              itemKey="tab-6"
              label="Currencies"
              render={() => <Tab6 />}
            />
          </Workspace>
        </div>
      </ActiveMainPageContext.Provider>
    </div>
  );
};

export default WorkspaceTest;
