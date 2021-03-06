var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/art', router);
};

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('art', {
      title: 'Duiven in Mausoleum van Galla Placidia',
      author: 'onbekend',
      articles: articles
    });
  });
});
/*
var art = new Article;
art.title='First Title';
art.url='http://www.google.be';
art.text="Oh yea, that's it";
art.save();
*/