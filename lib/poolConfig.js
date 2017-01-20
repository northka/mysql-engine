/**
 * Created by northka.chen on 2016/12/28.
 */
const pool = require('./pool')
const poolCache = require('./poolCache')

module.exports = function (config) {
    if(!config.id){
        throw new Error('Pool need id')
    }
    if(!config.option.database){
        throw new Error('It need  parameter(database) to initialize a pool ')
    }
    let initialConfigure
    if(config.option.socketPath){
        initialConfigure = {
            socketPath         : config.option.socketPath,
            user               : config.option.user,
            password           : config.option.password,
            database           : config.option.database,
            charset            : config.option.charset,
            timezone           : config.option.timezone,
            acquireTimeout     : config.option.acquireTimeout,
            waitForConnections : config.option.waitForConnections,
            connectionLimit    : config.option.connectionLimit,
            queueLimit         : config.option.queueLimit,
            insecureAuth       : config.option.insecureAuth,
            typeCast           : config.option.typeCast,
            queryFormat        : config.option.queryFormat,
            supportBigNumbers  : config.option.supportBigNumbers,
            bigNumberStrings   : config.option.bigNumberStrings,
            dateStrings        : config.option.dateStrings,
            debug              : config.option.debug,
            trace              : config.option.trace,
            multipleStatements : config.option.multipleStatements,
            flags              : config.option.flags,
            ssl                : config.option.ssl,
            acquireTimeout     : config.option.acquireTimeout,
            waitForConnections : config.option.waitForConnections,
            connectionLimit    : config.option.connectionLimit,
            queueLimit         : config.option.queueLimit
        }
    }else{
        initialConfigure ={
            host               : config.host,
            port               : config.port,
            user               : config.option.user,
            password           : config.option.password,
            database           : config.option.database,
            charset            : config.option.charset,
            timezone           : config.option.timezone,
            acquireTimeout     : config.option.acquireTimeout,
            waitForConnections : config.option.waitForConnections,
            connectionLimit    : config.option.connectionLimit,
            queueLimit         : config.option.queueLimit,
            insecureAuth       : config.option.insecureAuth,
            typeCast           : config.option.typeCast,
            queryFormat        : config.option.queryFormat,
            supportBigNumbers  : config.option.supportBigNumbers,
            bigNumberStrings   : config.option.bigNumberStrings,
            dateStrings        : config.option.dateStrings,
            debug              : config.option.debug,
            trace              : config.option.trace,
            multipleStatements : config.option.multipleStatements,
            flags              : config.option.flags,
            ssl                : config.option.ssl,
            acquireTimeout     : config.option.acquireTimeout,
            waitForConnections : config.option.waitForConnections,
            connectionLimit    : config.option.connectionLimit,
            queueLimit         : config.option.queueLimit
        }
    }
    poolCache.addPool(pool(initialConfigure))
}
