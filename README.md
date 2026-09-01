# JavaScript Full Course ⚡

A complete, practical JavaScript learning website built from the supplied **`JS notes.docx`**.

> **60 chapters • Live playground • DOM practice • Browser APIs • Async JavaScript • Projects**

## ✨ What is included?

This project converts the course notes into a clean, animated, searchable learning experience.

### 📚 60-Chapter Course

`course.html` contains all 60 chapters from the source document.

Each chapter is presented with:

- Concept / description
- Purpose / Key Idea
- Syntax / Example
- Output
- Important Points
- Real-Time Use
- Practice guidance
- Interview guidance

The chapter order follows the supplied notes.

### 🧪 Live Playground

`playground.html` provides:

- JavaScript editor
- Run button
- Console-style output
- Error display
- Editable examples
- No framework required

### 🧩 Interactive Projects

#### Counter Application

`counter.html`

Demonstrates:

- variables
- DOM selection
- functions
- event listeners
- state updates
- rendering

#### Task List Application

`task-list.html`

Demonstrates:

- arrays
- objects
- functions
- DOM manipulation
- events
- event delegation
- filtering
- localStorage
- JSON

## 🎨 Design

The interface uses a bright modern learning theme rather than a dark/white-only documentation layout.

It includes:

- Purple / pink / orange gradients
- Glass-style surfaces
- Animated hero console
- Floating code tokens
- Reveal animations
- Hover interactions
- Animated counter output
- Responsive navigation
- Responsive layouts
- Reduced-motion accessibility support

All styling is kept in **`style.css`**.

## 📁 Project Structure

```text
javascript-full-course/
├── index.html
├── course.html
├── playground.html
├── reference.html
├── counter.html
├── task-list.html
├── style.css
├── script.js
├── course.js
├── playground.js
├── examples/
│   └── modules/
├── docs/
│   └── JS-notes.docx
└── README.md
```

## 🚀 Run the project

### Option 1 — VS Code Live Server

1. Open the folder in VS Code.
2. Install **Live Server** if needed.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. Open the displayed local URL.

### Option 2 — Python local server

From the project folder:

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

### Option 3 — Node.js

If Node.js is installed:

```bash
npx serve .
```

Then open the local address shown in the terminal.

## 🔎 Course search

The course search supports terms such as:

```text
variables
arrays
closures
DOM
events
fetch
promises
async
await
localStorage
prototype
modules
security
performance
```

Search results update without reloading the page.

## 🧠 Learning path

```text
FOUNDATION
   ↓
DATA & FUNCTIONS
   ↓
CORE JAVASCRIPT
   ↓
DOM & BROWSER
   ↓
ASYNC JAVASCRIPT
   ↓
DEBUGGING + SECURITY + PERFORMANCE
   ↓
PROJECTS
```

## 🛠️ Technologies

- HTML5
- CSS3
- Modern JavaScript
- DOM APIs
- Browser Storage APIs
- Fetch API
- CSS animations
- Responsive design
- No framework required

## 📖 Source

The course content is based on the uploaded:

```text
docs/JS-notes.docx
```

The website keeps the source course's terminology and chapter organization while presenting it as an interactive web project.

## 💡 Recommended workflow

1. Read a chapter.
2. Copy its example into the playground.
3. Change one value.
4. Run it.
5. Compare the output.
6. Try the related project.
7. Review the reference.
8. Repeat.

## ⚠️ Playground note

The playground executes JavaScript in the browser using a generated function and a simulated console. Treat code as executable and only run code you understand.

## 👨‍💻 Project goal

The goal is not just to provide notes. It is to create a learning loop:

**Read → Understand → Run → Modify → Build → Revise**

---

Made for JavaScript practice and project-based learning.


## 🎨 Unique JavaScript visual identity

The JavaScript course intentionally has a different design language from the HTML and CSS course projects.

It uses a warm notebook/paper surface, lime-green and coral accents, terminal-style code panels, crisp editorial borders, mechanical shadows, floating JavaScript tokens and restrained motion. It does **not** reuse the CSS project's purple/pink gradient system or the HTML project's dark theme.

Animations are used for hover feedback, lesson reveal, floating code labels and live project feedback. Reduced-motion preferences are respected.
