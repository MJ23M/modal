$(function() {
    
    $('[data-modal]').click(function(){
        var target = $(this).attr('data-modal');
        modalController(target,300);
        
    })
    
})