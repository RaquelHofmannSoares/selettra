import { hash, compare } from "bcryptjs";

class HashProvider {
    async generateHash(payload: string): Promise<string> {
        return hash(payload, 8);
    }
    async compareHash(payload: string, hash: string): Promise<boolean> {
        return compare(payload, hash);
    }
}
export { HashProvider };
