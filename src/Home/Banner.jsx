/* eslint-disable no-undef */
import React from "react";
import PropTypes from "prop-types";
import QueueAnim from "rc-queue-anim";
import { Button } from "antd";
import BannerImage from "./BannerImage";

const OS = {
  MACOSX: "Mac OS",
  IOS: "iOS",
  WINDOWS: "Windows",
  ANDROID: "Android",
  LINUX: "Linux",
};

function getOS() {
  const { userProducer } = window.navigator;
  const { platform } = window.navigator;
  const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
  const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
  const iosPlatforms = ["iPhone", "iPad", "iPod"];
  let os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = OS.MACOSX;
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = OS.IOS;
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = OS.WINDOWS;
  } else if (/Android/.test(userProducer)) {
    os = OS.ANDROID;
  } else if (!os && /Linux/.test(platform)) {
    os = OS.LINUX;
  }

  return os;
}

function getDownloadLinkByOS() {
  const os = getOS();
  let downloadLink = "https://docs.bitsky.ai/how-tos/setup";
  if (os === OS.MACOSX) {
    downloadLink =
      "https://github.com/seekbotai/desktop-app/releases/latest/download/SeekBot.dmg";
  } else if (os === OS.WINDOWS) {
    // TODO: update to windows download link
    downloadLink =
      "https://github.com/seekbotai/desktop-app/releases/latest/download/SeekBot.dmg";
  } else if (os === OS.LINUX) {
    // TODO: update to Linux download link
    downloadLink =
      "https://github.com/seekbotai/desktop-app/releases/latest/download/SeekBot.dmg";
  }
  return downloadLink;
}

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };
  static defaultProps = {
    className: "home-banner",
  };

  render() {
    const getDownloadButton = () => {
      const os = getOS();
      if (os === OS.MACOSX) {
        return (
          <a
            target="_blank"
            href={getDownloadLinkByOS()}
            rel="noreferrer noopener"
          >
            <Button type="primary">Download macOS(dmg)</Button>
          </a>
        );
      }
      return (
        <Button type="primary" disabled>
          Coming soon
        </Button>
      );
    };
    const { className } = this.props;
    return (
      <div className={`home-layout-wrapper ${className}`}>
        <div className="home-layout">
          <QueueAnim
            className={`${className}-content-wrapper`}
            delay={300}
            ease="easeOutQuart"
          >
            <h1 key="h2">
              Your personal browser assistant helps you remember and retrieve
              information effortlessly.
            </h1>
            <p key="p">
              SeekBot is a privacy-first, personalized AI-powered browser
              assistant that remembers and learns from everything you&apos;ve
              viewed in your browser. Get 2 hours back every week.
            </p>
            <span key="button">{getDownloadButton()}</span>
          </QueueAnim>
          <div className={`${className}-image-wrapper`}>
            <BannerImage />
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
