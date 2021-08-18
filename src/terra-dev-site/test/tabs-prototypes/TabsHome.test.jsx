import React from "react";
import IconRight from "terra-icon/lib/icon/IconRight";

const sizeMap = {
  small: "320px",
  medium: "500px",
  large: "1000px",
};

const WorkspaceTest = () => (
  <div>
    <div
      style={{
        background: "linear-gradient(45deg,#275696,#3a63c8)",
        minHeight: "20vh",
        padding: "2rem",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "42px" }}>Tabs Prototypes</h1>
    </div>
    <div
      style={{
        background: "#f6faff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          minWidth: "26rem",
          background: "white",
          borderRadius: "1rem",
          padding: "1rem 2rem",
          boxShadow: "0.5rem 0.5rem 1.875rem 0.188rem rgb(28 31 33 / 12%)",
          marginBottom: "2rem",
        }}
      >
        <a href="./option-1" style={{ color: "#275696", fontSize: "16px" }}>
          Option 1 Prototype <IconRight />{" "}
        </a>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          minWidth: "26rem",
          background: "white",
          borderRadius: "1rem",
          padding: "1rem 2rem",
          boxShadow: "0.5rem 0.5rem 1.875rem 0.188rem rgb(28 31 33 / 12%)",
          marginBottom: "2rem",
        }}
      >
        <a href="./option-2" style={{ color: "#275696", fontSize: "16px" }}>
          Option 2 Prototype <IconRight />{" "}
        </a>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          minWidth: "26rem",
          background: "white",
          borderRadius: "1rem",
          padding: "1rem 2rem",
          boxShadow: "0.5rem 0.5rem 1.875rem 0.188rem rgb(28 31 33 / 12%)",
          marginBottom: "2rem",
        }}
      >
        <a href="./option-3" style={{ color: "#275696", fontSize: "16px" }}>
          Option 3 Prototype <IconRight />{" "}
        </a>
      </div>
    </div>
  </div>
);

export default WorkspaceTest;
