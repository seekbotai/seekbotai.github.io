import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import { page2 } from './data';

export default function Page2() {
  const children = page2.map((d, i) => {
    if (i > 2) {
      return null;
    }
    return (
      <Col key={i} className="col" span={8}>
        <div className="content-wrapper home-hover">
          <div className="image" style={{ backgroundImage: `url(${d.image})` }} />
          <div className="code-wrapper">
            <h4>扫码预览</h4>
          </div>
        </div>
      </Col>);
  });
  return (
    <div className="home-layout-wrapper home-case-wrapper">
      <OverPack className="home-layout" playScale={0.4}>
        <QueueAnim className="home-case" type="bottom" key="home-case" ease="easeOutQuart" leaveReverse>
          <h2 key="h2">How SeekBot works</h2>
          <i key="i" className="line" />
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
    </div>);
}
