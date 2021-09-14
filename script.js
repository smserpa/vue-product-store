$(".modal-button").click(function () {
  $(".modal").addClass("is-active");
});

$(".delete").click(function (e) {
  e.preventDefault();
  $(".modal").removeClass("is-active");
});

var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
  },
});
