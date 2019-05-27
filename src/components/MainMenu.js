import React, { Component } from 'react';
import LeftMenu from './LeftMenu';
import { Drawer, Button, Icon } from 'antd';

class Navbar extends Component {
    state = {
        current: 'mail',
        visible: false
    };
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
      
    render() {
        return (
            <nav className="menuBar">
                    <div className="leftMenu">
                        <LeftMenu />
                    </div>
            </nav>
        );
    }
}
export default Navbar;