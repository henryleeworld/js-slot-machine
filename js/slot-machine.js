$(function() {
    $('#image-start-spin').click(function() {
        $('#image-container ul').playSpin({
            onFinish: function(num) {
                console.log(num);
            }
        });
    });

    var sound = new Audio('sounds/spinning.mp3');
    var ding = new Audio('sounds/ding.wav');
    sound.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);

    $('#text-with-sound-start-spin').click(function() {
        sound.play();
        $('#text-with-sound-container ul').playSpin({
            time: 2000,
            endNum: [1, 2, 7],
            stopSeq: 'rightToLeft',
            onEnd: function() {
                ding.play();
            },
            onFinish: function(num) {
                sound.pause();
                console.log(num);
            }
        });
    });
});