const express = require('express');
const posts = require('../data/posts.json')
const tags = require('../data/tags.json')

const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
    res.json(tags)
})

router.get('/:tagId/posts', (req, res) => {
    const tagId = Number(req.params.tagId)
    const tagCorrespondant = posts.filter(post => post.tag_ids.includes(tagId))
    res.json(tagCorrespondant)
})

module.exports = router
