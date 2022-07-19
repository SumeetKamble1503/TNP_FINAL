import React from 'react';
import { useState } from 'react';
// import  from "./selectionPopup";
import Popup from './selectionPopup.js';
// import "../CSS/selectionPopup.css";
import { PrintResponseCard } from './PrintResponseCard.js';
import { Button} from 'react-bootstrap';
import { Col, Row, Form } from "react-bootstrap";
import * as XLSX from 'xlsx';
import axios from 'axios';



export const PrintResponse = () => {
  const [buttonPopup, setbuttonPopup] = useState(false);
  React.state ={
    responseArr: []
  };
  const responses = [
    {
        user: "62c3e0ccb7fafa766b40d81b",
        name: "ABCD",
        admno: "u19cs026",
        email: "abcd@gmail.com",
        phoneno: "9876543210",
        gender: "FEMALE",
        dept: "CS",
        passout: "2023",
        percentage10: "95",
        _id: "62cb0adf10d13d0582738b53"
    },
    {
        user: "629f2df345363e2c3d65320f",
        name: "ABCD",
        admno: "u15cs24",
        email: "user@gmail.com",
        phoneno: "9865321000",
        gender: "Male",
        dept: "CSE",
        passout: "2023",
        percentage10: "90",
        _id: "62c275cb8fe2b4a9d424bd96"
    },
    {
        user: "629f2df345363e2c3d653ace",
        name: "Sumeet Kamble",
        admno: "u15cs24",
        email: "user@gmail.com",
        phoneno: "9865321000",
        gender: "Male",
        dept: "CSE",
        passout: "2023",
        percentage10: "90",
        _id: "62c275cb8fe2b4a9d424bd96"
    },
    ];

  
  const  handleOnExport = () => {
    // console.log(data);
    var wb = XLSX.utils.book_new(),
    ws = XLSX.utils.json_to_sheet(responses);
    XLSX.utils.book_append_sheet(wb,ws,"Mysheet1");
    XLSX.writeFile(wb,"MyExcel.xlsx");
  
    // console.log(data[0].Selections);
  }

  var index = 1;

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
            <Col md ={12}><Button onClick={handleOnExport}>Export</Button></Col>
             
            <div class='container '>
              <h1>Print</h1>
             
              <br />
              <div
                class='row p-2'
                style={{
                  alignitems: 'center',
                  justifycontent: 'center',
                //   backgroundColor: '#198754',
                  backgroundColor:"#0d6efd",
                  color: 'white',
                  fontWeight: 'bold',
                  fontFamily: 'times new roman',
                  fontSize: '3vmin',
                  textAlign: 'left',
                }}
              >
                <div class='col-1'>#</div>
                <div class='col-2'>Name</div>
                <div class='col-1'>UID</div>
                <div class='col-2'>Email</div>
                <div class='col-1'>Phone Num</div>
                <div class='col-1'>Gender</div>
                <div class='col-1'>Dept</div>
                <div class='col-1'>X %</div>
                <div class='col-1'>XII %</div>
                <div class='col-1'>CGPA</div>
               
              </div>

              {responses.map((item) => {
                
                    return (
                    <>
                        <PrintResponseCard index={index++} item={item} key={item._id} />
                        {/* {console.log(item.Num)} */}
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
