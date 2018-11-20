// Get visible expenses

export default (posts, { category, title}) => {
  return posts.filter((post) => {
    const textMatch = post.title.toLowerCase().includes(title.toLowerCase());
    const categoryMatch = post.category.toLowerCase().includes(category.toLowerCase());

    return textMatch && categoryMatch;
  });
};