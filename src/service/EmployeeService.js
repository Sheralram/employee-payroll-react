import axios from 'axios';

class EmployeeService {
    baseUrl = "http://localhost:9090/employee-payroll-app";

    addEmployee(data){
        return axios.post(`${this.baseUrl}/create`,data);
    }

    getAllEmployees(){
        return axios.get(`${this.baseUrl}/get-all-employee`);
    }

    getEmployee(employee_id){
        return axios.get(`${this.baseUrl}/get/{employeeId}`)
    }
}
export default new EmployeeService();