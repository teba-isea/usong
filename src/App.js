import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Lyrics from "./components/Lyrics"
import Form from "./components/Form";
import Artist from "./components/Artist"
import Error from "./components/Error";

function App() {
  const [isError, setIsError] = useState([false, ""]);
  const [queryData, setQueryData] = useState({});
  const [lyrics, setLyrics] = useState("");
  const [artistInfo, setArtistInfo] = useState({})

  useEffect(() => {
    if (Object.keys(queryData).length === 0) return;

    const consultApi = async () => {
      const { artist, song } = queryData;

      setLyrics("")
      setArtistInfo({})
      
      const urlLyrics = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const urlArtist = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
      setIsError([false, ""])
      try {

        const [lyrics, artist] = await Promise.all([
          axios.get(urlLyrics),
          axios.get(urlArtist)
        ]);

        setLyrics(lyrics.data.lyrics);

        setArtistInfo(artist.data.artists[0])
        console.log(artist)
        if (lyrics.data.lyrics === "" || Object.keys(artist.data.artists[0]).length === 0) setIsError([true, "search not found, please check the fields"]);
      } catch (e) {
        setQueryData({})
        return setIsError([true, "Please check you internet connection"]);
      }
    };

    consultApi();
  }, [queryData]);

  return (
    <Fragment>
    <Form setQueryData={setQueryData} />
    <div className="position-relative">
      {isError[0] ? <Error type="warning" message={isError[1]} /> : null}
    </div>
    <div className="container">
      <div className="row p-1">
        {isError[0]?null:(
          <div className="col-md-6">
          <Artist artistInfo={artistInfo}/>
        </div>
          )}

        {isError[0]?null:(
          <div className="col-md-6">
          <Lyrics lyrics={lyrics}/>
        </div>
        )}

      </div>
    </div>
    </Fragment>
  );
}

export default App;