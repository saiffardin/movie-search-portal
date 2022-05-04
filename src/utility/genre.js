export const getGenreNameById = (arr, id) => {
    const found = arr.find(item => item.id === id);
    return found?.name;
}

export const getAllGenreNameByIdArray = (arr, idArray) => {
    const genreNamesArr = idArray.map(id => getGenreNameById(arr, id).toLowerCase())
    return genreNamesArr;
}