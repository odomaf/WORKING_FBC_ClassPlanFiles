const mongoose = require("mongoose");

/**
 * TODO:
 * Create a subdocument schema named bookSchema.
 * It must have:
 *  - title (required string)
 *  - price (number)
 */

/**
 * TODO:
 * Create a parent schema named librarySchema.
 * It must have:
 *  - name (required string)
 *  - books (array of bookSchema subdocuments)
 *  - lastAccessed (default Date.now)
 */

/**
 * TODO:
 * Create an array of THREE book objects that match bookSchema.
 * Then create a Library document that includes those books.
 *
 * Hint: Library.create({ name: '...', books: [...] })
 */

module.exports = Library;
