class Player {
    constructor() {
       var heightMain = document.getElementById("player");
       heightMain.style.height = screen.height + "px";
       if (screen.width<620) {
        heightMain.style.width = screen.width + "px";
       }
       var heightDiv = document.getElementById("content");
       heightDiv.style.height = screen.height-300 + "px";
    }
}
onload = new Player();

class Audio_Player {
    constructor(){
        this.audio_file = document.getElementById("file");
        this.title_audio = document.getElementById("title");
        this.play_pause_button = document.getElementById("play_pause");
        this.isPlayed;
        this.play_pause_button.addEventListener("click", ()=>{
            this.play_pause();
        });
            this.names_radio = [];
            this.names_radio[0]= "RADIO ALNOUR";
            this.names_radio[1]= "RADIO LEBANON";
            this.names_radio[2]= "RADIO FM";
            this.names_radio[3]= "RADIO FARAH";
            this.names_radio[4]= "RADIO AL2AN";
            this.names_radio[5]= "RADIO SAWT ALGHAD";
            this.names_radio[6]= "RADIO ALMADINA";
            this.source_audio = [];
            this.source_audio[0] = "https://l3.itworkscdn.net/itwaudio/9066/stream";
            this.source_audio[1] = "https://icecast-rian.cdnvideo.ru/voicearb";
            this.source_audio[2] = "https://versionfm.com:8100/stream";
            this.source_audio[3] = "https://radio.farah.fm/;";
            this.source_audio[4] = "https://c20.radioboss.fm:8543/stream";
            this.source_audio[5] = "https://l3.itworkscdn.net/itwaudio/9030/stream";
            this.source_audio[6] = "https://stream.almadinafm.com/;stream.mp3";
            this.server = 0;
            this.setResource();

            document.getElementById("next").addEventListener("click" , ()=>{
                if(this.server<this.source_audio.length-1){
                    ++this.server;
                    this.isPlayed=false;
                }else {
                    this.server=0;
                }
                localStorage.setItem("SAVE",this.server);
                this.setResource();
            });
            document.getElementById("back").addEventListener("click" , ()=>{
                if(this.server>0){
                    --this.server;
                    this.isPlayed=false;
                }else {
                    this.server= this.source_audio.length-1;
                }
                localStorage.setItem("SAVE",this.server);
                this.setResource();
            });
    }

    setResource(){
        if(localStorage.getItem("SAVE") != null){
            this.server =localStorage.getItem("SAVE");
        }
        this.audio_file.src = this.source_audio[this.server];
        this.title_audio.innerHTML = this.names_radio [this.server];
        this.play_pause();
    }


    play_pause(){
        if (this.isPlayed == false){
            this.play_pause_button.src = "./img/pause.png";
            this.audio_file.play();
            this.isPlayed=true;
        }else {
            this.play_pause_button.src = "./img/play.png";
            this.audio_file.pause();
            this.isPlayed=false;
        }
    }
}
onload = new Audio_Player();