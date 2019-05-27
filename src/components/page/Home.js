import React, {Component} from 'react';
import Banner from './MyBanner';
import {Row, Col} from 'antd';

class Home extends Component {
    render(){
        return (
            <div>
                <Banner/>
                <br/>
                <div>
                    <Row guter={8}>
                        <Col offset={4} span={16}>
                        
                            <Row>
                                <Col span={24}>
                                
                                </Col>
                            </Row>
                            <br/>
                        </Col>
                    </Row>
                </div>  
            </div>   
        );
        }
}

export default Home;