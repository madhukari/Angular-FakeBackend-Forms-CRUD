import {InMemoryDbService} from 'angular-in-memory-web-api';
// import {User} from './user-data';
import { User } from '../_models/index';



export class UserData implements InMemoryDbService {
  createDb(){
    const users: User[]=[
            
            {
                firstName: "madhu",
                lastName: "kari",
                gender: "male",
                employeeType: "user",
                username: "ui.madhu@gmail.com",
                password: "123",
                confirmPassword: "123",
                id: 2,
                LeaveObject:{}
            },
            {
                firstName: "madhu",
                lastName: "kari",
                employeeType: "user",
                gender: "male",
                username: "ui.madhu2@gmail.com",
                password: "123",
                confirmPassword: "123",
                id: 3,
                LeaveObject:{}
            },
            {
                firstName: "reddy",
                lastName: "vijay",
                employeeType: "manager",
                gender: "male",
                username: "reddy@gmail.com",
                password: "123",
                confirmPassword: "123",
                id: 4,
                LeaveObject:{}
            },
            {
                firstName: "madhu",
                lastName: "kari",
                employeeType: "user",
                gender: "male",
                username: "mm.madhu@gmail.com",
                password: "123",
                confirmPassword: "123",
                id: 5,
                LeaveObject:{}
            },
            {
                firstName: "vijay",
                lastName: "r",
                employeeType: "user",
                gender: "male",
                username: "vijay@gmail.com",
                password: "123",
                confirmPassword: "123",
                id: 6,
                LeaveObject:{}
            },
            {
                employeeType: "user",
                firstName: "chanti",
                lastName: "k",
                gender: "male",
                username: "chanti@gmail.com",
                password: "123",
                confirmPassword: "123",
                id: 7,
                LeaveObject:{}
            },
            {
                employeeType: "user",
                firstName: "bhav",
                lastName: "l",
                gender: "male",
                username: "bhavagna@gmail.com",
                password: "123",
                confirmPassword: "123",
                id: 8,
                LeaveObject:{}
            },
            {
                employeeType: "user",
                firstName: "nn",
                lastName: "nn",
                gender: "male",
                username: "nn@gmail.com",
                password: "123",
                confirmPassword: "123",
                id: 9,
                LeaveObject:{}
            },
            {
                employeeType: "user",
                firstName: "mm",
                lastName: "mm",
                gender: "male",
                username: "mm1@gmail.com",
                password: "123",
                confirmPassword: "123",
                LeaveObject: {},
                id: 10
            },
            {
                employeeType: "user",
                firstName: "kommi",
                lastName: "pl",
                gender: "male",
                username: "komminenipalem@gmail.com",
                password: "123",
                confirmPassword: "123",
                LeaveObject: {},
                id: 11
            },
            {
                employeeType: "user",
                firstName: "check1",
                lastName: "1",
                gender: "male",
                username: "check1@gmail.com",
                password: "123",
                confirmPassword: "123",
                LeaveObject: {},
                id: 12
            },
            {
                employeeType: "user",
                firstName: "check2",
                lastName: "2",
                gender: "male",
                username: "check2@gmail.com",
                password: "123",
                confirmPassword: "123",
                LeaveObject: {},
                id: 13
            },
            {
                employeeType: "user",
                firstName: "demo",
                lastName: "morning",
                gender: "male",
                username: "demo@gmail.com",
                password: "123",
                confirmPassword: "123",
                LeaveObject: {},
                id: 14
            },
            {
                employeeType: "manager",
                firstName: "demomanager",
                lastName: "m",
                gender: "male",
                username: "demomanager@gmail.com",
                password: "123",
                confirmPassword: "123",
                LeaveObject: {},
                id: 15
            },
            {
                employeeType: "user",
                firstName: "Vijji Reddy",
                lastName: "M",
                gender: "male",
                username: "vijjireddy@gmail.com",
                password: "123",
                confirmPassword: "123",
                LeaveObject: {},
                id: 16
            }
    ];
    return {users};
  }
}