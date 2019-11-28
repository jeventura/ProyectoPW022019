var clic = 1;
function showHide(id) {
    if (document.getElementById(id).style.display == 'none' || clic == 1) {
        document.getElementById(id).style.display = 'block';
        clic = clic + 1;
    } else {
        document.getElementById(id).style.display = 'none';
        clic = 1;
    }
}

function hideModal(id) {
    document.getElementById(id).style.display = 'none';
    document.getElementById("modal_update_form").reset();
    
    document.getElementById("parking_info").style.display = 'none';
    document.getElementById("parking_info_U").style.display = 'none';
}