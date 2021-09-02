const searchButton = () => {
    const searchField = document.getElementById('search-field');
    const searchFieldValue = searchField.value;
    const errorDiv = document.getElementById('error')
    if(searchFieldValue === ''){
        errorDiv.innerText = 'search field can not be empty';
        return;
    }
    searchField.value = '';
   

    const url = ` https://openlibrary.org/search.json?q=${searchFieldValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showDetails(data.docs))
}

    


    

const showDetails = books => {


    const bookDetails = document.getElementById('book-details');
    bookDetails.textContent = '';
   
    books.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('makeup');
        div.innerHTML = `
        <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg ">
        <h2> ${book.title} </h2>
        <p> ${book.author_name} </p>
        <p> ${book.publish_date} </p>
        `
        bookDetails.appendChild(div)
    }) 
}