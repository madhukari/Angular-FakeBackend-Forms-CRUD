export class User {
    id: number;
    username: string;
    password: string;
    confirmPassword:string;
    mobileNumber:number;
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