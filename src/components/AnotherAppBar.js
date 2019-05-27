import { Drawer, Menu, Icon } from 'antd';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import 'antd/dist/antd.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class AnotherAppBar extends React.Component {
    constructor(){
        super();
        this.state = {
            menu : [
                {url:'/portofolio', name:'Portofolio'},
                {url:'/contact', name:'Contact'},
                {url:'/profile', name:'Profile'},
                {url:'/home', name:'Home'}
            ]
        }
    }
  state = {
    current: 'Home',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <nav className="menuBar">
        <div className="menuCon">
            <div className="rightMenu">
            <Menu mode="horizontal">
            {this.state.menu.map((data) => {
                return(
                    <Menu.Item key={data.name} style={{float: "right"}}>
                        <Link to={data.url}>{data.name}</Link>
                    </Menu.Item>
                    )
            })}
            </Menu>
            </div>
        </div>
      </nav>
    );
  }
}

AnotherAppBar.propTypes = {
    classes : PropTypes.object.isRequired,
};

export default AnotherAppBar;

// ReactDOM.render(<AnotherAppBar />, mountNode);