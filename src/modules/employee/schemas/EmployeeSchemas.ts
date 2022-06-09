import * as yup from "yup";

export const createEmployeeSchema = yup.object().shape({
    matricula: yup.string().min(3).max(20).required(),
    name: yup.string().min(3).max(80).required(),
    birthdate: yup.date().required(),
    wage: yup.number().required(),
    cargoId: yup.number().required(),
    setorId: yup.number().required(),
    status: yup.number().required(),
});
