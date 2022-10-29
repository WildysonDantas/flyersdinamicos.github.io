const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");


const arialFont = new FontFace(
  "arial",
  "url(./assets/arial-bold.ttf)"
);
arialFont.load().then(function (font) {
  // with canvas, if this is ommited won't work
  document.fonts.add(font);
});

const baseImage = new Image();
baseImage.src = "./resultadodehoje.jpg";


document.getElementById("btnShare").addEventListener("click", shareImage);
document.getElementById("btnSave").addEventListener("click", saveImage);


async function shareImage() {
  try {
    gtag("event", "share");

    canvas.toBlob((blob) => {
      const filesArray = [
        new File(
          [blob],
          document.querySelector("input").value.trim() + ".jpg",
          {
            type: "image/jpeg",
            lastModified: new Date().getTime(),
          }
        ),
      ];
      const shareData = { files: filesArray };

      navigator.share(shareData);
    });
  } catch (error) {
    gtag("event", "exception", {
      description: "[fn:shareImage] " + (error.message || error),
      fatal: false,
    });
    Alert(
      "Não foi possível compartilhar a imagem: " + (error.message || error)
    );
  }
}

function saveImage() {
  try {
    gtag("event", "download");

    const a = document.createElement("a");
    a.setAttribute("href", canvas.toDataURL("image/png"));
    a.setAttribute("download", document.querySelector("input").value.trim());
    a.click();
  } catch (error) {
    gtag("event", "exception", {
      description: "[fn:saveImage] " + (error.message || error),
      fatal: false,
    });
    Alert("Não foi possível baixar a imagem: " + (error.message || error));
  }
}

$(document).on('input', '#data', function() {

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(baseImage, 0, 0);

    context.save();

    context.translate(455, 685);
    //context.rotate((-6.81 * Math.PI) / 180);

    context.textBaseline = "middle";
    context.font = "90px arial";

    const width = context.measureText(
      document.querySelector("input[name=data]").value.trim()
    ).width;

  
    context.fillStyle = "#8B0000";
    context.fillText(
      document.querySelector("input[name=data]").value.trim(),
      -width / 3,
      0
    );


    context.restore();
   

});



$(document).on('input', '#number1', function() {

  context.textBaseline = "middle";
  context.font = "160px arial";
  context.fillStyle = "black";
  context.fillText($(this).val(), 282, 825);
 

});

$(document).on('input', '#number2', function() {

  context.textBaseline = "middle";
  context.font = "160px arial";
  context.fillStyle = "black";
  context.fillText($(this).val(), 420, 825);
 

});

$(document).on('input', '#number3', function() {

  context.textBaseline = "middle";
  context.font = "160px arial";
  context.fillStyle = "black";
  context.fillText($(this).val(), 558, 825);
 

});

$(document).on('input', '#number4', function() {

  context.textBaseline = "middle";
  context.font = "160px arial";
  context.fillStyle = "black";
  context.fillText($(this).val(), 696, 825);
 

});


window.onload = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(baseImage, 0, 0);

  context.save();
};


