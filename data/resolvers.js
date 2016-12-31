import {Author, Post, View} from './connectors';

const resolvers = {
  Query: {
    author(_, args) {
      return Author.find({where: args});
      // return { id: 1, firstName: 'Hey', lastName: 'You' }
    },
  },
  Author: {
    posts(author) {
      return author.getPosts();
      // return [{ id: 111, title: '123', text: 'Good' }];
    }
  },
  Post: {
    author(post) {
      return post.getAuthor();
      // return { id: 1, firstName: 'Hey', lastName: 'You' }
    },
    views(post) {
      return View.findOne({postId: post.id}).then( (view) => view.views );
    }
  }
};

export default resolvers;