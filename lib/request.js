/**
 * Created by northka.chen on 2016/12/27.
 */
const mysql = require('mysql')
const poolCache  = require('./poolCache')
const mysqlConnection = require('./mysqlConnection')
function request(reqObj, successCallback, errorCallback) {
    if(this.option.isPool == true){
        let pool = poolCache.getPool(this.poolId)
        pool.getConnection(function (err, connection) {
            query.call(this, connection, reqObj,successCallback, errorCallback)
        })
    }else{
        query.call(this, mysqlConnection(this.connectionConfig), reqObj, successCallback, errorCallback)
    }

}
function query(connection, reqObj, successCallback, errorCallback) {
    let self   = this,
        sql    = reqObj.sql || this.sql,
        params = reqObj.params
    sql = mysql.format(sql, params, reqObj.stringifyObjects, reqObj.timezone)
    connection.query(sql, function (err,rows) {
        if(err){
            errorCallback(err)
        }
        successCallback(rows)
        if(self.isPool){
            connection.destroy()
        }else{
            connection.release()
        }
    })
    connection.end(function (err) {
        errorCallback(err)
    })
}
module.exports = request