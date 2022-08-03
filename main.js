    Webcam.set({

        width: 350,
        height: 300,
        image_formate : 'png',
        png_quality : 90
    });
    
    Webcam.attach('#cam');
    
    function Snapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
        }
        
        );
    }
    
    console.log('ml5 version',ml5.version);
    
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/model.json',modelLoaded);
    
    function modelLoaded(){
    console.log("modelLoaded!");
    }
    
    function check(){
    img= document.getElementById("capture_image");
    classifier.classify(img, gotResult);
    }
    
    function gotResult(error,result){
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        document.getElementById("object_name").innerHTML = result[0].label;
        document.getElementById("percentage").innerHTML = result[0].confidence.toFixed(3);
    }
    }