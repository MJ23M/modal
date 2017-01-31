function modalController(target,speed) {
    if(target == 'close') {
            $('.modal-container, .modal').fadeOut(speed);
    } else {
            $('.modal-container').fadeIn(speed);
            $('.modal-container ' + target).fadeIn(speed);
    }
}