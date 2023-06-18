export interface createUserDTO {
    username: string,
    password: string,
    type_user : TypeUser
}

export enum TypeUser {
    user= "USER",
    role= "ADMIN"
}