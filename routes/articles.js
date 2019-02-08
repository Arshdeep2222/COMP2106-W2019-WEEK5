var express = require('express');
var router = express.Router();
var Article = require('../models/article');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const itemsPerPage = 10;
  const page = req.query.page || 1;
  const offset = (page - 1) * itemsPerPage;

  Article.find()
    .limit(itemsPerPage)
    .skip(offset)
    .then(articles => {
      res.render('articles', { articles });
    });
});

router.get('/create', function(req, res, next) {
  res.render('article-create', {});
});

router.post('/create', function(req, res, next) {
  const newArticle = new Article({ ...req.body, date: new Date() });
  newArticle.save(function(err) {
    if (err) res.json(err);
    //console
    res.send('Created Correctly');
  });
});

module.exports = router;
