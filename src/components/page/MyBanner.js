import React from "react";
import BannerAnim, { Element } from "rc-banner-anim";
import TweenOne from "rc-tween-one";
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import "rc-banner-anim/assets/index.css";
import "./MyBanner.css";
import urlGambar from './img.svg';
import Gambar from './img2.svg';
const BgElement = Element.BgElement;

class myBanner extends React.Component {
    state = {
        show: true
      };
      getEnter = (e) => {
        switch (e.index) {
          case 0:
            return {
              rotate: 90,
              opacity: 0,
              y: -60,
            };
          case 10:
          case 1:
            return {
              y: -60,
              x: -10,
              opacity: 0,
            };
          case 9:
          case 2:
            return {
              y: -60,
              x: 20,
              opacity: 0,
            };
          case 3:
            return {
              y: 60,
              opacity: 0,
            };
          case 8:
          case 4:
            return {
              x: 30,
              opacity: 0,
            };
          case 5:
            return {
              enter: [
                {
                  scale: 2,
                  opacity: 0,
                  type: 'set',
                },
                { scale: 1.2, opacity: 1, duration: 300 },
                { scale: 0.9, duration: 200 },
                { scale: 1.05, duration: 150 },
                { scale: 1, duration: 100 },
              ],
              leave: {
                opacity: 0, scale: 0,
              },
            };
          case 6:
            return {
              scale: 0.8,
              x: 30,
              y: -10,
              opacity: 0,
            };
          case 7:
            return {
              scale: 0.8,
              x: 30,
              y: 10,
              opacity: 0,
            };
          default:
            return {
              opacity: 0,
            };
        }
      }
      onClick = () => {
        this.setState({
          show: !this.state.show
        });
      }
  render() {
    return (
      <BannerAnim
      autoPlay
      autoPlaySpeed={3000}
      prefixCls="banner-user"
      onChange={e => {
          console.log(e);
        }}
      >
        <Element key="aaa" prefixCls="banner-user-elem">
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: 'url('+urlGambar+')', 
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          /><br/><br/>
           <Texty enter={this.getEnter}>{this.state.show && ' WELCOME TO '}</Texty>
           <Texty enter={this.getEnter}>{this.state.show && ' MY WEB '}</Texty>
        </Element>
        <Element key="bbb" prefixCls="banner-user-elem">
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: 'url('+Gambar+')',
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          /><br/><br/>
          <Texty enter={this.getEnter}>{this.state.show && ' IMAGINATION '}</Texty>
          <Texty enter={this.getEnter}>{this.state.show && ' will take you '}</Texty>
          <Texty enter={this.getEnter}>{this.state.show && ' EVERYWHERE '}</Texty>
        </Element>
      </BannerAnim>
    );
  }
}

export default myBanner;