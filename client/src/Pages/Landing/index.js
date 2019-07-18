import React from 'react';
import Header from '../../Components/Header.js';
import Footer from '../../Components/Footer.js';
import MainContent from './MainContent.js';
import {Container} from '@material-ui/core';

/* Food fashion lifestyle Travel*/
export default () => {
	return (
		<div>
			
			<Header value={0} prop2={3}/>
			<MainContent />
			<Footer />
			
		</div>
	)
}