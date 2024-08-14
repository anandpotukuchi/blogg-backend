import * as chai from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';

import { app } from '../server.js'; // Adjust the path if necessary
import Post from '../app/models/Post.js';


chai.use(chaiHttp)
const { expect } = chai;



let server;
let port =  0; // Dynamic port

before((done) => {
  server = app.listen(port, function(err) {
    if (err) {
      console.error('Failed to start server:', err);
      done(err);
    } else {
      port = server.address().port;
      console.log(`Server is running on port ${port}`);
      done();
    }
  });
});

after((done) => {
  if (server) {
    server.close((err) => {
      if (err) {
        console.error('Failed to close server:', err);
        done(err);
      } else {
        console.log('Server closed successfully');
        done();
      }
    });
  } else {
    done();
  }
});


describe('Posts API', () => {
  
  beforeEach((done) => {
    Post.deleteMany({})
      .then(() => done())
      .catch((err) => done(err));
  });

  describe('GET /posts', () => {
    it('should get all posts', (done) => {
      chai.request(app)
        .get('/posts')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.equal('Posts retrieved successfully');
          expect(res.body.data).to.be.an('array').that.is.empty;
          done();
        });
    });
  });

  describe('POST /posts', () => {
    it('should create a new post', (done) => {
      const post = {
        title: 'Test Post',
        content: 'This is a test post'
      };

      chai.request(app)
        .post('/posts')
        .send(post)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.equal('Post created successfully');
          expect(res.body.data).to.include({ title: 'Test Post', content: 'This is a test post' });
          done();
        });
    });
  });

  describe('GET /posts/:id', () => {
    it('should get a post by id', (done) => {
      const post = new Post({ title: 'Test Post', content: 'This is a test post' });
      post.save()
        .then((savedPost) => {
          chai.request(app)
            .get(`/posts/${savedPost._id}`)
            .end((err, res) => {
              expect(res).to.have.status(200);
              expect(res.body).to.be.an('object');
              expect(res.body.message).to.equal('Post retrieved successfully');
              expect(res.body.data).to.include({ title: 'Test Post', content: 'This is a test post' });
              done();
            });
        })
        .catch((err) => done(err));
    });

    it('should return 404 if the post is not found', (done) => {
      const fakeId = new mongoose.Types.ObjectId();
      chai.request(app)
        .get(`/posts/${fakeId}`)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.equal('Post not found');
          done();
        });
    });
  });

  describe('PUT /posts/:id', () => {
    it('should update a post by id', (done) => {
      const post = new Post({ title: 'Old Title', content: 'Old Content' });
      post.save()
        .then((savedPost) => {
          const updatedPost = { title: 'New Title', content: 'New Content' };
          chai.request(app)
            .put(`/posts/${savedPost._id}`)
            .send(updatedPost)
            .end((err, res) => {
              expect(res).to.have.status(200);
              expect(res.body).to.be.an('object');
              expect(res.body.message).to.equal('Post updated successfully');
              expect(res.body.data).to.include({ title: 'New Title', content: 'New Content' });
              done();
            });
        })
        .catch((err) => done(err));
    });

    it('should return 404 if the post is not found', (done) => {
      const fakeId = new mongoose.Types.ObjectId();
      const updatedPost = { title: 'New Title', content: 'New Content' };
      chai.request(app)
        .put(`/posts/${fakeId}`)
        .send(updatedPost)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.equal('Post not found');
          done();
        });
    });
  });

  describe('DELETE /posts/:id', () => {
    it('should delete a post by id', (done) => {
      const post = new Post({ title: 'Test Post', content: 'This is a test post' });
      post.save()
        .then((savedPost) => {
          chai.request(app)
            .delete(`/posts/${savedPost._id}`)
            .end((err, res) => {
              expect(res).to.have.status(200);
              expect(res.body).to.be.an('object');
              expect(res.body.message).to.equal('Post deleted successfully');
              done();
            });
        })
        .catch((err) => done(err));
    });

    it('should return 404 if the post is not found', (done) => {
      const fakeId = new mongoose.Types.ObjectId();
      chai.request(app)
        .delete(`/posts/${fakeId}`)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.equal('Post not found');
          done();
        });
    });
  });

});