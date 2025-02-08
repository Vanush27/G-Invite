import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "./CircleTimerCountdown.module.css";
import { daySeconds, hourSeconds, minuteSeconds } from "@/constants";

const weddingDate = Math.floor(
  new Date("2025-08-25T17:00:00")?.getTime() / 1000
);

const renderTime = (dimension: string, time: number) => {
  return (
    <div className={styles.timerBox}>
      <div className={styles.time}>{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeMinutes = (time: number) =>
  ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time: number) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time: number) => (time / daySeconds) | 0;

const CircleTimerCountdown: React.FC = () => {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = weddingDate; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  const onComplete = (totalElapsedTime: any) => ({
    shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
  });

  return (
    <div className={styles.countdown_circle_timer}>
      <CountdownCircleTimer
        // {...timerProps}
        colors="#e60003"
        isPlaying
        duration={daysDuration}
        size={100}
        strokeWidth={0}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("օր", getTimeDays(daysDuration - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        // {...timerProps}
        colors="#010290"
        duration={daySeconds}
        size={90}
        isPlaying
        strokeWidth={7}
        // strokeWidth={0}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        // {...timerProps}
        strokeWidth={7}
        colors="#ff7c00"
        size={110}
        isPlaying
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
    </div>
  );
};

export default CircleTimerCountdown;
