
var books = [
  { title: 'The Colour of Magic', cover: 'https://upload.wikimedia.org/wikipedia/en/4/4d/The_Colour_of_Magic_%28cover_art%29.jpg' }
];

var $list = $('#book_list');

$.each(books, function(i, book) {
  $list.append(Discworld.templates.book(book));
  console.log(arguments);
});
//var html = Discworld.templates.book();
//
//console.log(html);