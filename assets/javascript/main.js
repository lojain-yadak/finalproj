/*let timeoutId=0.5;

const dropdown = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdown.addEventListener("mouseover", function () {
  dropdownMenu.classList.add("show"); // Add the "show" class to reveal the dropdown
});

dropdown.addEventListener("mouseleave", function () {
  dropdownMenu.classList.remove("show"); // Remove the "show" class to hide the dropdown
});

dropdown.addEventListener("mouseover", function () {
    clearTimeout(timeoutId); // Clear any existing timeout
    dropdownMenu.classList.add("show");
  });
  
  dropdown.addEventListener("mouseleave", function () {
    timeoutId = setTimeout(() => {
      dropdownMenu.classList.remove("show");
    }, 300); // Delay hiding the dropdown by 300ms
  });*/
  const openButton = document.getElementById('open-sidebar-button');
  const navbar = document.getElementById('navbar');
  
  // Function to open the sidebar
  function openSidebar() {
    navbar.classList.add('show'); // Add the 'show' class to display the sidebar
    openButton.setAttribute('aria-expanded', 'true'); // Update accessibility attribute
    navbar.removeAttribute('inert'); // Make the sidebar interactive
  }
  
  // Function to close the sidebar
  function closeSidebar() {
    navbar.classList.remove('show'); // Remove the 'show' class to hide the sidebar
    openButton.setAttribute('aria-expanded', 'false'); // Update accessibility attribute
    navbar.setAttribute('inert', ''); // Make the sidebar non-interactive
  }
  
  // Attach event listeners
  openButton.addEventListener('click', openSidebar);
  
  // Optional: Add a close button inside the sidebar
  const closeButton = document.getElementById('close-sidebar-button');
  if (closeButton) {
    closeButton.addEventListener('click', closeSidebar);
  }
  const sidebar = document.getElementById('navbar');

// Open sidebar
openButton.addEventListener('click', () => {
    sidebar.classList.add('show');
});

// Close sidebar
closeButton.addEventListener('click', () => {
    sidebar.classList.remove('show');
});
