import { Card } from 'antd';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const { Meta } = Card;

class Article extends React.Component {
  render(){
      return(
              <Card
                hoverable
                style={{ width: this.props.width, height: this.props.height }}
                cover={<img src={this.props.gambar} />}
              >
                <Meta
                  title={this.props.title}
                  description={this.props.desc}
                />
              </Card>
             
              
        );
      }
    }

    export default Article;