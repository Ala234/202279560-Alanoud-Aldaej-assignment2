# Technical Documentation  
Personal Portfolio Assignment

---

## 1. Project Overview

This project is a personal portfolio website developed to present my academic background, technical skills, and completed projects in a clear and organized way.  

The website is implemented as a static web application that runs entirely on the client side without requiring any backend services or database integration.

The main objective of this assignment is to implement interactive features to improve user experience.

---

## 2. Project Scope

- Front-end development only  
- Technologies used:
  - **HTML** for page structure
  - **CSS** for styling, layout, and animations
  - **JavaScript** for interactivity and simple state management
- No backend or database integration
- Optimized for desktop and mobile browsers

---

## 3. Project Structure

The project follows a clean and organized folder structure that separates content, styling, logic, and documentation to improve maintainability.

```
202279560-Alanoud-Aldaej-assignment-2/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
    ├── ai-usage-report.md
    └── technical-documentation.md
```

---

## 4. Main Website Sections

The portfolio consists of the following main sections:

- Navigation Bar  
- Hero Section  
- About Section  
- Projects Section  
- Skills Section  
- Contact Section  

Each section is implemented using semantic HTML elements to enhance readability and accessibility.

---

## 5. Implemented Features

### 5.1 Dynamic Section Navigation

The website allows users to navigate between different sections (About, Projects, Skills, Contact) using the navigation bar.  
This creates a simple form of dynamic content interaction within a single-page layout.

This feature improves usability by allowing users to quickly move between sections without reloading the page.

---

### 5.2 Data Handling using Local Storage

The portfolio includes a dark/light mode toggle feature where the selected theme is saved using `localStorage`.  

This ensures that the user’s preference is preserved even after refreshing or reopening the page.

This feature demonstrates basic client-side data handling and state persistence.

---

### 5.3 Smooth Interaction and Transitions

CSS transitions and hover effects are used across multiple elements such as buttons, cards, and skill items.

These transitions provide smooth visual feedback when users interact with the interface, making the website feel more responsive and user-friendly.

---

### 5.4 Error Handling and Form Validation

The contact form uses built-in HTML validation to ensure that required fields are filled correctly before submission.

For example:
- Preventing empty inputs
- Ensuring correct email format (e.g., requiring “@” in the email)

This improves usability and prevents invalid data from being submitted.

---

### 5.5 Animated Background

The website includes an animated stars background created using CSS gradients and keyframe animations.  

This feature enhances the visual experience while maintaining performance, as it is implemented entirely using CSS without external resources.


## 6. Use of AI Tools

AI tools were used as supportive learning aids rather than direct sources of complete solutions.

They were mainly used for:
- Explaining JavaScript concepts such as DOM manipulation and event listeners
- Assisting with implementing interactive features (theme toggle, navigation behavior)
- Helping understand how to use `localStorage`
- Supporting debugging and improving code structure

All AI-generated suggestions were reviewed, modified, and adapted.  
The final design, structure, and implementation decisions were made independently.

---

## 7. Learning Outcomes

Through this assignment, I learned how to:
- Implement interactive features using JavaScript
- Handle simple data storage using `localStorage`
- Improve user experience using transitions and UI feedback
- Use AI tools responsibly to support understanding and problem-solving



