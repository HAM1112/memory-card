import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Example(props) {
    const [Cards, setCards] = useState('');
    
    useEffect(() => {
        setCards(props.test)
        console.log(Cards);
    }, []);
  return (
    <div>Example</div>
  )
}

export default Example