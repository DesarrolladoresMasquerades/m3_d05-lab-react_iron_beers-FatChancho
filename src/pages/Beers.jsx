import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Beers() {

    useEffect(()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response)=>{
        setBeers(response.data)
    })
    },[])
    

const[beers,setBeers]=useState([])
    return (
        <div>
            <div>
                <Link to="/"><img src='/assets/home-icon.png' alt='imagen rota'></img></Link>
            </div>
            <div className='flex-beer'>
                {beers.map((beer)=>(
                    <div className='orden-beer-detail' key={beer._id}>
                        <img src={beer.image_url} alt='birra'></img>
                        <h3>{beer.name}</h3>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                        <Link to={`/beers/${beer._id}`}>Show me more</Link>
                    </div>
                ))}
            </div>
        
        </div>
    );
}

export default Beers;