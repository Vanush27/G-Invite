import { useState } from "react";
import ReactHowler from "react-howler";
// import VolumeUpIcon from "@mui/icons-material/VolumeUp";
// import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import audioSrc from "@/assets/audio/the-way-you-look-at-me.mp3"; // Import audio source
import styles from "./AudioPlayer.module.css";

import { motion } from "framer-motion";
import { PlayCircle, PauseCircle } from "lucide-react";

const AudioPlayer = ({ isOpened }: any) => {
  const [isPlaying, setIsPlaying] = useState(isOpened);

  return (
    <div className={styles.container}>
      {/* Аудиоплеер */}
      <ReactHowler
        src={audioSrc}
        playing={isPlaying}
        loop={true}
        html5={true}
      />

      {/* Кнопка Play/Pause */}
      <motion.button
        className={styles.button}
        onClick={() => setIsPlaying(!isPlaying)}
        animate={{ rotate: isPlaying ? 720 : 0 }}
        transition={{
          duration: 4,
          repeat: isPlaying ? Infinity : 0,
          ease: "linear",
        }}
      >
        {isPlaying ? (
          <PauseCircle size={60} className={styles.icon} />
        ) : (
          <PlayCircle size={60} className={styles.icon} />
        )}
      </motion.button>
    </div>
  );
};

export default AudioPlayer;
