import React from 'react';

import Title from '../Title/Title';

import './MainMenu.css';

function MainMenu() {
	return (
		<div className="main-menu">
			<Title title="Miguel Ribeiro" type="main" />
			<Title title="Web developer" type="sub" />	
		</div>
	);
}

export default MainMenu;
