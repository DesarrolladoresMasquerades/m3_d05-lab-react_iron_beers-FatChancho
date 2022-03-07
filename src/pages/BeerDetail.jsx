import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom'


function BeerDetail() {

    const[beerDetail,setBeerDetail]=useState({})

    const {id} = useParams();
    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then((response)=>{
        setBeerDetail(response.data)
        },[id])

        .catch(err=>console.log('La cagaste',err))
    })
    

    return (
        
        beerDetail._id ?(
        <div className='orden-beer-detail'>
            <div>
            <img src={beerDetail.image_url} alt='foto-birra' />
            <h3>{beerDetail.name}</h3>
            <h4>{beerDetail.tagline}</h4>
            <p>{beerDetail.first_brewed}</p>
            <p>{beerDetail.attenuation_level}</p>
            <i>{beerDetail.description}</i>
            <p>{beerDetail.contributed_by}</p>            
            </div>
        </div>
        ):
        <div>Loading the booooze</div>
    );
}

export default BeerDetail;