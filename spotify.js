console.log(" Welcome to spotify");
let songIndex =0;
let audioElement =new Audio(' WhatsApp Audio 2024-01-17 at 12.11.59_265e0544.mp3 ');
let masterPlay =document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs =[
    {songName: "junnun ",filePath:"C:\Users\Aditi\OneDrive\Desktop\complete webdevlopment\WhatsApp Audio 2024-01-17 at 12.11.59_265e0544.mp3 ", coverPath: " WhatsApp Image 2024-01-17 at 12.09.33_3a358257.jpg " },
    {songName: "satranga",filePath: " WhatsApp Audio 2024-01-18 at 20.12.06_8b02b0e7.mp3 ",coverPath:"WhatsApp Image 2024-01-17 at 12.09.33_3a358257.jpg " },
    {songName:"o-mahhi",filePath: " C:\Users\Aditi\OneDrive\Desktop\complete webdevlopment\WhatsApp Audio 2024-01-18 at 20.13.30_c470c147.mp3 ",coverPath:" WhatsApp Image 2024-01-17 at 14.36.40_e89c06b0.jpg"},
]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
    }
})
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})