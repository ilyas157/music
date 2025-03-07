var playing = false;
var playlist = [];


$(".music-container").on("click", function(){

    if (playlist.length !== 0){
        playlist[0].pause();
        playing = false;
        playlist = [];
    }

    var music = new Audio("music/"+ $(this).attr("id") +".mp3");
    playlist.push(music);
    console.log("music selected");
    //play_music(playlist[0]);
});


$(".play-button").on("click", function(){
    play_music(playlist[0]);
});


$(".back-button").on("click", function(){
    playlist[0].pause();
    playlist[0].fastSeek(0);
    playlist[0].play();
    
});


function play_music(music){
    if (playing === false){
        music.play();
        playing = true;
    }
    else{
        music.pause();
        playing = false;
    }     
}

