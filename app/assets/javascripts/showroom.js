$(document).ready(function() {
    var showroom = {

        settings: {
            showroomCar: $('.showroom-car')
        },

        init: function() {
            s = this.settings;
            this.bindEvents();
        },

        bindEvents: function() {
            s.showroomCar.on('click', '.showroom-car-delete', function(e) {
                e.preventDefault();
                var car = $(e.target).parent();
                showroom.deleteCar(car);
            });
        },

        deleteCar: function(car) {
            car.remove();
        }
    };

    showroom.init();
})
