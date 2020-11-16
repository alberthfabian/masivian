import React from 'react';
import { useServer } from '../../context';
import { getImg } from '../Images';
import './style.scss';

const buildStars = [1,2,3,4,5];

const Star = () => {

  const { qualify, validate } = useServer();

  return (
    <div className='builder'>
      { validate === 0 ?
        buildStars.map((star) => (
          <button className='star' key={star} onClick={() => qualify(star)} >
            <img className='star__img' src={getImg('starBN')} alt='Star'/>
          </button>
        )) :
        buildStars.map((star) => (
          <button className='star' key={star} onClick={() => qualify(star)} >
            {
              star < ( validate + 1) ? 
                <img className='star__img' src={getImg('star')} alt='Star'/> :
                <img className='star__img' src={getImg('starBN')} alt='Star'/>
            }
          </button>
        ))
      }
      {
        validate === 0 ? 
          <p>Please rate the comic</p> :
          <p>Send</p>
      }
    </div>
  );
};

export default Star;