const pool = require('../../db.js');

const list = async(req, res) => {
    try{
        const [items] = await pool.query(`SELECT * FROM board`)
        res.render('board/list', { items })
    }
    catch(e) {
        console.error(e)
    }
};

const view = async(req, res) => {
    try {
        console.log(req.query)
        const [[items]] = await pool.query(`SELECT * FROM board WHERE idx=${req.query.idx}`)
        res.render(`board/view`, {
            items:items
        })
        
    } catch (e) {
        console.error(e)
    }
};

const write = (req, res) => {
    res.render('board/write')
};

const modify = (req, res) => {
    res.render('board/modify')
};

const writeAction = async(req, res) => {
    const { subject, content, name } = req.body
    try {
        const [items] = await pool.query(`INSERT INTO board(subject, content, name) VALUES('${subject}', '${content}', '${name}')`);
        console.log(items)
        res.redirect(`/board/view?idx=${items.insertId}`)
    }
    catch(e) {
        console.error(e)
    }
}

const modifyAction = (req, res) => {
    res.redirect('/board/view')
}

const deleteAction = (req, res) => {
    res.redirect('/board/list')
}


module.exports = {
    list,
    view,
    write,
    modify,
    writeAction,
    modifyAction,
    deleteAction,
};