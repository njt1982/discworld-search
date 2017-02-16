/* jslint browser: true */ /*global jQuery Discworld imagesLoaded _ */
var books = [
  {
    title: 'The Colour of Magic',
    cover: 'images/covers/The_Colour_Of_Magic.jpg',
    year: 1983,
    series: ['Rincewind'],
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
    cover: 'images/covers/The_Light_Fantastic.jpg',
    year: 1986,
    series: ['Rincewind'],
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
    year: 1987,
    series: ['Witches'],
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
    cover: 'images/covers/Mort.jpg',
    year: 1987,
    series: ['Death'],
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
  },
  {
    title: 'Sourcery',
    cover: 'images/covers/Sourcery.jpg',
    year: 1988,
    series: ['Rincewind'],
    links: {},
    characters: [
      'Rincewind',
      'Coin',
      'Conina',
      'Nijel',
    ],
    locations: [
    ]
  },
  {
    title: 'Wyrd Sisters',
    cover: 'images/covers/Wyrd_Sisters.jpg',
    year: 1988,
    series: ['Witches'],
    links: {
    },
    characters: [],
    locations: []
  },
  {
    title: 'Pyramids',
    cover: 'images/covers/Pyramids.jpg',
    year: 1989,
    series: ['One-off'],
    links: {},
    characters: [],
    locations: []
  },
  {
    title: 'Guards! Guards!',
    cover: 'images/covers/GuardsGuards.jpg',
    year: 1989,
    series: ['City Watch'],
    links: {},
    characters: [],
    locations: []
  },
  {
    title: 'Eric',
    cover: 'images/covers/Eric.jpg',
    year: 1990,
    series: ['Rincewind'],
    links: {},
    characters: [],
    locations: []
  },
  {
    title: 'Moving Pictures',
    cover: 'images/covers/Moving_Pictures.jpg',
    year: 1990,
    series: ['One-off'],
    links: {},
    characters: [],
    locations: []
  },
  {
    title: 'Reaper Man',
    cover: 'images/covers/Reaper_Man.jpg',
    year: 1991,
    series: ['Death'],
    links: {},
    characters: [],
    locations: []
  },
  {
    title: 'Witches Abroad',
    cover: 'images/covers/Witches_Abroad.jpg',
    year: 1991,
    series: ['Witches'],
    links: {},
    characters: [],
    locations: []
  },
  {
    title: 'Small Gods',
    cover: 'images/covers/Small_Gods.jpg',
    year: 1992,
    series: ['One-off'],
    links: {},
    characters: [],
    locations: []
  },
  {
    title: 'Lords and Ladies',
    cover: 'images/covers/Lords_And_Ladies.jpg',
    year: 1992,
    series: ['Witches'],
    links: {},
    characters: [],
    locations: []
  },
  {
    title: 'Troll Bridge',
    cover: 'images/covers/Troll_Bridge.jpg',
    year: 1992,
    series: ['Short story'],
    links: {},
    characters: [],
    locations: []
  },
  {
    title: 'Men At Arms',
    cover: 'images/covers/Men_At_Arms.jpg',
    year: 1993,
    series: ['City Watch'],
    links: {},
    characters: [],
    locations: []
  }
];

(function ($, Shuffle) {
  'use strict';
  var $list = $('#book_list'),
    $characterSelect = $('#character'),
    $seriesSelect = $('#series'),
    $locationSelect = $('#location');

  var characters = [],
    locations = [],
    series = [];


  $.each(books, function (i, book) {
    book.serializedCharacters = JSON.stringify(this.characters);
    book.serializedLocations = JSON.stringify(this.locations);
    book.serializedSeries = JSON.stringify(this.series);

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
    $.each(book.series, function (index, bookSeries) {
      if (series.indexOf(bookSeries) === -1) {
        series.push(bookSeries);
      }
    });
  });


  var $images = $list.find('img');
  var shuffleList;
  var imgLoad = new imagesLoaded($images.get()); //eslint-disable-line new-cap

  imgLoad.on('always', function () {
    shuffleList = new Shuffle($list, {
      itemSelector: '.book'
    });
  });


  var filterList = function () {
    var selectedCharacters = $characterSelect.val(),
      selectedLocations = $locationSelect.val(),
      selectedSeries = $seriesSelect.val();
    console.log([selectedCharacters, selectedLocations, selectedSeries]);

    shuffleList.filter(function (element) {
      return (selectedCharacters === null || _.intersection($(element).data('characters'), selectedCharacters).length === selectedCharacters.length) &&
             (selectedSeries     === null || _.intersection($(element).data('series'),     selectedSeries).length     === selectedSeries.length) &&
             (selectedLocations  === null || _.intersection($(element).data('locations'),  selectedLocations).length  === selectedLocations.length);
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
  $characterSelect.chosen();


  locations.sort();
  $.each(locations, function (k, v) {
    $locationSelect
      .append($('<option></option>')
        .attr('value', v)
        .text(v));
  });
  $locationSelect.on('change', filterList);
  $locationSelect.chosen();


  series.sort();
  $.each(series, function (k, v) {
    $seriesSelect
      .append($('<option></option>')
        .attr('value', v)
        .text(v));
  });
  $seriesSelect.on('change', filterList);
  $seriesSelect.chosen();
})(jQuery, window.shuffle);
