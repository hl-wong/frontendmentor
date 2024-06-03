$(document).ready(function () {
  $(".icon-menu").click(function () {
    $(".mobile-overlay").show();
  });

  $(".icon-close").click(function () {
    $(".mobile-overlay").hide();
  });

  var currentIndex = 0;
  var items = $(".carousel-slide");

  $(".prev-arrow").click(function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = items.length - 1;
    }

    updateCarousel();
  });

  $(".next-arrow").click(function () {
    if (currentIndex < items.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }

    updateCarousel();
  });

  function updateCarousel() {
    $(".carousel-inner-wrapper").css(
      "transform",
      "translateX(" + -1 * currentIndex * $(".carousel-slide").width() + "px)"
    );
  }

  var currentQuantity = 0;
  var cartQuantity = 0;

  $(".icon-minus").click(function () {
    if (currentQuantity > 0) {
      currentQuantity--;
      $(".quantity-value").text(currentQuantity);
    }
  });

  $(".icon-plus").click(function () {
    currentQuantity++;
    $(".quantity-value").text(currentQuantity);
  });

  $(".icon-cart").click(function () {
    if ($(".cart").css("display") === "none") {
      $(".cart").show();
      $(".cart").css("display", "flex");
    } else {
      $(".cart").hide();
    }
  });

  $(".add-to-cart").click(function () {
    if (currentQuantity > 0) {
      $(".cart-list").html(
        "<li class='cart-item'>" +
          "<img src='images/image-product-1.jpg' class='cart-product-image' />" +
          "<div>" +
          "<p class='cart-product-title'>Fall Limited Edition Sneakers</p>" +
          "<p class='cart-product-price'>$125.00 x " +
          currentQuantity +
          " <span class='total-price'>$" +
          (125 * currentQuantity).toFixed(2) +
          "</span></p>" +
          "</div>" +
          "<img src='images/icon-delete.svg' class='icon-delete'" +
          "</li>"
      );

      $(".cart-list").append("<button class='checkout'>Checkout</button>");

      $(".cart-quantity-wrapper").show();
      updateCartQuantity(currentQuantity);

      resetQuantity();
    }
  });

  function updateCartQuantity(quantity) {
    if (quantity > 0) {
      cartQuantity = quantity;
      $(".cart-quantity-value").text(cartQuantity);
    }
  }

  function resetQuantity() {
    currentQuantity = 0;
    $(".quantity-value").text(currentQuantity);
  }

  $(".cart-list").on("click", ".icon-delete", function () {
    $(".cart-item").remove();
    $(".checkout").remove();

    $(".cart-list").html(
      "<div class='cart-empty'>" + "<p>Your cart is empty.</p>" + "</div>"
    );

    resetCartQuantity();
  });

  function resetCartQuantity() {
    cartQuantity = 0;
    $(".cart-quantity-value").text(cartQuantity);
    $(".cart-quantity-wrapper").hide();
  }

  $(".thumbnail-item").each(function (index, item) {
    $(item).on("click", function () {
      $(".thumbnail-item").eq(currentIndex).removeClass("active");
      $(item).addClass("active");

      currentIndex = index;
      updateCarousel();
    });
  });
});
