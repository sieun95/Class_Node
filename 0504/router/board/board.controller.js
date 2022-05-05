const items = []

const list = (req, res) => {
    res.render('board/list')
}

const view = (req, res) => {
    console.log('view :', req.query.name)

    res.render('board/view', {
        name:req.query.name
    })
}

const write = (req, res) => {
    res.render('board/write')
}

const update = (req, res) => {
    console.log('update : ', req.query.name)
    res.render('board/update', {
        name:req.query.name
    }) 
}

const writeAction = (req, res) => {
    console.log(req.body.subject, req.body.content)
    // db 저장시키면 됨

    const { subject, content } = req.body
    const obj = { subject, content }
    items.push(obj)     // [] => [{subject: 'asdfasdf', content: 'asdfasdf'}]
    res.redirect('/board/view?index='+items.length)
}

const updateAction = (req, res) => {
    // 여기서 sieun이라는 정보를 가져오기
    console.log("수정하기 버튼",req.body.name)
    res.redirect('/board/view?name='+req.body.name)
}

const deleteAction = (req, res) => {
    res.redirect('/board/list')
}

module.exports = {
    list,
    view,
    write,
    update,
    writeAction,
    updateAction,
    deleteAction,
}