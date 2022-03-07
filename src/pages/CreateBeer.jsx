import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CreateBeer() {

    const[createBeer, setCreateBeer]=useState({})
    const navigate=useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new',createBeer)
        .then((response)=>navigate('/beers'))
    }
    
    function setValues(event){
        const value = event.target.value;
        const name = event.target.name;
        setCreateBeer((createBeer)=>{return{...createBeer,[name]:value}})

    }

    return (
        <div className="AddApartmentPage">
            <h3>Add New Apartment</h3>
      
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" onChange={setValues}/>

            <label>Tagline </label>
            <input type="text" name="tagline" onChange={setValues}/>
            
            <label>Description  </label>
            <input type="text" name="description" onChange={setValues}/>

            <label>First_brewed</label>
            <input type="text" name="first_brewed" onChange={setValues}/>

            <label>Brewers_tips</label>
            <input type="text" name="brewers_tips" onChange={setValues}/>

            <label>Attenuation_level </label>
            <input type="number" name="attenuation_level" onChange={setValues}/>
            
            <label>Contributed_by</label>
            <input type="text" name="contributed_by" onChange={setValues}/>
            
        <button type="submit">Create Beer</button>
        
        </form>
      </div>
    );
}

export default CreateBeer;