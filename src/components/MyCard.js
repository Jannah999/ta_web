import React from 'react';
import { Card } from 'antd';
import Article from './page/Article';
import {Row, Col} from 'antd';
import { Skeleton, Switch, Icon, Avatar } from 'antd';
import BannerAnim from 'rc-banner-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
const { Element, Arrow, Thumb } = BannerAnim;
const BgElement = Element.BgElement;

const { Meta } = Card;

class MyCard extends React.Component{
    state = {
        loading: true,
      };
    
      onChange = checked => {
        this.setState({ loading: !checked });
      };
    render() {
        const { loading } = this.state;
        return(
          <Card  title="Portofolio"> 
          <div style={{ background: '#00000'}}>
                <Row>  
                <TweenOne animation={{ y: 30, opacity: 0, type: 'from' }}>  
  <Col xs={2} sm={4} md={6} lg={8} xl={8}>
       <Card
          cover={<img alt="example" src="https://2.bp.blogspot.com/-FIfKNqPQkec/XOLfjAAVC8I/AAAAAAAAB8k/zTh-6uZno5IFEynS3llu466k9at8Sh0uQCLcBGAs/s320/school-rangers.jpg" />}
          style={{ width: 250, marginTop: 16 }}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        >
            <Meta
              avatar={
                <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
              }
              title="DESIGN SCHOOL RANGER"
              description="www.school_ranger.com"
            />
          <br/>
        </Card>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={8}>
        <Card
        cover={<img alt="example" src="https://2.bp.blogspot.com/-SpYslHgPiiM/XOLfiA79suI/AAAAAAAAB8c/9uqyxgp8dDEtnehZQjFZIUcR1kDisUaSgCLcBGAs/s320/logo.jpg" />}
          style={{ width: 250, marginTop: 16 }}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        >
            <Meta
              avatar={
                <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
              }
              title="LOGO KAMIKAZE NEXT"
              description="www.kamikaze.com"
            />
        </Card>
        </Col>
        <Col xs={2} lg={4}>
        <Card
        cover={<img alt="example" src="https://4.bp.blogspot.com/-g69S_mIHgPM/XOLfixEcUFI/AAAAAAAAB8g/3pAyDDZ3SrUWLZ9CzvdsxwPbMWRii-OFACLcBGAs/s320/kamikaze-next-hitam.jpg" />}
          style={{ width:250, marginTop: 16 }}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        >
            <Meta
              avatar={
                <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
              }
              title="DESIGN KAMIKAZE NEXT"
              description="www.kamikaze.com"
            />
           
        </Card>
        </Col>
        </TweenOne>
        </Row>
      </div>
</Card>

        )
    }
}

export default MyCard;