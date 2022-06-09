import * as yup from "yup";

export const createDegreeSchema = yup.object().shape({
    name: yup.string().min(3).max(80).required(), 
    description: yup.string().min(3).max(4000).required(),
});

