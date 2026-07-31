# TypeScript Compilation Notes

## 1. Compile a Single TypeScript File

```bash
tsc fileName.ts
```

* Compiles the `.ts` file.
* Generates the corresponding `.js` file in the same directory.

**Example**

```bash
tsc app.ts
```

---

## 2. Type Check Only (Don't Generate JavaScript)

```bash
tsc fileName.ts --noEmit
```

* Checks the code for TypeScript errors.
* Does **not** generate a `.js` file.
* Useful before committing code or during development.

**Example**

```bash
tsc app.ts --noEmit
```

---

## 3. Generate JavaScript Only If There Are No Errors

```bash
tsc fileName.ts --noEmitOnError
```

* Compiles the file only if there are **no TypeScript errors**.
* If any error exists, no `.js` file is generated.

**Example**

```bash
tsc app.ts --noEmitOnError
```

---

## 4. Compile an Entire Project

```bash
tsc
```

* Compiles all TypeScript files based on the `tsconfig.json` configuration.
* Recommended for projects instead of compiling files one by one.

---

# Useful Commands

## Check Installed TypeScript Version

```bash
tsc --version
```

or

```bash
tsc -v
```

---

## Watch Mode (Automatically Recompile)

```bash
tsc --watch
```

or

```bash
tsc -w
```

* Watches for file changes.
* Automatically recompiles whenever you save a `.ts` file.
* Very useful during development.

---

## Initialize a TypeScript Project

```bash
tsc --init
```

* Creates a `tsconfig.json` file.
* This file stores your TypeScript compiler settings.

---

# Common Compiler Options

| Option              | Description                                      |
| ------------------- | ------------------------------------------------ |
| `--noEmit`          | Type-check only; don't generate JavaScript.      |
| `--noEmitOnError`   | Generate JavaScript only if there are no errors. |
| `--watch` or `-w`   | Recompile automatically when files change.       |
| `--version` or `-v` | Show installed TypeScript version.               |
| `--init`            | Create a `tsconfig.json` file.                   |

---

# Notes

* `.ts` → TypeScript source file.
* `.js` → JavaScript file generated after compilation.
* For small programs, you can compile individual files.
* For real projects, use a **`tsconfig.json`** and simply run:

  ```bash
  tsc
  ```
* If you're using VS Code, TypeScript errors are often shown live even before running `tsc`.
