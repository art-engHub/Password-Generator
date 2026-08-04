# 🔐 Password Generator

A simple and secure password generator built with **TypeScript** and **Node.js**.

This project generates random passwords using Node.js crypto utilities and provides a simple CLI experience.

## ✨ Features

* Generate random passwords
* Custom password length
* Includes:

  * Lowercase letters (`a-z`)
  * Uppercase letters (`A-Z`)
  * Numbers (`0-9`)
  * Symbols (`!@#$%^&*`)
* Secure random generation using `crypto.randomInt`
* Lightweight and fast CLI application

## 🛠️ Tech Stack

* TypeScript
* Node.js
* Node.js Crypto API
* npm
* Git & GitHub

## 📂 Project Structure

```text
password-generator/
│
├── src/
│   ├── index.ts
│   └── generator.ts
├── test/
│   └── generator.test.ts
│
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/art-engHub/Password-Generator.git
```

Go to the project directory:

```bash
cd Password-Generator
```

Install dependencies:

```bash
npm install
```

## ▶️ Run the Project

Start the project in development mode:

```bash
npm run dev
```

Example output:

```text
Generated Password:
G7@kP2!xLm9#Qa4$
```

test output:

```text
✔ should generate password with correct length (2.3047ms)
✔ should generate different passwords (0.3515ms)
ℹ tests 2
ℹ suites 0
ℹ pass 2
```

## 🏗️ Build

Compile TypeScript:

```bash
npm run build
```

Run the compiled version:

```bash
npm start
```

## 🔒 Security

This project uses:

```ts
crypto.randomInt()
```

instead of:

```ts
Math.random()
```

because cryptographic randomness is more suitable for password generation.

## 🤝 Contribution

Contributions are welcome.

You can:

* Create a new branch
* Make your changes
* Open a Pull Request

Example:

```bash
git checkout -b feature/new-feature
```

## 📌 Future Improvements

* Add custom character selection
* Add password strength checker
* Add CLI arguments
* Add unit tests
* Add interactive prompts

## 📄 License

This project is licensed under the MIT License.
