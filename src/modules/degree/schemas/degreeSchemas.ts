import * as yup from "yup";

export const createDegreeSchema = yup.object().shape({
    matricula: yup.string().min(3).max(20).required(),
    description: yup.string().min(3).max(4000).required(),
    finishedAt: yup.date().required(),
});
