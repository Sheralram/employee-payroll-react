import React,{Component} from 'react';
// import {Link} from 'react-router-dom'
//  import {logo} from '../assets/logo.png'
 import logo from './../../assets/logo.png'
//  import Payrollform from 'payroll-form.css'
//  import './../payroll-form/payroll-form.css'
 import './../header/header.css'
//  import '../home'



export class Header extends React.Component {

    render(){
        return(
           
<div>
            <div>
                <header className="header-content header">
                    <div className="logo-content">
                        <img src={logo}   href='/' alt="logo"  />
                        
                        <div>
                            <span className="emp-text">EMPLOYEE</span><br/>
                            <span className="emp-text emp-payroll">PAYROLL</span>
                 </div>
                    </div>
                </header>
            </div>
 </div>
        )
    }
}