import React, { Component } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';

import LaberalMenu from './components/LateralMenu/LateralMenu';
import MainMenu from './components/MainMenu/MainMenu';
import Wrapper from './components/Wrapper/Wrapper';
import { USER_NAME, DOWNLOAD_TEXT, FILE_NAME } from './lib/constants';

import './App.css';

class App extends Component {
	resume;

	exportPDF = () => {
		this.resume.save();
	};

	render() {
		return (
			<div className="main-container">
				<div className="section-download">
					<button onClick={this.exportPDF} className="button-download">
						{DOWNLOAD_TEXT}
					</button>
				</div>
				<PDFExport
					paperSize={'Letter'}
					fileName={`${FILE_NAME}.pdf`}
					title=""
					subject=""
					keywords=""
					ref={r => (this.resume = r)}
				>
					<Wrapper>
						<LaberalMenu />
						<MainMenu />
					</Wrapper>
				</PDFExport>
			</div>
		);
	}
}

export default App;
