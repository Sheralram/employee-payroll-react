import React,{Component} from 'react';

//  import logo from './../../assets/logo.png'
import logo from '../../assets/logo.png'

 import './../payroll-form/payroll-form.css'
 import{Header} from '../header/header'
import profile1 from '../../assets/Ellipse -3.png';
import profile2 from '../../assets/Ellipse 1.png';
import profile3 from '../../assets/Ellipse -8.png';
import profile4 from '../../assets/Ellipse -7.png';




 class Payrollform extends React.Component {


    constructor(){
        super()
        this.profileRef1 = React.createRef();
        this.state = {
            
            name: '',
            gender: '',
            departmentValue: [],
            nameError: '',
            profile: '',
            salary: '',
            notes: '',

        }
    }


    render(){
        return(
           
<div>
            {/* <div>
                <header className="header-content header">
                    <div className="logo-content">
                        <img src={logo} alt="logo"/>
                        
                        <div>
                            <span className="emp-text">EMPLOYEE</span><br/>
                            <span className="emp-text emp-payroll">PAYROLL</span>
                        </div>
                    </div>
                </header>
            </div> */}


            <Header/>


            <div className='form-content'>

               <form className="form"  action="#" onReset={this.reset} onSubmit={this.save}>

                            <div className="form-head">Employee Payroll Form
                            </div>

                        <div className="row-content">
                            <label className="label text" htmlFor="name">Name :</label>
                            <input className="input" type="text" id="name" name="name" value={this.state.name}  placeholder="Your name.." required/>
                            <error-output className="text-error" htmlFor="text">{this.state.nameError}</error-output>
                        </div>



                        <div className="row-content">
                            <label className="label text" htmlFor="profile">Profile image :</label>
                            <div className="profile-radio-content">
                                <label>
                                    <input type="radio" id="profile1" name="profile" 
                                             value="../../assets/Ellipse -3.png" required/>
                                    <img className="profile" id="image1" src={profile1} alt="image1"/>
                                </label>
                                <label>
                                    <input type="radio" id="profile2" name="profile" onChange={this.changeValue}
                                            ref={this.profileRef2} value="..\assets\Ellipse 1.png" required/>
                                    <img className="profile" id="image2" src={profile2} alt="image2"/>
                                </label>
                                <label>
                                    <input type="radio" id="profile3" name="profile" onChange={this.changeValue}
                                            ref={this.profileRef3} value="..\assets\Ellipse -8.png" required/>
                                    <img className="profile" id="image3" src={profile3} alt="image3"/>
                                </label>
                                <label>
                                    <input type="radio" id="profile4" name="profile" onChange={this.changeValue}
                                            ref={this.profileRef4} value="..\assets\Ellipse -7.png" required/>
                                    <img className="profile" id="image4" src={profile4} alt="image4"/>
                                </label>
                            </div>       
                        </div>


                        <div className="row-content">
                   <label className="label text" htmlFor="gender">Gender</label>
                    <select
                      className="input"
                      onChange={this.handleGenderChange}
                    required>
                    <option value="none" selected disabled hidden>Select an Option</option>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                    </select>
                  </div>


                  <div className="row-content">
                            <label className="label text" for="department">Department</label>
                            <div>
                                <input type="checkbox" id="hr" name="department" value="HR" ref={this.departmentRef1} onChange={this.getChecked}/>
                                <label className="text" for="hr">HR</label>
                                <input type="checkbox" id="sales" name="department" value="Sales" ref={this.departmentRef2} onChange={this.getChecked}/>
                                <label className="text" for="sales">Sales</label>
                                <input type="checkbox" id="finance" name="department" value="Finance" ref={this.departmentRef3} onChange={this.getChecked}/>
                                <label className="text" for="finance">Finance</label>
                                <input type="checkbox" id="engineer" name="department" value="Engineer" ref={this.departmentRef4} onChange={this.getChecked}/>
                                <label className="text" for="engineer">Engineer</label>
                                <input type="checkbox" id="others" name="department" value="Others" ref={this.departmentRef5} onChange={this.getChecked}/>
                                <label className="text" for="others">Others</label>
                            </div>
                    </div>

                    <div className="row-content">
                            <label className="label text" for="salary">Salary: </label>
                            <input className="input" type="text" name="salary" id="salary" value={this.state.salary} onChange={this.changeValue}/>
                        </div>

                         {/* <div className="row-content">
                            <label className="label text" htmlFor="startDate">Start Date</label>
                            <select onChange={this.changeValue} id="day " name='day'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                            <select onChange={this.changeValue} id="month " name='month'>
                                <option value="Jan">January</option>
                                <option value="Feb">February</option>
                            </select>
                            <select onChange={this.changeValue} id="year " name='year'>
                            <option value="2020">2020</option>
                            </select> */}
                            
                            
                            <div className="row-content">
                            <label className="label text" htmlFor="startDate">Start Date</label>
                            <div id="date">
                                <select name="Day" id="day" onChange={this.changeValue}>
                                <option value="Day">Day</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>                                            
                                </select>
                                <select name="Month" id="month" onChange={this.changeValue}>
                                <option value="Month">Month</option>

                                    <option value="Jan">January</option>
                                    <option value="Feb">Febuary</option>
                                    <option value="Mar">March</option>
                                    <option value="Apr">April</option>
                                    <option value="May">May</option>
                                    <option value="Jun">June</option>
                                    <option value="Jul">July</option>
                                    <option value="Aug">August</option>
                                    <option value="Sep">September</option>
                                    <option value="Oct">October</option>
                                    <option value="Nov">November</option>
                                    <option value="Dec">December</option>
                                </select>
                                <select name="Year" id="year" onChange={this.changeValue}>
                                <option value="Year">Year</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                </select>
                            </div>
                            <error-output className="date-error" for="startDate"></error-output>
                        </div>

                        <div className="row-content">
                            <label className="label text" for="notes">Notes</label>
                            <textarea name="notes" id="notes" className="input" value={this.state.notes} onChange={this.changeValue} placeholder="" style={{height: 100}}></textarea>
                        </div>

                        <div className="button-content">
                            <a href="/Home" className="resetButton button cancelButton">Cancel</a>
                            <div className="submit-reset">
                                <button type="submit" className="button submitButton" id="submitButton">Submit</button>
                                <button type="reset" className="resetButton button">Reset</button>
                            </div>
                        </div>

                </form>

            </div>
  </div>
        )
    }
}

export default Payrollform;