interface ICreateEventDTO {
    matricula: string;
    type: number;
    description: string;
    value: number;
    oldValue: number;
    eventDate: Date;
    createdBy: string;
    updatedBy: string;
}
export { ICreateEventDTO };
