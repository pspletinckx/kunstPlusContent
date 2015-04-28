var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/organisatie', router);
};

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('organisatie', {
      title: 'Generator-Express MVC',
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