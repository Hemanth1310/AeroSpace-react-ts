
export type status = 'Operational'| 'Idle'| 'Maintenance'| 'Error'
export type destination = 'Mars'| 'Jupiter'| 'Saturn'| 'Neptune'| 'Pluto'| 'Deep Space'
export type UserRole = 'admin'|'webuser'

export type AuthUser = {
    username:string;
    isLoggedIn:boolean;
    role: UserRole;
} 

export type dataEntries = {
    id:number;
    name:string;
    destination:destination;
    status: status;
    distance_ly:number;
    launch_date:string;
} 

export type data= dataEntries[]