import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import ThemeContext from "terra-theme-context";
import ResizeObserver from "resize-observer-polyfill";
import MoreButton from "./_MoreButton";
import TabDropDown from "./_TabDropDown";
import Tab from "./_Tab";
import HiddenTab from "./_HiddenTab";
import styles from "./Tabs.module.scss";

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The label to set on the tablist element.
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * Currently active Tabs.Pane content to be displayed.
   */
  tabData: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The id string to associate to the 'tab'.
       */
      id: PropTypes.string.isRequired,
      /**
       * The id string to associate to the 'tabpanel'.
       */
      associatedPanelId: PropTypes.string.isRequired,
      /**
       * The label to display for the tab.
       */
      label: PropTypes.string.isRequired,
      /**
       * Whether or not the tab is selected.
       */
      isSelected: PropTypes.bool,
      /**
       * The function callback for selection of a tab.
       * Returns the event and metaData e.g. onSelect(event, metaData).
       */
      onSelect: PropTypes.func,
      /**
       * The metaData to return with the onSelect callback.
       */
      metaData: PropTypes.object,
    }),
  ).isRequired,
  activeSize: PropTypes.string,
};

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.dropdownRef = React.createRef();
    this.moreButtonRef = React.createRef();

    this.setIsOpen = this.setIsOpen.bind(this);
    this.resetCache = this.resetCache.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleHiddenBlur = this.handleHiddenBlur.bind(this);
    this.handleHiddenFocus = this.handleHiddenFocus.bind(this);
    this.handleMoreButtonBlur = this.handleMoreButtonBlur.bind(this);
    this.handleMoreButtonSelect = this.handleMoreButtonSelect.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.forceTabVisibility = this.forceTabVisibility.bind(this);
    this.wrapOnSelect = this.wrapOnSelect.bind(this);
    this.wrapOnSelectHidden = this.wrapOnSelectHidden.bind(this);
    this.positionDropDown = this.positionDropDown.bind(this);
    this.state = { tabData: this.props.tabData, visibleT: [], hiddenT: [] };
    this.resetCache();
  }

  componentDidMount() {
    this.resizeObserver = new ResizeObserver(() => {
      if (!this.isCalculating) {
        this.animationFrameID = window.requestAnimationFrame(() => {
          // Resetting the cache so that all elements will be rendered face-up for width calculations
          this.resetCache();
          this.forceUpdate();
        });
      }
    });
    this.resizeObserver.observe(this.containerRef.current);
    this.handleResize();
  }

  componentDidUpdate(prevProps) {
    if (this.isCalculating) {
      this.isCalculating = false;
      this.handleResize(this.contentWidth);
    } else if (this.state.tabData.length !== prevProps.tabData.length) {
      this.resetCache();
      this.forceUpdate();
    }
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameID);
    this.resizeObserver.disconnect(this.containerRef.current);
  }

  handleResize() {
    if (!this.moreButtonRef.current || !this.containerRef.current) {
      return;
    }

    // NOTE: get width from bounding client rect instead of resize observer, zoom throws off safari.
    const { width } =
      this.containerRef.current.parentNode.getBoundingClientRect();

    const moreStyle = window.getComputedStyle(this.moreButtonRef.current, null);
    const moreMarginLeft = parseInt(
      moreStyle.getPropertyValue("margin-left"),
      0
    );
    const moreMarginRight = parseInt(
      moreStyle.getPropertyValue("margin-right"),
      0
    );
    const moreButtonWidth =
      this.moreButtonRef.current.getBoundingClientRect().width +
      moreMarginLeft +
      moreMarginRight;
    const availableWidth = width - moreButtonWidth;

    // Calculate hidden index
    const tabCount = this.state.tabData.length;
    let newHideIndex = tabCount;
    let calcMinWidth = 0;
    let showMoreButton = false;
    for (let i = 0; i < tabCount; i += 1) {
      const tab = this.containerRef.current.children[i];
      const tabStyle = window.getComputedStyle(tab, null);
      const tabMarginLeft = parseFloat(
        tabStyle.getPropertyValue("margin-left")
      );
      const tabMarginRight = parseFloat(
        tabStyle.getPropertyValue("margin-right")
      );
      const tabMinWidth = parseFloat(tabStyle.getPropertyValue("min-width"));

      calcMinWidth += tabMinWidth + tabMarginLeft + tabMarginRight;
      if (
        calcMinWidth > availableWidth &&
        !(i === tabCount - 1 && calcMinWidth <= width)
      ) {
        newHideIndex = i;
        showMoreButton = true;
        break;
      }
    }

    if (
      this.showMoreButton !== showMoreButton ||
      this.hiddenStartIndex !== newHideIndex
    ) {
      this.showMoreButton = showMoreButton;
      this.hiddenStartIndex = newHideIndex;
      this.forceUpdate();
    }
  }

  handleHiddenFocus() {
    this.setIsOpen(true);
  }

  handleHiddenBlur(event) {
    // The check for dropdown.contains(activeElement) is necessary to prevent IE11 from closing dropdown on click of scroll bar in certain contexts.
    if (
      this.dropdownRef.current &&
      this.dropdownRef.current.contains(document.activeElement)
    ) {
      if (this.dropdownRef.current === document.activeElement) {
        event.currentTarget.focus();
      }
      return;
    }
    this.setIsOpen(false);
  }

  handleMoreButtonBlur(event) {
    if (event.currentTarget === document.activeElement) {
      return;
    }
    this.handleHiddenBlur(event);
  }

  handleMoreButtonSelect() {
    this.setIsOpen(true);
  }

  handleOutsideClick(event) {
    if (
      event.type === "mousedown" &&
      (this.moreButtonRef.current === event.currentTarget ||
        this.moreButtonRef.current.contains(event.currentTarget))
    ) {
      return;
    }
    this.setIsOpen(false);
  }

  setIsOpen(value) {
    this.isOpen = value;
    this.forceUpdate();
  }

  resetCache() {
    this.animationFrameID = null;
    this.hiddenStartIndex = -1;
    this.isCalculating = true;
    this.showMoreButton = true;
    this.isOpen = false;
  }

  positionDropDown() {
    if (!this.dropdownRef.current || !this.moreButtonRef.current) {
      return;
    }
    const workspaceStyle = window.getComputedStyle(
      this.containerRef.current.parentNode.parentNode,
      null
    );
    const workspaceLeftBorderWidth = parseInt(
      workspaceStyle.getPropertyValue("border-left-width"),
      10
    );

    const moreRect = this.moreButtonRef.current.getBoundingClientRect();
    const dropdownRect = this.dropdownRef.current.getBoundingClientRect();
    const containerRect = this.containerRef.current.getBoundingClientRect();
    const workspaceRect =
      this.containerRef.current.parentNode.parentNode.getBoundingClientRect();

    // calculate Offset
    const parentOffset = containerRect.left - workspaceRect.left;
    const leftEdge =
      moreRect.left - containerRect.left - workspaceLeftBorderWidth;

    let offset;
    const isRTL =
      document.getElementsByTagName("html")[0].getAttribute("dir") === "rtl";
    if (isRTL) {
      offset = parentOffset + leftEdge;
    } else {
      const widthDelta = moreRect.width - dropdownRect.width;
      offset = parentOffset + leftEdge + widthDelta;
    }

    this.dropdownRef.current.style.left = `${offset}px`;
  }

  forceTabVisibility(currentIndex, targetIndex) {
      // const { activeSize } = this.props;

      // if (activeSize === 'medium') {
        this.state.tabData.splice(targetIndex, 0, currentIndex);
      //   this.state.tabData[3].isSelected = true;
      // }

      // if (activeSize === 'small') {
      //   this.state.tabData.splice(1, 0, selectedTab);
      //   this.state.tabData[1].isSelected = true;
      // }
  }

  wrapOnSelect(onSelect) {
    return (itemKey, metaData) => {
      const activeTabIndex = this.state.tabData.findIndex(
        (tab) => tab.isSelected
      );
      const selectedIndex = this.state.tabData.findIndex(
        (tab) => tab.itemKey === itemKey
      );

      this.state.tabData[activeTabIndex].isSelected = false;
      this.state.tabData[selectedIndex].isSelected = true;

      this.setIsOpen(false);
      onSelect(itemKey, metaData);
    };
  }

  wrapOnSelectHidden(onSelect) {
    return (itemKey, metaData) => {
      const activeTabIndex = this.state.tabData.findIndex(
        (tab) => tab.isSelected,
      );
      const selectedTab = this.state.tabData.find(
        (tab) => tab.itemKey === itemKey,
      );
      const selectedIndex = this.state.tabData.findIndex(
        (tab) => tab.itemKey === itemKey,
      );

      const visibleCount = this.state.visibleT.length - 1;

      this.state.tabData[activeTabIndex].isSelected = false;

      this.state.tabData.splice(selectedIndex, 1);
      this.state.tabData.splice(visibleCount, 0, selectedTab);
      this.state.tabData[visibleCount].isSelected = true;
      console.log(this.state.tabData[visibleCount]);

      if (this.isOpen) {
        onSelect(itemKey, metaData);
      }
      this.setIsOpen(!this.isOpen);
    };
  }

  render() {
    const { tabData } = this.state;
    const { ariaLabel } = this.props;
    const theme = this.context;
    const ids = tabData.map((tab) => tab.id);
    const hiddenIds = [];
    const visibleTabs = [];
    const hiddenTabs = [];
    let isHiddenSelected = false;
    const currentActiveIndex = this.state.tabData.findIndex(
      (tab) => tab.isSelected,
    );


    tabData.forEach((tab, index) => {
      if (index < this.hiddenStartIndex || this.hiddenStartIndex < 0) {
        visibleTabs.push(
          <Tab
            {...tab}
            key={tab.id}
            index={index}
            tabIds={ids}
            onSelect={this.wrapOnSelect(tab.onSelect)}
            zIndex={tab.isSelected ? tabData.length : tabData.length - index}
          />,
        );
      } else {
        hiddenTabs.push(
          <HiddenTab
            {...tab}
            key={tab.id}
            index={index}
            tabIds={ids}
            onSelect={this.wrapOnSelectHidden(tab.onSelect)}
            onFocus={this.handleHiddenFocus}
            onBlur={this.handleHiddenBlur}
          />
        );
        hiddenIds.push(tab.id);

        if (tab.isSelected) {
          isHiddenSelected = true;
        }
      }
      this.state.visibleT = [...visibleTabs];
    });

    if (this.showMoreButton && this.dropdownRef.current) {
      this.positionDropDown();
    }

    let attrs;
    if (this.isCalculating) {
      attrs = {
        "data-tab-is-calculating": "true",
      };
    }

    // if (this.props.activeSize === 'medium' && currentActiveIndex > visibleTabs.length - 1) {
    //   this.forceTabVisibility(currentActiveIndex, visibleTabs.length - 1);
    // }

    return (
      <div
        {...attrs}
        className={cx("tab-container", theme.className)}
        ref={this.containerRef}
        role="tablist"
        aria-label={ariaLabel}
        aria-orientation="horizontal"
        aria-owns={hiddenIds.join(" ")}
      >
        {visibleTabs}
        {this.showMoreButton ? (
          <MoreButton
            label={`${hiddenTabs.length} More`}
            isOpen={this.isOpen}
            hiddenIndex={this.hiddenStartIndex}
            isActive={isHiddenSelected}
            zIndex={tabData.length - this.hiddenStartIndex}
            onBlur={this.handleMoreButtonBlur}
            onSelect={this.handleMoreButtonSelect}
            refCallback={(node) => {
              this.moreButtonRef.current = node;
            }}
            tabIds={ids}
          />
        ) : undefined}
        <TabDropDown
          onFocus={this.handleHiddenFocus}
          onBlur={this.handleHiddenBlur}
          isOpen={this.isOpen}
          onRequestClose={this.handleOutsideClick}
          refCallback={(node) => {
            this.dropdownRef.current = node;
          }}
        >
          {hiddenTabs}
        </TabDropDown>
      </div>
    );
  }
}

Tabs.propTypes = propTypes;
Tabs.contextType = ThemeContext;

export default Tabs;