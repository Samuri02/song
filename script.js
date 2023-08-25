let song1=document.querySelector("#song1");
let song2=document.querySelector("#song2");
let song3=document.querySelector("#song3");
let song4=document.querySelector("#song4");
let song5=document.querySelector("#song5");
let song6=document.querySelector("#song6");
let song7=document.querySelector("#song7");
let song8=document.querySelector("#song8");
let song9=document.querySelector("#song9");
let song10=document.querySelector("#song10");
let song11=document.querySelector("#song11");
let song12=document.querySelector("#song12");
let song13=document.querySelector("#song13");
let song14=document.querySelector("#song14");
let song15=document.querySelector("#song15");
let song16=document.querySelector("#song16");
let song17=document.querySelector("#song17");
let song18=document.querySelector("#song18");
let song19=document.querySelector("#song19");
let song20=document.querySelector("#song20");
let song21=document.querySelector("#song21");
let song22=document.querySelector("#song22");
let song23=document.querySelector("#song23");
let btn1=document.getElementById("s1");
let btn2=document.getElementById("s2");
let btn3=document.getElementById("s3");
let btn4=document.getElementById("s4");
let btn5=document.getElementById("s5");
let btn6=document.getElementById("s6");

let btn7=document.getElementById("s7");
let btn8=document.getElementById("s8");
let btn9=document.getElementById("s9");
let btn10=document.getElementById("s10");
let btn11=document.getElementById("s11");
let btn12=document.getElementById("s12");

let btn13=document.getElementById("s13");
let btn14=document.getElementById("s14");
let btn15=document.getElementById("s15");
let btn16=document.getElementById("s16");
let btn17=document.getElementById("s17");
let btn18=document.getElementById("s18");

let btn19=document.getElementById("s19");
let btn20=document.getElementById("s20");
let btn21=document.getElementById("s21");
let btn22=document.getElementById("s22");
let btn23=document.getElementById("s23");
let display1=document.getElementById("displaysongname");
let display2=document.getElementById("displaysinger");
let display3=document.getElementById("d1");
let display4=document.getElementById("d2");
let display5=document.getElementById("d3");
let img=document.getElementById("img");

let backward=document.getElementById("btn1");
let pause=document.getElementById("btn2");
let play=document.getElementById("btn3");
let forward=document.getElementById("btn4");
let volumede=document.getElementById("btn5");
let volumein=document.getElementById("btn6");
let slient=document.getElementById("btn7");
let fullvolume=document.getElementById("btn8");

