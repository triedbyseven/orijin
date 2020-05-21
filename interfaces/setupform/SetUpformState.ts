export interface Step {
    id: number;
    index: number;
    step: any;
}

export interface InputErrors {
    firstName: boolean;
    lastName: boolean;
    email: boolean;
    companyName: boolean;
    username: boolean;
    password: boolean;
}