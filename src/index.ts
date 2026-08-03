import { generatePassword } from "./generator";

const password = generatePassword(16);

console.log("Generated Password:");
console.log(password);