/**
 * Created by northka.chen on 2016/12/27.
 */
const mysql = require('mysql')

module.exports = function (config) {
    return mysql.createConnection(config)
}