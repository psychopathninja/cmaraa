document.addEventListener('DOMContentLoaded', function() {
    const openCameraButton = document.getElementById('openCamera');

    openCameraButton.addEventListener('click', function() {
        // Check if the browser supports the WebRTC API
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // Request access to the user's camera
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function(stream) {
                    // Display the camera stream in a video element
                    const video = document.createElement('video');
                    document.body.appendChild(video);
                    video.srcObject = stream;
                    video.play();
                })
                .catch(function(error) {
                    console.error('Error accessing camera:', error);
                });
        } else {
            alert('This browser does not support getUserMedia.');
        }
    });
});
