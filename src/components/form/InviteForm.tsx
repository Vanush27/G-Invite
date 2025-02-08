import * as React from "react";

import { addDoc, collection, doc, setDoc } from "firebase/firestore";

import { db } from "../../firebase.config";

import styles from "./InviteForm.module.css";

const InviteForm: React.FC = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [nameValue, setNameValue] = React.useState("");

  const [showSlider, setShowSlider] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSlider(false);

    try {
      const formData = {
        inputValue,
        nameValue,

        createdAt: new Date(),
      };

      const docRef = await addDoc(collection(db, "users"), formData);
      console.log("Document written with ID: ", docRef.id);

      setInputValue("");
      setNameValue("");

      alert("Data saved successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error saving data. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.containerForm}>
        <input
          placeholder="Անուն Ազգանուն"
          type="text"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          className={styles.input}
          required
        />

        <input
          placeholder="Երգի անունը կամ հղումը"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={styles.input}
          required
        />
      </div>

      <div className={styles.buttonWrapper}>
        <button type="submit" className={styles.button}>
          Ուղարկել
        </button>
      </div>
    </form>
  );
};

export default InviteForm;
