import { randomInt } from "node:crypto";

const characters =
    "abcdefghijklmnopqrstuvwxyz" +
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "0123456789" +
    "!@#$%^&*";

export function generatePassword(length: number): string {
    let password = "";

    for (let i = 0; i < length; i++) {
        const index = randomInt(0, characters.length);

        password += characters[index];
    }

    return password;
}