import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from "react-router-dom";
import { NavBar } from "antd-mobile";
import NavLinkBar from "../navlink/navlink";
import Boss from "../boss/boss";
import Genius from "../genius/genius";
import Userinfo from "../userinfo/userinfo";


function Msg() {
  return <h2>Msg</h2>
}



@connect(
  state => state,
)

class Dashboard extends Component {
  render() {
    const { pathname } = this.props.location
    const user = this.props.user;
    const navList = [
      {
				path:'/boss',
				text:'牛人',
				icon:'boss',
				title:'牛人列表',
				component:Boss,
				hide:user.type=='genius'
			},
			{
				path:'/genius',
				text:'boss',
				icon:'job',
				title:'BOSS列表',
				component:Genius,
				hide:user.type=='boss'
			},
			{
				path:'/msg',
				text:'消息',
				icon:'msg',
				title:'消息列表',
				component:Msg
			},
			{
				path:'/user',
				text:'我',
				icon:'user',
				title:'个人中心',
				component:Userinfo
			}
    ]
    return (
      <div>
        <NavBar
          mode="dark"
          >{navList.find(v=> v.path === pathname)['title']}</NavBar>
        <div style={{marginTop: 15}}>
          <Switch>
            { navList.map(item => (
              <Route key={item.path} path={item.path} component={item.component}/>
            ))}
          </Switch>
        </div>
        <NavLinkBar data={navList}></NavLinkBar>
      </div>
    );
  }
}

export default Dashboard;