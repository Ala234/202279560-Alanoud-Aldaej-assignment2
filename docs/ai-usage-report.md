# Tools Used & Use Cases

During this assignment, I used one AI tool primarily as a supportive tool to help me understand concepts, improve user experience, and solve small implementation issues, while all final implementation and design decisions were my own.

## `ChatGPT`

ChatGPT was used as the main AI assistant during the project. Its use cases included:

- **Code generation & debugging:**  
I used ChatGPT to help debug HTML, CSS, and JavaScript issues, such as theme switching logic, layout issues, and minor implementation problems.

- **Code review & explanations:**  
ChatGPT helped explain some HTML, CSS, and JavaScript concepts, especially how interactive features work and how different parts of the code connect together.

- **Documentation support:**  
It assisted in improving the clarity and organization of documentation and project explanation.

- **How to enhance user experience:**  
ChatGPT was used to help me understand how to improve user experience through simple interactive features such as navigation, theme switching, transitions, and form validation.

---

# Detailed AI Usage

## 1. Data handling

```javascript
(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");

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
```

In this part, I used `localStorage` to save the user’s theme preference. When the page loads, the saved value is retrieved and applied automatically. If no value is found, a default theme is used. AI helped me understand how data can be stored and retrieved, and how it connects with the interface to update the page dynamically.

---

## 2. Dynamic features

```html
<header>
    <nav>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</header>
```

In this part, I used navigation links to allow users to move between different sections of the portfolio such as About, Projects, Skills, and Contact. This makes the website more interactive and easier to use. AI helped me understand how internal navigation works and how it improves the overall user experience.

---

## 3. Smooth interaction

```css
#theme-toggle {
    transition: 0.3s, transform 0.2s;
}

#theme-toggle:hover {
    background: rgba(255,255,255,0.25);
    transform: scale(1.05);
}

.project-card {
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-6px);
}

.skill {
    transition: transform 0.3s, box-shadow 0.3s;
}

.skill:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(199,125,255,0.5);
}
```

In this part, I applied CSS transitions and hover effects to make interactions smoother and more responsive. These small effects improve how the user experiences the interface. AI helped me understand how transitions work and how they can be applied to different elements.

---

## 4. Error handling

```html
<form class="contact-form">
  <input type="text" placeholder="Name" required>
  <input type="email" placeholder="Email" required>
  <textarea placeholder="Message" rows="5" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

In this part, I used built-in HTML validation using the `required` attribute to prevent empty inputs. Also, when entering an invalid email format, the browser automatically shows a message asking the user to include a valid format (such as including “@”). This provides basic error handling and improves the usability of the form. AI helped me understand how validation works and why it is important for user input.

---

## Benefits

- Improved understanding of how interactive features are implemented.
- Learned how to use `localStorage` to store user preferences.
- Better understanding of navigation and user interaction.
- Improved ability to apply transitions and enhance UI responsiveness.
- Learned basic form validation and error handling.

---

## Challenges

- Some AI suggestions needed adjustment to fit the project.
- Not all suggested solutions were directly usable.
- Required reviewing and modifying code to match assignment requirements.

---

## Learning Outcomes

Through using AI tools in this assignment, I learned:

- How to implement theme switching using JavaScript and CSS.
- How to store and retrieve data using `localStorage`.
- How navigation improves usability in a portfolio.
- How transitions enhance interaction.
- How basic validation supports error handling.

---

## Responsible Use & Modifications

All AI-generated suggestions were reviewed and modified before use.

I ensured:

- The final implementation was my own work.
- AI was used only for support and understanding.
- Suggestions were adapted, not copied directly.
- The project maintains originality and academic integrity.
