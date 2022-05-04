export const getGenreNameById = (arr, id) => {
    let found = arr.find(item => item.id === id);
    return found?.name;
}

export const getAllGenreNameByIdArray = (arr, idArray) => {
    let genreNamesArr = idArray.map(id => getGenreNameById(arr, id).toLowerCase())
    return genreNamesArr;
}