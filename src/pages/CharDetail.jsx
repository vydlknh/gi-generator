import { useParams } from "react-router-dom";
import Detail from "./Detail";
import React, { useState, useEffect } from 'react';

const CharDetail = ({data}) => {
  
  const {id} = useParams();
  const post = (data || []).filter((item) => item.id == id);

  return (
    <div>
      <Detail id={post[0].id} name={post[0].name} region={post[0].region} element={post[0].element} weapon={post[0].weapon}/>
    </div>
  );
};

export default CharDetail;