function toggleWeek(weekId) {
  var content = document.getElementById(weekId);
  var chevron = document.getElementById("chevron-" + weekId);

  if (content && chevron) {
    if (content.classList.contains("hidden")) {
      content.classList.remove("hidden");
      chevron.style.transform = "rotate(180deg)";
    } else {
      content.classList.add("hidden");
      chevron.style.transform = "rotate(0deg)";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var mobileMenuBtn = document.getElementById("mobile-menu-btn");
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      var mobileMenu = document.getElementById("mobile-menu");
      if (mobileMenu) {
        mobileMenu.classList.toggle("hidden");
      }
    });
  }

  var links = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        var mobileMenu = document.getElementById("mobile-menu");
        if (mobileMenu) {
          mobileMenu.classList.add("hidden");
        }
      }
    });
  }

  var form = document.getElementById("application-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      var submitButton = this.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.textContent = "Submitting...";
        submitButton.disabled = true;

        setTimeout(function () {
          submitButton.textContent = "Submit Application";
          submitButton.disabled = false;
        }, 3000);
      }
    });
  }
});
