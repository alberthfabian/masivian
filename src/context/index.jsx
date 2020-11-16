import React, { useMemo, useState, useCallback } from 'react';
// import React, { useMemo, useMemo, useCallback, useEffect, useState } from 'react';
import { Data } from '../components/Comic';

const Server = React.createContext();

export function ServerProvider(props) {

    const[ comic, setComic ] = useState([]);
    const[ validate, setValidate ] = useState(0);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // const data = await fetch('http://xkcd.com/info.0.json');
  //     // const data = await fetch('http://xkcd.com/614/info.0.json');
  //     const info = await data.json();
  //     setComic(info);
  //   };
  //   fetchData();
  // }, [ setComic ]);

  const qualify = useCallback((e) => {
    setValidate(e);
  },[]); 

  const generate = useCallback(() => {
    const random = Math.floor(Math.random() * ((Data.length+1) - 1) + 1);
    const only = Data.filter(find => find.num === parseInt(random));
    setComic(only);
    setValidate(0);
  },[]);

  const value = useMemo(() => {
    return ({
      validate,
      comic,
      Data,
      generate,
      qualify
    })
  }, [ validate, comic, generate, qualify ]);

  return <Server.Provider value={value} {...props} />
}

export function useServer() {
  const context = React.useContext(Server);
  if (!context) {
    throw new Error('useServer debe estar dentro del proveedor Name')
  }
  return context;
}