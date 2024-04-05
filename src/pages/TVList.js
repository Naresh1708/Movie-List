import React from 'react'
import TVCard from '../components/TVCard';
import { useState, useEffect } from "react";

const TVList = () => {

    const [tvlist, setTVList] = useState([]);
    const url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`

    useEffect(() => {
        async function fetchTVList(){
          const response = await fetch(url);
          const json = await response.json();
          setTVList(json.results);
        }
        fetchTVList();
      }, [url])

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">       
          { tvlist.map((tv) => (
            <TVCard key={tv.id} tv={tv}/>
          )) }          
        </div>
      </section>
    </main>
  )
}

export default TVList