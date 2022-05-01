export const getGenreNameById = (arr, id) => {
    let found = arr.find(item => item.id === id);
    // console.log(found?.name);
    return found?.name;
}