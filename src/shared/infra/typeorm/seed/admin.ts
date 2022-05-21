import { hash } from "bcryptjs";
import { createConnection } from "typeorm";

import { UserStatus } from "../../../../modules/users/enums/UserStatus";

async function create() {
    const conection = await createConnection();

    const password = await hash("123", 8);

    await conection.query(`
        INSERT INTO public."Users"
        (
            username,
            password,
            name,
            status,
            "createdAt",
            "createdBy",
            "updatedAt",
            "updatedBy",
            version
        )
        VALUES
        (
            'admin',
            '${password}',
            'admin',
            ${UserStatus.ACTIVE},
            now(),
            'admin',
            now(),
            'admin',
            1
        );
    `);

    await conection.close();
}

create()
    .then(() => console.log("Admin created"))
    .catch((err) => console.log(err.stack));
