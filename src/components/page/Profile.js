import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import 'antd/dist/antd.css';
import { Card, Col, Row } from 'antd';
import { Icon } from 'antd';
import { Steps } from 'antd';
import { Timeline } from 'antd';
import { Slider, Switch } from 'antd';
import BannerAnim from 'rc-banner-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import { Progress } from 'antd';
const { Element, Arrow, Thumb } = BannerAnim;
const BgElement = Element.BgElement;


const { Meta } = Card;
const Step = Steps.Step;

class Profile extends React.Component {
  state = {
    disabled: false,
  };

  handleDisabledChange = disabled => {
    this.setState({ disabled });
  };
    render(){
      const { disabled } = this.state;
        return(
          <Card title="Profile">
          <div style={{ background: '#00000', padding: '20px' }}>
            <Row gutter={16}>
              <Col span={8}>
                <Card
                  hoverable
                  style={{ width: 200 }}
                  cover={<img src="https://3.bp.blogspot.com/-K-kGTnAuZYw/XONCmRzcHhI/AAAAAAAAB88/9duntb7GEvENgwbXJbjcnWKa_oxdrZaWgCLcBGAs/s320/IMG_20190521_070403.jpg" />}>
                  <Meta align="center"
                  title= 'Foto'
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card title="Info" bordered={false}>
                <TweenOne animation={{ y: 30, opacity: 0, type: 'from' }}>
                  <p>Nama&emsp;&emsp;&emsp;&emsp; : Miftakhul Jannah</p>
                  <p>Tanggal Lahir&emsp;  : 31 Oktober 1999</p>
                  <p>Jenis Kelamin &emsp; : Perempuan</p>
                  <p>Alamat&emsp;&emsp;&emsp;&emsp; : Jl. Raya Solo-Ngawi No.08 <br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Matingan, Ngawi</p>
                  </TweenOne>
                </Card>
              </Col>
            </Row> 
          </div>
          <Card title="Skills" bordered={false}>
          <div>
    <h5>CorelDraw</h5>
    <Col span={10}>
    <Progress
      
      strokeWidth='15px'
      strokeColor={{
        '0%': '#ffcccc',
        '100%': '#84d184',
  
      }}
      percent={90}
      status="active"
      showInfo={false}
    />
    </Col>

    <br/><br/>
          <h5>After Effect</h5>
    <Col span={10}>
    <Progress
      
      strokeWidth='15px'
      strokeColor={{
        '0%': '#ffcccc',
        '100%': '#84d184',
  
      }}
      percent={80}
      status="active"
      showInfo={false}
    />
    </Col>

    <br/> <br/>
    <h5>HTML</h5>
    <Col span={10}>
    <Progress
      
      strokeWidth='15px'
      strokeColor={{
        '0%': '#ffcccc',
        '100%': '#84d184',
  
      }}
      percent={70}
      status="active"
      showInfo={false}
    />
    </Col>

    <br/> <br/>
    <h5>Microsoft</h5>
    <Col span={10}>
    <Progress
      
      strokeWidth='15px'
      strokeColor={{
        '0%': '#ffcccc',
        '100%': '#84d184',
  
      }}
      percent={90}
      status="active"
      showInfo={false}
    />
    </Col>
        </div>
            </Card>
            <Card title="Pendidikan" bordered={false}>
                <Steps current={2}>
                  <Step title="2011-2014" description="SMP N 1 Mantingan" />
                  <Step title="2014-2017" description="SMA N 1 Sambungmacan" />
                  <Step title="2017-Sekarang" description="Universitas Gadjah Mada" />
                </Steps>
            </Card>
          </Card>
        );
    }
}


export default Profile;