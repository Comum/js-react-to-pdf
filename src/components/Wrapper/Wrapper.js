import React from 'react';

import './Wrapper.css';

function Wrapper(props) {
	const { children } = props;

	return <div className="wrapper">{children}</div>;
}

export default Wrapper;
