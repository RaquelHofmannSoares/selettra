import { app } from "./app";

const url = process.env.BASE_URL || "localhost";
const port = process.env.PORT || 3333;

app.listen(3333, () => {
    console.log("Servidor iniciado!", `http://${url}:${port}`);
});
