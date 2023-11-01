import React from 'react';
import { useRef } from 'react';
import {supabase} from '../client'
import './CreatePost.css'

const CreatePost = () => {
    const formData = useRef(null)
    const createPost = async (event) => {
        event.preventDefault();
        await supabase //make call to supabase client
            .from('character') //specify which table
            .insert({
              name: formData.current[0].value, 
              region: formData.current[1].value, 
              element: formData.current[2].value, 
              weapon: formData.current[3].value
            }) //perfrom insertion, pass object from the form
            .select(); //return data entry back to use once it has been inserted to database
        window.location = "/"
    }

    return (
        <div>
            <form ref={formData}>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" /><br />
                <br/>
                
                <label htmlFor="region">Region</label> <br />
                <input type="text" id="region" name="region" /><br />
                <br/>

                <label htmlFor="element">Element</label> <br />
                <input type="text" id="element" name="element" /><br />
                <br/>
                
                <label htmlFor="weapon">Weapon</label> <br />
                <input type="text" id="weapon" name="weapon" /><br />
                <br/>

                <input onClick={createPost} type="submit" value="Submit" />
            </form>
        </div>
    )
}

const Checkbox = ({ label, name, id}) => {
  return (
    <label>
      <input type="checkbox" name={name} id={id} />
      {label}
    </label>
  );
};
export default CreatePost