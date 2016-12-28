/**
 * Created by northka.chen on 2016/12/28.
 */
const pool = require('./pool')

module.exports = function (config) {
    if(config.id){
        throw new Error('Pool need id')
    }
    if(config.database){
        throw new Error('It need  parameter(database) to initialize a pool ')
    }
    let initialConfigure
    if(config.socketPath){
        initialConfigure = {
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
        }
    }else{
        initialConfigure ={
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
        }
    }
    pool.initPool(initialConfigure)
}