btn1.onclick= ()=>{
    song2.pause();
    song3.pause();
    song4.pause();
    song5.pause();
    song6.pause();
    song7.pause();
    song8.pause();
    song9.pause();
    song10.pause();
    song11.pause();
    song12.pause();
    song13.pause();
    song14.pause();

    song15.pause();
    song16.pause();
    song17.pause();
    song18.pause();
    song19.pause();
    song20.pause();
    song21.pause();
    song22.pause();
    song23.pause();
    
    display1.innerText="Night Dancer";
        display2.innerText="イマセ (imase)";
    let random= randomNUm();
    img.src=`../img/i${random}.jpg`;
    
    play.onclick= ()=>{
        song1.play();
        
    
        }
        pause.onclick= ()=>{
            song1.pause();
            
    }
    volumede.onclick= ()=>{
        let realVolumePercentage=parseInt(song1.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song1.volume>0.01){
            song1.volume=(realVolumePercentage-5)/100;
        }
       
     
    }
    volumein.onclick= ()=>{
        let realVolumePercentage=parseInt(song1.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song1.volume<1){
            song1.volume=(realVolumePercentage+5)/100;
        }
        
    }
    slient.onclick= ()=>{
        song1.volume=0;
        display5.innerText=`0%`;
    }
    fullvolume.onclick= ()=>{
        song1.volume=1;
        display5.innerText=`100%`;
    }
    song1.addEventListener("timeupdate",()=>{
        const current=(parseInt(song1.currentTime));
        
        const second=parseInt(song1.currentTime);
        const displaymins=parseInt(second/60);
        const displaysec=parseInt(second%60);
        display3.innerText=`${displaymins}mins:${displaysec}sec`;
        const duration=parseInt(song1.duration);
        const min=parseInt(duration/60);
        const sec=duration%60;
        display4.innerText=`${min}min:${sec}sec`;
    })
    forward.onclick= ()=>{
        const second=parseInt(song1.currentTime);
        const totalsecod=parseInt(song1.duration);
        if(second<totalsecod){  
            song1.currentTime=second+5;
        }
      
    }
    backward.onclick= ()=>{
        const second=parseInt(song1.currentTime);
        if(second>=1){
            song1.currentTime=second-5;
        }
    }

}
btn2.onclick= ()=>{
    song1.pause();
    song3.pause();
    song4.pause();
    song5.pause();
    song6.pause();
    song7.pause();
    song8.pause();
    song9.pause();
    song10.pause();
    song11.pause();
    song12.pause();
    song13.pause();
    song14.pause();

    song15.pause();
    song16.pause();
    song17.pause();
    song18.pause();
    song19.pause();
    song20.pause();
    song21.pause();
    song22.pause();
    song23.pause();
    

    display1.innerText="Love Story";
        display2.innerText="Taylor Swift";
    let random= randomNUm();
    img.src=`../img/i${random}.jpg`;

    play.onclick= ()=>{
        song2.play();
        
        }
        pause.onclick= ()=>{
            song2.pause();
           
    }
    volumede.onclick= ()=>{
        let realVolumePercentage=parseInt(song2.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song2.volume>0.01){
            song2.volume=(realVolumePercentage-5)/100;
        }
       
     
    }
    volumein.onclick= ()=>{
        let realVolumePercentage=parseInt(song2.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song2.volume<1){
            song2.volume=(realVolumePercentage+5)/100;
        }
        
    }
    slient.onclick= ()=>{
        song2.volume=0;
        display5.innerText=`0%`;
    }
    fullvolume.onclick= ()=>{
        song2.volume=1;
        display5.innerText=`100%`;
    }
    song2.addEventListener("timeupdate",()=>{
        const current=(parseInt(song2.currentTime));
        
        const second=parseInt(song2.currentTime);
        const displaymins=parseInt(second/60);
        const displaysec=parseInt(second%60);
        display3.innerText=`${displaymins}mins:${displaysec}sec`;
        const duration=parseInt(song2.duration);
        const min=parseInt(duration/60);
        const sec=duration%60;
        display4.innerText=`${min}min:${sec}sec`;
    })
    forward.onclick= ()=>{
        const second=parseInt(song2.currentTime);
        const totalsecod=parseInt(song2.duration);
        if(second<totalsecod){  
            song2.currentTime=second+5;
        }
      
    }
    backward.onclick= ()=>{
        const second=parseInt(song2.currentTime);
        if(second>=1){
            song2.currentTime=second-5;
        }
    }

}
btn3.onclick= ()=>{
    song1.pause();
    song2.pause();
    song4.pause();
    song5.pause();
    song6.pause();
    song7.pause();
    song8.pause();
    song9.pause();
    song10.pause();
    song11.pause();
    song12.pause();
    song13.pause();
    song14.pause();

    song15.pause();
    song16.pause();
    song17.pause();
    song18.pause();
    song19.pause();
    song20.pause();
    song21.pause();
    song22.pause();
    song23.pause();
    

    display1.innerText="What it if";
        display2.innerText="Ne-Yo";
    let random= randomNUm();
    img.src=`../img/i${random}.jpg`;

    play.onclick= ()=>{
        song3.play();
        
        }
        pause.onclick= ()=>{
            song3.pause();
           
    }
    volumede.onclick= ()=>{
        let realVolumePercentage=parseInt(song3.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song3.volume>0.01){
            song3.volume=(realVolumePercentage-5)/100;
        }
       
     
    }
    volumein.onclick= ()=>{
        let realVolumePercentage=parseInt(song3.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song3.volume<1){
            song3.volume=(realVolumePercentage+5)/100;
        }
        
    }
    slient.onclick= ()=>{
        song3.volume=0;
        display5.innerText=`0%`;
    }
    fullvolume.onclick= ()=>{
        song3.volume=1;
        display5.innerText=`100%`;
    }
    song2.addEventListener("timeupdate",()=>{
        const current=(parseInt(song3.currentTime));
        
        const second=parseInt(song3.currentTime);
        const displaymins=parseInt(second/60);
        const displaysec=parseInt(second%60);
        display3.innerText=`${displaymins}mins:${displaysec}sec`;
        const duration=parseInt(song3.duration);
        const min=parseInt(duration/60);
        const sec=duration%60;
        display4.innerText=`${min}min:${sec}sec`;
    })
    forward.onclick= ()=>{
        const second=parseInt(song3.currentTime);
        const totalsecod=parseInt(song3.duration);
        if(second<totalsecod){  
            song3.currentTime=second+5;
        }
      
    }
    backward.onclick= ()=>{
        const second=parseInt(song3.currentTime);
        if(second>=1){
            song3.currentTime=second-5;
        }
    }

}
btn4.onclick= ()=>{
    song1.pause();
    song3.pause();
    song2.pause();
    song5.pause();
    song6.pause();
    song7.pause();
    song8.pause();
    song9.pause();
    song10.pause();
    song11.pause();
    song12.pause();
    song13.pause();
    song14.pause();

    song15.pause();
    song16.pause();
    song17.pause();
    song18.pause();
    song19.pause();
    song20.pause();
    song21.pause();
    song22.pause();
    song23.pause();
    

    display1.innerText="Shape of You";
        display2.innerText="Ed Sheeran";
    let random= randomNUm();
    img.src=`../img/i${random}.jpg`;

    play.onclick= ()=>{
        song4.play();
        
        }
        pause.onclick= ()=>{
            song4.pause();
           
    }
    volumede.onclick= ()=>{
        let realVolumePercentage=parseInt(song4.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song4.volume>0.01){
            song4.volume=(realVolumePercentage-5)/100;
        }
       
     
    }
    volumein.onclick= ()=>{
        let realVolumePercentage=parseInt(song4.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song4.volume<1){
            song4.volume=(realVolumePercentage+5)/100;
        }
        
    }
    slient.onclick= ()=>{
        song4.volume=0;
        display5.innerText=`0%`;
    }
    fullvolume.onclick= ()=>{
        song4.volume=1;
        display5.innerText=`100%`;
    }
    song4.addEventListener("timeupdate",()=>{
        const current=(parseInt(song4.currentTime));
        
        const second=parseInt(song4.currentTime);
        const displaymins=parseInt(second/60);
        const displaysec=parseInt(second%60);
        display3.innerText=`${displaymins}mins:${displaysec}sec`;
        const duration=parseInt(song4.duration);
        const min=parseInt(duration/60);
        const sec=duration%60;
        display4.innerText=`${min}min:${sec}sec`;
    })
    forward.onclick= ()=>{
        const second=parseInt(song4.currentTime);
        const totalsecod=parseInt(song4.duration);
        if(second<totalsecod){  
            song4.currentTime=second+5;
        }
      
    }
    backward.onclick= ()=>{
        const second=parseInt(song4.currentTime);
        if(second>=1){
            song4.currentTime=second-5;
        }
    }

}

