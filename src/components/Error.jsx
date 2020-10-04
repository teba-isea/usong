import React from 'react';

import PropTypes from 'prop-types'

const Error = ({type,message}) => ( <p className={`p-1 text-center position-absolute w-100 alert alert-${type}`}>{message}</p> );

Error.propTypes = {
	type: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired
}

export default Error;