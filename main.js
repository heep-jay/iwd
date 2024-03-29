function previewImage(event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("userImage");
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

var domNode = document.querySelector(".frame");
var scale = 2;
document.getElementById("shareButton").addEventListener("click", function () {
  // html2canvas(document.querySelector(".frame")).then((canvas) => {
  //   var imgData = canvas.toDataURL("image/png");
  //   var link = document.createElement("a");
  //   link.download = "frame.png";
  //   link.href = imgData;
  //   link.click();
  // });
  domtoimage
    .toJpeg(domNode, {
      width: domNode.clientWidth * scale,
      height: domNode.clientHeight * scale,
      style: {
        transform: "scale(" + scale + ")",
        transformOrigin: "top left",
      },
    })
    .then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = "download.jpeg";
      link.href = dataUrl;
      link.click();
    });
});
