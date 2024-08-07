const Post = require('../models/Post');

const getPosts = (req, res) => {
  Post.find()
    .then(posts => {
      res.json({ status: 200, message: 'Posts retrieved successfully', data: posts });
    })
    .catch(error => {
      res.json({ status: 500, message: 'Error retrieving posts', error: error.message });
    });
};

const createPost = (req, res) => {
  const { title, content} = req.body;
  const post = new Post({ title, content});

  post.save()
    .then(post => {
      res.json({ status: 201, message: 'Post created successfully', data: post });
    })
    .catch(error => {
      res.json({ status: 500, message: 'Error creating post', error: error.message });
    });
};

const getPost = (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      if (post) {
        res.json({ status: 200, message: 'Post retrieved successfully', data: post });
      } else {
        res.json({ status: 404, message: 'Post not found' });
      }
    })
    .catch(error => {
      res.json({ status: 500, message: 'Error retrieving post', error: error.message });
    });
};

const updatePost = (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(post => {
      if (post) {
        res.json({ status: 200, message: 'Post updated successfully', data: post });
      } else {
        res.json({ status: 404, message: 'Post not found' });
      }
    })
    .catch(error => {
      res.json({ status: 500, message: 'Error updating post', error: error.message });
    });
};

const deletePost = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(post => {
      if (post) {
        res.json({ status: 200, message: 'Post deleted successfully' });
      } else {
        res.json({ status: 404, message: 'Post not found' });
      }
    })
    .catch(error => {
      res.json({ status: 500, message: 'Error deleting post', error: error.message });
    });
};

module.exports = {
  getPosts,
  createPost,
  getPost,
  updatePost,
  deletePost
};