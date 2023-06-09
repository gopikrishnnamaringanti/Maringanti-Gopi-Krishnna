// Variable Declaration for containers
let lists = document.getElementsByClassName("list");
let right = document.getElementById("container2");
let left = document.getElementById("container1");
// code to drag and drop elements from container1 to container2 
for (list of lists) {
    list.addEventListener("dragstart", function (e) {
        let selected = e.target;
        right.addEventListener("dragover", function (e) {
            e.preventDefault();
        });
        right.addEventListener("drop", function (e) {
            right.appendChild(selected);
            selected = null;
        })
    })
}
// On clicking reset button the function resetbox will reset all the containers
function resetbox() {
    window.location.replace(
        "http://127.0.0.1:53059/"
    );
    location.reload();

}
