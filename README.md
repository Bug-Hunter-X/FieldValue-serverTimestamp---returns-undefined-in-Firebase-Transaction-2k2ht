# Firebase Transaction ServerTimestamp Bug

This repository demonstrates a bug encountered when using `FieldValue.serverTimestamp()` within a Firebase transaction.  The function inconsistently returns `undefined` instead of a timestamp object, leading to data inconsistencies.

## Steps to Reproduce

1. Clone this repository.
2. Install the Firebase SDK: `npm install firebase`
3. Configure your Firebase project and replace placeholders in `firebaseBug.js`.
4. Run `node firebaseBug.js` to observe the inconsistent behavior.

## Solution

A workaround is provided in `firebaseBugSolution.js`, which uses a separate function to get the server timestamp outside the transaction, ensuring a consistent timestamp is stored.