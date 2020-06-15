const express = require('express')
const fakeComments = require('../data/comments.json')
var router = express.Router({mergeParams: true})


router.get('/', (req, res) => {
    const postId = Number(req.params.postId);
    const postComments = fakeComments.find((com) => com.post_id === postId);
    if (!postComments) {
      return res.status(404).json({
        error: 'Post not found',
      });
    }
    return res.json(postComments);
  });


module.exports = router;


