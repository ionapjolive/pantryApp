angular.module('pantry-app')

  .controller('AppCtrl', function(pantry) {
    this.fetchResults = (data, id) => {
      if (id) {
        var setItem = data.filter((item) => {
          return item._id === id;
        })[0];
      } else {
        setItem = data[data.length - 1];
      }
      this.items = data;
      this.currentItem = setItem;
    };

    this.selectItem = (item) => {
      this.currentItem = item;
    };

    this.updateSelect = (item) => {
      this.itemToUpdate = item;
    };

    pantry.fetch(this.fetchResults);

  })
  .component('app', {
    controller: 'AppCtrl',
    templateUrl: 'client/templates/app.html'
  });