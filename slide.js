$(document).ready(function () {
  const toggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");
  /* Toggle mobile menu */
  function toggleMenu() {
      if (menu.classList.contains("active")) {
          menu.classList.remove("active");
          
          // adds the menu (hamburger) icon 
          toggle.querySelector("li").innerHTML = "<i class=’fas fa-bars’></i>";
      } else {
          menu.classList.add("active");
          
          // adds the close (x) icon 
          toggle.querySelector("li").innerHTML = "<i class=’fas fa-times’></i>";
      }
  }
  /* Event Listener */
  toggle.addEventListener("click", toggleMenu, false);
  
  
  
  const items = document.querySelectorAll(".item");
  /* Activate Submenu */
  function toggleItem() { 
    if (this.classList.contains("submenu-active")) {
      this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
      this.classList.add("submenu-active");
    } else {
      this.classList.add("submenu-active");
    }
  }
  /* Event Listeners */
  for (let item of items) {
      if (item.querySelector(".submenu")) {
        item.addEventListener("click", toggleItem, false);
        item.addEventListener("keypress", toggleItem, false);
      }   
  }
  
  /* Close Submenu From Anywhere */
  function closeSubmenu(e) {
      if (menu.querySelector(".submenu-active")) {
        let isClickInside = menu
          .querySelector(".submenu-active")
          .contains(e.target);
        if (!isClickInside && menu.querySelector(".submenu-active")) {
          menu.querySelector(".submenu-active").classList.remove("submenu-active");
        }
      }
    }
    /* Event listener */
    document.addEventListener("click", closeSubmenu, false);
  
  //------------------ Nav End --------------------
  
  
//----------------- First Carousel --------------//
var multipleCardCarousel = document.querySelector(
  "#carouselExampleControls"
);
if (window.matchMedia("(min-width: 768px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;
  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 3) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  // $(multipleCardCarousel).addClass("slide");
  $('.col-sm-6').unwrap().addClass('carousel-item');
  $('.col-sm-6:first').addClass('active');
}

// let items1 = document.querySelectorAll('.carousel .carousel-item')

// items1.forEach((el) => {
//   console.log(el);
// const minPerSlide = 1
// let next = el.nextElementSibling
// // console.log(next);
// for (var i=1; i<minPerSlide; i++) {
//     if (!next) {
//       // console.log("next null");
//       // console.log(items1[0]);
//         // wrap carousel by using first child
//         next = items1[0]
//       }
//     let cloneChild = next.cloneNode(true)
//     el.appendChild(cloneChild.children[0])
//     next = next.nextElementSibling
// }
// })

// --------------------- Second Carousel ---------------
    var multipleCardCarousel1 = document.querySelector(
      "#course-carousel"
    );
    if (window.matchMedia("(min-width: 768px)").matches) {
      var carousel = new bootstrap.Carousel(multipleCardCarousel1, {
        interval: false,
      });
      var carouselWidth = $(".carousel-inner")[0].scrollWidth;
      var cardWidth = $(".carousel-item").width();
      var scrollPosition = 0;
      $("#course-carousel .carousel-control-next").on("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
          scrollPosition += cardWidth;
          $("#course-carousel .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
          );
        }
      });
      $("#course-carousel .carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          $("#course-carousel .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
          );
        }
      });
    } else {
      $(multipleCardCarousel1).addClass("slide");
    }
    });
// Rating Initialization
// $(document).ready(function() {
//     $('#rateMe1').mdbRate();
//   });