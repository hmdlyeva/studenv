"use client"
import React from "react";
import successIcon from "@/public/images/icons/successIcon.svg";
import Image from "next/image";
import styles from "./style.module.scss";
import { urbanist } from "@/data/font";
import Button from "@/components/ui/button";
import { useStore } from "@/hooks/store/store";

const Success = () => {
  const { consultationSucces } = useStore();
  return (
    <section className={`${urbanist.className} ${styles["success"]}`}>
      <div className={styles["message__content"]}>
        <Image src={successIcon} alt="success icon" />
        <h6 className={styles["message__content--title"]}>
          {consultationSucces
            ? "Thank you for booking your consultation!"
            : "Thank you for reaching out!"}
        </h6>

        <p
          className={`${styles["message__content--description"]} ${urbanist.className}`}
        >
          {consultationSucces
            ? "We've received your request and will be in touch soon to confirm the details."
            : "We've received your message and will get back to you shortly."}
        </p>

        <Button path={"/"} variant="primary" text={"THANKS"} />
      </div>
    </section>
  );
};

export default Success;
