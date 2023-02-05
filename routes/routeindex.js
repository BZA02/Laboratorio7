const { render } = require('ejs');
const express = require('express');
const router = express.Router();
//const Task = require('../model/task');

router.get('/', async function(req,res){
  var posts=await postMessage.find();
  res.render('index');
});


router.get('/newPost', async (req,res) =>{
  res.render('newPost');
});

router.get('/newPost', async (req,res) =>{
  var post = new this.post(req.body);
  await post.save();
  res.redirect('/')
});

router.get('/edit:id',async(req,res) =>{
  var post = await this.post.findById(req.params.id);
  res.render('edit',{post});
});

router.post('/edit:id',async(req,res) => {
  var id = req.params.id;
  await this.post.update({_id: id}, req.body);
  res.redirect('/');
});

router.get('/delete/:id', async (req,res) => {
  var post = await this.post.findById(req.params.id);
  res.render('delete',{post});
});

router.post('/delete/:id', async (req,res) => {
  var id= req.params.id;
  await this.post.deleteOne({_id: id});
});

module.exports = router;