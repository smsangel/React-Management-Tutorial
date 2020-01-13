const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '서민수1',
            'birthday': '11111',
            'gender': '여자',
            'job': '프리랜서'
        },
        {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': '서민수2',
        'birthday': '22222',
        'gender': '남자',
        'job': '개인사업'
        },
        {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': '서민수3',
        'birthday': '22222',
        'gender': '남자',
        'job': '회사원'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
