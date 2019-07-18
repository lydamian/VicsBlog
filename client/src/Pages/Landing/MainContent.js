import React from 'react';
import {Container, Grid} from "@material-ui/core";
import Bamboo from "../../Assets/images/bamboo-whisk.jpg";
import styles from '../../Assets/index.css';

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${Bamboo})`,
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}

function Background(){
	return (
		<div style={sectionStyle}>
		</div>
	);
}

function test(){
	return <img className="full_images" style={{width: '400px',  minHeight: '100%', minWidth: '1024px', width: '100%', height: 'auto', position: 'fixed', top: 0, left: 0,}} src={Bamboo} />;
}

function Name(){
	return(
		<div className="centerAlign">
			Victoria's Blog 
		</div>		
	);
}

export default () => {
	return (
		<div style={sectionStyle}>
			<Name />
		</div>
	)
}