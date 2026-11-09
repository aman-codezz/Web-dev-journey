
const navLinks = document.querySelectorAll(".nav-link");
const pageTitle = document.querySelector("#page-title");
const currentPage = document.querySelector("#current-page");

// navLinks.forEach((link) => {

//     link.addEventListener("click", (event) => {
//         event.preventDefault();

//         // Remove active class from all links
//         navLinks.forEach((item) => {
//             item.classList.remove("active");
//         });

//         // Add active class to clicked link
//         link.classList.add("active");

//         // Update page heading
//         const selectedPage = link.dataset.page;

//         pageTitle.textContent = selectedPage;
//         currentPage.textContent = selectedPage;
//     });

// });
