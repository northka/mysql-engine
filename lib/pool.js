/**
 * Created by northka.chen on 2016/12/27.
 */
const mysql     = require('mysql')
const poolCache = require('./poolCache')

module.exports = function (config) {
    let pool = mysql.createPool(config)
    pool.id = config.id
    poolCache.addPool(pool)
}