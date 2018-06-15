import {storage} from './firebase'

var storageRef = storage.ref();

// uploadFile (file, name) {
//     var imageRef = storageRef.child(name);

    
// }

const uploadFile = ( fileName ) => {
    var uploadTask = storageRef.child(fileName).put(fileName);
// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', function(snapshot){
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {
    // Handle unsuccessful uploads
    console.log ('error uploading file');
  }, function() {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
      console.log('File available at', downloadURL);
    });
  });    
}


const downloadFile = (fileName, callback) => {
   var pathRef = storage.ref(fileName);
   storageRef.child(fileName).getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
  
    // This can be downloaded directly:
    // var xhr = new XMLHttpRequest();
    // xhr.responseType = 'blob';
    // xhr.onload = function(event) {
    //   var blob = xhr.response;
    // };
    // xhr.open('GET', url);
    // xhr.send();
    
    callback(url);
    //console.log (url);
    
    // Or inserted into an <img> element:
    // var img = document.getElementById('myimg');
    // img.src = url;
  }).catch(function(error) {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
        case 'storage/object_not_found':
        // File doesn't exist
        console.log ('Download Failed: object not found');
        break;

        case 'storage/unauthorized':
        // User doesn't have permission to access the object
        console.log ('download Failed: Unauthorized');
        break;

        case 'storage/canceled':
        console.log ('Download Failed: Cancelled');
        break;

        case 'storage/unknown':
        console.log ('Download Failed: ERROR');
        break;  
    }
   });
}

export { 
    uploadFile , 
    downloadFile
}