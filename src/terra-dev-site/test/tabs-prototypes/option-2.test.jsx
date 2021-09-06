import React, { useState, useRef } from "react";
import classNames from "classnames/bind";
import Workspace, { WorkspaceItem } from "../../../workspace-2c";
import ActiveMainPageContext from "../../../application-container/private/active-main-page/ActiveMainPageContext";
import Tab1 from "./option-2C-tabs/Tab1";
import Tab2 from "./option-2C-tabs/Tab2";
import Tab3 from "./option-2C-tabs/Tab3";
import Tab4 from "./option-2C-tabs/Tab4";
import Tab5 from "./option-2C-tabs/Tab5";
import Tab6 from "./option-2C-tabs/Tab6";
import ButtonGroup from "terra-button-group";
import Button from "terra-button/lib/Button";
import IconEdit from "terra-icon/lib/icon/IconLeft";
import styles from "./Buttongroup.module.scss";

const cx = classNames.bind(styles);

const sizeMap = {
  small: "320px",
  medium: "450px",
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
  const [selectedViewport, setSelectedViewport] = useState("");

  const onRequestSizeChange = (size) => {
    setSelectedViewport(`Viewport size changed to: ${size}`);
    setWorkspaceSize(size);
  };

  const onRequestClose = () => {
    console.log("onRequestClose"); // eslint-disable-line no-console
  };

  const largeBtn = useRef(null);
  const mediumBtn = useRef(null);
  const smallBtn = useRef(null);

  const handleKeyDown = (e, ref) => {
    const next = ref.current.nextSibling;
    const prev = ref.current.previousSibling;
    if (e.key === "ArrowRight") {
      // eslint-disable-next-line no-unused-expressions
      next ? next.focus() : ref.current.parentNode.firstChild.focus();
    }
    if (e.key === "ArrowLeft") {
      // eslint-disable-next-line no-unused-expressions
      prev ? prev.focus() : ref.current.parentNode.lastChild.focus();
    }
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
      <h1 style={{ fontSize: "26px", margin: "2rem 0 1.5rem 0" }}>
        Option 2 Prototype
      </h1>
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
          aria-activedescendant={workspaceSize}
        >
          <button
            type="button"
            className={cx("button-group-button")}
            style={{ fontSize: "14px", cursor: "pointer", minHeight: "30px" }}
            ref={largeBtn}
            tabIndex={focus ? 0 : -1}
            key="large"
            onClick={() => onRequestSizeChange("large")}
            id="large"
            aria-pressed={workspaceSize === "large" ? true : false}
            onKeyDown={(e) => handleKeyDown(e, largeBtn)}
          >
            Large
          </button>
          <button
            type="button"
            className={cx("button-group-button")}
            style={{ fontSize: "14px", cursor: "pointer", minHeight: "30px" }}
            ref={mediumBtn}
            tabIndex={focus ? 0 : -1}
            key="medium"
            onClick={() => onRequestSizeChange("medium")}
            id="medium"
            aria-pressed={workspaceSize === "medium" ? true : false}
            onKeyDown={(e) => handleKeyDown(e, mediumBtn)}
          >
            Medium
          </button>
          <button
            type="button"
            className={cx("button-group-button")}
            style={{ fontSize: "14px", cursor: "pointer", minHeight: "30px" }}
            ref={smallBtn}
            tabIndex={focus ? 0 : -1}
            key="small"
            onClick={() => onRequestSizeChange("small")}
            id="small"
            aria-pressed={workspaceSize === "small" ? true : false}
            onKeyDown={(e) => handleKeyDown(e, smallBtn)}
          >
            Small
          </button>
        </ButtonGroup>
      </div>
      <div
        role="group"
        tabIndex={-1}
        style={{ opacity: 0, position: "absolute" }}
      >
        <span aria-live="assertive" aria-atomic="true">
          <span>{selectedViewport}</span>
        </span>
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
              label="Sleep"
              render={() => <Tab1 />}
            />
            <WorkspaceItem
              itemKey="tab-2"
              label="Steps"
              render={() => <Tab2 />}
            />
            <WorkspaceItem
              itemKey="tab-3"
              label="Cardio"
              render={() => <Tab3 />}
            />
            <WorkspaceItem
              itemKey="tab-4"
              label="Weight"
              render={() => <Tab4 />}
            />
            <WorkspaceItem
              itemKey="tab-5"
              label="Water"
              render={() => <Tab5 />}
            />
            <WorkspaceItem
              itemKey="tab-6"
              label="Nutrition"
              render={() => <Tab6 />}
            />
          </Workspace>
        </div>
      </ActiveMainPageContext.Provider>
    </div>
  );
};

export default WorkspaceTest;
