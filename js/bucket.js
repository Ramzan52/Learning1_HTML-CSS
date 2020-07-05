$(document).ready(function () {
  let bucket = JSON.parse(localStorage.getItem("Bucket")) || [];
  bucket.map((single) => {
    $("#menu")
      .append(`<table><tr><td id="firstrow">${single.name}</td>   <td id="secondrow" class="second">  ${single.price}</td><td id="thirdrow"><button type="button" class="btn btn-danger" onclick="remove()">Remove</button></td></tr>
    </table> `);
  });
  TotalPriceCalc();
 

function TotalPriceCalc() {
  var total = 0;
  $(".second").each(function () {
    total += parseFloat($(this).text());
  });
  $("#input").val(total);
  console.log(total);
}
