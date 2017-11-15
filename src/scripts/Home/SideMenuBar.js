import React, { Component } from 'react';
import DemoComponentHeader from './../DemoComponentHeader';
import styles from "./home.scss";
import sidemenubarData from "./sidemenubar.json";

export default class SideMenuBar extends Component{
		constructor(args) {
        super(args);
        this.state = {
        	getdata: sidemenubarData 
        };
    }

    linkTitle(link){
    	alert("work");
    	this.props.history.push('/react');
    }

    render() {
    	// const {getdata} = this.state;
    	// let breadCrumb = [];
    	// if(getdata && getdata !== null){
    	// breadCrumb.push(
    	// 	this.state.getdata.map((item, index)=> {
    	// 		return(
    	// 		<a href={item.link} onClick={this.linkTitle.bind(this, item.link)}>
     //            <div className="menu-item">
    	// 			{item.title}
    	// 		</div>
    	// 		</a>
     //            );
    	// }));
    	// }

    	return (
	        <div className="learning-Home-Page-sidebar">
	        	<a  onClick={this.linkTitle.bind(this)}>
	        	<p className="menu-item">React Introduction</p>
	        	</a>
	        </div>
	    );
    }

};