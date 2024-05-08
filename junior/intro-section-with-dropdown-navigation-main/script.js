$(document).ready(function () {
  $(".icon-menu").click(function () {
    $(".overlay").show();
    $(".mobile-menu").animate({ width: "250px" }, "slow");
  });

  $(".icon-close").click(function () {
    $(".mobile-menu").animate({ width: "0px" }, "slow", function () {
      $(".overlay").hide();
    });
  });

  $(".features").click(function () {
    $(".features .sub-menu-container").slideToggle("slow", function () {
      if ($(this).css("display") === "none") {
        $(".features .angle-arrow .icon-arrow").attr(
          "src",
          "images/icon-arrow-down.svg"
        );
      } else {
        $(".features .angle-arrow .icon-arrow").attr(
          "src",
          "images/icon-arrow-up.svg"
        );
      }
    });
  });

  $(".company").click(function () {
    $(".company .sub-menu-container").slideToggle("slow", function () {
      if ($(this).css("display") === "none") {
        $(".company .angle-arrow .icon-arrow").attr(
          "src",
          "images/icon-arrow-down.svg"
        );
      } else {
        $(".company .angle-arrow .icon-arrow").attr(
          "src",
          "images/icon-arrow-up.svg"
        );
      }
    });
  });
});
