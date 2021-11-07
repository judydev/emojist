export function readImage(file, callback) {
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // convert image file to base64 string
    callback(reader.result);
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}