class Volume {
    constructor(){
      this.audio_file = document.getElementById("file");
      this.audio_file.volume = 50/100;

      this.volume_range = document.getElementById("volume_range");
      this.volume_range.addEventListener("change", ()=>{
        this.audio_file.volume = this.volume_range.value/100;
      });
      this.volume_speed = document.getElementById("volume_speed");
      this.volume_speed.playbackRate =1;
      this.volume_speed.addEventListener("change", ()=>{
        this.audio_file.playbackRate = this.volume_speed.value/100;
    });
    }
}
onload = new Volume();


class Colore {
    constructor(){
        this.colore1 = document.getElementById("colore1");
        this.colore1.addEventListener("click" , ()=>{
            this.select ("colore1");
        });
        this.colore2 = document.getElementById("colore2");
        this.colore2.addEventListener("click" , ()=>{
            this.select ("colore2");
        });
        this.colore3 = document.getElementById("colore3");
        this.colore3.addEventListener("click" , ()=>{
            this.select ("colore3");
        });
        this.colore4 = document.getElementById("colore4");
        this.colore4.addEventListener("click" , ()=>{
            this.select ("colore4");
        });
        if(localStorage.getItem("COLOR")==null){
            document.body.style.background = "rgb(2, 37, 77)";
        }
        this.select(localStorage.getItem("COLOR"));
    }
    select (color){
        if (color=="colore1"){
            document.body.style.background = "rgb(186, 214, 219)";
        }
        else if (color=="colore2"){
            document.body.style.background = "linear-gradient(to right , rgb(189, 179, 179) , rgb(87, 87, 248)";
        }
        else if (color=="colore3"){
            document.body.style.background = "rgb(147, 126, 196)";
        }
        else if (color=="colore4"){
            document.body.style.background = "rgb(199, 139, 196)";
        }
        localStorage.setItem("COLOR",color);
    }
}
onload = new Colore();