
  document.getElementById("pictureLink").placeholder = "Paste the URL of the image here.";
  
  function recognize() {
  document.getElementById("img").src = document.getElementById("pictureLink").value;
  document.getElementById("thisIs").innerHTML = "THIS IS A"
  

  const img = document.getElementById('img');

  // Load the model.
  mobilenet.load().then(model => {
    // Classify the image.
    model.classify(img).then(predictions => {
      console.log('Predictions: ');
      console.log(predictions);
      document.getElementById("resultText").innerHTML = Math.floor(predictions[0].probability*100) + "% "+ predictions[0]["className"];
      document.getElementById("resultText2").innerHTML = Math.floor(predictions[1].probability*100) + "% "+predictions[1]["className"];
    });
  });

  
  }