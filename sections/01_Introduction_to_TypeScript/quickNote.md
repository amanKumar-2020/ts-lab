Quick Notes

01. Node IPC (Inter-Process Communication)

Node IPC (Inter-Process Communication) is a mechanism that allowsmultiple Node.js processes to communicate and exchange data. It iscommonly used when an application creates child processes orworker processes to perform tasks in parallel.

Example: parent.js and child.js

02. VS Code Built-in Node (Linux)

Create an alias to use VS Code's built-in Node.js runtime:

alias vsnode='ELECTRON_RUN_AS_NODE=1 /usr/share/code/code'      // this is for linux

alias vsnode = 'ELECTRON_RUN_AS_NODE=1 "{vscode path }"    // for window 

This lets you run VS Code's bundled Node.js instead of your system-installed Node.

03. // @ts-check

Add this comment at the top of a JavaScript file:

// @ts-check

It enables TypeScript type checking for JavaScript files withoutconverting them to .ts, helping catch common type-related mistakeswhile you code.