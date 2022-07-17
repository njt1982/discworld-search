import jQuery from 'jquery';
import imagesLoaded from 'imagesloaded';
import select2 from 'select2';
import Shuffle from 'shufflejs';
import _ from 'lodash';
import 'sticksy';

var books = [
  {
    title: 'The Colour of Magic',
    cover: 'images/covers/The_Colour_Of_Magic.jpg',
    year: ['1983'],
    series: ['Rincewind'],
    links: [
      { text: 'Paperback', isbn: '0552124753' },
      { text: 'Hardback',  isbn: '086140324X' },
    ],
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
    year: ['1986'],
    series: ['Rincewind'],
    links: [
      { text: 'Paperback', isbn: '0552128481' },
      { text: 'Hardback',  isbn: '0861402030' },
    ],
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
    year: ['1987'],
    series: ['Witches'],
    links: [
      { text: 'Paperback', isbn: '0552131059' },
      { text: 'Hardback',  isbn: '0575039507' },
    ],
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
    year: ['1987'],
    series: ['Death'],
    links: [
      { text: 'Paperback', isbn: '0552131067' },
      { text: 'Hardback',  isbn: '0575041714' },
    ],
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
    year: ['1988'],
    series: ['Rincewind'],
    links: [
      { text: 'Paperback', isbn: '0552131075' },
      { text: 'Hardback',  isbn: '0575042176' },
    ],
    characters: [
      'Rincewind',
      'Coin',
      'Conina',
      'Nijel',
    ],
    locations: [
      'Ankh-Morpork',
      'Klatch'
    ]
  },
  {
    title: 'Wyrd Sisters',
    cover: 'images/covers/Wyrd_Sisters.jpg',
    year: ['1988'],
    series: ['Witches'],
    links: [
      { text: 'Paperback', isbn: '0552134600' },
      { text: 'Hardback',  isbn: '0575043636' },
    ],
    characters: [
      'Granny Weatherwax',
      'Nanny Ogg',
      'Magrat Garlick',
      'Verence the Fool'
    ],
    locations: ['Lancre']
  },
  {
    title: 'Pyramids',
    cover: 'images/covers/Pyramids.jpg',
    year: ['1989'],
    series: ['One-off'],
    links: [
      { text: 'Paperback', isbn: '0552134619' },
      { text: 'Hardback',  isbn: '0575044632' },
    ],
    characters: ['Pteppic', 'Dios'],
    locations: [
      'Djelibeybi',
      'Assassins Guild',
      'Ankh-Morpork'
    ]
  },
  {
    title: 'Guards! Guards!',
    cover: 'images/covers/GuardsGuards.jpg',
    year: ['1989'],
    series: ['City Watch'],
    links: [
      { text: 'Paperback', isbn: '0552134627' },
      { text: 'Hardback',  isbn: '0575046066' },
    ],
    characters: [
      'Samuel Vimes',
      'Fred Colon',
      'Nobby Nobbs',
      'Carrot Ironfoundersson',
      'Havelock Vetinari',
      'Sybil Ramkin'
    ],
    locations: ['Ankh-Morpork']
  },
  {
    title: 'Eric',
    cover: 'images/covers/Eric.jpg',
    year: ['1990'],
    series: ['Rincewind'],
    links: [],
    characters: [],
    locations: []
  },
  {
    title: 'Moving Pictures',
    cover: 'images/covers/Moving_Pictures.jpg',
    year: ['1990'],
    series: ['One-off'],
    links: [],
    characters: [],
    locations: []
  },
  {
    title: 'Reaper Man',
    cover: 'images/covers/Reaper_Man.jpg',
    year: ['1991'],
    series: ['Death'],
    links: [],
    characters: [],
    locations: []
  },
  {
    title: 'Witches Abroad',
    cover: 'images/covers/Witches_Abroad.jpg',
    year: ['1991'],
    series: ['Witches'],
    links: [],
    characters: [],
    locations: []
  },
  {
    title: 'Small Gods',
    cover: 'images/covers/Small_Gods.jpg',
    year: ['1992'],
    series: ['One-off'],
    links: [],
    characters: [],
    locations: []
  },
  {
    title: 'Lords and Ladies',
    cover: 'images/covers/Lords_And_Ladies.jpg',
    year: ['1992'],
    series: ['Witches'],
    links: [],
    characters: [],
    locations: []
  },
  {
    title: 'Troll Bridge',
    cover: 'images/covers/Troll_Bridge.jpg',
    year: ['1992'],
    series: ['Short story'],
    links: [],
    characters: [],
    locations: []
  },
  {
    title: 'Men At Arms',
    cover: 'images/covers/Men_At_Arms.jpg',
    year: ['1993'],
    series: ['City Watch'],
    links: [],
    characters: [],
    locations: []
  },
  {
    cover: 'images/covers/Theatre_of_Cruelty.jpg',
    title: 'Theatre of Cruelty',
    year: ['1993'],
    series: ['Short story']
  },
  {
    cover: 'images/covers/Soul_Music.jpg',
    title: 'Soul Music',
    year: ['1994'],
    series: ['Death']
  },
  {
    cover: 'images/covers/Interesting_Times.jpg',
    title: 'Interesting Times',
    year: ['1994'],
    series: ['Rincewind']
  },
  {
    cover: 'images/covers/Maskerade.jpg',
    title: 'Maskerade',
    year: ['1995'],
    series: ['Witches']
  },
  {
    cover: 'images/covers/Feet_of_Clay.jpg',
    title: 'Feet of Clay',
    year: ['1996'],
    series: ['City Watch']
  },
  {
    cover: 'images/covers/Hogfather.jpg',
    title: 'Hogfather',
    year: ['1996'],
    series: ['Death']
  },
  {
    cover: 'images/covers/Jingo.jpg',
    title: 'Jingo',
    year: ['1997'],
    series: ['City Watch']
  },
  {
    cover: 'images/covers/The_Last_Continent.jpg',
    title: 'The Last Continent',
    year: ['1998'],
    series: ['Rincewind']
  },
  {
    cover: 'images/covers/Carpe_Jugulum.jpg',
    title: 'Carpe Jugulum',
    year: ['1998'],
    series: ['Witches']
  },
  {
    cover: 'images/covers/The_Sea_And_Little_Fishes.jpg',
    title: 'The Sea and Little Fishes',
    year: ['1998'],
    series: ['Short story']
  },
  {
    cover: 'images/covers/The_Fith_Elephant.jpg',
    title: 'The Fifth Elephant',
    year: ['1999'],
    series: ['City Watch']
  },
  {
    cover: 'images/covers/The_Truth.jpg',
    title: 'The Truth',
    year: ['2000'],
    series: ['One-off']
  },
  {
    cover: 'images/covers/Thief_of_Time.jpg',
    title: 'Thief of Time',
    year: ['2001'],
    series: ['Death']
  },
  {
    cover: 'images/covers/The_Last_Hero.jpg',
    title: 'The Last Hero',
    year: ['2001'],
    series: ['Rincewind']
  },
  {
    cover: 'images/covers/The_Amazing_Maurice_And_His_Educated_Rodents.jpg',
    title: 'The Amazing Maurice And His Educated Rodents',
    year: ['2001'],
    series: ['One-off']
  },
  {
    cover: 'images/covers/Night_Watch.jpg',
    title: 'Night Watch',
    year: ['2002'],
    series: ['City Watch']
  },
  {
    cover: 'images/covers/Death_and_What_Comes_Next.jpg',
    title: 'Death and What Comes Next',
    year: ['2002'],
    series: ['Short story']
  },
  {
    cover: 'images/covers/The_Wee_Free_Men.jpg',
    title: 'The Wee Free Men',
    year: ['2003'],
    series: ['Wee Free Men']
  },
  {
    cover: 'images/covers/Monstrous_Regiment.jpg',
    title: 'Monstrous Regiment',
    year: ['2003'],
    series: ['One-off']
  },
  {
    cover: 'images/covers/A_Hat_Full_of_Sky.jpg',
    title: 'A Hat Full of Sky',
    year: ['2004'],
    series: ['Wee Free Men']
  },
  {
    cover: 'images/covers/Going_Postal.jpg',
    title: 'Going Postal',
    year: ['2004'],
    series: ['Post Office']
  },
  {
    cover: 'images/covers/Once_More_With_Footnotes.jpg',
    title: 'Once More* With Footnotes',
    year: ['2004'],
    series: ['Compilation of short works']
  },
  {
    cover: 'images/covers/Thud.jpg',
    title: 'Thud!',
    year: ['2005'],
    series: ['City Watch']
  },
  {
    cover: 'images/covers/Wheres_My_Cow.jpg',
    title: 'Where\'s my cow',
    year: ['2005'],
    series: ['Other']
  },
  {
    cover: 'images/covers/Wintersmith.jpg',
    title: 'Wintersmith',
    year: ['2006'],
    series: ['Wee Free Men']
  },
  {
    cover: 'images/covers/Making_Money.jpg',
    title: 'Making Money',
    year: ['2007'],
    series: ['Post Office']
  },
  {
    cover: 'images/covers/UnseenAcademicals.jpg',
    title: 'Unseen Academicals',
    year: ['2009'],
    series: ['The Wizards', 'Rincewind']
  },
  {
    cover: 'images/covers/I_Shall_Wear_Midnight.jpg',
    title: 'I Shall Wear Midnight',
    year: ['2010'],
    series: ['Wee Free Men']
  },
  {
    cover: 'images/covers/Snuff.jpg',
    title: 'Snuff',
    year: ['2011'],
    series: ['City Watch', 'Sam Vimes']
  },
  {
    cover: 'images/covers/Raising_Steam.jpg',
    title: 'Raising Steam',
    year: ['2013'],
    series: ['Post Office']
  },
  {
    cover: 'images/covers/The_Shepherds_Crown.jpg',
    title: 'The Shepherd\'s Crown',
    year: ['2015'],
    series: ['Wee Free Men']
  }
];

