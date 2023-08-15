import React from 'react';
import HornedBeast from './HornedBeast';
import beastValues from '../assets/data.json';

class Gallery extends React.Component {

render() {

  return (
    <div>
      {beastValues.map((beast, index) => 
        <HornedBeast
          key={index}
          title={beast.title}
          image_url={beast.image_url}
          description={beast.description}
        />
      )}
    </div>
  );
  }
}


export default Gallery;

