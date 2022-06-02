import * as yup from "yup";

export const createDepartmentSchema = yup.object().shape({
    name: yup.string().min(3).max(80).required(),
});
