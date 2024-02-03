/* $(document).ready(function(){
  $(".slider-toggler").click(function(){
    //console.log("Click heard!!!");
    $(".slider-content").animate({
      width: "toggle"
    });
    $(".toggle-img-collapsed").toggle();
    $(".toggle-img-expanded").toggle();
  });
  $(".slider-toggler").click();
});

 */
 
 document.addEventListener("DOMContentLoaded", function () 
 {
  var sliderToggler = document.querySelector(".slider-toggler");
  var sliderContent = document.querySelector(".slider-content");
  var toggleImgCollapsed = document.querySelector(".toggle-img-collapsed");
  var toggleImgExpanded = document.querySelector(".toggle-img-expanded");
if(sliderToggler)
{
  sliderToggler.addEventListener("click", function () {
    // Toggle the width of slider-content
    if (sliderContent.style.width === "0px" || sliderContent.style.width === "") {
      sliderContent.style.width = "auto";
    } else {
      sliderContent.style.width = "0px";
    }

    // Toggle the visibility of toggle images
    toggleImgCollapsed.style.display =
      toggleImgCollapsed.style.display === "none" ? "block" : "none";
    toggleImgExpanded.style.display =
      toggleImgExpanded.style.display === "none" ? "block" : "none";
  });

  // Trigger the click event once the page is loaded
  sliderToggler.click();
}
});
