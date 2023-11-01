import React from 'react'
import './Detail.css'


const colors = [
  {element: 'pyro', color: 'red'},
  {element: 'cryo', color: 'royalblue'},
  {element: 'dendro', color: 'green'},
  {element: 'hydro', color: 'blue'},
  {element: 'geo', color: 'yellow'},
  {element: 'anemo', color: 'aquamarine'},
  {element: 'electro', color: 'purple'}
]

const Detail = (props) =>  {

  const findColor = colors.filter((color) => color.element == props.element);

  return (
      <div className='whole-page'>
          <h1 className="name">{props.name}</h1>
          <h3>Region: {props.region}</h3>
          <h3>Element: 
            <span style={{
              color: findColor != null ? 
                findColor[0].color : "white",
              padding: '8px'
            }}>{props.element}
            </span>
          </h3>
          <h3>Weapon: {props.weapon}</h3>
      </div>
  );
};

export default Detail;