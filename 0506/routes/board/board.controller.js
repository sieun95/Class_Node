const pool = require('../../db.js')


const list = async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT * FROM board`)
        res.render('board/list', {
            items:result,
        })
    } catch (e) {
        console.log(e)
    }
};

const view = (req, res) => {
    res.render('board/view')
};

module.exports = {
    list,
    view,
}