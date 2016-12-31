import {Author, Post} from './connectors';

const resolvers = {
  Query: {
    author(_, args) {
      return Author.find({ where: args });
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
    }
  }
};

export default resolvers;