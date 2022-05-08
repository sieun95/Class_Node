const mysql = require('mysql2/promise');     // object

const pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'5962',
    database:'homepage'
});

async function select() {
    try{
        
        const sql = `SELECT * FROM board`
        const [result] = await pool.query(sql)  // pool.query는 
        console.log(result)
    } catch (e) {
        console.log('error')
    } finally {
        console.log('무조건 실행')
    }

}
select()

module.exports = pool