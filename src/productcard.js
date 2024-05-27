import React, { useRef, useEffect } from 'react';

function Pcard({ title, price }) {
  const pref = useRef(null);

  useEffect(() => {
    if (pref.current) {
      pref.current.style.display = 'none';
    }
  }, []);

  return (
    <div>
      <h1>Product Card</h1>
      <p onClick={() => {
        console.log(title);
        if (pref.current) {
          console.log(pref.current.innerText);
        }
      }}>
        {title}
      </p>
      <p 
        onClick={() => {
          if (pref.current.style.display === 'none') {
            pref.current.style.display = 'block';
          } else {
            pref.current.style.display = 'none';

          }
        }} 
        ref={pref}
      >
        click
        {price}
      </p>
    </div>
  );
}

export const b = 19;
export const a = 104;

export default Pcard;
