import * as yup from "yup";

export const createUserSchema = yup.object().shape({
    username: yup.string().min(3).max(40).required(),
    password: yup.string().required(),
    name: yup.string().min(3).max(80).required(),
});
