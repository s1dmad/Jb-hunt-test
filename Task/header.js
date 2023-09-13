document.addEventListener("DOMContentLoaded", function () {
  // Get the modal element and the "Track Shipment" link
  var modal = document.getElementById("myModal");
  var trackShipmentLink = document.querySelector(
    '.navigation__link[data-target="trackShipment"]'
  );
  var dropdown = document.querySelector(".custom-dropdown");
  var search = document.querySelector(".search");
  var input = document.querySelector(".search-placeholder input");
  var placeholder = document.querySelector(".search-placeholder-container");
  var closeButton = document.querySelector(".close-button");

  var secondSearchInput = document.getElementById("secondSearchInput");
  var isModalOpen = false; // Initialize the modal state

  function reset() {
    hidePlaceholder();
    shipmentDropdown.style.display = "none";
    carrierDropdown.style.display = "none";
    companyDropdown.style.display = "none";
    shipmentSolutionsLink.style.opacity = "1";
    carrierSolutionsLink.style.opacity = "1";
    ourCompanyLink.style.opacity = "1";

    dropdownIconShipment.style.transform = "rotate(0deg)";
    dropdownIconCarrier.style.transform = "rotate(0deg)";
    dropdownIconCompany.style.transform = "rotate(0deg)";
  }

  // Function to toggle the modal
  function toggleModal() {
    if (modal.style.display === "" || modal.style.display === "none") {
      modal.style.display = "block"; // Open the modal
      isModalOpen = true;
      // Add the "active" class to the link
      trackShipmentLink.classList.add("active");
    } else {
      modal.style.display = "none"; // Close the modal
      isModalOpen = false;
      // Remove the "active" class from the link
      trackShipmentLink.classList.remove("active");
    }
  }

  // Event listener to toggle the modal when clicking "Track Shipment"
  if (window.innerWidth > 1025) {
    trackShipmentLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the link from navigating
      toggleModal();
      reset();
    });
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = "none"; // Close the modal
    isModalOpen = false;
    // Remove the "active" class from the link
    trackShipmentLink.classList.remove("active");
  }

  // Get all elements with IDs for links and icons
  var shipmentSolutionsLink = document.getElementById(
    "shipment-solutions-link"
  );
  var carrierSolutionsLink = document.getElementById("carrier-solutions-link");
  var ourCompanyLink = document.getElementById("our-company-link");

  var dropdownIconShipment = document.getElementById("dropdown-icon-shipment");
  var dropdownIconCarrier = document.getElementById("dropdown-icon-carrier");
  var dropdownIconCompany = document.getElementById("dropdown-icon-company");

  // Get all dropdown content elements
  var shipmentDropdown = document.getElementById("shipment-dropdown");
  var carrierDropdown = document.getElementById("carrier-dropdown");
  var companyDropdown = document.getElementById("our-company-dropdown");

  // Function to toggle the visibility of a dropdown and rotate the icon
  if (window.innerWidth > 1025) {
    function toggleDropdown(linkElement, dropdownElement, iconElement) {
      if (
        dropdownElement.style.display === "" ||
        dropdownElement.style.display === "none"
      ) {
        hidePlaceholder();
        closeModal();
        // Hide all dropdowns and reset icons
        shipmentDropdown.style.display = "none";
        carrierDropdown.style.display = "none";
        companyDropdown.style.display = "none";
        shipmentSolutionsLink.style.opacity = ".5";
        carrierSolutionsLink.style.opacity = ".5";
        ourCompanyLink.style.opacity = ".5";

        dropdownIconShipment.style.transform = "rotate(0deg)";
        dropdownIconCarrier.style.transform = "rotate(0deg)";
        dropdownIconCompany.style.transform = "rotate(0deg)";

        // Display the selected dropdown and rotate the icon
        dropdownElement.style.display = "block";
        iconElement.style.transform = "rotate(-180deg)";
        linkElement.style.opacity = "1";
      } else {
        // Hide the selected dropdown and reset the icon rotation
        dropdownElement.style.display = "none";
        iconElement.style.transform = "rotate(0deg)";
        shipmentSolutionsLink.style.opacity = "1";
        carrierSolutionsLink.style.opacity = "1";
        ourCompanyLink.style.opacity = "1";
        hidePlaceholder();
      }
    }
  }
  // Event listeners to toggle the dropdowns and rotate the icons when the links are clicked
  shipmentSolutionsLink.addEventListener("click", function () {
    toggleDropdown(
      shipmentSolutionsLink,
      shipmentDropdown,
      dropdownIconShipment
    );
  });

  carrierSolutionsLink.addEventListener("click", function () {
    toggleDropdown(carrierSolutionsLink, carrierDropdown, dropdownIconCarrier);
  });

  ourCompanyLink.addEventListener("click", function () {
    toggleDropdown(ourCompanyLink, companyDropdown, dropdownIconCompany);
  });

  // Function to show the search placeholder and hide the search icon
  function showPlaceholder() {
    // Hide all dropdowns and reset icons
    reset();

    closeModal();

    // Show the search placeholder
    search.style.visibility = "hidden";
    placeholder.style.display = "block";
    closeButton.style.display = "inline-block";
  }

  // Function to hide the search placeholder and show the search icon
  function hidePlaceholder() {
    search.style.visibility = "visible";
    placeholder.style.display = "none";
    closeButton.style.display = "none";
  }

  // Event listener to show the placeholder and hide the search icon when the search is clicked
  search.addEventListener("click", showPlaceholder);

  // Event listener to hide the placeholder and show the search icon when the close button is clicked
  closeButton.addEventListener("click", hidePlaceholder);

  // Function to update the placeholder text of the second search input
  function updatePlaceholderText() {
    var selectedOption = dropdown.options[dropdown.selectedIndex].text;
    secondSearchInput.placeholder = `Enter ${selectedOption}`;
  }

  // Event listener to update the placeholder text when the dropdown changes
  dropdown.addEventListener("change", updatePlaceholderText);

  // Event listener to close the modal when pressing the Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && isModalOpen) {
      toggleModal();
    }
    reset();
  });

  // Initialize the placeholder text based on the initial dropdown value
  updatePlaceholderText();

  // Get the hamburger icon and the nav-links
  var hamburgerIcon = document.getElementById("hamburger-icon");
  var closeIcon = document.getElementById("hamburger-close-icon");
  var navLinks = document.querySelector(".nav-links");
  var header = document.querySelector(".header");

  // Function to toggle the visibility of nav-links
  function toggleNavLinks() {
    reset();
    if (navLinks.style.display === "" || navLinks.style.display === "none") {
      navLinks.style.display = "flex"; // Show the nav-links
      header.style.display = "flex";
      hamburgerIcon.style.display = "none";
      closeIcon.style.display = "block";
    } else {
      navLinks.style.display = "none"; // Hide the nav-links
      hamburgerIcon.style.display = "block";
      closeIcon.style.display = "none";
      header.style.display = "none";
    }
  }

  // Event listener to toggle nav-links when clicking the hamburger icon
  hamburgerIcon.addEventListener("click", function () {
    toggleNavLinks();
    console.log("clicked");
  });
  closeIcon.addEventListener("click", function () {
    toggleNavLinks();
    console.log("clicked");
  });
});
