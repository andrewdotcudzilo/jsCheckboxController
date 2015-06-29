(function($){
    $.fn.jsCheckboxController=function(controllerId, className, options) {
        options=$.extend({}, $.fn.jsCheckboxController.defaultOptions, options);

        var $controller=$('#'+controllerId);
        var $targets=$('.'+className);

        $controller.on('click', function(e) {
            handleController(this, className);
            e.preventDefault();
        });
       /* $targets.each(function(index, element) {
            $(this).on('click', function(e) {
                alert(index+' clicked');
            });
        });*/
        //call check all checked
    };
    $.fn.jsCheckboxController.options={
        displayCheckAll:'Check All',
        displayUncheckAll:'Uncheck All',
    };
    $.fn.jsCheckboxController.obj={
        state: false
    };

    function getState() { return $.fn.jsCheckboxController.obj.state; };
    function setState(state) { $.fn.jsCheckboxController.obj.state=state; };
    function setDisplay(obj) {
        if($(obj).nodeName=='INPUT') {
            if(getState()) obj.val($.fn.jsCheckboxController.options.displayUncheckAll);
            else obj.val($.fn.jsCheckboxController.displayCheckAll);
        }
        else {
            if(getState())$(obj).html($.fn.jsCheckboxController.options.displayUncheckAll);
            else $(obj).html($.fn.jsCheckboxController.options.displayCheckAll);
        }
    };
    function setTargets(el) {
        if(getState()) $(el).each(function() { $(this).prop('checked', true); });
        else $(el).each(function() { $(this).prop('checked', false); });
    };
    function handleController(obj, className) {
        setDisplay(obj);
        setTargets($('.'+className));
        setState(!getState());
    };


}(jQuery));
