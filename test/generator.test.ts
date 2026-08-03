import { strict as assert } from "node:assert";
import { test } from "node:test";

import { generatePassword } from "../src/generator.js";


test("should generate password with correct length", () => {
  const password = generatePassword(12);

  assert.equal(password.length, 12);
});


test("should generate different passwords", () => {
  const password1 = generatePassword(12);
  const password2 = generatePassword(12);

  assert.notEqual(password1, password2);
});