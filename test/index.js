/**
 * Created by northka.chen on 2017/2/17.
 */
const mysql = require('mysql')

let connection = mysql.createConnection({
    host              : '10.10.62.102',
    database          : 'ycc_operations',
    password          : 'Ycc_operations111',
    user              : 'ycc_operations',
    supportBigNumbers : true,
    bigNumberStrings  : true,
    connectionLimit   : 30
})
// connection.connect();
//
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });
//
// connection.end();

connection.connect();

let query = connection.query('SELECT * FROM T_TAG WHERE parent_id = 0')
query
    .on('error', function(err) {
        console.log(err)
        // Handle error, an 'end' event will be emitted after this as well
    })
    .on('fields', function(fields) {
        console.log('fields')
        console.log(fields)
        // the field packets for the rows to follow
    })
    .on('result', function(row) {
        // Pausing the connnection is useful if your processing involves I/O
        // connection.pause();
        //
        // processRow(row, function() {
        //     connection.resume();
        // });
        console.log('result')
        console.log(row)
    })
    .on('end', function() {
        connection.destroy()
        // all rows have been received
    });
