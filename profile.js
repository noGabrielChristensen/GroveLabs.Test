function updateProfilePicture(fileInputId, imgContainerId) {
    const file = document.getElementById(fileInputId).files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = () => document.getElementById(imgContainerId).src = reader.result;
    reader.readAsDataURL(file);
}

function updateCoverPhoto(fileInputId, imgContainerId) {
    updateProfilePicture(fileInputId, imgContainerId);
}