function randomNUm(){
    const ranNum=Math.floor(1+Math.random()*23);
    return ranNum;
    console.log(ranNum);

}
btn5.onclick= ()=>{
    song1.pause();
    song3.pause();
    song2.pause();
    song4.pause();
    song6.pause();
    song7.pause();
    song8.pause();
    song9.pause();
    song10.pause();
    song11.pause();
    song12.pause();
    song13.pause();
    song14.pause();

    song15.pause();
    song16.pause();
    song17.pause();
    song18.pause();
    song19.pause();
    song20.pause();
    song21.pause();
    song22.pause();
    song23.pause();
    

    display1.innerText="It's You";
        display2.innerText="Ali Gatie";
    let random= randomNUm();
    img.src=`../img/i${random}.jpg`;

    play.onclick= ()=>{
        song5.play();
        
        }
        pause.onclick= ()=>{
            song5.pause();
           
    }
    volumede.onclick= ()=>{
        let realVolumePercentage=parseInt(song5.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song5.volume>0.01){
            song5.volume=(realVolumePercentage-5)/100;
        }
       
     
    }
    volumein.onclick= ()=>{
        let realVolumePercentage=parseInt(song5.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song5.volume<1){
            song5.volume=(realVolumePercentage+5)/100;
        }
        
    }
    slient.onclick= ()=>{
        song5.volume=0;
        display5.innerText=`0%`;
    }
    fullvolume.onclick= ()=>{
        song5.volume=1;
        display5.innerText=`100%`;
    }
    song5.addEventListener("timeupdate",()=>{
        const current=(parseInt(song5.currentTime));
        
        const second=parseInt(song5.currentTime);
        const displaymins=parseInt(second/60);
        const displaysec=parseInt(second%60);
        display3.innerText=`${displaymins}mins:${displaysec}sec`;
        const duration=parseInt(song5.duration);
        const min=parseInt(duration/60);
        const sec=duration%60;
        display4.innerText=`${min}min:${sec}sec`;
    })
    forward.onclick= ()=>{
        const second=parseInt(song5.currentTime);
        const totalsecod=parseInt(song5.duration);
        if(second<totalsecod){  
            song5.currentTime=second+5;
        }
      
    }
    backward.onclick= ()=>{
        const second=parseInt(song5.currentTime);
        if(second>=1){
            song5.currentTime=second-5;
        }
    }

}
btn6.onclick= ()=>{
    song1.pause();
    song3.pause();
    song2.pause();
    song5.pause();
    song4.pause();
    song7.pause();
    song8.pause();
    song9.pause();
    song10.pause();
    song11.pause();
    song12.pause();
    song13.pause();
    song14.pause();

    song15.pause();
    song16.pause();
    song17.pause();
    song18.pause();
    song19.pause();
    song20.pause();
    song21.pause();
    song22.pause();
    song23.pause();
    

    display1.innerText="Sweet But Psycho";
        display2.innerText="Ava Max";
    let random= randomNUm();
    img.src=`../img/i${random}.jpg`;

    play.onclick= ()=>{
        song6.play();
        
        }
        pause.onclick= ()=>{
            song6.pause();
           
    }
    volumede.onclick= ()=>{
        let realVolumePercentage=parseInt(song6.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song6.volume>0.01){
            song6.volume=(realVolumePercentage-5)/100;
        }
       
     
    }
    volumein.onclick= ()=>{
        let realVolumePercentage=parseInt(song6.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song6.volume<1){
            song6.volume=(realVolumePercentage+5)/100;
        }
        
    }
    slient.onclick= ()=>{
        song6.volume=0;
        display5.innerText=`0%`;
    }
    fullvolume.onclick= ()=>{
        song6.volume=1;
        display5.innerText=`100%`;
    }
    song6.addEventListener("timeupdate",()=>{
        const current=(parseInt(song6.currentTime));
        
        const second=parseInt(song6.currentTime);
        const displaymins=parseInt(second/60);
        const displaysec=parseInt(second%60);
        display3.innerText=`${displaymins}mins:${displaysec}sec`;
        const duration=parseInt(song6.duration);
        const min=parseInt(duration/60);
        const sec=duration%60;
        display4.innerText=`${min}min:${sec}sec`;
    })
    forward.onclick= ()=>{
        const second=parseInt(song6.currentTime);
        const totalsecod=parseInt(song6.duration);
        if(second<totalsecod){  
            song6.currentTime=second+5;
        }
      
    }
    backward.onclick= ()=>{
        const second=parseInt(song6.currentTime);
        if(second>=1){
            song6.currentTime=second-5;
        }
    }

}
btn7.onclick= ()=>{
    song1.pause();
    song3.pause();
    song2.pause();
    song5.pause();
    song6.pause();
    song6.pause();
    song8.pause();
    song9.pause();
    song10.pause();
    song11.pause();
    song12.pause();
    song13.pause();
    song14.pause();

    song15.pause();
    song16.pause();
    song17.pause();
    song18.pause();
    song19.pause();
    song20.pause();
    song21.pause();
    song22.pause();
    song23.pause();
    

    display1.innerText="Seven";
        display2.innerText="Jung Kook";
    let random= randomNUm();
    img.src=`../img/i${random}.jpg`;

    play.onclick= ()=>{
        song7.play();
        
        }
        pause.onclick= ()=>{
            song7.pause();
           
    }
    volumede.onclick= ()=>{
        let realVolumePercentage=parseInt(song7.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song7.volume>0.01){
            song7.volume=(realVolumePercentage-5)/100;
        }
       
     
    }
    volumein.onclick= ()=>{
        let realVolumePercentage=parseInt(song7.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song7.volume<1){
            song7.volume=(realVolumePercentage+5)/100;
        }
        
    }
    slient.onclick= ()=>{
        song7.volume=0;
        display5.innerText=`0%`;
    }
    fullvolume.onclick= ()=>{
        song7.volume=1;
        display5.innerText=`100%`;
    }
    song7.addEventListener("timeupdate",()=>{
        const current=(parseInt(song7.currentTime));
        
        const second=parseInt(song7.currentTime);
        const displaymins=parseInt(second/60);
        const displaysec=parseInt(second%60);
        display3.innerText=`${displaymins}mins:${displaysec}sec`;
        const duration=parseInt(song7.duration);
        const min=parseInt(duration/60);
        const sec=duration%60;
        display4.innerText=`${min}min:${sec}sec`;
    })
    forward.onclick= ()=>{
        const second=parseInt(song7.currentTime);
        const totalsecod=parseInt(song7.duration);
        if(second<totalsecod){  
            song2.currentTime=second+5;
        }
      
    }
    backward.onclick= ()=>{
        const second=parseInt(song7.currentTime);
        if(second>=1){
            song7.currentTime=second-5;
        }
    }

}
btn8.onclick= ()=>{
    song1.pause();
    song3.pause();
    song2.pause();
    song5.pause();
    song6.pause();
    song7.pause();
    song4.pause();
    song9.pause();
    song10.pause();
    song11.pause();
    song12.pause();
    song13.pause();
    song14.pause();

    song15.pause();
    song16.pause();
    song17.pause();
    song18.pause();
    song19.pause();
    song20.pause();
    song21.pause();
    song22.pause();
    song23.pause();
    

    display1.innerText="I'm Good(blue)";
        display2.innerText="David Guetta and Bebe Rexha"
    let random= randomNUm();
    img.src=`../img/i${random}.jpg`;

    play.onclick= ()=>{
        song8.play();
        
        }
        pause.onclick= ()=>{
            song8.pause();
           
    }
    volumede.onclick= ()=>{
        let realVolumePercentage=parseInt(song8.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song8.volume>0.01){
            song8.volume=(realVolumePercentage-5)/100;
        }
       
     
    }
    volumein.onclick= ()=>{
        let realVolumePercentage=parseInt(song8.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song8.volume<1){
            song8.volume=(realVolumePercentage+5)/100;
        }
        
    }
    slient.onclick= ()=>{
        song8.volume=0;
        display5.innerText=`0%`;
    }
    fullvolume.onclick= ()=>{
        song8.volume=1;
        display5.innerText=`100%`;
    }
    song8.addEventListener("timeupdate",()=>{
        const current=(parseInt(song8.currentTime));
        
        const second=parseInt(song8.currentTime);
        const displaymins=parseInt(second/60);
        const displaysec=parseInt(second%60);
        display3.innerText=`${displaymins}mins:${displaysec}sec`;
        const duration=parseInt(song8.duration);
        const min=parseInt(duration/60);
        const sec=duration%60;
        display4.innerText=`${min}min:${sec}sec`;
    })
    forward.onclick= ()=>{
        const second=parseInt(song8.currentTime);
        const totalsecod=parseInt(song8.duration);
        if(second<totalsecod){  
            song2.currentTime=second+5;
        }
      
    }
    backward.onclick= ()=>{
        const second=parseInt(song8.currentTime);
        if(second>=1){
            song8.currentTime=second-5;
        }
    }

}
btn9.onclick= ()=>{
    song1.pause();
    song3.pause();
    song2.pause();
    song5.pause();
    song6.pause();
    song6.pause();
    song8.pause();
    song7.pause();
    song10.pause();
    song11.pause();
    song12.pause();
    song13.pause();
    song14.pause();

    song15.pause();
    song16.pause();
    song17.pause();
    song18.pause();
    song19.pause();
    song20.pause();
    song21.pause();
    song22.pause();
    song23.pause();
    

    display1.innerText="Counting Stars";
        display2.innerText="OneRepublic";
    let random= randomNUm();
    img.src=`../img/i${random}.jpg`;

    play.onclick= ()=>{
        song9.play();
        
        }
        pause.onclick= ()=>{
            song9.pause();
           
    }
    volumede.onclick= ()=>{
        let realVolumePercentage=parseInt(song9.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song9.volume>0.01){
            song9.volume=(realVolumePercentage-5)/100;
        }
       
     
    }
    volumein.onclick= ()=>{
        let realVolumePercentage=parseInt(song9.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song9.volume<1){
            song9.volume=(realVolumePercentage+5)/100;
        }
        
    }
    slient.onclick= ()=>{
        song9.volume=0;
        display5.innerText=`0%`;
    }
    fullvolume.onclick= ()=>{
        song9.volume=1;
        display5.innerText=`100%`;
    }
    song9.addEventListener("timeupdate",()=>{
        const current=(parseInt(song9.currentTime));
        
        const second=parseInt(song9.currentTime);
        const displaymins=parseInt(second/60);
        const displaysec=parseInt(second%60);
        display3.innerHTML=`${displaymins}mins:${displaysec}sec`;
        const duration=parseInt(song9.duration);
        const min=parseInt(duration/60);
        const sec=duration%60;
        display4.innerText=`${min}min:${sec}sec`;
    })
    forward.onclick= ()=>{
        const second=parseInt(song9.currentTime);
        const totalsecod=parseInt(song9.duration);
        if(second<totalsecod){  
            song2.currentTime=second+5;
        }
      
    }
    backward.onclick= ()=>{
        const second=parseInt(song9.currentTime);
        if(second>=1){
            song9.currentTime=second-5;
        }
    }

}
btn10.onclick= ()=>{
    song1.pause();
    song3.pause();
    song2.pause();
    song5.pause();
    song6.pause();
    song7.pause();
    song8.pause();
    song9.pause();
    song4.pause();
    song11.pause();
    song12.pause();
    song13.pause();
    song14.pause();

    song15.pause();
    song16.pause();
    song17.pause();
    song18.pause();
    song19.pause();
    song20.pause();
    song21.pause();
    song22.pause();
    song23.pause();
    

    display1.innerText="TATTOO";
        display2.innerText=" Lena Katina and Julia Volkova";
    let random= randomNUm();
    img.src=`../img/i${random}.jpg`;

    play.onclick= ()=>{
        song10.play();
        
        }
        pause.onclick= ()=>{
            song10.pause();
           
    }
    volumede.onclick= ()=>{
        let realVolumePercentage=parseInt(song10.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song10.volume>0.01){
            song10.volume=(realVolumePercentage-5)/100;
        }
       
     
    }
    volumein.onclick= ()=>{
        let realVolumePercentage=parseInt(song10.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song10.volume<1){
            song10.volume=(realVolumePercentage+5)/100;
        }
        
    }
    slient.onclick= ()=>{
        song10.volume=0;
        display5.innerText=`0%`;
    }
    fullvolume.onclick= ()=>{
        song10.volume=1;
        display5.innerText=`100%`;
    }
    song10.addEventListener("timeupdate",()=>{
        const current=(parseInt(song10.currentTime));
        
        const second=parseInt(song10.currentTime);
        const displaymins=parseInt(second/60);
        const displaysec=parseInt(second%60);
        display3.innerText=`${displaymins}mins:${displaysec}sec`;
        const duration=parseInt(song10.duration);
        const min=parseInt(duration/60);
        const sec=duration%60;
        display4.innerText=`${min}min:${sec}sec`;
    })
    forward.onclick= ()=>{
        const second=parseInt(song10.currentTime);
        const totalsecod=parseInt(song10.duration);
        if(second<totalsecod){  
            song10.currentTime=second+5;
        }
      
    }
    backward.onclick= ()=>{
        const second=parseInt(song10.currentTime);
        if(second>=1){
            song10.currentTime=second-5;
        }
    }

}
btn11.onclick= ()=>{
    song1.pause();
    song3.pause();
    song2.pause();
    song5.pause();
    song6.pause();
    song7.pause();
    song8.pause();
    song9.pause();
    song4.pause();
    song10.pause();
    song12.pause();
    song13.pause();
    song14.pause();

    song15.pause();
    song16.pause();
    song17.pause();
    song18.pause();
    song19.pause();
    song20.pause();
    song21.pause();
    song22.pause();
    song23.pause();
    

    display1.innerText="Dark Side";
        display2.innerText=" Alan Walker";
    let random= randomNUm();
    img.src=`../img/i${random}.jpg`;

    play.onclick= ()=>{
        song11.play();
        
        }
        pause.onclick= ()=>{
            song11.pause();
           
    }
    volumede.onclick= ()=>{
        let realVolumePercentage=parseInt(song11.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song11.volume>0.01){
            song11.volume=(realVolumePercentage-5)/100;
        }
       
     
    }
    volumein.onclick= ()=>{
        let realVolumePercentage=parseInt(song11.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song11.volume<1){
            song11.volume=(realVolumePercentage+5)/100;
        }
        
    }
    slient.onclick= ()=>{
        song11.volume=0;
        display5.innerText=`0%`;
    }
    fullvolume.onclick= ()=>{
        song11.volume=1;
        display5.innerText=`100%`;
    }
    song11.addEventListener("timeupdate",()=>{
        const current=(parseInt(song11.currentTime));
        
        const second=parseInt(song11.currentTime);
        const displaymins=parseInt(second/60);
        const displaysec=parseInt(second%60);
        display3.innerText=`${displaymins}mins:${displaysec}sec`;
        const duration=parseInt(song11.duration);
        const min=parseInt(duration/60);
        const sec=duration%60;
        display4.innerText=`${min}min:${sec}sec`;
    })
    forward.onclick= ()=>{
        const second=parseInt(song11.currentTime);
        const totalsecod=parseInt(song11.duration);
        if(second<totalsecod){  
            song10.currentTime=second+5;
        }
      
    }
    backward.onclick= ()=>{
        const second=parseInt(song11.currentTime);
        if(second>=1){
            song11.currentTime=second-5;
        }
    }

}
btn12.onclick= ()=>{
    song1.pause();
    song3.pause();
    song2.pause();
    song5.pause();
    song6.pause();
    song7.pause();
    song8.pause();
    song9.pause();
    song4.pause();
    song11.pause();
    song10.pause();
    song13.pause();
    song14.pause();

    song15.pause();
    song16.pause();
    song17.pause();
    song18.pause();
    song19.pause();
    song20.pause();
    song21.pause();
    song22.pause();
    song23.pause();
    

    display1.innerText="MOOD";
        display2.innerText=" Ian Dior";
    let random= randomNUm();
    img.src=`../img/i${random}.jpg`;

    play.onclick= ()=>{
        song12.play();
        
        }
        pause.onclick= ()=>{
            song12.pause();
           
    }
    volumede.onclick= ()=>{
        let realVolumePercentage=parseInt(song12.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song12.volume>0.01){
            song12.volume=(realVolumePercentage-5)/100;
        }
       
     
    }
    volumein.onclick= ()=>{
        let realVolumePercentage=parseInt(song12.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song12.volume<1){
            song12.volume=(realVolumePercentage+5)/100;
        }
        
    }
    slient.onclick= ()=>{
        song12.volume=0;
        display5.innerText=`0%`;
    }
    fullvolume.onclick= ()=>{
        song12.volume=1;
        display5.innerText=`100%`;
    }
    song12.addEventListener("timeupdate",()=>{
        const current=(parseInt(song12.currentTime));
        
        const second=parseInt(song12.currentTime);
        const displaymins=parseInt(second/60);
        const displaysec=parseInt(second%60);
        display3.innerText=`${displaymins}mins:${displaysec}sec`;
        const duration=parseInt(song12.duration);
        const min=parseInt(duration/60);
        const sec=duration%60;
        display4.innerText=`${min}min:${sec}sec`;
    })
    forward.onclick= ()=>{
        const second=parseInt(song12.currentTime);
        const totalsecod=parseInt(song12.duration);
        if(second<totalsecod){  
            song12.currentTime=second+5;
        }
      
    }
    backward.onclick= ()=>{
        const second=parseInt(song12.currentTime);
        if(second>=1){
            song12.currentTime=second-5;
        }
    }

}

