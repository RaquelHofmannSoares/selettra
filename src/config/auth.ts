import dotenv from "dotenv";

dotenv.config();

const auth = {
    secretToken: process.env.APP_SECRET || "defaultSecretToken",
    secretRefreshToken:
        process.env.APP_REFRESH_SECRET || "defaultSecretRefreshToken",
    expiresInToken: "20s",
    expiresInRefreshToken: "2s",
    expiresInRefreshTokenInDays: 1,
};

export { auth };
