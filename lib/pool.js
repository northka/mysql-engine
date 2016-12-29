/**
 * Created by northka.chen on 2016/12/27.
 */
const mysql     = require('mysql')

module.exports = function (config) {
    let pool = mysql.createPool(config)
    pool.id = config.id
   return pool
}