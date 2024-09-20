export function readImage(file, callback) {
    const reader = new FileReader();

    if (file.size > 1024 * 1024) {
        alert("File size is larger than 1MB");
        return;
    }

    if (file) {
        reader.readAsDataURL(file);
        reader.onload = function () {
            let dataURL = reader.result;
            callback(dataURL);
        };
    }
}