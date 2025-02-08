import * as React from "react";
import cn from "classnames";
import { createBlock } from "@/utils";
import { Timer } from "@/components";
import "./intro.scss";
import CircleTimerCountdown from "@/ui-kit/CircleTimerCountdown/CountdownCircleTimer";

const block = createBlock("intro");

const Intro = () => (
  <div className={block.block()}>
    <div className={block.element("content")}>
      <div
      // className={block.element("names")}
      >
        {/* <span className={block.element("name")}>G</span> */}
        <span>G</span>
        <span
        // className={cn(
        //   block.element("name"),
        //   block.modifyElement("name", "and")
        // )}
        >
          &
        </span>
        <span>M</span>
      </div>
      <div className={block.element("invitation")}>
        <p>{"Մենք հրավիրում ենք ձեզ մեր հարսանիքին"}</p>
        {/* Приглашаем вас\nна нашу свадьбу' */}
        <p>
          <span className="number">{"25 օգոստոս\n 2025"}</span>
        </p>
      </div>
    </div>
    <div className={block.element("timer-wrapper")}>
      <div>Մինչ հարսանիքը մնացել է:</div>
      <Timer />
      <CircleTimerCountdown />
    </div>
  </div>
);

export const MemoizedIntro = React.memo(Intro);
