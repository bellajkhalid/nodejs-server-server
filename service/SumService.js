'use strict';
const { pool, TABLE } = require('../db_Floder/db');

/*
 * Data in pgAdmin with sum of var a and var b.
 * Issues a new bad to the world state with the given details. 
 * body Sumdata Sum object
 * returns Message
 **/
exports.createPGPOST = function(body) {
  console.log("Sumservice file:");
    return new Promise(async function(resolve, reject) {
      try {
        const { a, b} = body;
        const results = parseInt(a) + parseInt(b);
        // Connect to the database
        const client = await pool.connect();
  
        // Execute the SQL query to insert data into the table
        await pool.query(`INSERT INTO ${TABLE} (a, b, ab) VALUES ($1, $2, $3)`, [a, b, results]);
  
        // Release the database client connection
        client.release();
  
        // Send success response to the client
        const message = `Sum of ${a} and ${b} is ${results} saved in the database`;
        resolve({ message: message, status: 201 });
      } catch (err) {
        // Handle error if there is any while connecting to or querying the database
        console.error('Error while connecting to the database:', err);
        reject(err);
      }
    });
  };
  

