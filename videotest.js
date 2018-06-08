// example on how to retrieve an image from a video stream. 
var i = 0;
var video = document.createElement("video");
var thumbs = document.getElementById("thumbs");

video.addEventListener('loadeddata', function() {
	thumbs.innerHTML = "";
    video.currentTime = i;
}, false);

video.addEventListener('seeked', function() {
    // now video has seeked and current frames will show
    // at the time as we expect
    generateThumbnail(i);

    // when frame is captured, increase
    i++;

    // if we are not passed end, seek to next interval
    if (i <= video.duration) {
        // this will trigger another seeked event
        video.currentTime = i;
    }
	else {
        // DONE!, next action
		alert("done!")
    }

}, false);

video.preload = "auto";
video.src = "https://media.w3.org/2010/05/sintel/trailer.mp4";

function generateThumbnail() {
  var c = document.createElement("canvas");
  var ctx = c.getContext("2d");
  c.width = 160;
  c.height = 90;
  ctx.drawImage(video, 0, 0, 160, 90);
  thumbs.appendChild(c);
}