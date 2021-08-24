import React, { useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import ThemeContext from "terra-theme-context";
import { KEY_SPACE, KEY_RETURN } from "keycode-js";
import {
  enableFocusStyles,
  disableFocusStyles,
  handleArrows,
} from "./_TabUtils";

import styles from "./Tab.module.scss";

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The id of the tab to be used in mapping.
   */
  id: PropTypes.string.isRequired,
  /**
   * The id of the tab pane element associated to this tab.
   */
  associatedPanelId: PropTypes.string.isRequired,
  /**
   * Index value to use for navigation.
   */
  index: PropTypes.number.isRequired,
  /**
   * Indicates if the tab is currently selected.
   */
  isSelected: PropTypes.bool,
  /**
   * Text to be displayed on the tab.
   */
  label: PropTypes.string.isRequired,
  /**
   * Callback function triggering on selection. onSelect(itemKey, metaData)
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * Identifier for the workspace item represented by the Tab. Returned with onSelect.
   */
  itemKey: PropTypes.string,
  /**
   * Data for the workspace item represented by the Tab. Returned with onSelect.
   */
  metaData: PropTypes.object,
  /**
   * Array of id strings,
   */
  tabIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * The z-index style to apply to the tab based upon order and state.
   */
  zIndex: PropTypes.number,
};

const defaultProps = {
  isSelected: false,
};

const Tab = ({
  id,
  associatedPanelId,
  itemKey,
  index,
  isSelected,
  label,
  metaData,
  onSelect,
  tabIds,
  zIndex,
  tabSlide,
}) => {
  const attributes = {};
  const theme = React.useContext(ThemeContext);
  const tabClassNames = cx(
    "tab",
    "tabs-new-styles",
    { "is-active": isSelected },
    theme.className,
    id
  );
  const tabSlideRef = useRef(null);
  function onKeyDown(event) {
    const keyCode = event.nativeEvent.keyCode;
    const idLastElement = event.target.id.split("-").pop();
    if (keyCode === KEY_RETURN || keyCode === KEY_SPACE) {
      event.preventDefault();
      event.stopPropagation();
      onSelect(itemKey, metaData);
    } else {
      if (keyCode === 36) {
        tabSlide(
          event.target.parentNode.getElementsByClassName(
            "overlay-test-id-tab-1"
          )[0],
          "tabNormal"
        );
      } else if (keyCode === 35) {
        tabSlide(
          event.target.parentNode.getElementsByClassName(
            "overlay-test-id-tab-6"
          )[0],
          "tabNormal"
        );
      } else if (idLastElement == 6 && keyCode === 39) {
        tabSlide(
          event.target.parentNode.getElementsByClassName(
            "overlay-test-id-tab-1"
          )[0],
          "tabNormal"
        );
      } else if (idLastElement == 1 && keyCode === 37) {
        tabSlide(
          event.target.parentNode.getElementsByClassName(
            "overlay-test-id-tab-6"
          )[0],
          "tabNormal"
        );
      } else if (event.target.nextSibling && keyCode === 39) {
        tabSlide(event.target.nextSibling, "tabNormal");
      } else if (event.target.previousSibling && keyCode === 37) {
        tabSlide(event.target.previousSibling, "tabNormal");
      }
      handleArrows(event, index, tabIds);
    }
  }

  function onClick() {
    onSelect(itemKey, metaData);
    if (tabSlideRef.current) {
      tabSlide(tabSlideRef.current, "tabNormal");
    }
  }

  attributes.tabIndex = isSelected ? 0 : -1;
  attributes.onClick = onClick;
  attributes.onKeyDown = onKeyDown;
  attributes.onBlur = enableFocusStyles;
  attributes.onMouseDown = disableFocusStyles;
  attributes["data-focus-styles-enabled"] = true;
  attributes["aria-selected"] = isSelected;
  attributes.style = { zIndex };

  const tabNumber = id.split("-").pop();

  return (
    <div
      {...attributes}
      id={id}
      aria-controls={associatedPanelId}
      role="tab"
      className={tabClassNames}
      title={label}
      ref={tabSlideRef}
    >
      <div className={cx("inner")}>
        <div className={cx("label")}>{label}</div>
      </div>
    </div>
  );
};

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;
