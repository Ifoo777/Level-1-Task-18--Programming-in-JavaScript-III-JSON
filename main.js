let favBooks = []; //Create an empty array that we will use to store all the book objects created.

function myLoad() {
  let htmlSelect = document.getElementById("bookList");
  if (sessionStorage.getItem("hasCodeRunBefore") === null) {
    // let arrayOfPersonObjects = [];
    sessionStorage.setItem("books", JSON.stringify(favBooks));
    sessionStorage.setItem("hasCodeRunBefore", true);
  } else {
    getBooks = JSON.parse(sessionStorage.getItem("books")); //Get the array of person objects from sessionStorage and assign it to the array 'pers'
    getBooks.forEach(function (item) {
      let optItem = document.createElement("option");
      optItem.textContent = item.author;
      htmlSelect.appendChild(optItem);
    });
  }
}

//Below we create the constructor function that will be used to create all book objects.

function Books(author, title, genre, reviews) {
  this.author = author;
  this.title = title;
  this.genre = genre;
  this.reviews = reviews;
}

/* the function below will be called every time the user clicks on the button to add a person on the 
HTML page. Each time this happens we will retrieve the data about the person from the form on the HTML page
that the user has comnpleted. We call the addBook constructor function and pass through all this data as
arguments to create a new book object. We then add the object to the array of book objects using the push method
(.push). Because we want this information to be available accross page loads, we add the updated array of books to sessionStorage. */
displayBooks();

function addBook() {
  favBooks = JSON.parse(sessionStorage.getItem("books"));
  let newBook = new Books(
    document.getElementById("author").value,
    document.getElementById("title").value,
    document.getElementById("genre").value,
    document.getElementById("reviews").value
  );
  favBooks.push(newBook);
  sessionStorage.setItem("books", JSON.stringify(favBooks));
  document.location.reload();
}

function displayBooks() {
  // Grabbing the id div from the HTML Doc
  let tableDiv = document.getElementById("tableContent");
  //Creating the table, dymatically render
  let tableInfo = document.createElement("table");
  // Table header
  let tableHeaderTr = document.createElement("tr");
  let tableTHAuthor = document.createElement("th");
  let tableTHTitle = document.createElement("th");
  let tableTHGenre = document.createElement("th");
  let tableTHReviews = document.createElement("th");
  tableTHAuthor.innerHTML += "Author";
  tableTHTitle.innerHTML += "Title";
  tableTHGenre.innerHTML += "Genre";
  tableTHReviews.innerHTML += "Reviews";
  tableHeaderTr.append(tableTHAuthor);
  tableHeaderTr.append(tableTHTitle);
  tableHeaderTr.append(tableTHGenre);
  tableHeaderTr.append(tableTHReviews);
  tableDiv.append(tableInfo);
  tableInfo.append(tableHeaderTr);

  let getBooks = JSON.parse(sessionStorage.getItem("books"));

  function addCell(tr, text) {
    var td = tr.insertCell();
    td.textContent = text;
    return td;
  }

  getBooks.forEach((item) => {
    let row = tableInfo.insertRow();
    addCell(row, item.author);
    addCell(row, item.title);
    addCell(row, item.genre);
    addCell(row, item.reviews);
    let deleteButton = row.insertCell(-1);
    deleteButton.innerHTML = "<button>Delete</button>";
    deleteButton.addEventListener("click", () => {
      let findItem = getBooks.indexOf(item);
      if (findItem > -1) {
        getBooks.splice(findItem, 1);
        sessionStorage.setItem("books", JSON.stringify(getBooks));
        document.location.reload();
        alert("Book removed");
      }
    });
  });
}

//Enables you to choose/select a different book once its created

function changeActiveBook(data) {
  let getBooks = JSON.parse(sessionStorage.getItem("books"));
  getBooks.forEach((item) => {
    if (item.author == data) {
      sessionStorage.setItem("currentBook", item.author);
      (document.getElementById("author").value = item.author),
        (document.getElementById("title").value = item.title),
        (document.getElementById("genre").value = item.genre),
        (document.getElementById("reviews").value = item.reviews);
    }
  });
}

//Save edit function
function saveEdits() {
  let getcurrentBook = sessionStorage.getItem("currentBook");
  let getBooks = JSON.parse(sessionStorage.getItem("books"));
  getBooks.forEach((item) => {
    if (item.author == getcurrentBook) {
      (item.author = document.getElementById("author").value),
        (item.title = document.getElementById("title").value),
        (item.genre = document.getElementById("genre").value),
        (item.reviews = document.getElementById("reviews").value);
    }
  });
  sessionStorage.setItem("books", JSON.stringify(getBooks));
  alert("Book Updated");
  document.location.reload();
}