btn13.onclick= ()=>{
    song1.pause();
    song3.pause();
    song2.pause();
    song5.pause();
    song6.pause();
    song7.pause();
    song8.pause();
    song9.pause();
    song4.pause();
    song11.pause();
    song10.pause();
    song12.pause();
    song14.pause();

    song15.pause();
    song16.pause();
    song17.pause();
    song18.pause();
    song19.pause();
    song20.pause();
    song21.pause();
    song22.pause();
    song23.pause();
    

    display1.innerText="We don't talk anymore";
        display2.innerText=" Charlie Puth";
    let random= randomNUm();
    img.src=`../img/i${random}.jpg`;

    play.onclick= ()=>{
        song13.play();
        
        }
        pause.onclick= ()=>{
            song13.pause();
           
    }
    volumede.onclick= ()=>{
        let realVolumePercentage=parseInt(song12.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song13.volume>0.01){
            song13.volume=(realVolumePercentage-5)/100;
        }
       
     
    }
    volumein.onclick= ()=>{
        let realVolumePercentage=parseInt(song12.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song13.volume<1){
            song13.volume=(realVolumePercentage+5)/100;
        }
        
    }
    slient.onclick= ()=>{
        song13.volume=0;
        display5.innerText=`0%`;
    }
    fullvolume.onclick= ()=>{
        song13.volume=1;
        display5.innerText=`100%`;
    }
    song13.addEventListener("timeupdate",()=>{
        const current=(parseInt(song13.currentTime));
        
        const second=parseInt(song13.currentTime);
        const displaymins=parseInt(second/60);
        const displaysec=parseInt(second%60);
        display3.innerText=`${displaymins}mins:${displaysec}sec`;
        const duration=parseInt(song13.duration);
        const min=parseInt(duration/60);
        const sec=duration%60;
        display4.innerText=`${min}min:${sec}sec`;
    })
    forward.onclick= ()=>{
        const second=parseInt(song13.currentTime);
        const totalsecod=parseInt(song13.duration);
        if(second<totalsecod){  
            song13.currentTime=second+5;
        }
      
    }
    backward.onclick= ()=>{
        const second=parseInt(song13.currentTime);
        if(second>=1){
            song13.currentTime=second-5;
        }
    }

}
btn14.onclick= ()=>{
    song1.pause();
    song3.pause();
    song2.pause();
    song5.pause();
    song6.pause();
    song7.pause();
    song8.pause();
    song9.pause();
    song4.pause();
    song11.pause();
    song10.pause();
    song13.pause();
    song12.pause();

    song15.pause();
    song16.pause();
    song17.pause();
    song18.pause();
    song19.pause();
    song20.pause();
    song21.pause();
    song22.pause();
    song23.pause();
    

    display1.innerText="COLLIDE";
        display2.innerText=" Justine Skye ";
    let random= randomNUm();
    img.src=`../img/i${random}.jpg`;

    play.onclick= ()=>{
        song14.play();
        
        }
        pause.onclick= ()=>{
            song14.pause();
           
    }
    volumede.onclick= ()=>{
        let realVolumePercentage=parseInt(song14.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song14.volume>0.01){
            song14.volume=(realVolumePercentage-5)/100;
        }
       
     
    }
    volumein.onclick= ()=>{
        let realVolumePercentage=parseInt(song14.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song14.volume<1){
            song14.volume=(realVolumePercentage+5)/100;
        }
        
    }
    slient.onclick= ()=>{
        song14.volume=0;
        display5.innerText=`0%`;
    }
    fullvolume.onclick= ()=>{
        song14.volume=1;
        display5.innerText=`100%`;
    }
    song14.addEventListener("timeupdate",()=>{
        const current=(parseInt(song14.currentTime));
        
        const second=parseInt(song14.currentTime);
        const displaymins=parseInt(second/60);
        const displaysec=parseInt(second%60);
        display3.innerText=`${displaymins}mins:${displaysec}sec`;
        const duration=parseInt(song14.duration);
        const min=parseInt(duration/60);
        const sec=duration%60;
        display4.innerText=`${min}min:${sec}sec`;
    })
    forward.onclick= ()=>{
        const second=parseInt(song14.currentTime);
        const totalsecod=parseInt(song14.duration);
        if(second<totalsecod){  
            song14.currentTime=second+5;
        }
      
    }
    backward.onclick= ()=>{
        const second=parseInt(song14.currentTime);
        if(second>=1){
            song14.currentTime=second-5;
        }
    }

}
btn15.onclick= ()=>{
    song1.pause();
    song3.pause();
    song2.pause();
    song5.pause();
    song6.pause();
    song7.pause();
    song8.pause();
    song9.pause();
    song4.pause();
    song11.pause();
    song10.pause();
    song13.pause();
    song14.pause();

    song12.pause();
    song16.pause();
    song17.pause();
    song18.pause();
    song19.pause();
    song20.pause();
    song21.pause();
    song22.pause();
    song23.pause();
    

    display1.innerText="CUPID";
        display2.innerText=" Twin Ver";
    let random= randomNUm();
    img.src=`../img/i${random}.jpg`;

    play.onclick= ()=>{
        song15.play();
        
        }
        pause.onclick= ()=>{
            song15.pause();
           
    }
    volumede.onclick= ()=>{
        let realVolumePercentage=parseInt(song12.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song15.volume>0.01){
            song15.volume=(realVolumePercentage-5)/100;
        }
       
     
    }
    volumein.onclick= ()=>{
        let realVolumePercentage=parseInt(song15.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song15.volume<1){
            song15.volume=(realVolumePercentage+5)/100;
        }
        
    }
    slient.onclick= ()=>{
        song15.volume=0;
        display5.innerText=`0%`;
    }
    fullvolume.onclick= ()=>{
        song15.volume=1;
        display5.innerText=`100%`;
    }
    song15.addEventListener("timeupdate",()=>{
        const current=(parseInt(song15.currentTime));
        
        const second=parseInt(song15.currentTime);
        const displaymins=parseInt(second/60);
        const displaysec=parseInt(second%60);
        display3.innerText=`${displaymins}mins:${displaysec}sec`;
        const duration=parseInt(song15.duration);
        const min=parseInt(duration/60);
        const sec=duration%60;
        display4.innerText=`${min}min:${sec}sec`;
    })
    forward.onclick= ()=>{
        const second=parseInt(song15.currentTime);
        const totalsecod=parseInt(song15.duration);
        if(second<totalsecod){  
            song15.currentTime=second+5;
        }
      
    }
    backward.onclick= ()=>{
        const second=parseInt(song15.currentTime);
        if(second>=1){
            song15.currentTime=second-5;
        }
    }

}
btn16.onclick= ()=>{
    song1.pause();
    song3.pause();
    song2.pause();
    song5.pause();
    song6.pause();
    song7.pause();
    song8.pause();
    song9.pause();
    song4.pause();
    song11.pause();
    song10.pause();
    song13.pause();
    song14.pause();

    song15.pause();
    song12.pause();
    song17.pause();
    song18.pause();
    song19.pause();
    song20.pause();
    song21.pause();
    song22.pause();
    song23.pause();
    

    display1.innerText="Heat Wave";
        display2.innerText="Dave Bayley";
    let random= randomNUm();
    img.src=`../img/i${random}.jpg`;

    play.onclick= ()=>{
        song16.play();
        
        }
        pause.onclick= ()=>{
            song16.pause();
           
    }
    volumede.onclick= ()=>{
        let realVolumePercentage=parseInt(song16.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song16.volume>0.01){
            song16.volume=(realVolumePercentage-5)/100;
        }
       
     
    }
    volumein.onclick= ()=>{
        let realVolumePercentage=parseInt(song16.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song16.volume<1){
            song16.volume=(realVolumePercentage+5)/100;
        }
        
    }
    slient.onclick= ()=>{
        song16.volume=0;
        display5.innerText=`0%`;
    }
    fullvolume.onclick= ()=>{
        song16.volume=1;
        display5.innerText=`100%`;
    }
    song16.addEventListener("timeupdate",()=>{
        const current=(parseInt(song16.currentTime));
        
        const second=parseInt(song16.currentTime);
        const displaymins=parseInt(second/60);
        const displaysec=parseInt(second%60);
        display3.innerText=`${displaymins}mins:${displaysec}sec`;
        const duration=parseInt(song16.duration);
        const min=parseInt(duration/60);
        const sec=duration%60;
        display4.innerText=`${min}min:${sec}sec`;
    })
    forward.onclick= ()=>{
        const second=parseInt(song16.currentTime);
        const totalsecod=parseInt(song16.duration);
        if(second<totalsecod){  
            song16.currentTime=second+5;
        }
      
    }
    backward.onclick= ()=>{
        const second=parseInt(song16.currentTime);
        if(second>=1){
            song16.currentTime=second-5;
        }
    }

}
btn17.onclick= ()=>{
    song1.pause();
    song3.pause();
    song2.pause();
    song5.pause();
    song6.pause();
    song7.pause();
    song8.pause();
    song9.pause();
    song4.pause();
    song11.pause();
    song10.pause();
    song13.pause();
    song14.pause();

    song15.pause();
    song16.pause();
    song12.pause();
    song18.pause();
    song19.pause();
    song20.pause();
    song21.pause();
    song22.pause();
    song23.pause();
    

    display1.innerText="Set Fire To the Rain";
        display2.innerText=" Adele";
    let random= randomNUm();
    img.src=`../img/i${random}.jpg`;

    play.onclick= ()=>{
        song17.play();
        
        }
        pause.onclick= ()=>{
            song17.pause();
           
    }
    volumede.onclick= ()=>{
        let realVolumePercentage=parseInt(song17.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song17.volume>0.01){
            song17.volume=(realVolumePercentage-5)/100;
        }
       
     
    }
    volumein.onclick= ()=>{
        let realVolumePercentage=parseInt(song17.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song17.volume<1){
            song17.volume=(realVolumePercentage+5)/100;
        }
        
    }
    slient.onclick= ()=>{
        song17.volume=0;
        display5.innerText=`0%`;
    }
    fullvolume.onclick= ()=>{
        song17.volume=1;
        display5.innerText=`100%`;
    }
    song17.addEventListener("timeupdate",()=>{
        const current=(parseInt(song17.currentTime));
        
        const second=parseInt(song17.currentTime);
        const displaymins=parseInt(second/60);
        const displaysec=parseInt(second%60);
        display3.innerText=`${displaymins}mins:${displaysec}sec`;
        const duration=parseInt(song17.duration);
        const min=parseInt(duration/60);
        const sec=duration%60;
        display4.innerText=`${min}min:${sec}sec`;
    })
    forward.onclick= ()=>{
        const second=parseInt(song17.currentTime);
        const totalsecod=parseInt(song17.duration);
        if(second<totalsecod){  
            song17.currentTime=second+5;
        }
      
    }
    backward.onclick= ()=>{
        const second=parseInt(song17.currentTime);
        if(second>=1){
            song17.currentTime=second-5;
        }
    }

}
btn18.onclick= ()=>{
    song1.pause();
    song3.pause();
    song2.pause();
    song5.pause();
    song6.pause();
    song7.pause();
    song8.pause();
    song9.pause();
    song4.pause();
    song11.pause();
    song10.pause();
    song13.pause();
    song14.pause();

    song15.pause();
    song16.pause();
    song17.pause();
    song12.pause();
    song19.pause();
    song20.pause();
    song21.pause();
    song22.pause();
    song23.pause();
    

    display1.innerText="Dandelions";
        display2.innerText=" Ruth B";
    let random= randomNUm();
    img.src=`../img/i${random}.jpg`;

    play.onclick= ()=>{
        song18.play();
        
        }
        pause.onclick= ()=>{
            song18.pause();
           
    }
    volumede.onclick= ()=>{
        let realVolumePercentage=parseInt(song18.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song18.volume>0.01){
            song18.volume=(realVolumePercentage-5)/100;
        }
       
     
    }
    volumein.onclick= ()=>{
        let realVolumePercentage=parseInt(song18.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song18.volume<1){
            song18.volume=(realVolumePercentage+5)/100;
        }
        
    }
    slient.onclick= ()=>{
        song12.volume=0;
        display5.innerText=`0%`;
    }
    fullvolume.onclick= ()=>{
        song18.volume=1;
        display5.innerText=`100%`;
    }
    song18.addEventListener("timeupdate",()=>{
        const current=(parseInt(song18.currentTime));
        
        const second=parseInt(song18.currentTime);
        const displaymins=parseInt(second/60);
        const displaysec=parseInt(second%60);
        display3.innerText=`${displaymins}mins:${displaysec}sec`;
        const duration=parseInt(song18.duration);
        const min=parseInt(duration/60);
        const sec=duration%60;
        display4.innerText=`${min}min:${sec}sec`;
    })
    forward.onclick= ()=>{
        const second=parseInt(song18.currentTime);
        const totalsecod=parseInt(song18.duration);
        if(second<totalsecod){  
            song18.currentTime=second+5;
        }
      
    }
    backward.onclick= ()=>{
        const second=parseInt(song18.currentTime);
        if(second>=1){
            song18.currentTime=second-5;
        }
    }

}
btn19.onclick= ()=>{
    song1.pause();
    song3.pause();
    song2.pause();
    song5.pause();
    song6.pause();
    song7.pause();
    song8.pause();
    song9.pause();
    song4.pause();
    song11.pause();
    song10.pause();
    song13.pause();
    song14.pause();

    song15.pause();
    song16.pause();
    song17.pause();
    song18.pause();
    song12.pause();
    song20.pause();
    song21.pause();
    song22.pause();
    song23.pause();
    

    display1.innerText="Unstopable";
        display2.innerText=" Sia";
    let random= randomNUm();
    img.src=`../img/i${random}.jpg`;

    play.onclick= ()=>{
        song19.play();
        
        }
        pause.onclick= ()=>{
            song19.pause();
           
    }
    volumede.onclick= ()=>{
        let realVolumePercentage=parseInt(song19.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song19.volume>0.01){
            song19.volume=(realVolumePercentage-5)/100;
        }
       
     
    }
    volumein.onclick= ()=>{
        let realVolumePercentage=parseInt(song19.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song19.volume<1){
            song19.volume=(realVolumePercentage+5)/100;
        }
        
    }
    slient.onclick= ()=>{
        song19.volume=0;
        display5.innerText=`0%`;
    }
    fullvolume.onclick= ()=>{
        song19.volume=1;
        display5.innerText=`100%`;
    }
    song19.addEventListener("timeupdate",()=>{
        const current=(parseInt(song19.currentTime));
        
        const second=parseInt(song19.currentTime);
        const displaymins=parseInt(second/60);
        const displaysec=parseInt(second%60);
        display3.innerText=`${displaymins}mins:${displaysec}sec`;
        const duration=parseInt(song19.duration);
        const min=parseInt(duration/60);
        const sec=duration%60;
        display4.innerText=`${min}min:${sec}sec`;
    })
    forward.onclick= ()=>{
        const second=parseInt(song19.currentTime);
        const totalsecod=parseInt(song19.duration);
        if(second<totalsecod){  
            song19.currentTime=second+5;
        }
      
    }
    backward.onclick= ()=>{
        const second=parseInt(song19.currentTime);
        if(second>=1){
            song19.currentTime=second-5;
        }
    }

}
btn20.onclick= ()=>{
    song1.pause();
    song3.pause();
    song2.pause();
    song5.pause();
    song6.pause();
    song7.pause();
    song8.pause();
    song9.pause();
    song4.pause();
    song11.pause();
    song10.pause();
    song13.pause();
    song14.pause();

    song15.pause();
    song16.pause();
    song17.pause();
    song18.pause();
    song19.pause();
    song12.pause();
    song21.pause();
    song22.pause();
    song23.pause();
    

    display1.innerText="Cruel Summer";
        display2.innerText="Taylor Swift";
    let random= randomNUm();
    img.src=`../img/i${random}.jpg`;

    play.onclick= ()=>{
        song20.play();
        
        }
        pause.onclick= ()=>{
            song20.pause();
           
    }
    volumede.onclick= ()=>{
        let realVolumePercentage=parseInt(song20.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song20.volume>0.01){
            song20.volume=(realVolumePercentage-5)/100;
        }
       
     
    }
    volumein.onclick= ()=>{
        let realVolumePercentage=parseInt(song20.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song20.volume<1){
            song20.volume=(realVolumePercentage+5)/100;
        }
        
    }
    slient.onclick= ()=>{
        song20.volume=0;
        display5.innerText=`0%`;
    }
    fullvolume.onclick= ()=>{
        song20.volume=1;
        display5.innerText=`100%`;
    }
    song20.addEventListener("timeupdate",()=>{
        const current=(parseInt(song20.currentTime));
        
        const second=parseInt(song20.currentTime);
        const displaymins=parseInt(second/60);
        const displaysec=parseInt(second%60);
        display3.innerText=`${displaymins}mins:${displaysec}sec`;
        const duration=parseInt(song20.duration);
        const min=parseInt(duration/60);
        const sec=duration%60;
        display4.innerText=`${min}min:${sec}sec`;
    })
    forward.onclick= ()=>{
        const second=parseInt(song20.currentTime);
        const totalsecod=parseInt(song20.duration);
        if(second<totalsecod){  
            song20.currentTime=second+5;
        }
      
    }
    backward.onclick= ()=>{
        const second=parseInt(song20.currentTime);
        if(second>=1){
            song20.currentTime=second-5;
        }
    }

}
btn21.onclick= ()=>{
    song1.pause();
    song3.pause();
    song2.pause();
    song5.pause();
    song6.pause();
    song7.pause();
    song8.pause();
    song9.pause();
    song4.pause();
    song11.pause();
    song10.pause();
    song13.pause();
    song14.pause();

    song15.pause();
    song16.pause();
    song17.pause();
    song18.pause();
    song19.pause();
    song20.pause();
    song12.pause();
    song22.pause();
    song23.pause();
    

    display1.innerText="8 letters";
        display2.innerText=" Why Don't We";
    let random= randomNUm();
    img.src=`../img/i${random}.jpg`;

    play.onclick= ()=>{
        song21.play();
        
        }
        pause.onclick= ()=>{
            song21.pause();
           
    }
    volumede.onclick= ()=>{
        let realVolumePercentage=parseInt(song21.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song21.volume>0.01){
            song21.volume=(realVolumePercentage-5)/100;
        }
       
     
    }
    volumein.onclick= ()=>{
        let realVolumePercentage=parseInt(song21.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song21.volume<1){
            song21.volume=(realVolumePercentage+5)/100;
        }
        
    }
    slient.onclick= ()=>{
        song21.volume=0;
        display5.innerText=`0%`;
    }
    fullvolume.onclick= ()=>{
        song21.volume=1;
        display5.innerText=`100%`;
    }
    song21.addEventListener("timeupdate",()=>{
        const current=(parseInt(song21.currentTime));
        
        const second=parseInt(song21.currentTime);
        const displaymins=parseInt(second/60);
        const displaysec=parseInt(second%60);
        display3.innerText=`${displaymins}mins:${displaysec}sec`;
        const duration=parseInt(song21.duration);
        const min=parseInt(duration/60);
        const sec=duration%60;
        display4.innerText=`${min}min:${sec}sec`;
    })
    forward.onclick= ()=>{
        const second=parseInt(song21.currentTime);
        const totalsecod=parseInt(song21.duration);
        if(second<totalsecod){  
            song21.currentTime=second+5;
        }
      
    }
    backward.onclick= ()=>{
        const second=parseInt(song21.currentTime);
        if(second>=1){
            song21.currentTime=second-5;
        }
    }

}
btn22.onclick= ()=>{
    song1.pause();
    song3.pause();
    song2.pause();
    song5.pause();
    song6.pause();
    song7.pause();
    song8.pause();
    song9.pause();
    song4.pause();
    song11.pause();
    song10.pause();
    song13.pause();
    song14.pause();

    song15.pause();
    song16.pause();
    song17.pause();
    song18.pause();
    song19.pause();
    song20.pause();
    song21.pause();
    song12.pause();
    song23.pause();
    

    display1.innerText="Be Alright";
        display2.innerText=" Dean Lewis";
    let random= randomNUm();
    img.src=`../img/i${random}.jpg`;

    play.onclick= ()=>{
        song22.play();
        
        }
        pause.onclick= ()=>{
            song22.pause();
           
    }
    volumede.onclick= ()=>{
        let realVolumePercentage=parseInt(song22.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song22.volume>0.01){
            song22.volume=(realVolumePercentage-5)/100;
        }
       
     
    }
    volumein.onclick= ()=>{
        let realVolumePercentage=parseInt(song22.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song22.volume<1){
            song22.volume=(realVolumePercentage+5)/100;
        }
        
    }
    slient.onclick= ()=>{
        song22.volume=0;
        display5.innerText=`0%`;
    }
    fullvolume.onclick= ()=>{
        song22.volume=1;
        display5.innerText=`100%`;
    }
    song22.addEventListener("timeupdate",()=>{
        const current=(parseInt(song22.currentTime));
        
        const second=parseInt(song22.currentTime);
        const displaymins=parseInt(second/60);
        const displaysec=parseInt(second%60);
        display3.innerText=`${displaymins}mins:${displaysec}sec`;
        const duration=parseInt(song22.duration);
        const min=parseInt(duration/60);
        const sec=duration%60;
        display4.innerText=`${min}min:${sec}sec`;
    })
    forward.onclick= ()=>{
        const second=parseInt(song22.currentTime);
        const totalsecod=parseInt(song22.duration);
        if(second<totalsecod){  
            song10.currentTime=second+5;
        }
      
    }
    backward.onclick= ()=>{
        const second=parseInt(song22.currentTime);
        if(second>=1){
            song22.currentTime=second-5;
        }
    }

}

