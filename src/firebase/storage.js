import {storage} from './firebase'

var storageRef = storage.ref();

// uploadFile (file, name) {
//     var imageRef = storageRef.child(name);

    
// }

var metadata = {
  'contentType': 'image/jpeg',
  'contentEncoding' : 'data_url'
};

const uploadFile = (cloudName, blob ) => {
  console.log ('UploadFile: ', typeof blob, blob);

  storageRef.child(cloudName).putString(blob, storage.DATA_URL, metadata).then(function(snapshot) {
    console.log('Uploaded', snapshot.totalBytes, 'bytes.');
    console.log('File metadata:', snapshot.metadata);
    // Let's get a download URL for the file.
    snapshot.ref.getDownloadURL().then(function(url) {
      console.log('File available at', url);
      // [START_EXCLUDE]
//      document.getElementById('linkbox').innerHTML = '<a href="' +  url + '">Click For File</a>';
      // [END_EXCLUDE]
    });
  }).catch(function(error) {
    // [START onfailure]
    console.error('Upload failed:', error);
    // [END onfailure]
  });
}


// const uploadFile = ( cloudName, blob ) => {
//     var uploadTask = storageRef.child(cloudName).put(blob);
// // Register three observers:
// // 1. 'state_changed' observer, called any time the state changes
// // 2. Error observer, called on failure
// // 3. Completion observer, called on successful completion
// uploadTask.on('state_changed', function(snapshot){
//     // Observe state change events such as progress, pause, and resume
//     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log('Upload is ' + progress + '% done');
//     switch (snapshot.state) {
//       // case storage.TaskState.PAUSED: // or 'paused'
//       //   console.log('Upload is paused');
//       //   break;
//       // case storage.TaskState.RUNNING: // or 'running'
//       //   console.log('Upload is running');
//       //   break;
//       // default:
//       //   console.log ("Unknown state", snapshot.state);
//       //   break;
//     }
//   }, function(error) {
//     // Handle unsuccessful uploads
//     console.log ('error uploading file');
//   }, function() {
//     // Handle successful uploads on complete
//     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//     uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
//       console.log('File available at', downloadURL);
//     });
//   });    
// }


const downloadFile = (fileName, callback) => {
   var pathRef = storage.ref(fileName);
   storageRef.child(fileName).getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
  
    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
      callback(url, blob);
        };
    xhr.open('GET', url);
    xhr.withCredentials="true";
    xhr.send();
    
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