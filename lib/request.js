/**
 * Created by northka.chen on 2016/12/27.
 */
const mysql = require('mysql')
const poolCache  = require('./poolCache')
const mysqlConnection = require('./mysqlConnection')
function request(reqObj, successCallback, errorCallback) {
    if(reqObj.useConnection){
        query.call(this, reqObj.connection, reqObj, successCallback, errorCallback)
    }
    if(this.option.isPool == true){
        let pool = poolCache.getPool(this.option.poolId)
        let self = this
        pool.getConnection(function (err, connection) {
            query.call(self, connection, reqObj,successCallback, errorCallback)
        })
    }else{
        query.call(this, mysqlConnection(this.connectionConfig), reqObj, successCallback, errorCallback)
    }

}
function query(connection, reqObj, successCallback, errorCallback) {
    let self   = this,
        sql    = reqObj.sql || this.option.sql,
        params = reqObj.params
        sql = mysql.format(sql, params, reqObj.stringifyObjects, reqObj.timezone)
        let sqlOption = {
            nestTables: reqObj.nestTables || this.option.nestTables || false,
            sql
        }
    connection.query(sqlOption, function (err,rows) {
        if(err){
            errorCallback(err)
        }
        successCallback(rows)
        if(reqObj.getConnection){
            reqObj.connection = connection
        }else {
            if (self.isPool) {
                connection.release()
            } else {
                connection.destroy()
            }
        }
    })
}
module.exports = request