import React from 'react';

export const TablesPage = () => {
  


 return(
 <>
     <canvas id="myCanvas" width="200" height="100" >

     </canvas>
 </>
 )
};

function addrects() {
  const canvas = document.getElementById("myCanvas");
  if (canvas !== null) {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(20, 20, 150, 100);
    ctx.stroke();
  }
  
}
