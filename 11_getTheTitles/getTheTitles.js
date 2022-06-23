const getTheTitles = function(library) {
    let titles = []
    for (let book of library){
        titles.push(book.title)
    }
    return titles

};

// Do not edit below this line
module.exports = getTheTitles;
