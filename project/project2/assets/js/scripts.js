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
      let tabela = $("#servicesList");
      tabela.append(
        "<tr><th>Service</th><th>Availability</th><th>Actions</th></tr>"
      );
      data.forEach(function (serviceList) {
        tabela.append(
          `<tr>
                        <td class="service-name"> ${serviceList.service} </td>
                        <td class="service-available"> ${serviceList.available} </td>
                        <td>
                            <button class="edit-btn">Edit</button>
                            <button class="delete-btn">Delete</button>
                        </td>
                    </tr>`
        );
      });
    },
    error: function (xhr, status, error) {
      console.error("Error fetching Services:", error);
    },
  });
}

// Delegate click event for Edit and Delete buttons
$(document).on("click", ".edit-btn", function () {
  let row = $(this).closest("tr");
  let serviceName = row.find(".service-name").text().trim();
  let serviceAvailable = row.find(".service-available").text().trim();

  // Prompt the user to edit the details
  let newServiceName = prompt("Edit Service Name:", serviceName);
  let newServiceAvailable = prompt("Edit Availability:", serviceAvailable);

  if (newServiceName !== null && newServiceAvailable !== null) {
    row.find(".service-name").text(newServiceName);
    row.find(".service-available").text(newServiceAvailable);
    alert("Service updated successfully!");
  }
});

$(document).on("click", ".delete-btn", function () {
  let row = $(this).closest("tr");
  let serviceName = row.find(".service-name").text().trim();

  // Confirm deletion
  let confirmDelete = confirm(
    `Are you sure you want to delete the service: ${serviceName}?`
  );

  if (confirmDelete) {
    row.remove();
    alert("Service deleted successfully!");
  }
});

// Toaster messages
// Configure Toastr
toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: "toast-top-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

// Display messages on button click
document.getElementById("successBtn").addEventListener("click", function () {
  toastr.success("Your action was successful!", "Success");
});

document.getElementById("errorBtn").addEventListener("click", function () {
  toastr.error("There was an error processing your request.", "Error");
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

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  var formData = new FormData(this);

  // Simulate submission delay (2 seconds in this example)
  setTimeout(function () {
    // Display success message
    document.getElementById("message").innerText = "Data saved successfully!";
    alert("Service deleted successfully!");
    console.log("succesfully");
  }, 2000); // Change delay as needed
});
