import './App.css';
import React, { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPost from './pages/ReadPost'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import { Link } from 'react-router-dom'
import {supabase} from './client'
import CharDetail from './pages/CharDetail';


const App = () => {

  const [posts, setPosts] = useState(null)
    
  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPost data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path:"/new",
      element: <CreatePost />
    },
    {
      path:"/detail/:id",
      element :<CharDetail data ={posts}/>
    }
  ]);
  
    
  useEffect(() => {
    fetchPost();
  }, [])
  
  const fetchPost = async () => {
    const {data} = await supabase
      .from('character')
      .select()
      .order('created_at', {ascending: true}); //order data based on 'created at' column in ascending order
    setPosts(data)
  }

  return ( 

    <div className="App">

      <div className="header">
        <h1>Genshin Impact Character Generator</h1>
        <Link to="/"><button className="headerBtn"> Explore Characters 🔍  </button></Link>
        <Link to="/new"><button className="headerBtn"> Create a new Character 📝 </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App;
