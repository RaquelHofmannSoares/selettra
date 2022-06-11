import * as yup from "yup";

export const createEventSchema = yup.object().shape({
    matricula: yup.string().min(3).max(20).required(),
    type: yup.number().required(),
    description: yup.string().min(3).max(4000).required(),
    value: yup.string(),
    oldValue: yup.string(),
    eventDate: yup.date().required(),
});
