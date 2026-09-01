window.JS_COURSE = [
  {
    "number": 1,
    "title": "JAVASCRIPT INTRODUCTION",
    "description": "JavaScript is a programming language used to add behavior, logic, and interaction to web pages and applications. HTML defines structure, CSS controls presentation, and JavaScript controls behavior. JavaScript can run in browsers and also on servers, desktop applications, command-line tools, and many other environments.",
    "purpose": "Interactive forms, dashboards, counters, menus, validation, API-based applications, games, and full-stack applications.",
    "example": "<!DOCTYPE html>\n<html>\n<body>\n  <h1 id=\"title\">Hello</h1>\n  <button onclick=\"changeTitle()\">Click Me</button>\n  <script>\n    function changeTitle() {\n      document.getElementById(\"title\").textContent = \"JavaScript is working!\";\n    }\n  </script>\n</body>\n</html>",
    "output": "Before clicking: Hello\nAfter clicking: JavaScript is working!",
    "points": [
      "JavaScript is case-sensitive.",
      "Statements are commonly separated by semicolons, although automatic semicolon insertion exists.",
      "JavaScript is dynamically typed: a variable can hold values of different types at different times.",
      "Modern JavaScript uses let, const, modules, classes, promises, async/await, and browser APIs."
    ],
    "realTime": "In a web application, this topic is normally combined with HTML and CSS. The JavaScript code receives data or user actions, applies the required logic, and updates application state, the DOM, or an API workflow.",
    "summary": {
      "Concept": {
        "remember": "Javascript Introduction",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Practice": {
        "remember": "Write and run the example.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Mention one real-world application."
      }
    }
  },
  {
    "number": 2,
    "title": "JAVASCRIPT ENVIRONMENT AND EXECUTION",
    "description": "JavaScript needs an execution environment. In a browser, the JavaScript engine executes the language and browser APIs provide objects such as document, window, fetch, localStorage, timers, and events. The browser parses HTML, creates the DOM, loads scripts, and executes JavaScript according to script placement and loading behavior.",
    "purpose": "A real web application normally separates HTML, CSS, and JavaScript into maintainable files.",
    "example": "<!DOCTYPE html>\n<html>\n<head>\n  <script defer src=\"app.js\"></script>\n</head>\n<body>\n  <h1 id=\"msg\">Loading...</h1>\n</body>\n</html>\n<!-- app.js -->\ndocument.getElementById(\"msg\").textContent = \"JavaScript loaded\";",
    "output": "Browser output: JavaScript loaded",
    "points": [
      "Use <script src=\"app.js\"></script> for external code.",
      "defer downloads the script while parsing and executes it after HTML parsing.",
      "async executes as soon as the script is ready and may run before parsing finishes.",
      "External files are easier to organize and reuse."
    ],
    "realTime": "In a web application, this topic is normally combined with HTML and CSS. The JavaScript code receives data or user actions, applies the required logic, and updates application state, the DOM, or an API workflow.",
    "summary": {
      "Concept": {
        "remember": "Javascript Environment And Execution",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Practice": {
        "remember": "Write and run the example.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Mention one real-world application."
      }
    }
  },
  {
    "number": 3,
    "title": "SYNTAX, STATEMENTS AND COMMENTS",
    "description": "JavaScript syntax is the set of rules used to write valid JavaScript. A statement represents an instruction. Expressions produce values. Comments document code and are ignored by the JavaScript engine.",
    "purpose": "Readable syntax makes debugging, code review, and maintenance easier.",
    "example": "// Single-line comment\n/*   Multi-line comment    */\nconst price = 500;\nconst quantity = 2;\nconst total = price * quantity;\nconsole.log(total);",
    "output": "2000",
    "points": [
      "Identifiers may contain letters, digits, _, and $, but cannot start with a digit.",
      "Keywords such as const, let, if, return, class, and function have special meaning.",
      "Use comments to explain intent, not to describe every obvious line.",
      "Keep statements readable and consistently formatted."
    ],
    "realTime": "In a web application, this topic is normally combined with HTML and CSS. The JavaScript code receives data or user actions, applies the required logic, and updates application state, the DOM, or an API workflow.",
    "summary": {
      "Concept": {
        "remember": "Syntax, Statements And Comments",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Practice": {
        "remember": "Write and run the example.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Mention one real-world application."
      }
    }
  },
  {
    "number": 4,
    "title": "VARIABLES: VAR, LET AND CONST",
    "description": "Variables store values so a program can use and update data. Modern JavaScript normally uses const when a binding should not be reassigned and let when it must change. var is an older function-scoped declaration and is mainly encountered in legacy code.",
    "purpose": "Use const for configuration values and object references; let for counters and changing state.",
    "example": "let score = 10;\nscore = 20;\nconst course = \"JavaScript\";\nvar oldStyle = \"legacy\";\noldStyle = \"still valid\";",
    "output": "score = 20\ncourse = JavaScript\noldStyle = legacy",
    "points": [
      "let and const are block-scoped.",
      "var is function-scoped and can be redeclared in the same scope.",
      "const prevents reassignment of the binding; objects and arrays declared with const can still be mutated.",
      "Prefer const by default, then use let when reassignment is required."
    ],
    "realTime": "In a web application, this topic is normally combined with HTML and CSS. The JavaScript code receives data or user actions, applies the required logic, and updates application state, the DOM, or an API workflow.",
    "summary": {
      "Concept": {
        "remember": "Variables: Var, Let And Const",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Practice": {
        "remember": "Write and run the example.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Mention one real-world application."
      }
    }
  },
  {
    "number": 5,
    "title": "DATA TYPES",
    "description": "JavaScript values belong to different data types. The main primitive types are string, number, bigint, boolean, undefined, null, and symbol. Objects are reference values and include arrays, functions, dates, maps, sets, and ordinary objects.",
    "purpose": "Choosing the correct data type helps prevent conversion and comparison bugs.",
    "example": "const name = \"Hruday\";\nconst age = 22;\nconst active = true;\nconst empty = null;\nlet result;\nconst user = { name: \"Hruday\" };\nconsole.log(typeof name);\nconsole.log(typeof age);\nconsole.log(typeof active);\nconsole.log(typeof result);\nconsole.log(typeof user);",
    "output": "string\nnumber\nboolean\nundefined\nobject",
    "points": [
      "typeof null returns \"object\" because of a long-standing language behavior.",
      "Arrays are objects, so Array.isArray(value) is preferred for array detection.",
      "BigInt is used for integers larger than Number's safe integer range.",
      "Symbols create unique primitive values."
    ],
    "realTime": "In a web application, this topic is normally combined with HTML and CSS. The JavaScript code receives data or user actions, applies the required logic, and updates application state, the DOM, or an API workflow.",
    "summary": {
      "Concept": {
        "remember": "Data Types",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Practice": {
        "remember": "Write and run the example.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Mention one real-world application."
      }
    }
  },
  {
    "number": 6,
    "title": "PRIMITIVE VS REFERENCE VALUES",
    "description": "Primitive values represent individual immutable values. Objects, arrays, and functions are reference values. Assignment of a primitive copies the value, while assigning an object copies a reference to the same object.",
    "purpose": "This distinction matters when updating application state, passing objects to functions, and copying arrays.",
    "example": "let a = 10;\nlet b = a;\nb = 20;\nconsole.log(a);\nconst user1 = { name: \"Hruday\" };\nconst user2 = user1;\nuser2.name = \"Rahul\";\nconsole.log(user1.name);",
    "output": "10\nRahul",
    "points": [
      "Primitive examples: string, number, boolean, null, undefined, bigint, symbol.",
      "Objects can be mutated through any reference that points to the same object.",
      "Use structuredClone or carefully designed copying when an independent object is required.",
      "Spread syntax makes shallow copies, not deep copies."
    ],
    "realTime": "This distinction matters when updating application state, passing objects to functions, and copying arrays.",
    "summary": {
      "Concept": {
        "remember": "Primitive Vs Reference Values",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 7,
    "title": "TYPE CONVERSION",
    "description": "Type conversion changes a value from one type to another. Explicit conversion is easier to understand than relying on implicit coercion. Common functions include String(), Number(), Boolean(), parseInt(), and parseFloat().",
    "purpose": "Form fields commonly provide strings, so conversion is important before numeric calculations.",
    "example": "const text = \"25\";\nconst n = Number(text);\nconst message = String(100);\nconst truthy = Boolean(\"hello\");\nconsole.log(n + 5);\nconsole.log(message + \"!\");\nconsole.log(truthy);",
    "output": "30\n100!\ntrue",
    "points": [
      "Number('') becomes 0.",
      "Number('abc') becomes NaN.",
      "Boolean(0), Boolean(''), Boolean(null), Boolean(undefined), and Boolean(NaN) are false.",
      "Use Number.isNaN(value) when specifically testing for NaN."
    ],
    "realTime": "Form fields commonly provide strings, so conversion is important before numeric calculations.",
    "summary": {
      "Concept": {
        "remember": "Type Conversion",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 8,
    "title": "OPERATORS",
    "description": "Operators perform calculations, comparisons, assignments, logical operations, and other transformations. Important groups include arithmetic, assignment, comparison, logical, ternary, nullish coalescing, optional chaining, and bitwise operators.",
    "purpose": "Operators are the foundation of calculations, validation rules, conditions, and UI state decisions.",
    "example": "const a = 10;\nconst b = 3;\nconsole.log(a + b);\nconsole.log(a % b);\nconsole.log(a > b);\nconsole.log(a === 10);\nconsole.log(a > 5 && b < 5);\nconsole.log(a > 20 ? \"Large\" : \"Small\");",
    "output": "13\n1\ntrue\ntrue\ntrue\nSmall",
    "points": [
      "Prefer === and !== for predictable equality checks.",
      "&& returns the first falsy value or the final operand; || returns the first truthy value or the final operand.",
      "?? uses the right side only when the left side is null or undefined.",
      "Optional chaining ?. safely accesses nested values."
    ],
    "realTime": "Operators are the foundation of calculations, validation rules, conditions, and UI state decisions.",
    "summary": {
      "Concept": {
        "remember": "Operators",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 9,
    "title": "INPUT AND OUTPUT",
    "description": "JavaScript can receive data from users and display or log results. In browser examples, prompt() can collect simple input, alert() displays a dialog, confirm() returns a boolean, and console methods help developers inspect program behavior. Real applications normally use HTML forms instead of prompt().",
    "purpose": "Login, registration, search, checkout, and task forms are common input sources.",
    "example": "const name = prompt(\"Enter your name:\");\nalert(\"Hello \" + name);\nconsole.log(\"User:\", name);",
    "output": "If the user enters Hruday: alert displays \"Hello Hruday\" and the console logs User: Hruday.",
    "points": [
      "prompt() returns a string or null.",
      "alert() is simple but blocks interaction while open.",
      "console.log(), console.table(), console.error(), and console.warn() are useful during development.",
      "For production interfaces, prefer DOM-based forms and messages."
    ],
    "realTime": "Login, registration, search, checkout, and task forms are common input sources.",
    "summary": {
      "Concept": {
        "remember": "Input And Output",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 10,
    "title": "CONDITIONAL STATEMENTS",
    "description": "Conditional statements execute different code depending on whether an expression is truthy or falsy. JavaScript provides if, else if, else, switch, and the conditional operator.",
    "purpose": "Used for login status, task status, permissions, validation, and grading logic.",
    "example": "const marks = 82;\nif (marks >= 90) {\n  console.log(\"A\");\n} else if (marks >= 75) {\n  console.log(\"B\");\n} else if (marks >= 50) {\n  console.log(\"C\");\n} else {\n  console.log(\"Fail\");\n}",
    "output": "B",
    "points": [
      "Use if/else for ranges and complex boolean conditions.",
      "switch is useful when comparing one expression against several fixed cases.",
      "Always consider a default case in switch statements.",
      "The ternary operator is best for short value selections, not large blocks of logic."
    ],
    "realTime": "Used for login status, task status, permissions, validation, and grading logic.",
    "summary": {
      "Concept": {
        "remember": "Conditional Statements",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 11,
    "title": "LOOPS",
    "description": "Loops repeat code while a condition or collection requires it. Common loops are for, while, do...while, for...of, and for...in. Choose the loop based on whether you need an index, values, or object keys.",
    "purpose": "Loops power lists, tables, reports, menu generation, and repeated calculations.",
    "example": "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}\nconst skills = [\"HTML\", \"CSS\", \"JavaScript\"];\nfor (const skill of skills) {\n  console.log(skill);\n}",
    "output": "1\n2\n3\n4\n5\nHTML\nCSS\nJavaScript",
    "points": [
      "for is useful when an index or controlled counter is required.",
      "for...of iterates values from iterable objects such as arrays.",
      "for...in iterates enumerable property keys and is commonly used with objects.",
      "Avoid infinite loops by ensuring the loop condition can eventually become false."
    ],
    "realTime": "Loops power lists, tables, reports, menu generation, and repeated calculations.",
    "summary": {
      "Concept": {
        "remember": "Loops",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 12,
    "title": "BREAK, CONTINUE AND LABELED STATEMENTS",
    "description": "break stops a loop or switch. continue skips the current loop iteration and continues with the next iteration. Labels can identify statements for controlled break or continue behavior, but they should be used sparingly.",
    "purpose": "Useful when searching data, skipping invalid records, or stopping after finding a required item.",
    "example": "for (let i = 1; i <= 5; i++) {\n  if (i === 3) continue;\n  if (i === 5) break;\n  console.log(i);\n}",
    "output": "1\n2\n4",
    "points": [
      "break exits immediately.",
      "continue skips the remaining statements in the current iteration.",
      "Labels can exit nested loops, but extracting a function is often clearer.",
      "Do not use break/continue to hide complicated control flow."
    ],
    "realTime": "Useful when searching data, skipping invalid records, or stopping after finding a required item.",
    "summary": {
      "Concept": {
        "remember": "Break, Continue And Labeled Statements",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 13,
    "title": "STRINGS",
    "description": "A string represents textual data. JavaScript supports single quotes, double quotes, and template literals. Strings are immutable, so string methods return new strings rather than changing the original string.",
    "purpose": "Names, messages, URLs, search text, JSON, API data, and user input are commonly represented as strings.",
    "example": "const first = \"Hruday\";\nconst last = \"Kalluri\";\nconst full = `${first} ${last}`;\nconsole.log(full);\nconsole.log(full.length);",
    "output": "Hruday Kalluri\n14",
    "points": [
      "Template literals support interpolation with ${...}.",
      "length gives the number of UTF-16 code units.",
      "String indexing starts at 0.",
      "Use trim() to remove leading and trailing whitespace."
    ],
    "realTime": "Names, messages, URLs, search text, JSON, API data, and user input are commonly represented as strings.",
    "summary": {
      "Concept": {
        "remember": "Strings",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 14,
    "title": "STRING METHODS",
    "description": "String methods help search, extract, transform, split, and replace text. Important methods include toUpperCase, toLowerCase, trim, includes, startsWith, endsWith, indexOf, slice, substring, replace, replaceAll, split, and concat.",
    "purpose": "Search boxes, validation, formatting, filtering, parsing and display labels rely heavily on string methods.",
    "example": "const text = \"  JavaScript Notes  \";\nconsole.log(text.trim());\nconsole.log(text.toUpperCase());\nconsole.log(text.includes(\"Script\"));\nconsole.log(text.trim().slice(0, 10));\nconsole.log(\"a,b,c\".split(\",\"));",
    "output": "JavaScript Notes\n  JAVASCRIPT NOTES  \ntrue\nJavaScript\n[ 'a', 'b', 'c' ]",
    "points": [
      "Most string methods do not mutate the original string.",
      "slice() accepts negative indexes.",
      "includes() returns a boolean.",
      "split() converts a string into an array."
    ],
    "realTime": "Search boxes, validation, formatting, filtering, parsing and display labels rely heavily on string methods.",
    "summary": {
      "Concept": {
        "remember": "String Methods",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 15,
    "title": "ARRAYS",
    "description": "An array stores an ordered collection of values. Arrays are zero-indexed and can contain mixed value types, although keeping related data structures consistent usually produces cleaner code.",
    "purpose": "Arrays are used for tasks, products, users, messages, projects, skills, and API result collections.",
    "example": "const skills = [\"HTML\", \"CSS\", \"JavaScript\"];\nconsole.log(skills[0]);\nconsole.log(skills.length);\nskills.push(\"React\");\nconsole.log(skills);",
    "output": "HTML\n3\n[ 'HTML', 'CSS', 'JavaScript', 'React' ]",
    "points": [
      "push adds to the end; pop removes from the end.",
      "unshift adds to the beginning; shift removes from the beginning.",
      "length changes when the array changes.",
      "Use Array.isArray(value) to test whether a value is an array."
    ],
    "realTime": "Arrays are used for tasks, products, users, messages, projects, skills, and API result collections.",
    "summary": {
      "Concept": {
        "remember": "Arrays",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 16,
    "title": "ARRAY METHODS PART 1",
    "description": "Common mutating array methods include push, pop, shift, unshift, splice, and sort. Non-mutating methods include slice, concat, and includes. Understanding mutation is important when working with application state.",
    "purpose": "Used for shopping carts, task collections, menus, queues, and data manipulation.",
    "example": "const numbers = [10, 20, 30];\n\nnumbers.push(40);\nnumbers.pop();\nnumbers.unshift(5);\n\nconsole.log(numbers);\nconsole.log(numbers.includes(20));",
    "output": "[5, 10, 20, 30]\ntrue",
    "points": [
      "push/pop work at the end.",
      "shift/unshift work at the beginning.",
      "splice can insert, remove, or replace items.",
      "sort() mutates the array and sorts values as strings unless a compare function is supplied."
    ],
    "realTime": "Used for shopping carts, task collections, menus, queues, and data manipulation.",
    "summary": {
      "Concept": {
        "remember": "Array Methods Part 1",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 17,
    "title": "ARRAY METHODS PART 2",
    "description": "Modern JavaScript provides powerful array methods for transforming and searching data. map creates a new array, filter selects items, reduce combines values, find returns the first match, some checks whether any item matches, and every checks whether all items match.",
    "purpose": "These methods are central to React rendering, dashboard calculations, search, filtering, and API data processing.",
    "example": "const prices = [100, 200, 300];\nconst doubled = prices.map(p => p * 2);\nconst expensive = prices.filter(p => p >= 200);\nconst total = prices.reduce((sum, p) => sum + p, 0);\nconsole.log(doubled);\nconsole.log(expensive);\nconsole.log(total);",
    "output": "[200, 400, 600]\n[200, 300]\n600",
    "points": [
      "map should normally return one output for each input item.",
      "filter returns only matching items.",
      "reduce can calculate totals, groups, or other accumulated results.",
      "find returns undefined when no match exists."
    ],
    "realTime": "These methods are central to React rendering, dashboard calculations, search, filtering, and API data processing.",
    "summary": {
      "Concept": {
        "remember": "Array Methods Part 2",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 18,
    "title": "MULTIDIMENSIONAL ARRAYS",
    "description": "A multidimensional array is an array containing other arrays. It can represent tables, matrices, grids, seating arrangements, or nested datasets.",
    "purpose": "Useful for matrices, game boards, timetable data, and grouped records.",
    "example": "const marks = [\n  [90, 85, 88],\n  [80, 75, 82]\n];\nconsole.log(marks[0][2]);\nfor (const row of marks) {\n  console.log(row.join(\" \"));\n}",
    "output": "88\n90 85 88\n80 75 82",
    "points": [
      "The first index selects the inner array.",
      "The second index selects a value inside that array.",
      "Nested loops are commonly used to process grids.",
      "For irregular nested data, objects can be clearer than arrays."
    ],
    "realTime": "Useful for matrices, game boards, timetable data, and grouped records.",
    "summary": {
      "Concept": {
        "remember": "Multidimensional Arrays",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 19,
    "title": "OBJECTS",
    "description": "Objects store related information as key-value pairs. A property can contain a primitive, array, function, or another object. Objects are fundamental to JavaScript application data models.",
    "purpose": "User profiles, tasks, products, API responses, configuration, and application state are usually represented with objects.",
    "example": "const user = {\n  name: \"Hruday\",\n  role: \"Full Stack Developer\",\n  active: true\n};\n\nconsole.log(user.name);\nconsole.log(user[\"role\"]);",
    "output": "Hruday\nFull Stack Developer",
    "points": [
      "Dot notation is concise when the property name is known.",
      "Bracket notation supports dynamic property names.",
      "Object.keys(), Object.values(), and Object.entries() help inspect objects.",
      "Objects can be nested."
    ],
    "realTime": "User profiles, tasks, products, API responses, configuration, and application state are usually represented with objects.",
    "summary": {
      "Concept": {
        "remember": "Objects",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 20,
    "title": "OBJECT PROPERTIES AND METHODS",
    "description": "Object properties hold data and object methods hold behavior through function values. Properties can be added, updated, or deleted. Computed property names allow dynamic keys.",
    "purpose": "Object methods are useful for domain-specific behavior, formatting, and encapsulating related operations.",
    "example": "const user = {\n  name: \"Hruday\",\n  greet() {\n    return `Hello ${this.name}`;\n  }\n};\n\nuser.role = \"Developer\";\nconsole.log(user.greet());",
    "output": "Hello Hruday",
    "points": [
      "Use object.method() to call a method.",
      "delete removes a property.",
      "Object.freeze() prevents ordinary changes to an object.",
      "Object.assign() copies enumerable properties into a target object."
    ],
    "realTime": "Object methods are useful for domain-specific behavior, formatting, and encapsulating related operations.",
    "summary": {
      "Concept": {
        "remember": "Object Properties And Methods",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 21,
    "title": "OBJECT DESTRUCTURING",
    "description": "Destructuring extracts values from objects or arrays into variables using a compact syntax. It improves readability when functions need selected properties from a larger object.",
    "purpose": "Useful when reading API responses, component props, configuration objects, and function arguments.",
    "example": "const user = {\n  name: \"Hruday\",\n  role: \"Developer\",\n  city: \"Srikakulam\"\n};\nconst { name, role } = user;\nconsole.log(name);\nconsole.log(role);",
    "output": "Hruday\nDeveloper",
    "points": [
      "Property names are matched by default.",
      "Use aliases such as {name: fullName}.",
      "Default values can be supplied: {city = 'Unknown'}.",
      "Destructuring is common in function parameters and modern frameworks."
    ],
    "realTime": "Useful when reading API responses, component props, configuration objects, and function arguments.",
    "summary": {
      "Concept": {
        "remember": "Object Destructuring",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 22,
    "title": "FUNCTIONS",
    "description": "A function is a reusable block of code designed to perform a task. Functions can accept parameters, execute statements, and return values. They reduce duplication and improve modularity.",
    "purpose": "Validation, calculations, API operations, event handlers, formatting, and business logic all use functions.",
    "example": "function add(a, b) {\n  return a + b;\n}\n\nconst result = add(10, 20);\nconsole.log(result);",
    "output": "30",
    "points": [
      "return ends function execution and provides a value to the caller.",
      "A function can be stored in a variable.",
      "Functions are first-class values: they can be passed to and returned from other functions.",
      "Keep functions focused on one clear responsibility."
    ],
    "realTime": "Validation, calculations, API operations, event handlers, formatting, and business logic all use functions.",
    "summary": {
      "Concept": {
        "remember": "Functions",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 23,
    "title": "FUNCTION PARAMETERS AND ARGUMENTS",
    "description": "Parameters are named variables in a function definition. Arguments are the actual values passed when the function is called. JavaScript supports default parameters and rest parameters.",
    "purpose": "Reusable utility functions and service functions often accept several configuration or data arguments.",
    "example": "function welcome(name = \"Guest\", role = \"User\") {\n  return `${name} - ${role}`;\n}\nconsole.log(welcome(\"Hruday\", \"Developer\"));\nconsole.log(welcome());",
    "output": "Hruday - Developer\nGuest - User",
    "points": [
      "Default parameters are used when the argument is undefined.",
      "Rest parameters collect remaining arguments into an array.",
      "Arguments can be primitive or reference values.",
      "Validate parameters when functions form important application boundaries."
    ],
    "realTime": "Reusable utility functions and service functions often accept several configuration or data arguments.",
    "summary": {
      "Concept": {
        "remember": "Function Parameters And Arguments",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 24,
    "title": "FUNCTION EXPRESSIONS AND ARROW FUNCTIONS",
    "description": "A function expression stores a function in a variable. Arrow functions provide shorter syntax and lexical this behavior. Arrow functions are especially common in callbacks and array methods.",
    "purpose": "map(), filter(), event callbacks, promises, and React code frequently use arrow functions.",
    "example": "const add = function(a, b) {\n  return a + b;\n};\n\nconst multiply = (a, b) => a * b;\n\nconsole.log(add(2, 3));\nconsole.log(multiply(4, 5));",
    "output": "5\n20",
    "points": [
      "Arrow functions with one parameter can omit parentheses: x => x * 2.",
      "Arrow functions do not have their own this, arguments, or prototype.",
      "Use regular functions when you need dynamic this or a constructor.",
      "Concise arrow functions are useful for simple transformations."
    ],
    "realTime": "map(), filter(), event callbacks, promises, and React code frequently use arrow functions.",
    "summary": {
      "Concept": {
        "remember": "Function Expressions And Arrow Functions",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 25,
    "title": "SCOPE",
    "description": "Scope determines where a variable can be accessed. JavaScript has global scope, module scope, function scope, and block scope. let and const respect block scope; var does not create block scope.",
    "purpose": "Understanding scope prevents accidental global variables and helps design predictable functions.",
    "example": "const globalValue = \"global\";\n\nfunction test() {\n  const functionValue = \"function\";\n\n  if (true) {\n    const blockValue = \"block\";\n    console.log(globalValue, functionValue, blockValue);\n  }\n}\n\ntest();",
    "output": "global function block",
    "points": [
      "Inner scopes can access outer-scope variables.",
      "Outer scopes cannot directly access variables declared only inside inner scopes.",
      "Prefer narrow scope for variables.",
      "Modules create their own top-level scope."
    ],
    "realTime": "Understanding scope prevents accidental global variables and helps design predictable functions.",
    "summary": {
      "Concept": {
        "remember": "Scope",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 26,
    "title": "HOISTING AND TEMPORAL DEAD ZONE",
    "description": "Hoisting describes how declarations are processed before execution. Function declarations can be called before their source position. var declarations are initialized with undefined. let and const are hoisted but remain inaccessible in the temporal dead zone until execution reaches their declaration.",
    "purpose": "Hoisting behavior is important when debugging initialization errors and understanding execution order.",
    "example": "sayHello();\n\nfunction sayHello() {\n  console.log(\"Hello\");\n}\nconsole.log(value);\nvar value = 10;",
    "output": "Hello\nundefined",
    "points": [
      "Calling a function declaration before its definition is allowed.",
      "Accessing let/const before declaration throws a ReferenceError.",
      "Do not rely on hoisting for readability.",
      "Declare variables before using them."
    ],
    "realTime": "Hoisting behavior is important when debugging initialization errors and understanding execution order.",
    "summary": {
      "Concept": {
        "remember": "Hoisting And Temporal Dead Zone",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 27,
    "title": "CLOSURES",
    "description": "A closure occurs when a function remembers and can access variables from its surrounding lexical scope even after the outer function has finished executing. Closures enable private state, factories, callbacks, and many advanced patterns.",
    "purpose": "Used for counters, factories, event handlers, memoization, modules, and private state patterns.",
    "example": "function createCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\nconst counter = createCounter();\nconsole.log(counter());\nconsole.log(counter());",
    "output": "1\n2",
    "points": [
      "The inner function retains access to count.",
      "Closures can hide state from direct external access.",
      "Closures are created naturally by nested functions.",
      "Be mindful of retained references when creating long-lived closures."
    ],
    "realTime": "Used for counters, factories, event handlers, memoization, modules, and private state patterns.",
    "summary": {
      "Concept": {
        "remember": "Closures",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 28,
    "title": "THIS KEYWORD",
    "description": "this is a context-dependent value used inside functions. In a method call, this usually refers to the object before the dot. In regular functions, behavior depends on strict mode and how the function is called. Arrow functions inherit this from their surrounding scope.",
    "purpose": "Objects, classes, event handlers, and browser APIs frequently require understanding this.",
    "example": "const user = {\n  name: \"Hruday\",\n  greet() {\n    console.log(this.name);\n  }\n};\n\nuser.greet();",
    "output": "Hruday",
    "points": [
      "this is determined mainly by the call site for regular functions.",
      "Arrow functions do not create their own this.",
      "Class methods use this to access instance data.",
      "Losing method context is a common source of bugs."
    ],
    "realTime": "Objects, classes, event handlers, and browser APIs frequently require understanding this.",
    "summary": {
      "Concept": {
        "remember": "This Keyword",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 29,
    "title": "CALL, APPLY AND BIND",
    "description": "call and apply invoke a function with an explicitly chosen this value. call passes arguments separately; apply accepts an array-like arguments list. bind returns a new function with this and optionally some arguments fixed.",
    "purpose": "Useful when adapting functions to different contexts and when preserving method context in callbacks.",
    "example": "function introduce(city) {\n  return `${this.name} from ${city}`;\n}\nconst user = { name: \"Hruday\" };\nconsole.log(introduce.call(user, \"Srikakulam\"));\nconsole.log(introduce.apply(user, [\"Srikakulam\"]));\nconst bound = introduce.bind(user);\nconsole.log(bound(\"Srikakulam\"));",
    "output": "Hruday from Srikakulam\nHruday from Srikakulam\nHruday from Srikakulam",
    "points": [
      "call invokes immediately.",
      "apply invokes immediately with an array-like argument list.",
      "bind creates a reusable function.",
      "Arrow functions cannot have their this changed with these methods."
    ],
    "realTime": "Useful when adapting functions to different contexts and when preserving method context in callbacks.",
    "summary": {
      "Concept": {
        "remember": "Call, Apply And Bind",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 30,
    "title": "HIGHER-ORDER FUNCTIONS AND CALLBACKS",
    "description": "A higher-order function accepts another function, returns a function, or both. A callback is a function passed to another function to be executed later or as part of an operation.",
    "purpose": "Higher-order functions are a foundation of functional programming and modern JavaScript libraries.",
    "example": "function process(value, callback) {\n  return callback(value);\n}\n\nconst result = process(5, n => n * 10);\nconsole.log(result);",
    "output": "50",
    "points": [
      "map, filter, reduce, setTimeout, and event listeners use callback patterns.",
      "Callbacks can be synchronous or asynchronous.",
      "Keep callbacks small and descriptive.",
      "Nested asynchronous callbacks can become difficult to maintain; promises and async/await often improve readability."
    ],
    "realTime": "Higher-order functions are a foundation of functional programming and modern JavaScript libraries.",
    "summary": {
      "Concept": {
        "remember": "Higher-Order Functions And Callbacks",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 31,
    "title": "MAP AND SET",
    "description": "Map stores key-value pairs and allows keys of any type. Set stores unique values. Both are useful alternatives to ordinary objects and arrays for specific data-management tasks.",
    "purpose": "Maps are useful for indexed lookup; sets are useful for unique tags, IDs, permissions, and deduplication.",
    "example": "const users = new Map();\nusers.set(1, \"Hruday\");\nusers.set(2, \"Rahul\");\n\nconst skills = new Set([\"HTML\", \"CSS\", \"HTML\"]);\n\nconsole.log(users.get(1));\nconsole.log(skills.size);",
    "output": "Hruday\n2",
    "points": [
      "Map preserves insertion order.",
      "Set automatically removes duplicate values.",
      "Map methods include set, get, has, delete, and clear.",
      "Set methods include add, has, delete, and clear."
    ],
    "realTime": "Maps are useful for indexed lookup; sets are useful for unique tags, IDs, permissions, and deduplication.",
    "summary": {
      "Concept": {
        "remember": "Map And Set",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 32,
    "title": "DATE AND TIME",
    "description": "The Date object represents a point in time. JavaScript provides methods for reading and setting date components, timestamps, and ISO strings. For serious time-zone applications, always think carefully about local time versus UTC.",
    "purpose": "Scheduling, reports, audit records, task due dates, bookings, and timestamps use date/time values.",
    "example": "const now = new Date();\n\nconsole.log(now.getFullYear());\nconsole.log(now.getMonth() + 1);\n\nconst iso = now.toISOString();\nconsole.log(iso);",
    "output": "Example output depends on the current date/time:\n2026\n8\n2026-08-20T...",
    "points": [
      "getMonth() is zero-based.",
      "toISOString() returns UTC in ISO format.",
      "Date.now() returns a millisecond timestamp.",
      "Do not manually assume time zones when displaying dates to users."
    ],
    "realTime": "Scheduling, reports, audit records, task due dates, bookings, and timestamps use date/time values.",
    "summary": {
      "Concept": {
        "remember": "Date And Time",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 33,
    "title": "MATH AND NUMBER UTILITIES",
    "description": "The Math object provides mathematical constants and functions. Number provides utilities for checking numeric values and safe integer ranges. Common functions include round, floor, ceil, max, min, random, and trunc.",
    "purpose": "Pagination, games, prices, statistics, random IDs, dimensions, and calculations use these utilities.",
    "example": "console.log(Math.round(4.6));\nconsole.log(Math.floor(4.9));\nconsole.log(Math.ceil(4.1));\nconsole.log(Math.max(10, 50, 20));\nconsole.log(Number.isInteger(10));",
    "output": "5\n4\n5\n50\ntrue",
    "points": [
      "Math.random() produces a value from 0 inclusive to 1 exclusive.",
      "Math.floor is useful for integer index generation.",
      "Number.isNaN() is safer than global isNaN() for strict numeric checks.",
      "Number.isFinite() checks for finite numbers."
    ],
    "realTime": "Pagination, games, prices, statistics, random IDs, dimensions, and calculations use these utilities.",
    "summary": {
      "Concept": {
        "remember": "Math And Number Utilities",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 34,
    "title": "REGULAR EXPRESSIONS",
    "description": "Regular expressions describe text patterns. They are useful for searching, replacing, validating, and extracting structured text. JavaScript creates regex values with /pattern/flags or the RegExp constructor.",
    "purpose": "Search, filtering, basic validation, parsing, and text replacement are common uses.",
    "example": "const pattern = /^[A-Za-z]+$/;\nconsole.log(pattern.test(\"Hruday\"));\nconsole.log(pattern.test(\"Hruday123\"));\n\nconst text = \"JavaScript Java\";\nconsole.log(text.replace(/Java/g, \"JS\"));",
    "output": "true\nfalse\nJSscript JS",
    "points": [
      "^ and $ represent start and end anchors.",
      "\\d means a digit, \\w commonly represents word characters, and + means one or more.",
      "Flags include g, i, m, s, u, y, and d depending on the feature needed.",
      "Complex validation is often better split into smaller checks."
    ],
    "realTime": "Search, filtering, basic validation, parsing, and text replacement are common uses.",
    "summary": {
      "Concept": {
        "remember": "Regular Expressions",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 35,
    "title": "JSON",
    "description": "JSON stands for JavaScript Object Notation. It is a text format commonly used for exchanging structured data between browsers and servers. JSON.parse converts JSON text to a JavaScript value; JSON.stringify converts a JavaScript value to JSON text.",
    "purpose": "REST APIs, configuration files, localStorage, and server communication commonly use JSON.",
    "example": "const user = { name: \"Hruday\", age: 22 };\n\nconst json = JSON.stringify(user);\nconsole.log(json);\nconst parsed = JSON.parse(json);\nconsole.log(parsed.name);",
    "output": "{\"name\":\"Hruday\",\"age\":22}\nHruday",
    "points": [
      "JSON property names use double quotes.",
      "JSON cannot directly represent functions, undefined, or some other JavaScript-specific values.",
      "Always handle malformed JSON with error handling when input is untrusted.",
      "fetch responses are often converted with response.json()."
    ],
    "realTime": "REST APIs, configuration files, localStorage, and server communication commonly use JSON.",
    "summary": {
      "Concept": {
        "remember": "Json",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 36,
    "title": "ERROR HANDLING",
    "description": "JavaScript provides try, catch, finally, and throw for handling exceptional situations. Errors should be caught where the program can recover or where useful context can be added.",
    "purpose": "API failures, invalid input, parsing problems, and unexpected application states need clear error handling.",
    "example": "try {\n  const data = JSON.parse(\"{bad json}\");\n  console.log(data);\n} catch (error) {\n  console.log(\"Invalid JSON\");\n} finally {\n  console.log(\"Finished\");\n}",
    "output": "Invalid JSON\nFinished",
    "points": [
      "try contains risky code.",
      "catch receives the error object.",
      "finally runs whether an error occurs or not.",
      "throw new Error('message') creates an explicit error.",
      "Do not silently ignore errors."
    ],
    "realTime": "API failures, invalid input, parsing problems, and unexpected application states need clear error handling.",
    "summary": {
      "Concept": {
        "remember": "Error Handling",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 37,
    "title": "CLASSES AND CONSTRUCTORS",
    "description": "Classes provide syntax for creating objects with shared structure and behavior. A constructor initializes an instance. Methods define behavior available on class instances.",
    "purpose": "Useful for modeling domain entities such as users, tasks, products, accounts, and services.",
    "example": "class User {\n  constructor(name, role) {\n    this.name = name;\n    this.role = role;\n  }\n  info() {\n    return `${this.name} - ${this.role}`;\n  }\n}\nconst user = new User(\"Hruday\", \"Developer\");\nconsole.log(user.info());",
    "output": "Hruday - Developer",
    "points": [
      "new creates an instance.",
      "constructor runs during instance creation.",
      "Methods are placed on the class prototype.",
      "Class syntax is built on JavaScript's prototype system.",
      "Classes can use inheritance with extends."
    ],
    "realTime": "Useful for modeling domain entities such as users, tasks, products, accounts, and services.",
    "summary": {
      "Concept": {
        "remember": "Classes And Constructors",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 38,
    "title": "INHERITANCE",
    "description": "Inheritance allows one class to reuse and extend another class. extends creates the relationship and super() calls the parent constructor or method.",
    "purpose": "Useful when related domain objects share common behavior.",
    "example": "class User {\n  constructor(name) {\n    this.name = name;\n  }\n  greet() {\n    return `Hello ${this.name}`;\n  }\n}\nclass Admin extends User {\n  greet() {\n    return super.greet() + \" - Admin\";\n  }\n}\nconsole.log (new Admin(\"Hruday\").greet());",
    "output": "Hello Hruday - Admin",
    "points": [
      "Child classes can override methods.",
      "super.greet() calls the parent implementation.",
      "Keep inheritance shallow when possible.",
      "Composition is often preferable when behavior does not form a clear is-a relationship."
    ],
    "realTime": "Useful when related domain objects share common behavior.",
    "summary": {
      "Concept": {
        "remember": "Inheritance",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 39,
    "title": "PROTOTYPES",
    "description": "Every ordinary JavaScript object has an internal prototype link. Properties and methods can be looked up through the prototype chain. Classes provide convenient syntax over this mechanism.",
    "purpose": "Important for advanced JavaScript, performance reasoning, libraries, and interview questions.",
    "example": "const userMethods = {\n  greet() {\n    return `Hello ${this.name}`;\n  }\n};\nconst user = Object.create(userMethods);\nuser.name = \"Hruday\";\nconsole.log(user.greet());",
    "output": "Hello Hruday",
    "points": [
      "Property lookup checks the object and then its prototype chain.",
      "Object.create() creates an object with a selected prototype.",
      "Object.getPrototypeOf() reads an object's prototype.",
      "Prototype understanding helps explain classes, inheritance, and shared methods."
    ],
    "realTime": "Important for advanced JavaScript, performance reasoning, libraries, and interview questions.",
    "summary": {
      "Concept": {
        "remember": "Prototypes",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 40,
    "title": "MODULES: IMPORT AND EXPORT",
    "description": "Modules divide code into reusable files with explicit exports and imports. Modern JavaScript modules help prevent global variables and make dependencies visible.",
    "purpose": "Large applications split features into services, utilities, components, and modules.",
    "example": "// math.js\nexport function add(a, b) {\n  return a + b;\n}\n\n// app.js\nimport { add } from \"./math.js\";\nconsole.log(add(10, 20));",
    "output": "30",
    "points": [
      "Named exports use export { ... } or export declarations.",
      "Default exports use export default.",
      "Browser modules use <script type=\"module\">.",
      "Modules are automatically strict mode and have their own scope."
    ],
    "realTime": "Large applications split features into services, utilities, components, and modules.",
    "summary": {
      "Concept": {
        "remember": "Modules: Import And Export",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 41,
    "title": "DOM INTRODUCTION",
    "description": "The Document Object Model represents the HTML document as a tree of objects. JavaScript can read, create, update, move, and remove DOM nodes. DOM APIs connect JavaScript logic to visible page content.",
    "purpose": "DOM manipulation powers interactive web pages and client-side applications.",
    "example": "<!DOCTYPE html>\n<h1 id=\"title\">Old Title</h1>\n<script>\n  const title = document.getElementById(\"title\");\n  title.textContent = \"New Title\";\n</script>",
    "output": "The heading changes from Old Title to New Title.",
    "points": [
      "document represents the page.",
      "Elements are nodes in the DOM tree.",
      "textContent safely changes text.",
      "innerHTML parses HTML and should not receive untrusted HTML."
    ],
    "realTime": "DOM manipulation powers interactive web pages and client-side applications.",
    "summary": {
      "Concept": {
        "remember": "Dom Introduction",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 42,
    "title": "DOM SELECTORS",
    "description": "Selectors find elements in the DOM. Common methods include getElementById, querySelector, querySelectorAll, getElementsByClassName, and getElementsByTagName.",
    "purpose": "Selectors are used for buttons, forms, cards, navigation, tables, and dynamic UI updates.",
    "example": "const title = document.getElementById(\"title\");\nconst firstButton = document.querySelector(\"button\");\nconst cards = document.querySelectorAll(\".card\");\nconsole.log(title);\nconsole.log(cards.length);",
    "output": "The console prints the selected elements and the number of .card elements.",
    "points": [
      "querySelector returns the first matching element.",
      "querySelectorAll returns a static NodeList in modern browsers.",
      "Use specific selectors to make code easier to understand.",
      "Check for null before using an element that may not exist."
    ],
    "realTime": "Selectors are used for buttons, forms, cards, navigation, tables, and dynamic UI updates.",
    "summary": {
      "Concept": {
        "remember": "Dom Selectors",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 43,
    "title": "DOM TRAVERSAL AND MANIPULATION",
    "description": "DOM traversal means moving through relationships such as parent, child, and sibling nodes. Manipulation includes creating elements, setting attributes, classes, text, and inserting or removing nodes.",
    "purpose": "Dynamic cards, menus, notifications, tables, and form messages rely on DOM manipulation.",
    "example": "const list = document.querySelector(\"#skills\");\nconst item = document.createElement(\"li\");\nitem.textContent = \"JavaScript\";\nitem.classList.add(\"skill\");\nlist.append(item);",
    "output": "A new JavaScript list item appears inside #skills.",
    "points": [
      "createElement creates a new element.",
      "append adds nodes or text at the end.",
      "classList.add/remove/toggle manage CSS classes.",
      "setAttribute and direct properties can set attributes.",
      "remove() deletes an element."
    ],
    "realTime": "Dynamic cards, menus, notifications, tables, and form messages rely on DOM manipulation.",
    "summary": {
      "Concept": {
        "remember": "Dom Traversal And Manipulation",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 44,
    "title": "DOM EVENTS",
    "description": "Events represent actions or occurrences such as click, input, submit, change, keydown, load, and mouse movement. addEventListener attaches a function that runs when an event occurs.",
    "purpose": "Buttons, forms, keyboard controls, drag/drop, navigation, and application interactions all use events.",
    "example": "const button = document.querySelector(\"#btn\");\nbutton.addEventListener(\"click\", () => {\n  console.log(\"Button clicked\");\n});",
    "output": "Clicking the button logs: Button clicked",
    "points": [
      "Use addEventListener rather than inline event attributes for maintainable code.",
      "The event object contains information about the event.",
      "preventDefault() can stop default browser behavior.",
      "Event listeners can be removed with removeEventListener when the same function reference is available."
    ],
    "realTime": "Buttons, forms, keyboard controls, drag/drop, navigation, and application interactions all use events.",
    "summary": {
      "Concept": {
        "remember": "Dom Events",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 45,
    "title": "EVENT DELEGATION",
    "description": "Event delegation attaches one listener to a common ancestor and uses event bubbling to handle events from descendant elements. It is efficient for dynamic lists where child elements are added later.",
    "purpose": "Dynamic task lists, tables, menus, and lists of action buttons benefit from delegation.",
    "example": "const list = document.querySelector(\"#tasks\");\nlist.addEventListener(\"click\", event => {\n  if (event.target.matches(\".delete\")) {\n    event.target.closest(\".task\").remove();\n  }\n});",
    "output": "Clicking a .delete button removes its surrounding .task element.",
    "points": [
      "Most DOM events bubble from the target toward ancestors.",
      "event.target is the original element that triggered the event.",
      "closest() finds the nearest matching ancestor.",
      "Delegation reduces the number of individual listeners."
    ],
    "realTime": "Dynamic task lists, tables, menus, and lists of action buttons benefit from delegation.",
    "summary": {
      "Concept": {
        "remember": "Event Delegation",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 46,
    "title": "FORMS AND VALIDATION",
    "description": "JavaScript can read form controls, validate values, display messages, and prevent submission when data is invalid. Client-side validation improves user experience but must not replace server-side validation.",
    "purpose": "Login, registration, contact, task creation, search, checkout, and profile forms need validation.",
    "example": "const form = document.querySelector(\"#loginForm\");\n\nform.addEventListener(\"submit\", event => {\n  event.preventDefault();\n\n  const email = document.querySelector(\"#email\").value.trim();\n\n  if (!email.includes(\"@\")) {\n    console.log(\"Enter a valid email\");\n    return;\n  }\n\n  console.log(\"Form is valid\");\n});",
    "output": "For an invalid value: Enter a valid email\nFor a valid value: Form is valid",
    "points": [
      "Use the submit event on the form.",
      "preventDefault stops navigation/submission when appropriate.",
      "trim() removes accidental whitespace.",
      "Never trust browser validation alone for security."
    ],
    "realTime": "Login, registration, contact, task creation, search, checkout, and profile forms need validation.",
    "summary": {
      "Concept": {
        "remember": "Forms And Validation",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 47,
    "title": "BOM",
    "description": "The Browser Object Model provides browser-related objects and features. The global window object represents the browser window. Common BOM features include location, history, navigator, screen, alert, confirm, and timers.",
    "purpose": "Responsive behavior, navigation, redirects, browser information, and history management use BOM APIs.",
    "example": "console.log(window.innerWidth);\nconsole.log(location.href);\nconsole.log(navigator.language);",
    "output": "Output depends on the browser and current page, for example: 1920\nhttps://example.com/\nen-US",
    "points": [
      "window is the global object in a browser.",
      "location provides URL information and navigation methods.",
      "history provides browser history methods.",
      "navigator exposes browser and environment information."
    ],
    "realTime": "Responsive behavior, navigation, redirects, browser information, and history management use BOM APIs.",
    "summary": {
      "Concept": {
        "remember": "Bom",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 48,
    "title": "TIMERS AND SCHEDULERS",
    "description": "JavaScript provides setTimeout and setInterval for scheduling callbacks. clearTimeout and clearInterval cancel scheduled work. Timer callbacks run later through the event loop rather than interrupting currently executing JavaScript.",
    "purpose": "Countdowns, polling, delayed messages, animations, auto-save, and scheduled UI updates use timers.",
    "example": "const id = setTimeout(() => {\n  console.log(\"Runs after about 1 second\");\n}, 1000);\nconst interval = setInterval(() => {\n  console.log(\"Tick\");\n}, 1000);\nsetTimeout(() => clearInterval(interval), 3500);",
    "output": "Approximately: Tick\nTick\nTick\nThen the interval stops.",
    "points": [
      "setTimeout runs once after the delay.",
      "setInterval repeats until cleared.",
      "A timer delay is a minimum scheduling delay, not a guarantee of exact execution time.",
      "Always clear long-lived intervals when they are no longer needed."
    ],
    "realTime": "Countdowns, polling, delayed messages, animations, auto-save, and scheduled UI updates use timers.",
    "summary": {
      "Concept": {
        "remember": "Timers And Schedulers",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 49,
    "title": "LOCALSTORAGE, SESSIONSTORAGE AND COOKIES",
    "description": "Web storage provides simple client-side key-value storage. localStorage persists until removed, while sessionStorage lasts for the page session. Cookies are sent with matching HTTP requests and have additional security and expiration controls.",
    "purpose": "Preferences, drafts, simple client state, and session-specific information can use browser storage.",
    "example": "localStorage.setItem(\"theme\", \"dark\");\nconsole.log(localStorage.getItem(\"theme\"));\nsessionStorage.setItem(\"step\", \"2\");\nconsole.log(sessionStorage.getItem(\"step\"));",
    "output": "dark\n2",
    "points": [
      "Storage values are strings, so objects usually require JSON.stringify/JSON.parse.",
      "localStorage persists across browser restarts until cleared.",
      "Do not store sensitive secrets in localStorage without a strong security design.",
      "Cookies can use flags such as Secure and HttpOnly when set by the server."
    ],
    "realTime": "Preferences, drafts, simple client state, and session-specific information can use browser storage.",
    "summary": {
      "Concept": {
        "remember": "Localstorage, Sessionstorage And Cookies",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 50,
    "title": "FETCH API",
    "description": "The Fetch API performs HTTP requests and returns a Promise. A common pattern is fetch(url), check response.ok, convert the response body with response.json(), and handle errors.",
    "purpose": "REST APIs, search, dashboards, task management, authentication flows, and external services use fetch.",
    "example": "async function loadUsers() {\n  const response = await fetch(\"https://example.com/users\");\n  if (!response.ok) {\n    throw new Error(\"Request failed\");\n  }\n  const users = await response.json();\n  console.log(users);\n}\nloadUsers().catch(console.error);",
    "output": "Output depends on the API response. On success, the parsed users data is logged; on failure, an error is logged.",
    "points": [
      "fetch rejects for some network failures but not automatically for HTTP 404/500, so check response.ok.",
      "response.json() is asynchronous.",
      "Use headers when an API needs content types or authorization.",
      "Never expose private API credentials in browser source code."
    ],
    "realTime": "REST APIs, search, dashboards, task management, authentication flows, and external services use fetch.",
    "summary": {
      "Concept": {
        "remember": "Fetch Api",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 51,
    "title": "PROMISES",
    "description": "A Promise represents the eventual completion or failure of an asynchronous operation. It has pending, fulfilled, or rejected state. then handles fulfillment, catch handles rejection, and finally runs after settlement.",
    "purpose": "Promises make API calls, file operations, timers, and other asynchronous workflows easier to compose.",
    "example": "const promise = new Promise(resolve => {\n  setTimeout(() => resolve(\"Data loaded\"), 500);\n});\npromise\n  .then(value => console.log(value))\n  .catch(error => console.error(error))\n  .finally(() => console.log(\"Done\"));",
    "output": "Data loaded\nDone",
    "points": [
      "A promise settles only once.",
      "then returns a new promise, enabling chaining.",
      "catch handles rejection from earlier steps in the chain.",
      "Promise.all runs multiple promises and fails when one rejects."
    ],
    "realTime": "Promises make API calls, file operations, timers, and other asynchronous workflows easier to compose.",
    "summary": {
      "Concept": {
        "remember": "Promises",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 52,
    "title": "ASYNC AND AWAIT",
    "description": "async/await provides a readable syntax for promise-based code. An async function always returns a Promise. await pauses that async function until the awaited promise settles without blocking the entire JavaScript thread.",
    "purpose": "Modern application code commonly uses async/await for API and database-related workflows.",
    "example": "async function getData() {\n  try {\n    const response = await fetch(\"https://example.com/data\");\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error(error);\n  }\n}\ngetData();",
    "output": "Output depends on the server response; successful data is logged, otherwise the error is logged.",
    "points": [
      "await can be used inside async functions and, in supported contexts, top-level module code.",
      "Use try/catch for readable asynchronous error handling.",
      "Independent promises can often run together with Promise.all.",
      "Do not unnecessarily await independent operations one after another."
    ],
    "realTime": "Modern application code commonly uses async/await for API and database-related workflows.",
    "summary": {
      "Concept": {
        "remember": "Async And Await",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 53,
    "title": "EVENT LOOP AND MICROTASKS",
    "description": "JavaScript executes synchronous code on a call stack. Browser APIs can manage asynchronous work, and completed callbacks are queued for later execution. Promise reactions are microtasks and are processed before ordinary task callbacks such as timers when the current stack is empty.",
    "purpose": "Understanding the event loop explains asynchronous output, UI responsiveness, promises, timers, and fetch behavior.",
    "example": "console.log(\"A\");\n\nsetTimeout(() => console.log(\"B\"), 0);\n\nPromise.resolve().then(() => console.log(\"C\"));\n\nconsole.log(\"D\");",
    "output": "A\nD\nC\nB",
    "points": [
      "Synchronous code runs first.",
      "Promise callbacks are microtasks.",
      "setTimeout callbacks are tasks/macrotasks.",
      "The event loop coordinates when queued work can run.",
      "A zero-millisecond timer does not run immediately."
    ],
    "realTime": "Understanding the event loop explains asynchronous output, UI responsiveness, promises, timers, and fetch behavior.",
    "summary": {
      "Concept": {
        "remember": "Event Loop And Microtasks",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 54,
    "title": "JAVASCRIPT MODULES IN BROWSER",
    "description": "Browser modules are loaded with <script type=\"module\">. Modules support import/export, strict mode, and separate top-level scope. Module scripts are deferred by default.",
    "purpose": "Feature-based application architecture commonly uses modules for services, utilities, components, and data logic.",
    "example": "<!-- index.html -->\n<script type=\"module\" src=\"./app.js\"></script>\n// app.js\nimport { greet } from \"./greet.js\";\nconsole.log(greet(\"Hruday\"));\n// greet.js\nexport function greet(name) {\n  return `Hello ${name}`;\n}",
    "output": "Hello Hruday",
    "points": [
      "Use relative or valid module URLs.",
      "A server environment is normally needed for reliable module loading; opening files directly can cause browser restrictions.",
      "Named and default exports provide explicit module interfaces.",
      "Keep modules focused on related functionality."
    ],
    "realTime": "Feature-based application architecture commonly uses modules for services, utilities, components, and data logic.",
    "summary": {
      "Concept": {
        "remember": "Javascript Modules In Browser",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 55,
    "title": "DEBUGGING AND DEVELOPER TOOLS",
    "description": "Debugging is the process of finding and fixing incorrect behavior. Browser developer tools provide Console, Sources, Network, Elements, Application, and Performance panels. console.log is useful, but breakpoints and inspection are often more powerful.",
    "purpose": "Debugging is essential for frontend applications, API integration, event handling, and performance issues.",
    "example": "function calculateTotal(price, quantity) {\n  debugger;\n  return price * quantity;\n}\nconsole.log(calculateTotal(100, 3));",
    "output": "300",
    "points": [
      "Use breakpoints to pause execution.",
      "Inspect variables in the debugger scope panel.",
      "Use the Network tab to inspect API requests and responses.",
      "Use the Elements panel to inspect DOM/CSS.",
      "Remove temporary debugging output before production when it is not needed."
    ],
    "realTime": "Debugging is essential for frontend applications, API integration, event handling, and performance issues.",
    "summary": {
      "Concept": {
        "remember": "Debugging And Developer Tools",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 56,
    "title": "SECURITY AND SAFE DOM CODING",
    "description": "Client-side JavaScript must treat external and user-provided data as untrusted. Common risks include cross-site scripting, unsafe HTML insertion, insecure storage, and exposing secrets in frontend code.",
    "purpose": "Safe DOM updates and careful API handling are required in production web applications.",
    "example": "const message = document.querySelector(\"#message\");\nconst userInput = \"<img src=x onerror=alert('XSS')>\";\nmessage.textContent = userInput;",
    "output": "The page displays the input as text rather than executing it as HTML.",
    "points": [
      "Prefer textContent for untrusted text.",
      "Avoid inserting untrusted values with innerHTML.",
      "Validate and sanitize data on the server as well as the client.",
      "Never put passwords, private keys, or server secrets in frontend JavaScript.",
      "Use secure authentication/session designs and appropriate HTTP security headers."
    ],
    "realTime": "Safe DOM updates and careful API handling are required in production web applications.",
    "summary": {
      "Concept": {
        "remember": "Security And Safe Dom Coding",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 57,
    "title": "PERFORMANCE AND CLEAN CODE",
    "description": "Good JavaScript performance comes from efficient algorithms, avoiding unnecessary DOM work, controlling event listeners, and keeping asynchronous operations sensible. Clean code is readable, modular, predictable, and easy to test.",
    "purpose": "Performance matters in dashboards, large lists, search boxes, animations, and data-heavy applications.",
    "example": "const result = items\n  .filter(item => item.active)\n  .map(item => item.name);\n\nconsole.log(result);",
    "output": "An array containing the names of active items.",
    "points": [
      "Prefer clear code before micro-optimizations.",
      "Batch DOM updates when practical.",
      "Debounce or throttle high-frequency events when appropriate.",
      "Avoid unnecessary repeated queries and calculations.",
      "Break large functions into focused units."
    ],
    "realTime": "Performance matters in dashboards, large lists, search boxes, animations, and data-heavy applications.",
    "summary": {
      "Concept": {
        "remember": "Performance And Clean Code",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 58,
    "title": "COMPLETE COUNTER APPLICATION",
    "description": "A counter application is a useful first JavaScript project because it combines variables, DOM selection, events, functions, and conditional display logic. The same pattern grows into quantity controls, task counts, pagination counters, and dashboard statistics.",
    "purpose": "A counter is a compact exercise before building larger interactive applications.",
    "example": "<!DOCTYPE html>\n<html>\n<body>\n  <h1 id=\"count\">0</h1>\n  <button id=\"inc\">+</button>\n  <button id=\"dec\">-</button>\n  <button id=\"reset\">Reset</button>\n  <script>\n    let count = 0;\n    const output = document.querySelector(\"#count\");\n    function render() {\n      output.textContent = count;\n    }\n    document.querySelector(\"#inc\").addEventListener(\"click\", () => {\n      count++;\n      render();\n    });\n    document.querySelector(\"#dec\").addEventListener(\"click\", () => {\n      count--;\n      render();\n    });\n    document.querySelector(\"#reset\").addEventListener(\"click\", () => {\n      count = 0;\n      render();\n    });\n  </script>\n</body>\n</html>",
    "output": "Initial output: 0\nClick + three times: 3\nClick - once: 2\nClick Reset: 0",
    "points": [
      "State is stored in count.",
      "render() keeps DOM update logic in one place.",
      "Event listeners connect user actions to state changes.",
      "The project demonstrates the basic UI state cycle: read state → change state → render state."
    ],
    "realTime": "A counter is a compact exercise before building larger interactive applications.",
    "summary": {
      "Concept": {
        "remember": "Complete Counter Application",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 59,
    "title": "COMPLETE TASK LIST APPLICATION",
    "description": "A task list combines arrays, objects, functions, DOM manipulation, events, filtering, and localStorage. It demonstrates how JavaScript turns static HTML into a small application.",
    "purpose": "This structure is a foundation for task managers, notes apps, issue trackers, and CRUD frontends.",
    "example": "const tasks = [];\nfunction addTask(title) {\n  tasks.push({\n    id: Date.now(),\n    title,\n    completed: false\n  });\n}\nfunction completeTask(id) {\n  const task = tasks.find(t => t.id === id);\n  if (task) task.completed = true;\n}\naddTask(\"Study JavaScript\");\nconsole.log(tasks);",
    "output": "Example: [{ id: 172..., title: 'Study JavaScript', completed: false }]\nAfter completeTask(id): completed becomes true.",
    "points": [
      "Use objects to represent task records.",
      "find() locates a task by ID.",
      "filter() can display pending or completed tasks.",
      "localStorage can persist the task array using JSON.stringify/parse.",
      "Event delegation is useful for dynamically created task buttons."
    ],
    "realTime": "This structure is a foundation for task managers, notes apps, issue trackers, and CRUD frontends.",
    "summary": {
      "Concept": {
        "remember": "Complete Task List Application",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  },
  {
    "number": 60,
    "title": "FINAL JAVASCRIPT REVISION AND INTERVIEW QUESTIONS",
    "description": "Final revision should focus on understanding why a feature exists, when to use it, and how it behaves at runtime. Memorizing syntax alone is not enough. Review the differences between var/let/const, ==/===, map/filter/reduce, regular and arrow functions, synchronous and asynchronous code, DOM and BOM, promises and async/await, and localStorage/sessionStorage.",
    "purpose": "Use this final chapter as a revision checklist before interviews, projects, and full-stack development.",
    "example": "const values = [1, 2, 3, 4, 5];\nconst result = values\n  .filter(n => n % 2 === 0)\n  .map(n => n * 10)\n  .reduce((sum, n) => sum + n, 0);\nconsole.log(result);",
    "output": "120",
    "points": [
      "Explain scope, closures, hoisting, this, prototypes, promises, and the event loop in your own words.",
      "Practice DOM projects such as counter, calculator, form validation, task manager, search/filter UI, and API dashboard.",
      "When answering interview questions, give definition → example → output/behavior → real-world use.",
      "For production code, prioritize readability, validation, error handling, security, and maintainability."
    ],
    "realTime": "Use this final chapter as a revision checklist before interviews, projects, and full-stack development.",
    "summary": {
      "Concept": {
        "remember": "Final Javascript Revision And Interview Questions",
        "practice": "Understand the behavior before memorizing syntax."
      },
      "Example": {
        "remember": "Run the code in a browser or console.",
        "practice": "Change one value and observe the output."
      },
      "Interview": {
        "remember": "Explain definition + example + use.",
        "practice": "Give one real-world application."
      }
    }
  }
];
(() => {
  const data = window.JS_COURSE || [];
  const content = document.querySelector("#courseContent");
  const index = document.querySelector("#chapterIndex");
  const search = document.querySelector("#courseSearch");
  const count = document.querySelector("#resultCount");

  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const code = value => esc(value).replace(/\n/g, "<br>");

  function renderIndex(list) {
    if (!index) return;
    index.innerHTML = list.map(c => `<a href="#chapter-${c.number}"><span>${String(c.number).padStart(2,"0")}</span>${esc(c.title)}</a>`).join("");
  }

  function render(list) {
    if (!content) return;
    content.innerHTML = list.map(c => {
      const points = c.points.map(p => `<li>${esc(p)}</li>`).join("");
      const summary = Object.entries(c.summary || {}).map(([key, v]) => `<tr><th>${esc(key)}</th><td>${esc(v.remember)}</td><td>${esc(v.practice)}</td></tr>`).join("");
      return `<article class="chapter reveal" id="chapter-${c.number}" data-title="${esc(c.title)}">
        <div class="chapter-top"><span class="chapter-number">${String(c.number).padStart(2,"0")}</span><span class="chapter-label">CHAPTER ${c.number}</span></div>
        <h2>${esc(c.title)}</h2>
        <p class="chapter-description">${esc(c.description)}</p>
        <div class="lesson-grid">
          <section class="lesson-card"><h3>Purpose / Key Idea</h3><p>${esc(c.purpose)}</p></section>
          <section class="lesson-card"><h3>Real-Time Use</h3><p>${esc(c.realTime)}</p></section>
        </div>
        <section class="lesson-block"><h3>Syntax / Example</h3><pre><code>${code(c.example)}</code></pre></section>
        <section class="lesson-block output-block"><h3>Output</h3><pre><code>${code(c.output)}</code></pre></section>
        <section class="lesson-block"><h3>Important Points</h3><ul class="points">${points}</ul></section>
        <section class="summary-table"><h3>Practice & Interview</h3><table><thead><tr><th>Item</th><th>What to remember</th><th>Practice</th></tr></thead><tbody>${summary}</tbody></table></section>
      </article>`;
    }).join("");
    document.querySelectorAll(".chapter").forEach(el => observer.observe(el));
  }

  function filter() {
    const q = (search?.value || "").trim().toLowerCase();
    const list = data.filter(c => !q || JSON.stringify(c).toLowerCase().includes(q));
    renderIndex(list);
    render(list);
    if (count) count.textContent = `${list.length} chapter${list.length === 1 ? "" : "s"}${q ? " found" : ""}`;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("visible"); });
  }, {threshold:.08});

  if (search) {
    search.addEventListener("input", filter);
    document.querySelector("#clearSearch")?.addEventListener("click", () => { search.value=""; filter(); search.focus(); });
  }

  renderIndex(data);
  render(data);
  const target = location.hash;
  if (target) setTimeout(() => document.querySelector(target)?.scrollIntoView({behavior:"smooth"}), 80);
})();