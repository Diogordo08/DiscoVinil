
let player;

let agulha = document.getElementsByClassName("agulha")[0]
let disco = document.getElementsByClassName("disco")[0]

function getVideoId(url){
    const regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[1].length === 11) ? match[1] : null;
}

function playAudio(){
    const link = document.getElementById("linkyt").value;
    const videoId = getVideoId(link);

    if(!videoId){
        alert("URL invalido!");
        return;
    }
    else{
        agulha.style.animation = "4s agulha alternate infinite";
        disco.style.animation = "3s spin linear infinite"
    }
    
    if (player) {
        player.loadVideoById(videoId);
    } else {
        player = new YT.Player('player', {
        height: '1',
        width: '1',
        videoId: videoId,
        playerVars: {
            autoplay: 1
        }
        });
    }
}

function stopAudio(){
    agulha.style.animation = "none";
    disco.style.animation = "none";

    document.getElementById('linkyt').value = "";

    if(player){
        player.pauseVideo();
    }
}
