import Timeline from "@/ui-kit/Timeline/Timeline";
import time from "@/assets/icons/timeforyou.svg";

import styles from "./Programmer.module.css";

import { useState } from "react";

import RSVPFormt from "../RSVP/RSVPform";
import CountdownFlowerHexagon from "@/ui-kit/CircleTimerCountdown/Test";
import CountdownImageTimer from "@/ui-kit/CircleTimerCountdown/Test";

const marks = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" },
];
function valuetext(value: number) {
  return `${value}`;
}

const Programmer = () => {
  // numberValue: radioValue === "придете" ? numberValue : null,

  const [radioValue, setRadioValue] = useState<any>();
  const [showSlider, setShowSlider] = useState<any>();
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value);
    if (event.target.value === "придете") {
      setShowSlider(true); // Show slider when "придете" is selected
    } else {
      setShowSlider(false); // Hide slider otherwise
    }
  };

  return (
    <div className={styles.container}>
      <img src={time} alt="time for you" className={styles.programmerImg} />
      <Timeline />
      <RSVPFormt />

      <CountdownImageTimer
        daysDuration={7}
        remainingTime={5 * 24 * 60 * 60}
        imageUrl={time}
      />
      {/* <div>
        <label>
          <input
            type="radio"
            name="option"
            value="придете"
            checked={radioValue === "придете"}
            onChange={handleRadioChange}
            required
          />
          придете
        </label>
        <label>
          <input
            type="radio"
            name="option"
            value="option2"
            checked={radioValue === "option2"}
            onChange={handleRadioChange}
            required
          />
          не придете
        </label>
      </div>
      {showSlider && (
        <div>
          <Box sx={{ width: 300, marginTop: 0 }}>
            <Slider
              aria-label="Restricted values"
              defaultValue={5}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              marks={marks}
              min={0}
              step={1}
              max={10}
              // onChange={(e, value) => setNumberValue(String(value))}
            />
          </Box>
        </div>
      )} */}
    </div>
  );
};

export default Programmer;
