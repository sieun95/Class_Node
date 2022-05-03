const items = []

const list = (req, res) => {
    res.render('board/list')
}

const view = (req, res) => {
    const { index } = req.query
    console.log(index)

    res.render('board/view', {
        item:items[index-1]
    })
}

const write = (req, res) => {
    res.render('board/write')
}

const update = (req, res) => {
    res.render('board/update')
}

const writeAction = (req, res) => {
    console.log(req.body.subject, req.body.content)
    // db 저장시키면 됨

    const { subject, content } = req.body
    const obj = { subject, content }
    items.push(obj)     // [] => [{subject: 'asdfasdf', content: 'asdfasdf'}]
    res.redirect('/board/view?index='+items.length)
}
module.exports = {
    list,
    view,
    write,
    update,
    writeAction,
}