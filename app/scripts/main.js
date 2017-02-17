/* jslint browser: true */ /*global jQuery Discworld imagesLoaded _ */
var books = [
  {
    title: 'The Colour of Magic',
    cover: 'images/covers/The_Colour_Of_Magic.jpg',
    year: 1983,
    series: ['Rincewind'],
    links: {
      asin: '0552124753'
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
      asin: '055216660X'
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
      asin: '0552166618'
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
      asin: '0552166626'
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
  },
  {
    cover: 'images/covers/missing.png',
    title: 'Theatre of Cruelty',
    year: 1993,
    series: ['Short story']
  },
  {
    cover: 'images/covers/Soul_Music.jpg',
    title: 'Soul Music',
    year: 1994,
    series: ['Death']
  },
  {
    cover: 'images/covers/Interesting_Times.jpg',
    title: 'Interesting Times',
    year: 1994,
    series: ['Rincewind']
  },
  {
    cover: 'images/covers/Maskerade.jpg',
    title: 'Maskerade',
    year: 1995,
    series: ['Witches']
  },
  {
    cover: 'images/covers/Feet_of_Clay.jpg',
    title: 'Feet of Clay',
    year: 1996,
    series: ['City Watch']
  },
  {
    cover: 'images/covers/Hogfather.jpg',
    title: 'Hogfather',
    year: 1996,
    series: ['Death']
  },
  {
    cover: 'images/covers/Jingo.jpg',
    title: 'Jingo',
    year: 1997,
    series: ['City Watch']
  },
  {
    cover: 'images/covers/The_Last_Continent.jpg',
    title: 'The Last Continent',
    year: 1998,
    series: ['Rincewind']
  },
  {
    cover: 'images/covers/Carpe_Jugulum.jpg',
    title: 'Carpe Jugulum',
    year: 1998,
    series: ['Witches']
  },
  {
    cover: 'images/covers/missing.png',
    title: 'The Sea and Little Fishes',
    year: 1998,
    series: ['Short story']
  },
  {
    cover: 'images/covers/The_Fith_Elephant.jpg',
    title: 'The Fifth Elephant',
    year: 1999,
    series: ['City Watch']
  },
  {
    cover: 'images/covers/The_Truth.jpg',
    title: 'The Truth',
    year: 2000,
    series: ['One-off']
  },
  {
    cover: 'images/covers/Thief_of_Time.jpg',
    title: 'Thief of Time',
    year: 2001,
    series: ['Death']
  },
  {
    cover: 'images/covers/The_Last_Hero.jpg',
    title: 'The Last Hero',
    year: 2001,
    series: ['Rincewind']
  },
  {
    cover: 'images/covers/missing.png',
    title: 'The Amazing Maurice And His Educated Rodents',
    year: 2001,
    series: ['One-off']
  },
  {
    cover: 'images/covers/Night_Watch.jpg',
    title: 'Night Watch',
    year: 2002,
    series: ['City Watch']
  },
  {
    cover: 'images/covers/missing.png',
    title: 'Death and What Comes Next',
    year: 2002,
    series: ['Short story']
  },
  {
    cover: 'images/covers/The_Wee_Free_Men.jpg',
    title: 'The Wee Free Men',
    year: 2003,
    series: ['Wee Free Men']
  },
  {
    cover: 'images/covers/Monstrous_Regiment.jpg',
    title: 'Monstrous Regiment',
    year: 2003,
    series: ['One-off']
  },
  {
    cover: 'images/covers/A_Hat_Full_of_Sky.jpg',
    title: 'A Hat Full of Sky',
    year: 2004,
    series: ['Wee Free Men']
  },
  {
    cover: 'images/covers/Going_Postal.jpg',
    title: 'Going Postal',
    year: 2004,
    series: ['Post Office']
  },
  {
    cover: 'images/covers/missing.png',
    title: 'Once More* With Footnotes',
    year: 2004,
    series: ['Compilation of short works']
  },
  {
    cover: 'images/covers/Thud.jpg',
    title: 'Thud!',
    year: 2005,
    series: ['City Watch']
  },
  {
    cover: 'images/covers/Wheres_My_Cow.jpg',
    title: 'Where\'s my cow',
    year: 2005,
    series: ['Other']
  },
  {
    cover: 'images/covers/Wintersmith.jpg',
    title: 'Wintersmith',
    year: 2006,
    series: ['Wee Free Men']
  },
  {
    cover: 'images/covers/Making_Money.jpg',
    title: 'Making Money',
    year: 2007,
    series: ['Post Office']
  },
  {
    cover: 'images/covers/UnseenAcademicals.jpg',
    title: 'Unseen Academicals',
    year: 2009,
    series: ['The Wizards', 'Rincewind']
  },
  {
    cover: 'images/covers/I_Shall_Wear_Midnight.jpg',
    title: 'I Shall Wear Midnight',
    year: 2010,
    series: ['Wee Free Men']
  },
  {
    cover: 'images/covers/Snuff.jpg',
    title: 'Snuff',
    year: 2011,
    series: ['City Watch', 'Sam Vimes']
  },
  {
    cover: 'images/covers/Raising_Steam.jpg',
    title: 'Raising Steam',
    year: 2013,
    series: ['Post Office']
  },
  {
    cover: 'images/covers/The_Shepherds_Crown.jpg',
    title: 'The Shepherd\'s Crown',
    year: 2015,
    series: ['Wee Free Men']
  }
];

var associate_id = 'discwsearc-21';

(function ($, Shuffle) {
  'use strict';

  // Header class resize
  var timer;
  var $body = $('body');
  var $document = $(document);
  var scrolling = false;
  $(window).scroll(function() { scrolling = true; });
  setInterval(function() {
    if (scrolling) {
      var scrollTop = $document.scrollTop();
      if (scrollTop > 10) {
        $body.addClass('compact-header');
      }
      else {
        $body.removeClass('compact-header');
      }
      scrolling = false;
    }
  }, 250);

  $('.left-column form').sticky({
    topSpacing: 150,
    getWidthFrom: '.left-column',
    responsiveWidth: true
  });

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

  $list.on('click', '.book', function(event) {
    var $book = $(event.currentTarget);
    console.log($book.data('asin'));

    var url = 'https://amazon.co.uk/gp/product/' + $book.data('asin') + '?tag=' + associate_id;
    window.open(url, '_blank');

  });
})(jQuery, window.shuffle);
