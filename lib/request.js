/**
 * Created by northka.chen on 2016/12/27.
 */
const mysql = require('mysql')
const poolCache  = require('./poolCache')
const mysqlConnection = require('./mysqlConnection')
function request(reqObj, successCallback, errorCallback) {
    let connection,self = this
    if(this.isPool == true){
        connection = poolCache.getPool(this.poolId)
    }else{
        connection = mysqlConnection(this.connectionConfig)
    }
    let sql    = reqObj.sql || this.sql
    let params = reqObj.params
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