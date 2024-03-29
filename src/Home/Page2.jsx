import React from "react";
import QueueAnim from "rc-queue-anim";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Row, Col } from "antd";
import { page2 } from "./data";

export default function Page2() {
  const children = page2.map(d => (
    <QueueAnim
      component={Col}
      key={d.title}
      type="bottom"
      className="col"
      componentProps={{ span: 8 }}
    >
      {/* <div key="image" className="image" style={{ backgroundImage: `url(${d.src})` }} /> */}
      <h3 key="h3">{d.title}</h3>
      <p key="p">{d.content}</p>
    </QueueAnim>
  ));
  return (
    <div className="home-layout-wrapper home-func-wrapper" id="home-works">
      <h2 key="h2">How SeekBot works</h2>
      <i key="i" className="line" />
      <OverPack className="home-layout" location="home-func" playScale={0.4}>
        <QueueAnim
          className="home-func"
          type="bottom"
          key="home-func"
          ease="easeOutQuart"
          leaveReverse
        >
          <QueueAnim
            key="content"
            component={Row}
            type="bottom"
            componentProps={{ gutter: 171 }}
          >
            {children}
          </QueueAnim>
        </QueueAnim>
      </OverPack>
    </div>
  );
}
