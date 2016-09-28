'use strict';

/**
 * @ngdoc overview
 * @name fryzApp
 * @description
 * # fryzApp
 *
 * Main module of the application.
 */
var app = angular
  .module('fryzApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMockE2E',
    'angular-repeat-n'
  ]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
    .when('/user/profile', {
      templateUrl: 'views/user/profile.html',
      controller: 'UserCtrl',
      controllerAs: 'user'
    })
    .when('/user/bookings', {
      templateUrl: 'views/user/bookings.html',
      controller: 'UserCtrl',
      controllerAs: 'user'
    })
    .when('/user/login', {
      templateUrl: 'views/user/login.html',
      controller: 'UserCtrl',
      controllerAs: 'user'
    })
    .when('/user/register', {
      templateUrl: 'views/user/register.html',
      controller: 'UserCtrl',
      controllerAs: 'user'
    })
    .when('/:company_id', {
      templateUrl: 'views/company/company.html',
      controller: 'CompanyCtrl',
      controllerAs: 'user'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.run(function($httpBackend) {

  // COMPANIES

  var companies = {
    'JolaIEla': {
      title: 'Salon fryzjerski Jola i Ela',
      description: 'Witamy na stronie salonu fryzjerskiego Jola i Ela. Działamy w tej branży przeszło 8 lat, w tym czasie uszczęśliwiliśmy niezliczone rzesze klientów. Specjalizujemy się w stylizowaniu i koloryzacji, pomagamy dopasować idealny styl dla każdej osobowości.<br />Mamy nadzieję, że razem spełnimy Twoje wizażowe marzenia!',
      background: 'images/background.jpg',

      phone: '(12) 421-35-21',
      email: 'olaiela@gmail.com',
      address_first_line: "ul. Pijarska 3/12",
      address_second_line: '30-310 Kraków',

      employees: [
        { name: "Jolanta Jankiewicz", photo: '/images/avatars/1.jpg', description: "Jola Jankiewicz założyła nasz zakład dawno temu. Jest całkiem ładna, ma okulary i telefon. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." },
        { name: "Krzysztof Kozak", photo: '/images/avatars/2.jpg', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { name: "Elżbieta Ponur", photo: '/images/avatars/3.jpg', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { name: "Katarzyna Bor", photo: '/images/avatars/4.jpg', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
      ],

      slide_photos: [
        '/images/1.jpg',
        '/images/2.jpg',
        '/images/3.jpg',
        '/images/4.jpg',
      ],

      services: [
        { name: 'Strzyżenie męskie', price: 25 },
        { name: 'Strzyżenie damskie', price: 45 },
        { name: 'Farbowanie', price: 80 },
        { name: 'Czesanie ślubne', price: 200 },
        { name: 'Próbne czesanie ślubne', price: 70 },
        { name: 'Czesanie okolicznościowe', price: 90 },
        { name: 'Trwała z koloryzacją', price: 180 },
      ],

      reviews: [
        { author: 'Anna G.', rate: 5, avatar: '/images/avatars/1.jpg', comment: 'Moja fryzura na wesele była perfekcyjna! Dziękuję i polecam!' },
        { author: 'Mariusz P.', rate: 4, avatar: '/images/avatars/2.jpg', comment: 'Szybko, sprawnie i na temat.' },
        { author: 'Andrzej D.', rate: 3, avatar: '/images/avatars/3.jpg', comment: 'Obcinają nieźle, ale za dużo gadają.' },
        { author: 'Małgorzata M.', rate: 5, avatar: '/images/avatars/4.jpg', comment: 'Dzięki nowej fryzurze znalazłam lepszą pracę, chłopaka, zaszłam w ciążę i zdobyłam srebro w jeździectwie na olimpiadzie w Rio.' },
      ],
    }
  };

  var getCompanyId = function(url) {
    return url.replace("/api/v1/company/", '');
  };

  $httpBackend.whenGET(/\/api\/v1\/company\/(\w+)/).respond(function(method, url, data) {
    var companyId = getCompanyId(url);
    console.log(companyId);
    if(companyId in companies) {
      return [200, companies[companyId], {}];
    } else {
      return [404, {}, {}];
    }
  });


  // UTILS
  $httpBackend.whenGET(/^views\//).passThrough();
});
