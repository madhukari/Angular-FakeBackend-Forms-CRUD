export class User {
    id: any;
    username: string;
    password: string;
    confirmPassword:string;
    mobileNumber:any;
    firstName: string;
    lastName: string;
    gender:string;
    employeeType: string;
    LeaveObject:LeaveObject;
}
export class LeaveObject {
    userName: string;
    dob:string;
    employeeType:string;
    leaveType:string;
}