The issue arises when attempting to use Firebase's `FieldValue.serverTimestamp()` within a transaction.  The problem is that within the transaction's callback function, `FieldValue.serverTimestamp()` sometimes returns a value of `undefined` or null instead of the expected timestamp object.  This leads to unpredictable behavior and data inconsistencies in the database.