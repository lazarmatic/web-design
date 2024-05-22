/*!
 * Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

// dark / light theme

let buttons;

document.addEventListener("DOMContentLoaded", function () {
  const themeToggleBtn = document.getElementById("theme-toggle-dark-btn");

  themeToggleBtn.addEventListener("click", function () {
    document.body.classList.add("dark-theme");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const themeToggleBtn = document.getElementById("theme-toggle-light-btn");

  themeToggleBtn.addEventListener("click", function () {
    console.log("clicked");
    document.body.classList.remove("dark-theme");
  });
});

// Team people toggle requirement
function teamshowing(button) {
  const targetId = button.getAttribute("data-target");
  const targetSection = document.getElementById(targetId);

  if (targetSection.classList.contains("show")) {
    targetSection.classList.remove("show");
  } else {
    targetSection.classList.add("show");
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  //  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

// Fetching data from JSON to services page
$(document).ready(function () {
  fetchServices();
});

function fetchServices() {
  $.ajax({
    url: "./views/services.json", // Path to the JSON file
    type: "GET", // Type of the request
    dataType: "json", // Expected data type of the response

    success: function (data) {
      let tabela = $('<table border = "1">');
      tabela.append("<tr><th>Service</th><th>Availability</th></tr>");
      data.forEach(function (serviceList) {
        tabela.append(
          "<tr><td> " +
            serviceList.service +
            "</td><td>" +
            serviceList.available +
            "</td></tr>"
        );
      });
      $("#servicesList").append(tabela);
    },
    error: function (xhr, status, error) {
      console.error("Error fetching Services:", error);
    },
  });
}
// Toaster messages
let icon = {
  success: '<span class="material-symbols-outlined">task_alt</span>',
  danger: '<span class="material-symbols-outlined">error</span>',
  warning: '<span class="material-symbols-outlined">warning</span>',
  info: '<span class="material-symbols-outlined">info</span>',
};

const showToast = (
  message = "Sample Message",
  toastType = "info",
  duration = 5000
) => {
  if (!Object.keys(icon).includes(toastType)) toastType = "info";

  let box = document.createElement("div");
  box.classList.add("toast", `toast-${toastType}`);
  box.innerHTML = ` <div class="toast-content-wrapper"> 
                      <div class="toast-icon"> 
                      ${icon[toastType]} 
                      </div> 
                      <div class="toast-message">${message}</div> 
                      <div class="toast-progress"></div> 
                      </div>`;
  duration = duration || 5000;
  box.querySelector(".toast-progress").style.animationDuration = `${
    duration / 1000
  }s`;

  let toastAlready = document.body.querySelector(".toast");
  if (toastAlready) {
    toastAlready.remove();
  }

  document.body.appendChild(box);
};

let submit = document.querySelector(".custom-toast.success-toast");
let information = document.querySelector(".custom-toast.info-toast");
let failed = document.querySelector(".custom-toast.danger-toast");
let warn = document.querySelector(".custom-toast.warning-toast");

submit.addEventListener("click", (e) => {
  console.log("clicked");
  e.preventDefault();
  showToast("Article Submitted Successfully", "success", 5000);
});

information.addEventListener("click", (e) => {
  console.log("clicked");
  e.preventDefault();
  showToast("Do POTD and Earn Coins", "info", 5000);
});

failed.addEventListener("click", (e) => {
  console.log("clicked");
  e.preventDefault();
  showToast("Failed unexpected error", "danger", 5000);
});

warn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
  showToast("!warning! server error", "warning", 5000);
});

// Accordion menu - faq
function toggleAccordion(contentId) {
  const content = document.getElementById(contentId);
  if (content.classList.contains("show")) {
    content.classList.remove("show");
  } else {
    content.classList.add("show");
  }
}
