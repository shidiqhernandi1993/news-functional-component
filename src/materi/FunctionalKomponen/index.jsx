import React from "react";
import FunctionalComponent from "./FunctionalComponent";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";


export default function FunctionalKomponen() {
  const data = [
    {
      title: "inventore! Perspiciatis, quidem harum!",
      subTitle:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor.",
      decription:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
      cardLink: "https://www.google.com.hk",
    },
    {
      title: "inventore! Perspiciatis, quidem harum!",
      subTitle:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor.",
      decription:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
      cardLink: "https://www.google.com.hk",
    },
    {
      title: "inventore! Perspiciatis, quidem harum!",
      subTitle:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor.",
      decription:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
      cardLink: "https://www.google.com.hk",
    },
    {
      title: "inventore! Perspiciatis, quidem harum!",
      subTitle:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor.",
      decription:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
      cardLink: "https://www.google.com.hk",
    },
    {
      title: "inventore! Perspiciatis, quidem harum!",
      subTitle:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor.",
      decription:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
      cardLink: "https://www.google.com.hk",
    },
    {
      title: "inventore! Perspiciatis, quidem harum!",
      subTitle:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor.",
      decription:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
      cardLink: "https://www.google.com.hk",
    },
    {
      title: "inventore! Perspiciatis, quidem harum!",
      subTitle:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor.",
      decription:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
      cardLink: "https://www.google.com.hk",
    },
    {
      title: "inventore! Perspiciatis, quidem harum!",
      subTitle:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor.",
      decription:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
      cardLink: "https://www.google.com.hk",
    },
    {
      title: "inventore! Perspiciatis, quidem harum!",
      subTitle:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor.",
      decription:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
      cardLink: "https://www.google.com.hk",
    },
    {
      title: "inventore! Perspiciatis, quidem harum!",
      subTitle:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor.",
      decription:
        "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit  amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet",
      cardLink: "https://www.google.com.hk",
    },
  ];
  return (
    <>
      <FunctionalComponent brand={"NEWS ONLINE"} />
      <div className="container mt-5">
        <div className="row">
          {data.map((item, i) => (
            <Card
              title={item.title}
              subtitle={item.subTitle}
              cardLink={item.cardLink}
              decription={item.decription}
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  );
}
