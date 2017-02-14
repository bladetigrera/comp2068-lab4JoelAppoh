var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Family' });
});

//Add the nav pages
router.get('/lydia',function(req,res,next)
{
  //load the register.ejs
  res.render('lydia');
});

router.get('/ezekiel',function(req,res,next)
{
  //load the register.ejs
  res.render('ezekiel');
});

router.get('/francis',function(req,res,next)
{
  //load the register.ejs
  res.render('francis');
});

router.get('/cecilia',function(req,res,next)
{
  //load the register.ejs
  res.render('cecilia');
});

router.get('/stephanus',function(req,res,next)
{
  //load the register.ejs
  res.render('stephanus');
});

module.exports = router;
