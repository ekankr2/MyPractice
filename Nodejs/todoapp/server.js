const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
const MongoClient = require('mongodb').MongoClient
app.set('view engine', 'ejs')

var db;

app.listen(8080, function () {
    console.log('listening on 8080')
})

MongoClient.connect('mongodb+srv://admin:qwer1234@cluster0.7v3za.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function (에러, client) {

    if (에러) return console.log(에러)
    db = client.db('todoapp')
})


app.get('/pet', function (요청, 응답) {
    응답.send('펫용품 쇼핑할 수 있는 페이지입니다.')
})

app.get('/beauty', function (요청, 응답) {
    응답.send('뷰티용품 쇼핑할 수 있는 페이지입니다.')
})

app.get('/', function (요청, 응답) {
    응답.sendFile(__dirname + '/index.html')
})

app.get('/write', function (요청, 응답) {
    응답.sendFile(__dirname + '/write.html')
})

app.post('/add', function (요청, 응답) {
    응답.send('전송완료')
    db.collection('counter').findOne({name: '게시물갯수'}, function (에러, 결과) {
        console.log(결과.totalPost)
        var 총게시물갯수 = 결과.totalPost

        db.collection('post').insertOne({_id: 총게시물갯수 + 1, 제목: 요청.body.title, 날짜: 요청.body.date},
            function (에러, 결과) {
                console.log('저장완료')
                // $set : 변경   // $inc : 증가
                db.collection('counter').updateOne({name: '게시물갯수'}, {$inc: {totalPost: 1}}, function (에러, 결과) {
                    if(에러){ return console.log(에러)}

                })
            })
    })
})


app.get('/list', function (요청, 응답) {

    db.collection('post').find().toArray(function (에러, 결과) {
        console.log(결과)
        응답.render('list.ejs', {posts: 결과})
    });

})

app.delete('/delete', function (요청, 응답){
    console.log(요청.body)
})
