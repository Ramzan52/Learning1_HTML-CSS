function clicked() {
  alert("coming soon!!!");
}
function clicked1() {
  alert("Page under construction!");
}

function loadPage() {
  window.location = "bucket.html";
}
function homePage() {
  window.location = "Main.html";
}
function homeremove() {
  localStorage.clear();
  window.location = "bucket.html";
}

const addItem = (name, price, id) => {
  let qty = 0;
  let bucket = JSON.parse(localStorage.getItem("Bucket")) || [];
  var single;
  for (single of bucket) {
    if (single.id === id) {
      single.qty++;
      return;
    }
  }
  bucket.push({
    name,
    price,
    qty,
  });

  localStorage.setItem("Bucket", JSON.stringify(bucket));
};
