import React from 'react';
import Popup from './selectionPopup.js';
import { useState } from 'react';
export const PrintResponseCard = (props,index) => {
  const [buttonPopup, setbuttonPopup] = useState(false);
  const item = props['item'];
  
//   const index = props.index;
  return (
    <>
      {/* {console.log(item)} */}
      <div
        class='row  p-2'
        style={{
          alignitems: 'center',
          justifycontent: 'center',
          fontFamily: 'times new roman',
          fontSize: '2.5vmin',
          textAlign: 'left',
          borderBottom: '2px solid lightgrey',
          
        }}
      >
        <div class='col-1'>{props.index}</div>
        <div class='col-2'>{item.name}</div>
        <div class='col-1'>{item.admno}</div>
        <div class='col-2'>{item.email}</div>
        <div class='col-1'>{item.phoneno}</div>
        <div class='col-1'>{item.gender}</div>
        <div class='col-1'>{item.dept}</div>
        <div class='col-1'>{item.percentage10}</div>
        <div class='col-1'>XII %</div>
        <div class='col-1'>CGPA</div>
        
      </div>
    </>
  );
};
