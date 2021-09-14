// @flow strict
import React from "react";
import styles from "./Content.module.scss";
import { useSiteMetadata } from "../../../hooks";

type Props = {
  body: string,
  title: string,
};

const Content = ({ body, title, image, date }: Props) => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles["content"]}>
      <div className={styles["content__header"]}>
        <h1 className={styles["content__title"]}>{title}</h1>
        <div className={styles["content__author"]}>
          {author.name}
          <span className={styles["content__bar"]} />
          {new Date(date).toLocaleDateString("ko-KR", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
      </div>
      <div className={styles["content__adfit"]}>
        <ins
          key={"content_adfit"}
          className="kakao_ad_area"
          style={{ display: "none" }}
          data-ad-unit="DAN-Fieee4hRo1VGYbEx"
          data-ad-width="728"
          data-ad-height="90"
        ></ins>
      </div>
      <div
        className={styles["content__body"]}
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
};

export default Content;
