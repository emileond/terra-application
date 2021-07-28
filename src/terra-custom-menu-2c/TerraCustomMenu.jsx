import React from "react";
import Button from "terra-button";
import PropTypes from "prop-types";
import Menu from "terra-menu";
import classNames from "classnames/bind";
import MoreButton from "../workspace-2c/subcomponents/_MoreButton";
import IconCaretDown from "terra-icon/lib/icon/IconCaretDown";

const styles = {};

const cx = classNames.bind(styles);

const buttonAllTabsStyle = {
  height: "34px",
  border: "1px solid #868a8c",
  // borderTopLeftRadius: "3px",
  minWidth: "87px",
  backgroundImage: "linear-gradient(to bottom, #fff, #dedfe0)",
  cursor: "pointer",
};

const menuWrapperContainer = {
  position: "absolute",
  zIndex: "100",
};

const propTypes = {
  isArrowDisplayed: PropTypes.bool,
  contentWidth: PropTypes.string,
  boundingRef: PropTypes.func,
};

class TerraCustomMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.handleToggle1OnClick = this.handleToggle1OnClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.handleCloseOnClick = this.handleCloseOnClick.bind(this);
    this.state = {
      open: false,
      toggle1Selected: false,
      toggle2Selected: false,
      groupSelectedIndex: undefined,
      actionClickCount: 0,
      itemkey: "",
      refElem: null,
    };
    this.menuItemOptionRef = React.createRef();
    this.totalTabs = this.props.tabs.length;
    this.attributes = { ["aria-label"]: "" };
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose(itemKey) {
    this.setState({ open: false });
    if (typeof itemKey === "string") {
      this.props.ariaLiveOptions(itemKey);
    }
  }

  handleCloseOnClick(event) {
    event.preventDefault();
    this.handleRequestClose();
  }

  handleToggle1OnClick(onSelect, itemKey) {
    this.setState({ toggle1Selected: false });
    this.setState((prevState) => ({
      toggle1Selected: !prevState.toggle1Selected,
    }));
    onSelect(itemKey);
    if (this.menuItemOptionRef.current) {
      this.props.tabSlide(itemKey, "hiddenTab");
    }
    this.handleRequestClose(itemKey);
  }

  handleOnChange(event, index) {
    this.setState({ groupSelectedIndex: index });
  }

  handleAction(event) {
    event.preventDefault();
    const newState = this.state;
    newState.actionClickCount += 1;
    this.setState(newState);
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  render() {
    return (
      <div style={menuWrapperContainer}>
        <div className={cx("menu-wrapper")} ref={this.setButtonNode}>
          <Menu
            isOpen={this.state.open}
            targetRef={this.getButtonNode}
            onRequestClose={this.handleRequestClose}
            contentWidth="auto"
            isArrowDisplayed={this.props.isArrowDisplayed}
            boundingRef={this.props.boundingRef}
            headerTitle="All tabs"
          >
            <Menu.ItemGroup
              key="Group"
              onChange={this.handleOnChange}
              ref={this.menuOptionRef}
            >
              {this.props.tabs.map((tab, index) => {
                return (
                  <Menu.Item
                    {...{
                      ["aria-label"]: `${tab.label}, option ${index + 1} of ${
                        this.totalTabs
                      }`,
                    }}
                    text={tab.label}
                    key={tab.itemKey}
                    isSelected={
                      this.props.tabActiveKey
                        ? this.props.tabActiveKey === tab.itemKey
                        : this.state.groupSelectedIndex === index
                    }
                    onClick={() => {
                      this.handleToggle1OnClick(tab.onSelect, tab.itemKey);
                    }}
                    ref={this.menuItemOptionRef}
                  />
                );
              })}
            </Menu.ItemGroup>
          </Menu>
          <button
            onClick={this.handleButtonClick}
            aria-haspopup="menu"
            aria-expanded={false}
            id="button-all-tabs"
            style={buttonAllTabsStyle}
          >
            All tabs <IconCaretDown />
          </button>
        </div>
        <br />
      </div>
    );
  }
}

TerraCustomMenu.propTypes = propTypes;

export default TerraCustomMenu;
