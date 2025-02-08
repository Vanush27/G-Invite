import rsvpImage from "@/assets/icons/rsvp.svg";

import styles from "./RSVPform.module.css";
import InviteForm from "../form/InviteForm";

const RSVPFormt = () => {
  return (
    <div className={styles.container}>
      <img src={rsvpImage} alt="rsvpImage" className={styles.images} />

      <InviteForm />
      <div>
        <p>Խնդրում ենք հաստատել Ձեր ներկայությունը մինչև օգոստոսի 20-ը</p>
      </div>
      <p> Կկարողանա՞ք ներկա գտնվել միջոցառմանը</p>
      <div>
        <p> Ու՞մ կողմից եք հրավիրված</p>
      </div>
    </div>
  );
};

export default RSVPFormt;
