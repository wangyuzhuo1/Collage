var speechrecognition=window.webkitSpeechRecognition
var recognition=new speechrecognition()

function start(){
    recognition.start()
}

recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript;
    console.log(content)
    if(content=="take my selfie"){
    console.log("taking selfie")
    speak()
    }
}

function speak(){
    var synth=window.speechSynthesis
    Webcam.attach(camera)
    setTimeout(function(){
        img_id = "selfie_1";
        take_snapshot();
        speak_data = "Taking your next selfie in 5 seconds"
        var utterthis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000)
    setTimeout(function(){
        img_id = "selfie_2";
        take_snapshot();
        speak_data = "Taking your next selfie in 5 seconds"
        var utterthis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000)
    setTimeout(function(){
        img_id = "selfie_3";
        take_snapshot();
        speak_data = "Taking your next selfie in ten seconds"
        var utterthis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000)
}
camera=document.getElementById("camera")
Webcam.set({
    width:350, height:250, image_format:'png', png_quality:90})

    function take_snapshot(){
        console.log(img_id);


        webcam.snap(function(data_uri){
            if(img_id=="selfie_1"){
                document.getElementById("result1").innerHTML = '<img id="selfie_1" src="'+data_uri+'">';
            }

            if(img_id=="selfie_2"){
                document.getElementById("result2").innerHTML = '<img id="selfie_2" src="'+data_uri+'">';
            }

            if(img_id=="selfie_3"){
                document.getElementById("result3").innerHTML = '<img id="selfie_3" src="'+data_uri+'">';
            }
        });
    }