import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
// import {Text} from "react-native";
const AdminDashboardCard = (props) => {
  const item = props['item'];
  return (
    <>
      <div className='col-sm-6'>
        <Card
          style={{
            alignItems: 'left',
            width: '100%',
            display: 'inline-flex',
            border: '3px solid black',
            borderRadius: '15px 15px 0px 0px',
            margin: '0px',
            marginBottom: '10px',
          }}
        >
          <span
            style={{
              color: 'green',
              border: '1px solid #198754',
              borderBottom: 'none',
              borderRadius: '13px 13px 0px 0px',
            //   backgroundColor: '#198754',
              backgroundColor: '#fe6601',
              fontWeight: 'bold',
              fontSize: '120%',
              padding: '10px',
              margin: '0px',
            }}
          >
            <Card.Title
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '120%',
                padding: '5px',
                textAlign: 'left',
              }}
            >
                <Container style={{ margin:"0px",padding:"0px"}}>
                <Container style={{ margin:"0px",padding:"0px"}}>
                {item.company}
                </Container>

                <Container style={{ margin:"0px",padding:"5px"}}>
                    <button
                    type='button'
                    className=' btn-outline-dark'
                    style={{
                        textDecoration: 'none',
                        top: '10px',
                        right: '10px',
                        display: 'flex',
                        float: 'right',
                        border: '1px',
                        borderRadius: '7px',
                        padding: '5px 10px',
                        fontSize: '80%',
                        marginLeft:"10px",
                    }}
                    >
                      {/* {item._id} */}
                      <Link to={`/jobs/${item._id}`} >
                      Print
                      </Link>
                    
                    </button>

                    <button
                    type='button'
                    className=' btn-outline-primary'
                    style={{
                        textDecoration: 'none',
                        top: '10px',
                        right: '10px',
                        display: 'flex',
                        float: 'right',
                        border: '1px',
                        borderRadius: '7px',
                        padding: '5px 10px',
                        fontSize: '80%',
                        marginLeft:"10px",
                    }}
                    >
                    Edit
                    </button>
                    <button
                    type='button'
                    className=' btn-outline-danger'
                    style={{
                        textDecoration: 'none',
                        top: '10px',
                        right: '10px',
                        display: 'flex',
                        float: 'right',
                        border: '1px',
                        borderRadius: '7px',
                        padding: '5px 10px',
                        fontSize: '80%',
                        marginLeft:"10px",
                    }}
                    >
                    End
                    </button>

                    {/* <Button type="button" className='btn btn-dark rounded-2' style={{borderRadius:"10px"}}>
                        Yo
                    </Button> */}

                    </Container>
                    </Container>
              
              
            </Card.Title>
          </span>
          <Card.Body>
           
            <Card.Text style={{ color: 'black', textAlign: 'left' }}>
              Role : <span style={{fontWeight: 'normal',color:"black"}}> {item.jd}  </span>   
              <br />
              CTC : <span style={{fontWeight: 'normal',color:"black"}}> {item.stipend} </span> 
              <br />
              Branches : <span style={{fontWeight: 'normal',color:"black"}}> {item.branches.join(', ')} </span> 
              <br />
              Eligibility : <span style={{fontWeight: 'normal',color:"black"}}> {item.cgpa} </span>
              <br />
              Type : #
              <br />
              Deadline : <span style={{fontWeight: 'normal',color:"black"}}> {item.date} </span> 
              {/* {item.Jd} */}
              {/* <Text numberOfLines={1} style={{ width: 100 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to mak
              </Text> */}
            </Card.Text>
            <Card.Link href='https://drive.google.com/file/d/1axyW-LcuX8tf5DLTOFfgkGRT4D8K3TRt/view?usp=sharing'>
              {' '}
              For More Details
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default AdminDashboardCard;
