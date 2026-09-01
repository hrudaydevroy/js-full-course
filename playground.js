(() => {
  const editor = document.querySelector("#codeEditor");
  const output = document.querySelector("#consoleOutput");
  const run = document.querySelector("#runCode");
  const clear = document.querySelector("#clearOutput");
  if (!editor) return;

  function format(value) {
    if (typeof value === "string") return value;
    try { return JSON.stringify(value, null, 2); } catch { return String(value); }
  }

  run.addEventListener("click", () => {
    const logs = [];
    const fakeConsole = {
      log: (...args) => logs.push(args.map(format).join(" ")),
      warn: (...args) => logs.push("⚠ " + args.map(format).join(" ")),
      error: (...args) => logs.push("✖ " + args.map(format).join(" "))
    };
    try {
      const fn = new Function("console", editor.value);
      fn(fakeConsole);
      output.textContent = logs.length ? logs.join("\n") : "Code ran successfully with no console output.";
      output.classList.remove("flash"); void output.offsetWidth; output.classList.add("flash");
    } catch (error) {
      output.textContent = error.name + ": " + error.message;
    }
  });
  clear.addEventListener("click", () => output.textContent = "Console cleared.");
})();