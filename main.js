function previewImage(event) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById("userImage");
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}
document.getElementById("shareButton").addEventListener("click", function () {
  html2canvas(document.querySelector(".body")).then((canvas) => {
    var imgData = canvas.toDataURL("image/png");
    var link = document.createElement("a");
    link.download = "frame.png";
    link.href = imgData;
    link.click();
  });
});
