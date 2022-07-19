import React from 'react';
import Popup from './selectionPopup.js';
import { useState } from 'react';
export const StudentAlljobsCard = (props) => {
  const [buttonPopup, setbuttonPopup] = useState(false);
  const item = props['item'];
  return (
    <>
      {/* {console.log(item)} */}
      <div
        class='row  p-2'
        style={{
          alignitems: 'center',
          justifycontent: 'center',
          fontFamily: 'times new roman',
          // fontSize: 'inherit',
          textAlign: 'left',
          fontSize: '2.5vmin',
          // backgroundColor: "#E5E5E5",
          borderBottom: '2px solid lightgrey',
          //   boxShadow: "0px 10px 80px lightgrey",
        }}
      >
        {/* <div class='col-4 align-self-center'>
        <div
        class='row  p-2'
        style={{
          padding: "2px",
          textAlign: 'center',
        }}
      >
            <div class='col-4 align-self-center' style={{textAlign: 'center'}}>
                #
            </div>
            <div class='col-8 align-self-center' style={{textAlign: 'center'}}>{item.admno}</div>
        </div>
        </div> */}
        <div class='col-1' style={{ textAlign:"center"}}> {props.index}</div>
        <div class='col-2'>{item.company}</div>
        <div class='col-2'>{item.jd}</div>
        <div class='col-2'>{item.branches.join(", ")}</div>
        <div class='col-2'>{item.stipend}</div>
        <div class='col-2'>{item.cgpa}</div>
        {/* <div class='col-2 align-self-center'>{item.gender}</div>
        <div class='col-2 align-self-center'>{item.dept}</div> */}
      </div> 
    </>
  );
};

{/* <div
        class='row  p-2'
        style={{
          alignitems: 'center',
          justifycontent: 'center',
          fontFamily: 'times new roman',
          // fontSize: 'inherit',
          textAlign: 'center',
          fontSize: '2.5vmin',
          // backgroundColor: "#E5E5E5",
          borderBottom: '2px solid lightgrey',
          //   boxShadow: "0px 10px 80px lightgrey",
        }}
      >
        <div class='col-3 align-self-center'>
        <div
        class='row  p-2'
        style={{
          padding: "2px",
          textAlign: 'center',
        }}
      >
            <div class='col-4 align-self-center' style={{textAlign: 'center'}}>
                #
            </div>
            <div class='col-8 align-self-center' style={{textAlign: 'center'}}>ADM Num</div>
        </div>
        </div>
        <div class='col-4 align-self-center' >{item[0].responses[0].name}</div>
        <div class='col-2 align-self-center'>{item[0].gender}</div>
        <div class='col-2 align-self-center'>{item[0].name}</div>

        
         
        
        
      </div> */}