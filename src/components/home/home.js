import React,{Component} from 'react';
import { Header } from '../header/header';
import '../home/home.css'
// import add from '../../assets/add-24px.svg'



class Home extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          employees: [],
        };
      }

    render(){
        return(
            // <div className= "mt-5 d-flex justify-content-left">
            //     <h3>Welcome to Bridgelabz</h3>
            //     <Header/>
            // </div>
            <div>
                <Header/>
                 <div className='navbar navbar-xpand-md'>
                    <ul>
                        <li className="nav-item">
                           {/* <a className="nav-link" href="/payroll-form"> */}
                           <a className="add-button" href="/payroll-form">

                            {/* <img src={add} alt="Add User Logo"/> */}
                           
                              Add User
                           </a>
                      </li>
                   </ul>
                </div>


                <h1>Employee Details</h1>

                <table id="payroll-table">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Image Path</th>
                    <th>Gender</th>
                    <th>Salary</th>
                    
                    <th>Department</th>
                    <th>Notes</th>
                    <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.imagePath}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.department}</td>
                  <td>{employee.notes}</td>
                  <td>
                    {/* <button
                      onClick={() =>
                        this.handleUpdateEmployeeClick(employee.id)
                      }
                      className="btn btn-info"
                    >
                      Update
                    </button> */}
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() =>
                        this.handleDeleteEmployeeClick(employee.id)} className="btn btn-danger">
                      Delete
                    </button>
                     
                  </td>
                </tr>
              ))}
            </tbody>
                    </table>
         </div>
        )
    }
}
export default Home;