var associate_id = 'discwsearc-21';

(function ($, select2, Shuffle, _, Sticksy) {
  'use strict';

  select2($);

  var stickyForm = new Sticksy(document.getElementById('filter-form'), {
    topSpacing: 92,
    listen: true
  });
  $(window).on('load resize orientationchange', function () {
    if (window.matchMedia('(min-width: 768px)').matches) {
      stickyForm.hardRefresh()
    } else{
      stickyForm.disable();
    }
  });

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


  var facets = {
    characters: { selector: '#character', options: [] },
    locations: { selector: '#location', options: [] },
    series: { selector: '#series', options: [] },
    year: { selector: '#year', options: [] },
  }

  var filterList = function () {
    var facetParams = {};
    $.each(facets, function(facet, facetSettings) {
      var facetValue = facetSettings.$el.val();
      if (facetValue.length > 0) {
        facetParams[facet] = facetValue;
      }
    });

    shuffleList.filter(function (element) {
      var elementData = element.dataset;

      for (var facetKey in facetParams) {
        if (facetParams[facetKey].length && typeof elementData[facetKey] === 'undefined') {
          return false;
        }
        else {
          var elementFacetData = JSON.parse(elementData[facetKey]);
          if (_.intersection(elementFacetData, facetParams[facetKey]).length !== facetParams[facetKey].length) {
            return false;
          }
        }
      }
      return true;
    });
  };

  var $list = $('#book_list');

  // Process books
  $.each(books, function (i, book) {
    var newBookEl = document.createElement('span');
    newBookEl.classList.add('book', 'col-6', 'col-md-3');

    var imageWrapper = document.createElement('div');
    imageWrapper.classList.add('cover');
    newBookEl.appendChild(imageWrapper)

    var image = document.createElement('img');
    image.src = book.cover;
    imageWrapper.appendChild(image);

    var overlay = document.createElement('div');
    overlay.classList.add('overlay');
    newBookEl.appendChild(overlay);

    var title = document.createElement('h3');
    title.innerText = book.title;
    overlay.appendChild(title)

    if (typeof(book.links) !== 'undefined') {
      book.links.forEach(link => {
        var el = document.createElement('a');
        el.setAttribute('target', '_blank');
        el.innerText = link.text;
        if (link.isbn) {
          el.setAttribute('href', 'https://amazon.co.uk/gp/product/' + link.isbn + '?tag=' + associate_id);
        }
        else {
          return
        }

        overlay.appendChild(el);
      })
    }

    Object.keys(facets).forEach(facet => {
      if (typeof(book[facet]) !== 'undefined') {
        newBookEl.dataset[facet] = JSON.stringify(book[facet]);

        if (book[facet].constructor === Array) {
          $.each(book[facet], function (bookIndex, value) {
            if (facets[facet].options.indexOf(value) === -1) {
              facets[facet].options.push(value);
            }
          });
        }
        else {
          if (facets[facet].options.indexOf(book[facet]) === -1) {
            facets[facet].options.push(book[facet]);
          }
        }
      }
    });

    $list.append(newBookEl);
    book.el = newBookEl;
  });

  // Post process facets
  $.each(facets, function(facet, facetSettings) {
    facetSettings.options.sort();

    facetSettings.$el = $(facetSettings.selector, stickyForm.nodeRef);
    facetSettings.$el.select2({
      theme: 'bootstrap-5',
      data: facetSettings.options.map((text) => { return {'id': text, 'text': text} }),
      allowClear: true,
      placeholder: 'Select a ' + facet
    });
    facetSettings.$el.on('change', filterList);
  });


  var $images = $list.find('img');
  var shuffleList;
  var imgLoad = new imagesLoaded($images.get()); //eslint-disable-line new-cap

  imgLoad.on('always', function () {
    const maxHeight = books.reduce((v, book) => {
      return (v > book.el.offsetHeight) ? v : book.el.offsetHeight
    }, 0);
    document.documentElement.style.setProperty('--book-min-height', maxHeight + 'px');

    shuffleList = new Shuffle($list, {
      itemSelector: '.book'
    });
  });
})(jQuery, select2, Shuffle, _, Sticksy);
