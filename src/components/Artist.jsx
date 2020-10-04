import React from 'react'
import PropTypes from 'prop-types'
function Artist({artistInfo}) {

	if(Object.keys(artistInfo).length === 0)return null

	const {strArtistThumb,strGenre,strBiographyEN} = artistInfo

  return (
    <div className="card border-light">
    	<div className="card-header bg-success font-weight-bold">About Artist(s)</div>
			<div className="card-body">
				<img src={strArtistThumb} className="card-img-top" alt="artist logo"></img>
				<p classname="card-text">Gender: {strGenre}</p>
				<p classname="card-text">Biography: {strBiographyEN}</p>
			</div>
		</div>
  )
}

Artist.propTypes = {
	artistInfo: PropTypes.object.isRequired
}

export default Artist