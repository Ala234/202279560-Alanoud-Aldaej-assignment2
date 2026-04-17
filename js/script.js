(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");

  function getSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    themeToggle.textContent = theme === "dark" ? "☀️ Light" : "🌙 Dark";
  }

  applyTheme(localStorage.getItem("theme") || "dark");

  themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });
})();

// ===== GitHub API Integration =====

const repoContainer = document.getElementById("repo-container");
const apiMessage = document.getElementById("api-message");

fetch("https://api.github.com/users/Ala234/repos")
  .then(response => {
    if (!response.ok) {
      throw new Error("API failed");
    }
    return response.json();
  })
  .then(data => {
    repoContainer.innerHTML = "";
    apiMessage.textContent = "";

    const filteredRepos = data
      .filter(repo =>
        !repo.name.toLowerCase().includes("assignment") &&
        !repo.fork
      )
      .slice(0, 4);

    filteredRepos.forEach(repo => {
      const card = document.createElement("div");
      card.classList.add("project-card");

      const shortName =
        repo.name.length > 25
          ? repo.name.substring(0, 25) + "..."
          : repo.name;

      card.innerHTML = `
        <div class="repo-icon">
          <i class="fa-brands fa-github"></i>
        </div>
        <h3>${shortName}</h3>
        <p>${repo.description || "No description available"}</p>
        <a href="${repo.html_url}" target="_blank">View Project</a>
      `;

      repoContainer.appendChild(card);
    });

    if (filteredRepos.length === 0) {
      apiMessage.textContent = "No featured GitHub projects found right now.";
    }
  })
  .catch(error => {
    apiMessage.textContent = "⚠️ Failed to load featured projects. Please try again later.";
    console.error(error);
  });

  // ===== Project Filter and Sort =====

const filterButtons = document.querySelectorAll(".filter-btn");
const sortSelect = document.getElementById("sort-projects");
const projectsGrid = document.getElementById("projects-grid");

if (projectsGrid && filterButtons.length > 0 && sortSelect) {
  const originalCards = Array.from(projectsGrid.querySelectorAll(".project-card"));
  let currentFilter = "all";
  let currentSort = "default";

  function renderProjects() {
    let filteredCards = originalCards.filter(card => {
      const category = card.dataset.category;
      return currentFilter === "all" || category === currentFilter;
    });

    if (currentSort === "name-asc") {
      filteredCards.sort((a, b) =>
        a.dataset.name.localeCompare(b.dataset.name)
      );
    } else if (currentSort === "name-desc") {
      filteredCards.sort((a, b) =>
        b.dataset.name.localeCompare(a.dataset.name)
      );
    }

    projectsGrid.innerHTML = "";
    filteredCards.forEach(card => projectsGrid.appendChild(card));
  }

    filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      currentFilter = button.dataset.filter;
      renderProjects();
    });
  });
  sortSelect.addEventListener("change", () => {
    currentSort = sortSelect.value;
    renderProjects();
  });

  renderProjects();
}

// ===== Contact Form Validation =====

const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formMessage = document.getElementById("form-message");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "" || email === "" || message === "") {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.style.color = "#f87171";
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    if (!emailPattern.test(email)) {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.style.color = "#f87171";
      return;
    }

    if (message.length < 10) {
      formMessage.textContent = "Message must be at least 10 characters long.";
      formMessage.style.color = "#f87171";
      return;
    }

    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "#86efac";

    contactForm.reset();
  });
}

// ===== Visitor Timer =====

const timeCounter = document.getElementById("time-counter");

if (timeCounter) {
  let seconds = 0;

  setInterval(() => {
    seconds++;
    timeCounter.textContent = seconds;
  }, 1000);
}

// ===== Visitor Name State Management =====

const visitorNameInput = document.getElementById("visitor-name-input");
const saveNameBtn = document.getElementById("save-name-btn");
const clearNameBtn = document.getElementById("clear-name-btn");
const visitorGreeting = document.getElementById("visitor-greeting");

if (visitorGreeting) {
  const savedName = localStorage.getItem("visitorName");

  if (savedName) {
    visitorGreeting.textContent = `Welcome, ${savedName}!`;
    if (visitorNameInput) {
      visitorNameInput.value = savedName;
    }
  }

  if (saveNameBtn) {
    saveNameBtn.addEventListener("click", () => {
      const name = visitorNameInput.value.trim();

      if (name === "") {
        visitorGreeting.textContent = "Please enter your name first.";
        visitorGreeting.style.color = "#f87171";
        return;
      }

      localStorage.setItem("visitorName", name);
      visitorGreeting.textContent = `Welcome, ${name}!`;
      visitorGreeting.style.color = "#ffffff";
    });
  }

  if (clearNameBtn) {
    clearNameBtn.addEventListener("click", () => {
      localStorage.removeItem("visitorName");
      visitorNameInput.value = "";
      visitorGreeting.textContent = "Welcome, guest!";
      visitorGreeting.style.color = "#ffffff";
    });
  }
}