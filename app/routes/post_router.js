const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

/**
 * @api {get} /posts Get all posts
 * @apiName GetPosts
 * @apiGroup Post
 * @apiSuccess {Object[]} posts List of posts.
 */
router.get('/posts', postController.getPosts);

/**
 * @api {post} /posts Create a new post
 * @apiName CreatePost
 * @apiGroup Post
 * @apiParam {String} title Title of the Post.
 * @apiParam {String} content Content of the Post.
 * @apiParam {String} author Author of the Post.
 * @apiSuccess {Object} post The newly created post.
 */
router.post('/posts', postController.createPost);

/**
 * @api {get} /posts/:id Get a post by ID
 * @apiName GetPost
 * @apiGroup Post
 * @apiParam {String} id Post's unique ID.
 * @apiSuccess {Object} post The post details.
 */
router.get('/posts/:id', postController.getPost);

/**
 * @api {put} /posts/:id Update a post by ID
 * @apiName UpdatePost
 * @apiGroup Post
 * @apiParam {String} id Post's unique ID.
 * @apiParam {String} [title] Title of the Post.
 * @apiParam {String} [content] Content of the Post.
 * @apiParam {String} [author] Author of the Post.
 * @apiSuccess {Object} post The updated post.
 */
router.put('/posts/ :id', postController.updatePost);

/**
 * @api {delete} /posts/:id Delete a post by ID
 * @apiName DeletePost
 * @apiGroup Post
 * @apiParam {String} id Post's unique ID.
 * @apiSuccess {String} message Success message.
 */
router.delete('/posts/:id', postController.deletePost);

module.exports = router;    