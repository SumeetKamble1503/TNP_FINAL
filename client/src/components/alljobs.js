import React from 'react';
import { useState } from 'react';
// import  from "./selectionPopup";
import Popup from './selectionPopup.js';
// import "../CSS/selectionPopup.css";
import { Jobscard } from './Jobscard.js';
export const Alljobs = () => {
  const [buttonPopup, setbuttonPopup] = useState(false);
  const data = [
    {
      Num: 1,
      Company: 'Google',
      Role: 'SDE',
      Batch: '2023',
      CTC: '30',
      Selected_num: 3,
      Selections: [
        {
          num: 1,
          uid: 'U19CS001',
          name: 'Sudhanshu',
          gradyear: '2023',
        },
        {
          num: 2,
          uid: 'U19CS001',
          name: 'SK',
          gradyear: '2023',
        },
        {
          num: 3,
          uid: 'U19CS001',
          name: 'SK',
          gradyear: '2023',
        },
      ],
    },
    {
      Num: 2,
      Company: 'Mocrosoft',
      Role: 'SDE',
      Batch: '2023',
      CTC: '20',
      Selected_num: 1,
      Selections: [
        {
          num: 1,
          uid: 'U19CS0261',
          name: 'SK',
          gradyear: '2023',
        },
      ],
    },
    {
      Num: 3,
      Company: 'Nutanix',
      Role: 'SDE',
      Batch: '2023',
      CTC: '50',
      Selected_num: 1,
      Selections: [
        {
          num: 1,
          uid: 'U19CS0261',
          name: 'Sumeet',
          gradyear: '2023',
        },
      ],
    },
  ];

  return (
    <>
      <html>
        <head>
          <meta charset='UTF-8' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width= , initial-scale=1.0' />
          <title>All Jobs</title>
        </head>

        <body>
          <div
            style={{
              alignitems: 'center',
              justifycontent: 'center',
              marginTop: '20px',
            }}
          >
            <div class='container '>
              <h1>Jobs</h1>
              <br />
              <div
                class='row p-2'
                style={{
                  alignitems: 'center',
                  justifycontent: 'center',
                  backgroundColor: '#198754',
                  color: 'white',
                  fontWeight: 'bold',
                  fontFamily: 'times new roman',
                  fontSize: '125%',
                  textAlign: 'center',
                }}
              >
                <div class='col-1'>#</div>
                <div class='col-2'>Company Name</div>
                <div class='col-2'>Role</div>
                <div class='col-2'>Batch</div>
                <div class='col-2'>CTC</div>
                <div class='col-1'>Selections</div>
                <div class='col-2'></div>
              </div>

              {data.map((item) => {
                return (
                  <>
                    <Jobscard item={item} key={item.Num} />
                    {console.log(item.Num)}
                  </>
                );
              })}
            </div>
          </div>
        </body>
      </html>
    </>
  );
};
