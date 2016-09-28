app.factory('Company', function ($resource) {
  return $resource('/api/v1/company/:id');
});
