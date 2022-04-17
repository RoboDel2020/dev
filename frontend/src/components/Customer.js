import React, { useEffect, useState, useContext } from 'react';
import { Button, Modal, ModalTitle } from 'react-bootstrap'
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios'

const Customer = ()=>{

    const [Data, setData] = useState([]);
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const handleViewShow = () => { SetViewShow(true) }
    const hanldeViewClose = () => { SetViewShow(false) }

     //FOr Edit Model
     const [ViewEdit, SetEditShow] = useState(false)
     const handleEditShow = () => { SetEditShow(true) }
     const hanldeEditClose = () => { SetEditShow(false) }

     //FOr Delete Model
    const [ViewDelete, SetDeleteShow] = useState(false)
    const handleDeleteShow = () => { SetDeleteShow(true) }
    const hanldeDeleteClose = () => { SetDeleteShow(false) }

    //FOr Add New Data Model
    const [ViewPost, SetPostShow] = useState(false)
    const handlePostShow = () => { SetPostShow(true) }
    const hanldePostClose = () => { SetPostShow(false) }

    //Define here local state that store the form Data
    let { id } = useParams();
    const [CustomerID, setCustomerID] = useState("")
    const [FirstName, setFirstName]= useState("")
    const [LastName, setLasttName]= useState("")
    const [Email, setEmail] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [Street, setStreet] = useState("")
    const [City, setCity] = useState("")
    const [State, setState] = useState("")
    const [Zip, setZip] = useState("")
    const [Country, setCountry] = useState("")
    
    // const [Delete,setDelete] = useState(false)

    let history = useHistory();
    //Id for update record and Delete
    const [customerId, setcustomerId] = useState("");
    useEffect(()=>{
        const url = 'http://localhost:8080/customer'
        axios.get(url)
            .then((response)=>{
                setData(response.data);
                history.push("/customer");
                
            })
            .catch(err => {
                console.log(err)
            })
    }, []);
    // const GetCustomerData = () => {
    //     //here we will get all employee data
    //     const url = 'http://localhost:8080/customer'
    //     axios.get(url)
    //         .then(response=>setData(response.data))
    //         .catch(err => {
    //             console.log(err)
    //         })
    //         // response =>this.setData(response)
            
    // }

    const handleSubmite = () => {
        const url = 'http://localhost:8080/customer'
        const Credentials = { CustomerID, FirstName, LastName, Email, PhoneNumber, Street, City, State, Zip, Country  }
        axios.post(url, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    alert(message);
                    // window.location.reload();
                }   
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleEdit = () =>{
        const url = `http://localhost:8080/customer/${customerId}`
        const Credentials = { CustomerID, FirstName, LastName, Email, PhoneNumber, Street, City, State, Zip, Country  }
        axios.put(url, Credentials)
        .then((response )=> {
            const result = response.data;
            const { status, message } = result;
            if (status !== 'SUCCESS') {
                alert(message, status)
            }
            else {
                alert(message)
                window.location.reload()
            }
        })
    }

    //handle Delete Function 
    const handleDelete = (id) =>{
        // const url = `http://localhost:8080/customer/${customerId}`
        axios
      .delete(`http://localhost:8080/customer/${id}`)
      .then(() => {
        
        history.push("/customer");
        
      });
    }
    
    console.log(ViewShow, RowData)
    // useEffect(() => {
    //     GetCustomerData();
    // }, [])


    return (
        <div>
            <div className='row'>
                <div className='mt-5 mb-4'>
                    <Button variant='primary' onClick={() => { handlePostShow() }}><i className='fa fa-plu'></i>
                        Add New Customer
                    </Button>
                </div>
            </div>
            <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>CustomerID</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Email</th>
                                <th>PhoneNumber</th>
                                <th>Street</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Zip</th>
                                <th>Country</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((item) =>
                                <tr key={item.CustomerID}>

                                    <td>{item.CustomerID}</td>
                                    <td>{item.FirstName}</td>
                                    <td>{item.LastName}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.PhoneNumber}</td>
                                    <td>{item.Street}</td>
                                    <td>{item.City}</td>
                                    <td>{item.State}</td>
                                    <td>{item.Zip}</td>
                                    <td>{item.Country}</td>
                                    <td style={{ minWidth: 250 }}>
                                        <Button size='sm' variant='primary' onClick={() => { handleViewShow(SetRowData(item)) }}>View</Button>|
                                        <Button size='sm' variant='warning' onClick={()=> {handleEditShow(SetRowData(item),setcustomerId(item.CustomerID))}}>Edit</Button>|
                                        <Button size='sm' variant='danger' onClick={() => { handleDelete(item.CustomerID)}}>Delete </Button>|
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* View Modal */}
            <div className='model-box-view'>
                <Modal
                    show={ViewShow}
                    onHide={hanldeViewClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>View Customer Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' value={RowData.CustomerID} readOnly />
                            </div>
                            <div className='form-group'>
                                <input type="text" className='form-control' value={RowData.FirstName} readOnly />
                            </div>
                            <div className='form-group'>
                                <input type="text" className='form-control' value={RowData.LastName} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' value={RowData.Email} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.PhoneNumber} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.Street} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.City} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.State} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.Zip} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.Country} readOnly />
                            </div>
                            {/* {
                                Delete && (
                                    <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete(RowData.CustomerID)}>Delete Employee</Button>
                                )
                            } */}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeViewClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* Modal for submit data to database */}
            <div className='model-box-view'>
                <Modal
                    show={ViewPost}
                    onHide={hanldePostClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add new Customer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(e) => setCustomerID(e.target.value)} placeholder="Please enter id" />
                            </div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(e) => setFirstName(e.target.value)} placeholder="Please enter First Name" />
                            </div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(e) => setLasttName(e.target.value)} placeholder="Please enter Last Name" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="email" className='form-control' onChange={(e) => setEmail(e.target.value)} placeholder="Please enter email" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Please enter  PhoneNumber" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setStreet(e.target.value)} placeholder="Please enter Street" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setCity(e.target.value)} placeholder="Please enter city" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setState(e.target.value)} placeholder="Please enter state" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setZip(e.target.value)} placeholder="Please enter zip" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setCountry(e.target.value)} placeholder="Please enter Country" />
                            </div>
                            <Button type='submit' className='btn btn-success mt-4' onClick={handleSubmite}>Add Customer</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldePostClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* Modal for Edit employee record */}
            <div className='model-box-view'>
                <Modal
                    show={ViewEdit}
                    onHide={hanldeEditClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Customer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <label>CustomerID</label>
                                <input type="text" className='form-control' onChange={(e) => setCustomerID(e.target.value)} placeholder="Please enter Name" defaultValue={RowData.name}/>
                            </div>
                            <div className='form-group'>
                                <label>FirstName</label>
                                <input type="text" className='form-control' onChange={(e) => setFirstName(e.target.value)} placeholder="Please enter Name" defaultValue={RowData.name}/>
                            </div>
                            <div className='form-group'>
                                <label>LastName</label>
                                <input type="text" className='form-control' onChange={(e) => setLasttName(e.target.value)} placeholder="Please enter Name" defaultValue={RowData.name}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Email</label>
                                <input type="email" className='form-control' onChange={(e) => setEmail(e.target.value)} placeholder="Please enter email" defaultValue={RowData.email} />
                            </div>
                            <div className='form-group mt-3'>
                                <label>PhoneNumber</label>
                                <input type="text" className='form-control' onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Please enter Number" defaultValue={RowData.number}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Street</label>
                                <input type="text" className='form-control' onChange={(e) => setStreet(e.target.value)} placeholder="Please enter NIC" defaultValue={RowData.nic}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>City</label>
                                <input type="text" className='form-control' onChange={(e) => setCity(e.target.value)} placeholder="Please enter Address" defaultValue={RowData.address}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>State</label>
                                <input type="text" className='form-control' onChange={(e) => setState(e.target.value)} placeholder="Please enter Address" defaultValue={RowData.address}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Zip</label>
                                <input type="text" className='form-control' onChange={(e) => setZip(e.target.value)} placeholder="Please enter Address" defaultValue={RowData.address}/>
                            </div>
                            <div className='form-group mt-3'>
                                <label>Country</label>
                                <input type="text" className='form-control' onChange={(e) => setCountry(e.target.value)} placeholder="Please enter Address" defaultValue={RowData.address}/>
                            </div>
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Edit Customer</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeEditClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
               
        </div>
    );
}

export default Customer;