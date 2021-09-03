import React from "react";
import classNames from "classnames/bind";

import styles from "./StyledContent.module.scss";
import activity from "./img/activity.png";
import table from "./img/table.png";
import tracking from "./img/tracking.png";
import targetIcon from "./img/ic-target.png";

const cx = classNames.bind(styles);

const StyledContent = ({ tab }) => {
  const tabData = {
    Sleep: {
      title: "Sleep",
      img: "tracking",
      target: "8.50 hours per night",
      entriesTitle: "Night Entries",
      entries: [
        {
          title: "6.50 hours",
          date: "Sunday, October 9, 2021",
        },
        {
          title: "8.50 hours",
          date: "Saturday, October 8, 2021",
        },
        {
          title: "7.00 hours",
          date: "Friday, October 7, 2021",
        },
        {
          title: "5.25 hours",
          date: "Thursday, October 6, 2021",
        },
        {
          title: "8.00 hours",
          date: "Wednesday, October 5, 2021",
        },
        {
          title: "7.75 hours",
          date: "Tuesday, October 4, 2021",
        },
      ],
    },
    Steps: {
      title: "Steps",
      img: "activity",
      target: "5000 steps per day",
      entriesTitle: "Daily Entries",
      entries: [
        {
          title: "6,420 steps",
          date: "Sunday, October 9, 2021",
        },
        {
          title: "3,210 steps",
          date: "Saturday, October 8, 2021",
        },
        {
          title: "7,302 steps",
          date: "Friday, October 7, 2021",
        },
        {
          title: "5,010 steps",
          date: "Thursday, October 6, 2021",
        },
        {
          title: "8,250 steps",
          date: "Wednesday, October 5, 2021",
        },
        {
          title: "1,200 steps",
          date: "Tuesday, October 4, 2021",
        },
      ],
    },
    Cardio: {
      title: "Cardio",
      img: "activity",
      target: "30 minutes per day",
      entriesTitle: "Daily Entries",
      entries: [
        {
          title: "64 minutes",
          date: "Sunday, October 9, 2021",
        },
        {
          title: "32 minutes",
          date: "Saturday, October 8, 2021",
        },
        {
          title: "73 minutes",
          date: "Friday, October 7, 2021",
        },
        {
          title: "50 minutes",
          date: "Thursday, October 6, 2021",
        },
        {
          title: "82 minutes",
          date: "Wednesday, October 5, 2021",
        },
        {
          title: "12 minutes",
          date: "Tuesday, October 4, 2021",
        },
      ],
    },
    Weight: {
      title: "Weight",
      img: "table",
      target: "150 pounds",
      entriesTitle: "Daily Entries",
      entries: [
        {
          title: "155.00 pounds",
          date: "Sunday, October 9, 2021",
        },
        {
          title: "155.50 pounds",
          date: "Saturday, October 8, 2021",
        },
        {
          title: "156.50 pounds",
          date: "Friday, October 7, 2021",
        },
        {
          title: "158.50 pounds",
          date: "Thursday, October 6, 2021",
        },
        {
          title: "157.25 pounds",
          date: "Wednesday, October 5, 2021",
        },
        {
          title: "157.00 pounds",
          date: "Tuesday, October 4, 2021",
        },
      ],
    },
    Water: {
      title: "Water",
      img: "tracking",
      target: "100 ounces per day",
      entriesTitle: "Daily Entries",
      entries: [
        {
          title: "64 ounces",
          date: "Sunday, October 9, 2021",
        },
        {
          title: "32 ounces",
          date: "Saturday, October 8, 2021",
        },
        {
          title: "73 ounces",
          date: "Friday, October 7, 2021",
        },
        {
          title: "50 ounces",
          date: "Thursday, October 6, 2021",
        },
        {
          title: "82 ounces",
          date: "Wednesday, October 5, 2021",
        },
        {
          title: "120 ounces",
          date: "Tuesday, October 4, 2021",
        },
      ],
    },
    Nutrition: {
      title: "Nutrition",
      img: "table",
      target: "2,000 calories per day",
      entriesTitle: "Daily Entries",
      entries: [
        {
          title: "2,200 calories",
          date: "Sunday, October 9, 2021",
        },
        {
          title: "1,290 calories",
          date: "Saturday, October 8, 2021",
        },
        {
          title: "2,301 calories",
          date: "Friday, October 7, 2021",
        },
        {
          title: "3,671 calories",
          date: "Thursday, October 6, 2021",
        },
        {
          title: "2,809 calories",
          date: "Wednesday, October 5, 2021",
        },
        {
          title: "1,200 calories",
          date: "Tuesday, October 4, 2021",
        },
      ],
    },
  };

  const tabImg =
    tabData[tab].img === "activity"
      ? activity
      : tabData[tab].img === "tracking"
      ? tracking
      : table;

  return (
    <main className={cx("main")}>
      <div className={cx("hero")}>
        <img src={tabImg} alt="decorative" />
      </div>
      <section className={cx("target")}>
        <div>
          <h3>Target</h3>
          <p>{tabData[tab].target}</p>
        </div>
        <div>
          <img src={targetIcon} alt="target icon" />
        </div>
      </section>
      <section className={cx("entries")}>
        <h3>{tabData[tab].entriesTitle}</h3>
        <ul>
          {tabData[tab].entries.map((entry) => (
            <li>
              <h4>{entry.title}</h4>
              <p>{entry.date}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default StyledContent;
