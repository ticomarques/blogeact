// Get visible POSTS

export default (posts, filters) => {
  return posts.filter((post) => {
    const textMatch = post.title.toLowerCase();
    const categoryMatch = post.category.toLowerCase();

    return textMatch && categoryMatch;
  });
};