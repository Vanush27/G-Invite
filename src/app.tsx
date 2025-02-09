import { useState, useCallback } from "react";
import { WelcomeScreen } from "./modules/welcome-screen";

import { MainScreen } from "@/modules/main-screen";
import { Vignette } from "./components";
import AudioPlayer from "./components/audio/AudioPlayer";

export const App = () => {
  const [isInvitationOpen, setInvitationOpen] = useState(false);

  // const [isOpened, setIsOpened] = useState(false);
  const [isLoadEnd, setIsLoadEnd] = useState(false);
  const onOpen = useCallback(() => setInvitationOpen(true), []);

  return (
    <>
      {isInvitationOpen ? (
        <div style={{ width: "100%" }}>
          {/* <PlaySong isInvitationOpen={isInvitationOpen} /> */}
          {/* <WeddingInvitation /> */}

          <AudioPlayer isInvitationOpen={isInvitationOpen} />
          {isLoadEnd && <MainScreen />}
        </div>
      ) : (
        <>
          <Vignette onLoadEnd={() => setIsLoadEnd(true)} />
          <WelcomeScreen
            onOpen={onOpen}
            // setInvitationOpen={setInvitationOpen}
          />
        </>
        // <FrontPageInvitation setInvitationOpen={setInvitationOpen} />
      )}

      {/* {!isLoadEnd && <Vignette onLoadEnd={() => setIsLoadEnd(true)} />} */}
      {/* {!isOpened && <WelcomeScreen onOpen={onOpen} />} */}
      {/* {isLoadEnd && <MainScreen isOpened={isOpened} />} */}
    </>
  );
};
