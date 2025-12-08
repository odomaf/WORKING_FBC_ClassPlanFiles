// Demo — Using process.argv in Node.js

// ------------------------------------------------------------
// process.argv gives you access to command-line arguments.
// It returns an array where:
//   index 0 → path to the Node executable
//   index 1 → path to the script being executed
//   index 2+ → arguments passed by the user
// ------------------------------------------------------------

console.log("Full argv array:");
console.log(process.argv);

// ------------------------------------------------------------
// Example: reading individual arguments
// Try running:
//   node index.js hello 42 true
// ------------------------------------------------------------

const userArg1 = process.argv[2];
const userArg2 = process.argv[3];
const userArg3 = process.argv[4];

console.log("\nUser arguments:");
console.log("Arg 1:", userArg1);
console.log("Arg 2:", userArg2);
console.log("Arg 3:", userArg3);

// ------------------------------------------------------------
// Example: using rest syntax to collect all user arguments
// Useful for commands like:
//   node index.js buy milk eggs flour
// ------------------------------------------------------------

const userArgs = process.argv.slice(2);

console.log("\nAll user arguments (slice):");
console.log(userArgs);

// ------------------------------------------------------------
// Helpful demo pattern: custom flag parsing
// For example:
//   node index.js --name=Alice --debug
// ------------------------------------------------------------

const parsedFlags = userArgs.map(arg => {
    const [key, value] = arg.split("=");
    return { key, value: value ?? true };
});

console.log("\nParsed flags:");
console.log(parsedFlags);

// ------------------------------------------------------------
// Instructor talking points:
// ------------------------------------------------------------
// • process.argv is the entry point for making CLI tools in Node.
// • slice(2) is a common pattern to get ONLY user-provided args.
// • Arguments always come in as strings — convert as needed.
// • Flag-style arguments (--mode=dev) are parsed manually or via libraries.
// • This prepares students for building real CLI apps later.
