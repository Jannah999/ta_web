import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import 'antd/dist/antd.css';
import { Card, Col, Row } from 'antd';
import { Icon } from 'antd';
import BannerAnim from 'rc-banner-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
const { Element, Arrow, Thumb } = BannerAnim;
const BgElement = Element.BgElement;

const { Meta } = Card;


class Kontak extends React.Component {

    render(){
        return(
          <Card  title="Kontak"> 
          <div style={{ background: '#00000', padding: '20px' }}>
            <Row gutter={16}>
              <Col span={12}>
                <Card bordered={false}>
                <TweenOne animation={{ y: 30, opacity: 0, type: 'from' }}>
                  <p><Icon type="phone" style={{fontSize: '25px'}} />&emsp; 082234316474</p>
                  <p><Icon type="facebook" style={{fontSize: '25px'}} />&emsp; Miftakhul Jannah</p>
                  <p><Icon type="instagram" style={{fontSize: '25px'}} />&emsp; jannahthn</p>
                  <p><Icon type="google" style={{fontSize: '25px'}} />&emsp; miftakhulj577@gmail.com</p>
                </TweenOne>
                </Card>
              </Col>
            </Row>
          </div>
          </Card>
        );
    }
}


export default Kontak;
