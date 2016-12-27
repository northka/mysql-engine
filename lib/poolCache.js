/**
 * Created by northka.chen on 2016/12/27.
 */
const poolCache = []
module.exports = {
    addPool: function (pool) {
        const length = poolCache.length
        for (let i = 0; i < length; i++) {
            if (poolCache[i].id == pool.id) {
                throw new Error('pool 重复')
            }
        }
        poolCache.push(pool)
    }
}