btn23.onclick= ()=>{
    song1.pause();
    song3.pause();
    song2.pause();
    song5.pause();
    song6.pause();
    song7.pause();
    song8.pause();
    song9.pause();
    song4.pause();
    song11.pause();
    song10.pause();
    song13.pause();
    song14.pause();

    song15.pause();
    song16.pause();
    song17.pause();
    song18.pause();
    song19.pause();
    song20.pause();
    song21.pause();
    song12.pause();
    song22.pause();
    

    display1.innerText="Dancing with Your Ghost";
        display2.innerText=" Sasha Alex Sloan";
    let random= randomNUm();
    img.src=`../img/i${random}.jpg`;

    play.onclick= ()=>{
        song23.play();
        
        }
        pause.onclick= ()=>{
            song23.pause();
           
    }
    volumede.onclick= ()=>{
        let realVolumePercentage=parseInt(song22.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song23.volume>0.01){
            song23.volume=(realVolumePercentage-5)/100;
        }
       
     
    }
    volumein.onclick= ()=>{
        let realVolumePercentage=parseInt(song23.volume*100);
        display5.innerText=`${realVolumePercentage}%`;
        if(song23.volume<1){
            song23.volume=(realVolumePercentage+5)/100;
        }
        
    }
    slient.onclick= ()=>{
        song23.volume=0;
        display5.innerText=`0%`;
    }
    fullvolume.onclick= ()=>{
        song23.volume=1;
        display5.innerText=`100%`;
    }
    song23.addEventListener("timeupdate",()=>{
        const current=(parseInt(song23.currentTime));
        
        const second=parseInt(song23.currentTime);
        const displaymins=parseInt(second/60);
        const displaysec=parseInt(second%60);
        display3.innerText=`${displaymins}mins:${displaysec}sec`;
        const duration=parseInt(song23.duration);
        const min=parseInt(duration/60);
        const sec=duration%60;
        display4.innerText=`${min}min:${sec}sec`;
    })
    forward.onclick= ()=>{
        const second=parseInt(song23.currentTime);
        const totalsecod=parseInt(song23.duration);
        if(second<totalsecod){  
            song23.currentTime=second+5;
        }
      
    }
    backward.onclick= ()=>{
        const second=parseInt(song23.currentTime);
        if(second>=1){
            song23.currentTime=second-5;
        }
    }

}
