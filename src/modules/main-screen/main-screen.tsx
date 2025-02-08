import * as React from "react";
import cn from "classnames";
import { createBlock } from "@/utils";
// import { Timing } from "@/modules/timing";
import { Intro } from "@/components";
import "./main-screen.scss";

import AudioPlayer from "@/components/audio/AudioPlayer";
import ChurchPage from "@/components/event-details/ChurchPage";
import HallPage from "@/components/event-details/HallPage";

import locationfor from "@/assets/icons/locationfor.svg";
import location from "@/assets/icons/location.svg";
import Programmer from "@/components/programmer/Programmer";

const block = createBlock("main-screen");

const MainScreen = ({ isOpened }: { isOpened: boolean }) => (
  <div className={cn(block.block(), block.modifyBlock({ open: isOpened }))}>
    <AudioPlayer isOpened={isOpened} />
    <Intro />

    <div className={block.element("content")}>
      <img src={locationfor} alt="My SVG" className={block.element("image")} />
      <img
        src={location}
        alt="location"
        width={50}
        height={70}
        className={block.element("location_icon")}
      />

      <ChurchPage />
      <HallPage />
      <Programmer />
    </div>
    {/* <div className={block.element("content")}></div> */}
  </div>
);

export const MemoizedMainScreen = React.memo(MainScreen);
