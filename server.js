function addBook(book) {
    var jsonStr = JSON.stringify(book);
    var putReqStr = createPUTRequest(
        "90932151|-31949221147618108|90963797", 
        jsonStr, 
        "Bookstore-DB", 
        "BOOKS"
    );
    jQuery.ajax({
        url: "https://api.login2explore.com:5577/api/iml",
        type: "POST",
        data: putReqStr,
        contentType: "application/json",
        success: function (response) {
            console.log("Book added successfully:", response);
        },
        error: function (err) {
            console.error("Error adding book:", err);
        },
    });
}

addBook({
    bookID: "101",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10.99,
    stock: 20,
    category: "Fiction",
    description: "A classic novel set in the 1920s.",
    imageURL: "https://example.com/gatsby.jpg",
});

function getBook(bookID) {
    var getReqStr = createGETRequest(
        "90932151|-31949221147618108|90963797", 
        "Bookstore-DB", 
        "BOOKS", 
        bookID
    );
    jQuery.ajax({
        url: "https://api.login2explore.com:5577/api/irl",
        type: "GET",
        data: getReqStr,
        contentType: "application/json",
        success: function (response) {
            console.log("Book retrieved successfully:", response);
        },
        error: function (err) {
            console.error("Error retrieving book:", err);
        },
    });
}

function updateStock(bookID, newStock) {
    var updateJson = {
        stock: newStock,
    };
    var updateReqStr = createUPDATERequest(
        "90932151|-31949221147618108|90963797",
        JSON.stringify(updateJson),
        "Bookstore-DB",
        "BOOKS",
        bookID
    );
    jQuery.ajax({
        url: "https://api.login2explore.com:5577/api/iml",
        type: "POST",
        data: updateReqStr,
        contentType: "application/json",
        success: function (response) {
            console.log("Stock updated successfully:", response);
        },
        error: function (err) {
            console.error("Error updating stock:", err);
        },
    });
}
