(function($){

    $.fn.jsCheckboxController=function(a, b, options) {
        var settings=$.extend({
            displayCheckAll = 'Check All',
            displayUncheckAll = 'Uncheck All'
        }, options);

        var state=false;
        //test for existing of a and b

        var $a=$('#'+a);
        var $b=$('.'+b);

        $a.on('click', function(e) {
            alert('controll click');
            e.preventDefault();
        }
        $b.each(function(el) {
            el.on('click', function(e){
                alert('item click');
            });
        });
        //call check all checked








    };

    function getState(obj) { return obj.state; };
    function setState(obj, state) { obj.state=state;}




    function debug(obj) {
        alert('hi');
    };
}(jQuery));
