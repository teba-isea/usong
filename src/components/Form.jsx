import React, { useState } from "react";
import Error from './Error'
import PropTypes from 'prop-types'

const Form = ({setQueryData}) => {

  const [isError, setIsError] = useState(false)

  const [searchData, setSearchData] = useState({
    artist : "",
    song: ""
  });

  const {artist, song} = searchData

  const handleForm = (e) => {

    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value
    })

  }

  const upSearchData = (e) => {
    e.preventDefault();

    if(artist.trim() === '' || song.trim() === '') return setIsError(true)
    setIsError(false)
    setQueryData(searchData)
  }

  return (
    <div className="bg-primary position-relative">
      {isError?<Error type="danger" message="Please check the fields"/>:null}
      <div className="container pt-2 pb-2">
        <h1 className="text-center text-white pt-4 mb-3s"><span className="text-success">U</span> Song</h1>
        <form className="row form-group " onSubmit={upSearchData} >
          <div className="col-md-5 form-group">
            <label>Artist</label>
            <input type="text" name="artist" className="form-control" placeholder="example: eminem or rammstein" onChange={e =>handleForm(e)} value={artist} />
          </div>

          <div className="col-md-5 form-group">
            <label>Song</label>
            <input type="text" name="song" className="form-control" placeholder="ex: god plan or believer" onChange={e => handleForm(e)}  value={song} />
          </div>

          <div className="col-md-2 form-group">
           <label className="text-primary">Hello!!!</label>
            <button type="submit" className="form-control btn btn-block btn-success">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  setQueryData: PropTypes.func.isRequired
}

export default Form;
