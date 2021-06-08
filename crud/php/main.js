
let id = $("input[name*='book_id']")
id.attr("readonly","readonly");


$(".btnedit").click( e =>{
    let textvalues = displayData(e);

    ;
    let bookname = $("input[name*='book_name']");
	let bookcategory = $("input[name*='book_category']");
	let bookauthor = $("input[name*='book_author']");
    let bookpublisher = $("input[name*='book_publisher']");
	let bookpages = $("input[name*='book_pages']");
    let bookprice = $("input[name*='book_price']");
    let book

    id.val(textvalues[0]);
    bookname.val(textvalues[1]);
    bookcategory.val(textvalues[2]);
    bookauthor.val(textvalues[3]);
    bookpublisher.val(textvalues[4]);
    bookpages.val(textvalues[5]);
    bookprice.val(textvalues[6].replace("$", ""));
});


function displayData(e) {
    let id = 0;
    const td = $("#tbody tr td");
    let textvalues = [];

    for (const value of td){
        if(value.dataset.id == e.target.dataset.id){
           textvalues[id++] = value.textContent;
        }
    }
    return textvalues;

}
