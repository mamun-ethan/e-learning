// course filter

document.addEventListener("DOMContentLoaded", (event) => {
  filterCourses("web-development");
});

function filterCourses(category) {
  const menuButtons = document.querySelectorAll(".menu-btn");
  menuButtons.forEach((button) => button.classList.remove("active"));

  const activeButton = document.getElementById(`${category}-btn`);
  activeButton.classList.add("active");

  const courses = document.querySelectorAll(".course-box");
  courses.forEach((course) => (course.style.display = "none"));

  const selectedCourses = document.querySelectorAll(`.${category}`);
  selectedCourses.forEach((course) => (course.style.display = "block"));
}
