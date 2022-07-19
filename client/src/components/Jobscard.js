import React from 'react';
import Popup from './selectionPopup.js';
import { useState } from 'react';
export const Jobscard = (props) => {
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
          fontSize: '16px',
          textAlign: 'center',
          // backgroundColor: "#E5E5E5",
          borderBottom: '2px solid lightgrey',
          //   boxShadow: "0px 10px 80px lightgrey",
        }}
      >
        <div class='col-1'>{item.Num}</div>
        <div class='col-2'>{item.Company}</div>
        <div class='col-2'>{item.Role}</div>
        <div class='col-2'>{item.Batch}</div>
        <div class='col-2'>{item.CTC}</div>
        <div class='col-1'>{item.Selected_num}</div>
        <div class='col-2'>
          <button
            style={{
              color: '#00A7D1',
              border: 'none',
              padding: '0',
              margin: '0',
              backgroundColor: 'white',
            }}
            onClick={() => setbuttonPopup(true)}
          >
            Selections
          </button>
          <Popup
            trigger={buttonPopup}
            setTrigger={setbuttonPopup}
            key={item.Num}
          >
            <br />
            <h3 style={{ color: '#212529', fontWeight: 'bold' }}>Selections</h3>
            <br />
            <div class='container '>
              <div
                class='row p-2'
                style={{
                  alignitems: 'center',
                  justifycontent: 'center',
                  backgroundColor: '#212529',
                  color: 'white',
                  fontWeight: 'bold',
                  fontFamily: 'times new roman',
                  fontSize: '125%',
                  textAlign: 'center',
                }}
              >
                <div class='col-1'>#</div>
                <div class='col-3'>UID</div>
                <div class='col-4'>Name</div>
                <div class='col-4'>Graduation Year</div>
              </div>
              {/* {console.log(item.Selections)} */}

              {item.Selections.map((item) => (
                // return (
                <div
                  class='row p-2'
                  style={{
                    alignitems: 'center',
                    justifycontent: 'center',
                    fontFamily: 'times new roman',
                    fontSize: '16px',
                    textAlign: 'center',
                    // backgroundColor: "#E5E5E5",
                    borderBottom: '2px solid lightgrey',
                    //   boxShadow: "0px 10px 80px lightgrey",
                  }}
                >
                  <div class='col-1'>{item.num}</div>
                  <div class='col-3'>{item.uid}</div>
                  <div class='col-4'>{item.name}</div>
                  <div class='col-4'>{item.gradyear}</div>
                </div>
                // );
              ))}
            </div>
          </Popup>
        </div>
      </div>
    </>
  );
};
