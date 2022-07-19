import React from 'react';
import Popup from './selectionPopup.js';
import { useState } from 'react';
export const AdminAlljobsCard = (props) => {
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
        <div class='col-1' style={{ textAlign:"center"}}> <a href='#' style={{color:'#0199fe'}}><svg xmlns="http://www.w3.org/2000/svg" 
                  width="3.5vmin" 
                  height="3.5vmin" 
                  
                  fill="currentColor" 
                  className="bi bi-printer" 
                  viewBox="0 0 16 16">
                    <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                    <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
</svg></a></div>
        <div class='col-2'>{item.company}</div>
        <div class='col-2'>{item.jd}</div>
        <div class='col-2'>{item.branches.join(", ")}</div>
        <div class='col-2'>{item.stipend}</div>
        <div class='col-2 ' >{item.cgpa}</div>
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