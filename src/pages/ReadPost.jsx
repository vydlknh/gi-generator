import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(props.data);
    }, [props]);
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post) => 
                    <Card id={post.id} name={post.name} region={post.region} element={post.element} weapon={post.weapon}/>
                ) : <h2>{'No Character Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;