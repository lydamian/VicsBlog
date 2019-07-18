import React, {Component} from 'react';
import {AppBar, Menu, Tab, Tabs, Typography, Box, Toolbar} from '@material-ui/core';
import Styles from '../Assets/index.css';

const menu = () => {
	return (
			<Menu>
				This is a Menu
			</Menu>
		);
}


export default class Header extends Component{
	constructor(props){
		super(props);
		this.state = {
			'value': props.value,
		};

	}

	render(){
		return (
		<div>
			<AppBar position='sticky'>
				<Toolbar>
					<Box>
						<Typography variant="h6">
							Travel, Food, Life
						</Typography>
						</Box>
					<Tabs value={this.state.value} variant="scrollable">
						<Tab label="Home"  className="float-right"/>
						<Tab label="Blog"  className="float-right"/>
						<Tab label="About Me"  className="float-right"/>
					</Tabs>	
				</Toolbar>	
			</AppBar>
		</div>
	)}
}