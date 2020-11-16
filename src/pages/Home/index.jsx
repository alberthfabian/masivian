import React from 'react';
import { useServer } from '../../context';
import Star from '../../components/Star';
import './style.scss';

const Home = () => {

  const { Data, comic, generate } = useServer();

  return (
    <div className='comic'>
      <p>Random comic generator</p>
        {
          comic.length === 0 ? 
            <h1>{Data[0].title}</h1> :
            <h1>{comic[0].title}</h1>
        }
      <div className='comic__img'>
        <figure>
          {
            comic.length === 0 ?
              <img src={Data[0].img} alt={Data[0].alt}/> :
              <img src={comic[0].img} alt={comic[0].alt}/>
          }
        </figure>
      </div>
      <div className='value'>
        <Star/>
        <button className='value__generate' onClick={() => generate()}>Qualify</button>
      </div>
    </div>
  );
};

export default Home;