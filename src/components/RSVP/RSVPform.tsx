import rsvpImage from "@/assets/icons/rsvp.svg";

import styles from "./RSVPform.module.css";
import InviteForm from "../form/InviteForm";

const RSVPFormt = () => {
  return (
    <div className={styles.container}>
      <img src={rsvpImage} alt="rsvpImage" className={styles.images} />
      <div>
        <p className={styles.text}>
          Խնդրում ենք հաստատել Ձեր ներկայությունը մինչև օգոստոսի 18-ը
        </p>
      </div>
      <InviteForm />
    </div>
  );
};

export default RSVPFormt;
