import React from 'react'
import PropTypes from 'prop-types'

function Lyrics({lyrics}) {
	if(lyrics.length === 0) return null
	return (
		<div className="p-3">
			<h2 className="lyrics-title d-block mb-2 ">Lyrics<br/></h2>
			<p>{lyrics}</p>
		</div>
	)
}

Lyrics.propTypes = {
	lyrics: PropTypes.string.isRequired
}

export default Lyrics