import React from 'react';

const Cards = ({ id, imgUrl }) => {
  return (
    <div>
      <img src={imgUrl} alt={id} />
    </div>
  );
};

export default Cards;
