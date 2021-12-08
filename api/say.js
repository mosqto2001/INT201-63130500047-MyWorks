(() => {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition;

    const recognition = new window.SpeechRecognition();
    const btnElem = document.querySelector('.microphone');
    console.log('he')

    function onClick(){
        const isPausing = btnElem.classList.contains('pause');

        
        if(isPausing){
            console.log('he')
        recognition.start();
        btnElem.classList.remove('pause');
        btnElem.classList.add('record');
       }
       else{
           recognition.stop();
           btnElem.classList.remove('record');
        btnElem.classList.add('pause');

       }
}

    function onResult(event){
        console.log(event);
    }

    function run(){
        recognition.lang = 'th-TH';

        recognition.addEventListener('result', onResult);
        
        btnElem.addEventListener('click', onClick);
    }

    run();
})();

