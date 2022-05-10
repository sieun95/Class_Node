const pool = require('../../db.js');

const list = async(req, res) => {
    try{
        const [items] = await pool.query(`SELECT * FROM board`)
        res.render('board/list', {
             items 
        })
    }
    catch(e) {
        console.error(e)
    }
};

const view = async(req, res) => {
    try {
        console.log('view console : ', req.query)
        const [items] = await pool.query(`SELECT * FROM board WHERE idx=${req.query.idx}`)
        res.render('board/view', {
            items:items[0]
        })
    } 
    catch (e) {
        console.error(e)
    }
};

const write = (req, res) => {
    res.render('board/write')
};

const modify = async (req, res) => {
    try{
        const [items] = await pool.query(`SELECT * FROM board WHERE idx=${req.query.idx}`)
        res.render('board/modify', {
            items:items[0]
        })
    }
    catch(e) {
        console.log(e)
    }
   
};

const writeAction = async(req, res) => {
    const { subject, content, name } = req.body
    try {
        const [items] = await pool.query(`INSERT INTO board(subject, content, name) VALUES('${subject}', '${content}', '${name}')`);
        res.redirect(`/board/view?idx=${items.insertId}`)
    }
    catch(e) {
        console.error(e)
    }
}

const modifyAction = async (req, res) => {
    console.log('modifyAction console : ',req.body)
    const { content, subject, idx} = req.body
    try {
        
        const [items] = await pool.query(`UPDATE board SET content='${content}', subject='${subject}' WHERE idx='${idx}'`)
        res.redirect(`/board/view?idx=${req.body.idx}`)
    }
    catch(e) {
        console.error(e)
    }
}

const deleteAction = async(req, res) => {
    try{
        const [items] = await pool.query(`DELETE FROM board WHERE idx=${req.query.idx}`)
        res.redirect('/board/list')
    }
    catch(e) {
        console.log(e)
    }
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