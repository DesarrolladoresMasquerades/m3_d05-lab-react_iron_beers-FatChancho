import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom'


export default function RandomBeer() {
    const[beerDetail,setBeerDetail]=useState({})

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((response)=>{
        setBeerDetail(response.data)
        },)

        .catch(err=>console.log('La cagaste',err))
    },[])
    
    return (
        
        beerDetail._id ?(
        <div className='box'>
            <img src={beerDetail.image_url} alt='foto-birra' />
            <h3>{beerDetail.name}</h3>
            <h4>{beerDetail.tagline}</h4>
            <p>{beerDetail.first_brewed}</p>
            <p>{beerDetail.attenuation_level}</p>
            <i>{beerDetail.description}</i>
            <p>{beerDetail.contributed_by}</p>            
        </div>
        ):
        <div>Loading the booooze</div>
    );
}

