export const contains = (s1, s2) => s1.toLowerCase().includes(s2.toLowerCase());

export const hasMore = (arr, limit = 200) => arr.length <= limit;

export const isEmpty = (arr) => arr.length === 0;

export const getSearchResults = (data, term) =>
  data.filter((element) => {
    if (
      contains(element.name.first, term) ||
      contains(element.name.last, term)
    ) {
      return element;
    }
  });
