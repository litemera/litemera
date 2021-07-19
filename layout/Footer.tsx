import React from "react";

import { css } from "styled-jsx/css";

import {
  TITLE,
  FACEBOOK_USERNAME,
  INSTAGRAM_USERNAME,
  TWITTER_USERNAME,
} from "@utils/constants";
import { capitalizeFirstLetter } from "@utils/index";

const style = css`
  .footer {
    margin: 0 auto;
    width: 100vw;
    text-align: center;
    padding: 64px 0;
    background-color: #262626;
  }

  .tos {
    margin-bottom: 8px;
  }

  .tos span {
    cursor: pointer;
    margin: 8px 16px;
    padding: 1px;
    font-size: 12px;
    opacity: 0.54;
  }

  .sns img {
    width: 24px;
    height: 24px;
    margin: 8px 16px;
    padding: 1px;
    cursor: pointer;
    opacity: 0.54;
  }

  .tos span:hover,
  .sns img:hover {
    opacity: 1;
  }
`;

const TOS_ITEMS: { title: string; href: string }[] = [
  {
    title: "Privacy policy",
    href: "8aa9a7f58a0645f093ff96caa0877ac9",
  },
  {
    title: "Terms of service",
    href: "8aa9a7f58a0645f093ff96caa0877ac9",
  },
];

const SNS_ITEMS: { src: string; href: string }[] = [
  {
    src: `facebook`,
    href: `facebook.com/${FACEBOOK_USERNAME}`,
  },
  {
    src: `instagram`,
    href: `instagram.com/${INSTAGRAM_USERNAME}`,
  },
  {
    src: `twitter`,
    href: `twitter.com/${TWITTER_USERNAME}`,
  },
];

interface FooterPropsType {
  children?: any;
}

const Footer: React.FC<FooterPropsType> = ({ children }: FooterPropsType) => {
  return (
    <React.StrictMode>
      <style jsx>{style}</style>
      <div className="footer">
        <div className="tos">
          {TOS_ITEMS.map((item, i: number) => (
            <a
              key={i}
              title={`${item.title}(Korean)`}
              href={`https://www.notion.so/volla/${item.href}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span>{`${item.title}(Korean)`}</span>
            </a>
          ))}
        </div>
        <div className="sns">
          {SNS_ITEMS.map((item, i: number) => (
            <a
              key={i}
              title={capitalizeFirstLetter(item.src)}
              href={`https://${item.href}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                width="24px"
                height="24px"
                src={`images/ic-${item.src}-white.svg`}
                alt={`${TITLE} ${capitalizeFirstLetter(item.src)}`}
                title={`${TITLE} ${capitalizeFirstLetter(item.src)}`}
              />
            </a>
          ))}
        </div>
        {children}
      </div>
    </React.StrictMode>
  );
};

export default Footer;
