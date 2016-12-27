/**
 * Created by northka.chen on 2016/12/27.
 */
const mysql     = require('mysql')
const poolCache = require('./poolCache')

module.exports = {
    initPool: function (config) {
        let pool = null
        if(config.socketPath){
            pool = mysql.createPool({
                socketPath         : config.socketPath,
                user               : config.user,
                password           : config.password,
                database           : config.database,
                charset            : config.charset,
                timezone           : config.timezone,
                acquireTimeout     : config.acquireTimeout,
                waitForConnections : config.waitForConnections,
                connectionLimit    : config.connectionLimit,
                queueLimit         : config.queueLimit,
                insecureAuth       : config.insecureAuth,
                typeCast           : config.typeCast,
                queryFormat        : config.queryFormat,
                supportBigNumbers  : config.supportBigNumbers,
                bigNumberStrings   : config.bigNumberStrings,
                dateStrings        : config.dateStrings,
                debug              : config.debug,
                trace              : config.trace,
                multipleStatements : config.multipleStatements,
                flags              : config.flags,
                ssl                : config.ssl
            })
        }else {
            pool = mysql.createPool({
                host               : config.host,
                port               : config.port,
                user               : config.user,
                password           : config.password,
                database           : config.database,
                charset            : config.charset,
                timezone           : config.timezone,
                acquireTimeout     : config.acquireTimeout,
                waitForConnections : config.waitForConnections,
                connectionLimit    : config.connectionLimit,
                queueLimit         : config.queueLimit,
                insecureAuth       : config.insecureAuth,
                typeCast           : config.typeCast,
                queryFormat        : config.queryFormat,
                supportBigNumbers  : config.supportBigNumbers,
                bigNumberStrings   : config.bigNumberStrings,
                dateStrings        : config.dateStrings,
                debug              : config.debug,
                trace              : config.trace,
                multipleStatements : config.multipleStatements,
                flags              : config.flags,
                ssl                : config.ssl
            })
        }
        poolCache.addPool(pool)
    }
}