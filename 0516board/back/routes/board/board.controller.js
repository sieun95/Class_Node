const list = (req, res) => {
    res.render('board/list')
};

const view = (req, res) => {
    res.render('board/view')
};

const write = (req, res) => {
    res.render('board/write')
};

const modify = (req, res) => {
    res.render('board/modify')
};



module.exports = {
    list,
    view,
    write,
    modify,
}