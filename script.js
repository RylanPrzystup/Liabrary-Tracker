let books=[
    "The Great Gatspy",
    "Sons And lovers",
    "To kill a mockingBird",
    "Pride and predjudice"
];

const bookshelf=document.getElementById('bookshelf')
const bookInput=document.getElementById("input")

updateBookshelf()

function updateBookshelf(){
    if(books.length == 0){
        bookshelf.innerHTML = "No books on the shelf"
    }
    else{
        bookshelf.innerHTML=`<b>front of shelf`
        for(let i=0; i<books.length; i++){
            bookshelf.innerHTML += `<li> ${books[i]}</li>`
        }
        bookshelf.innerHTML += `<b>End of Shelf</b>`
    }
}

function addToFront(){
    books.unshift(bookInput.value)
    updateBookshelf()
}
function addToEnd(){
    books.push(bookInput.value)
    updateBookshelf()
}
function removeFromEnd(){
    books.pop()
    updateBookshelf()
}
function removeFromFront(){
    books.shift(1)
    updateBookshelf()
}