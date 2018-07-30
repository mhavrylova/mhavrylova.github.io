var button = document.getElementById('sumtobutton');

button.addEventListener('click', function () {
    var number = prompt('please enter a number greater than 0', '');

    function sumTo(n) {
        var result;

        if ( n === null ) {
            result = "You canceled the action";
        } else if (n <= 0 || isNaN(n)) {
            result = "You entered an incorrect number, please try again";
        } else if (n == 1) {
            result = n;
        } else {
            result = +n + sumTo(+n - 1);
        }

        return result;
    }

    alert( sumTo(number) );
});



