import * as yup from 'yup';

export const setupFormStepOneSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required()
})

export const setupFormStepTwoSchema = yup.object().shape({
    companyName: yup.string().required(),
    email: yup.string().email().required(),
    username: yup.string().required(),
    password: yup.string().required(),
})