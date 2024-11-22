import React from "react";
import errorIcon from "@/public/images/icons/errorIcon.svg";
import Image from "next/image";
import styles from "./style.module.scss";
import { urbanist } from "@/data/font";
import Button from "@/components/ui/button";
const Error = () => {
  return (
    <section className={`${urbanist.className} ${styles["success"]}`}>
      <div className={styles["message__content"]}>
        <Image src={errorIcon} alt="success icon" />
        <h6 className={styles["message__content--title"]}>ERROR</h6>
        <p
          className={`${styles["message__content--description"]} ${urbanist.className}`}
        >
          Something went wrong. Please try again.
        </p>

        <Button path={"/"} variant="primary" text={"THANKS"} />
      </div>
    </section>
  );
};

export default Error;
