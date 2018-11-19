

//ACTIONS

//SORT BY CATEGORY
export const sortByCategory = (category = '') => ({
    type: 'SORT_BY_CATEGORY',
    category
});
//SORT BY TITLE
export const sortByTitle = (title) => ({
    type: 'SORT_BY_TITLE',
    title
});
