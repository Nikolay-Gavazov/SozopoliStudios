export interface User{
    email: string;
    password: string;
    _id: string;
    created_at: string;
    updated_at: string;
    __v:number;
};

export interface UserToken {
    accessToken: string;
    userDetails: User;
};