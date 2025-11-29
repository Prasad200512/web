function saveData() {
    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("gender", document.getElementById("gender").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("phone", document.getElementById("phone").value);

    alert("Saved Successfully!");
}

function loadData() {
    const ids = ["name","gender","email","phone"];

    ids.forEach(id => {
        document.getElementById("r_" + id)?.innerText = localStorage.getItem(id);
        document.getElementById("b_" + id)?.innerText = localStorage.getItem(id);
    });
}
