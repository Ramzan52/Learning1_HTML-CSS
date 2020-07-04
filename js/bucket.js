$(document).ready(function () {
  let bucket = JSON.parse(localStorage.getItem("Bucket")) || [];
  bucket.map((single) => {
    $("#list")
      .append(`<li>${single.name}     ${single.price}  <button type="button" class="btn btn-danger" onclick="remove()">Remove</button>
     </li>`);
  });
});
function remove() {
  console.log("AA");
}
