interface ICreateUserTokenDTO {
    username: string;
    refreshToken: string;
    expiresDate: Date;
    createdBy: string;
    updatedBy: string;
}
export { ICreateUserTokenDTO };
