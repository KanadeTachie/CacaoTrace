/* $(document).ready(function() {
$('#mySelect').select2({
    templateResult: formatOption
});
});

function formatOption(option) {
if (!option.id) {
    return option.text;
}

var imageUrl = $(option.element).data('image');
if (!imageUrl) {
    return option.text;
}

var $option = $(
    '<span><img src="' + imageUrl + '" class="img-flag" /> ' + option.text + '</span>'
);

return $option;
} */

$(document).ready(function() {
    // Function to handle checkbox change
    $(".btn-check").change(function() {
      // Get the corresponding image
      var imgId = $(this).attr("id").replace("btn-check-", "");
      var img = $("#img-" + imgId);
  
      // Check if the checkbox is checked
      if ($(this).prop("checked")) {
        // If checked, reduce the opacity
        img.css("opacity", "0.5"); // You can adjust the opacity value as needed
      } else {
        // If not checked, reset the opacity
        img.css("opacity", "1");
      }
    });
  });
