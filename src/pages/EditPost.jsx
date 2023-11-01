import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import {supabase} from '../client'
import './EditPost.css'

const EditPost = ({data}) => {
    const formData = useRef(null)
    const {id} = useParams();
    const post = (data || []).filter((item) => item.id === id);
    
    const updatePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('character')
            .update({ 
                name: formData.current[0].value, 
                region: formData.current[1].value, 
                element: formData.current[2].value, 
                weapon: formData.current[3].value
            })
            .eq('id', id);
        window.location = "/"
    }

    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('character')
            .delete()
            .eq('id', id);
        window.location = "/"
    }


    return (
        <div>
            <form ref={formData}>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={post.name}/><br />
                <br/>
                
                <label htmlFor="region">Region</label> <br />
                <input type="text" id="region" name="region" value={post.region} /><br />
                <br/>

                <label htmlFor="element">Element</label> <br />
                <input type="text" id="element" name="element" value={post.element} /><br />
                <br/>
                
                <label htmlFor="weapon">Weapon</label> <br />
                <input type="text" id="weapon" name="weapon" value={post.weapon} /><br />
                <br/>
                
                <input onClick={updatePost} type="submit" value="Submit" />
                <button onClick={deletePost} className="deleteButton">Delete</button>
            </form>
        </div>
    )
}

export default EditPost