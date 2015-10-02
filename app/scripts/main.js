/* jslint browser: true */ /*global jQuery Discworld imagesLoaded */
var books = [
  {
    title: 'The Colour of Magic',
    cover: 'images/covers/Cover_The_Colour_Of_Magic.jpg',
    links: {
      amazon: 'http://www.amazon.co.uk/dp/0552124753'
    },
    characters: [
      'Bel-Shamharoth',
      'Hrun, the Barbarian',
      'Liessa Wyrmbidder',
      'the Luggage',
      'Rincewind',
      'Twoflower'
    ],
    locations: [
      'Agatean Empire',
      'Ankh-Morpork',
      'Chirm',
      'Dunmanifestin',
      'Krull',
      'Wyrmberg'
    ]
  },
  {
    title: 'The Light Fantastic',
    cover: 'images/covers/Cover_The_Light_Fantastic.jpg',
    links: {
      amazon: 'http://www.amazon.co.uk/dp/055216660X'
    },
    characters: [
      'Conan',
      'Ymper Trymon',
      'the Luggage',
      'Rincewind',
      'Twoflower'
    ],
    locations: [
      'Ankh-Morpork',
      'Unseen University',
      'Death\'s Domain',
      'Dungeon Dimensions',
      'Vortex Plains',
      'Krull',
      'Trollbone Mountains'
    ]
  },
  {
    title: 'Equal Rites',
    cover: 'images/covers/Equal_Rites.jpg',
    links: {
      amazon: 'http://www.amazon.co.uk/dp/0552166618'
    },
    characters: [
      'Granny Weatherwax',
      'Eskarina Smith',
      'Simon',
      'Drum Billet',
      'Archchancellor Cutangle'
    ],
    locations: [
      'Ramtop Mountains',
      'Ankh-Morpork',
      'Unseen University',
      'River Ankh'
    ]
  },
  {
    title: 'Mort',
    cover: 'images/covers/Cover_Mort.jpg',
    links: {
      amazon: 'http://www.amazon.co.uk/dp/0552166626'
    },
    characters: [
      'Death',
      'Mort',
      'Ysabell',
      'Binky',
      'Albert',
      'Keli'
    ],
    locations: [
      'Death\'s Domain',
      'Ramtops',
      'Ankh-Morpork',
      'Sto Lat',
      'Patrician\'s Palace'
    ]
  }
];

(function ($) {
  'use strict';
  var $list = $('#book_list'),
    $characterSelect = $('#character'),
    $locationSelect = $('#location');

  var characters = [],
    locations = [];


  $.each(books, function (i, book) {
    book.serializedCharacters = JSON.stringify(this.characters);
    book.serializedLocations = JSON.stringify(this.locations);

    $list.append(Discworld.templates.book(book));
    $.each(book.characters, function (index, character) {
      if (characters.indexOf(character) === -1) {
        characters.push(character);
      }
    });
    $.each(book.locations, function (index, location) {
      if (locations.indexOf(location) === -1) {
        locations.push(location);
      }
    });
  });


  var $images = $list.find('img');
  var imgLoad = new imagesLoaded($images.get()); //eslint-disable-line new-cap
  imgLoad.on('always', function () {
    $list.shuffle({
      itemSelector: '.book'
    });
  });


  var filterList = function () {
    var char = $characterSelect.val(),
      loc = $locationSelect.val();

    $list.shuffle('shuffle', function ($el) {
      return (char === '' || $el.data('characters').indexOf(char) !== -1) &&
        (loc === '' || $el.data('locations').indexOf(loc) !== -1);
    });
  };


  characters.sort();
  $.each(characters, function (k, v) {
    $characterSelect
      .append($('<option></option>')
        .attr('value', v)
        .text(v));
  });
  $characterSelect.on('change', filterList);


  locations.sort();
  $.each(locations, function (k, v) {
    $locationSelect
      .append($('<option></option>')
        .attr('value', v)
        .text(v));
  });
  $locationSelect.on('change', filterList);
})(jQuery);
