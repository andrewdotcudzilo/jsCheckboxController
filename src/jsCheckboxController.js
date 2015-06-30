(function($){
    $.fn.jsCheckboxController=function(controllerId, className, options) {
        options=$.extend({}, $.fn.jsCheckboxController.defaultOptions, options);

        var $controller=$('#'+controllerId);
        var $targets=$('.'+className);

        $controller.on('click', function(e) {
            handleController(this, $targets);
            e.preventDefault();
        });
       $targets.each(function(index, element) {
            $(this).on('click', function(e) {
                checkTargets($controller, $targets);
            });
        });
        //call check all checked
        setDisplay($controller);
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
    function setTargets(obj) {
        if(getState()) $(obj).each(function() { $(this).prop('checked', true); });
        else $(obj).each(function() { $(this).prop('checked', false); });
    };
    function handleController(controller, targets) {
        setState(!getState());
        setDisplay(controller);
        setTargets(targets);
    };
    function checkTargets(controller, targets) {
        var allChecked=true;
        $(targets).each(function(){
            if(!$(this).is(':checked')) allChecked=false;
        });
        setState(allChecked);
        setDisplay(controller);
    };
}(jQuery));
