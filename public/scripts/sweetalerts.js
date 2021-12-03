//variable!
const {showAlert: btn, url} = {
    showAlert: document.getElementById("showAlert"),
    url: window.location
}

btn.addEventListener("click", () => {
    Swal.fire({
        title: "Link de la Api",
        text: `${url}/contactos`,
        icon: "success"
    })
});