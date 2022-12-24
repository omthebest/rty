Webcam.set({
    width:350,
    height:300,
    image_format:'png',
     png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
        
    });
   
}

console.log('ml5version',ml5.version);
classefier=ml5.imageClasseifier('https://teachablemachine.withgoogle.com/models/EU3f4Bm1z/model.json',modelLoaded);
function modelLoaded(){
    console.log('model loaded');
}