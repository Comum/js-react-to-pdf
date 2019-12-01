import React, { Component } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';

import Wrapper from './components/Wrapper/Wrapper';

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
						download
					</button>
				</div>
				<PDFExport
					paperSize={'Letter'}
					fileName="_____.pdf"
					title=""
					subject=""
					keywords=""
					ref={r => (this.resume = r)}
				>
					<Wrapper>
						<p>I am the content!!!</p>
					</Wrapper>
				</PDFExport>
			</div>
		);
	}
}

export default App;
