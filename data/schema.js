const typeDefinitions = `
type Author {
  firstName: String
  lastName: String
  posts: [Post]
}

type Post {
  title: String
  text: String
  author: Author
}

type Query {
  author(firstName: String, lastName: String): Author
}

schema {
  query: Query
}
`;

export default [typeDefinitions]