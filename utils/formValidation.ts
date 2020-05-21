import * as yup from 'yup';

export const setupFormSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    companyName: yup.string().required(),
    email: yup.string().email().required(),
    username: yup.string().required(),
    password: yup.string().required(),

})