import * as yup from 'yup';

export const setupFormStepOneSchema = yup.object().shape({
    firstName: yup.string().matches(/^[A-Za-z]+$/, { excludeEmptyString: true }).required(),
    lastName: yup.string().matches(/^[A-Za-z]+$/, { excludeEmptyString: true }).required()
})

export const setupFormStepTwoSchema = yup.object().shape({
    companyName: yup.string().required(),
    email: yup.string().email().required(),
    username: yup.string().matches(/^[A-Za-z0-9]+$/, { excludeEmptyString: true }).min(4).max(25).required(),
    password: yup.string().matches(/^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[0-9])/).min(5).required(),
})