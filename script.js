(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  toggle?.addEventListener("click", () => nav?.classList.toggle("open"));

  document.querySelectorAll("a[href^='#']").forEach(a => a.addEventListener("click", e => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) { e.preventDefault(); target.scrollIntoView({behavior:"smooth", block:"start"}); }
  }));

  const reveal = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        reveal.unobserve(entry.target);
      }
    });
  }, {threshold:.08});
  document.querySelectorAll(".reveal").forEach(el => reveal.observe(el));

  const refGrid = document.querySelector("#referenceGrid");
  const refSearch = document.querySelector("#referenceSearch");
  if (refGrid && window.JS_COURSE) {
    const groups = [
      ["Variables & Types", ["var","let","const","string","number","boolean","bigint","symbol","undefined","null"]],
      ["Control Flow", ["if","else","switch","for","while","do...while","break","continue","ternary"]],
      ["Arrays", ["push()","pop()","shift()","unshift()","slice()","splice()","map()","filter()","reduce()","find()","some()","every()"]],
      ["Objects", ["Object.keys()","Object.values()","Object.entries()","Object.assign()","Object.freeze()","destructuring","this"]],
      ["Functions", ["function","parameters","arguments","arrow functions","callbacks","closures","scope","hoisting"]],
      ["Async", ["Promise","then()","catch()","finally","async","await","Promise.all()","fetch()","event loop"]],
      ["Browser APIs", ["document","window","querySelector()","addEventListener()","localStorage","sessionStorage","setTimeout()","setInterval()"]],
      ["Advanced", ["Map","Set","Date","Math","RegExp","JSON","try/catch","class","extends","prototype","modules","debugging","security"]]
    ];
    const render = q => {
      refGrid.innerHTML = groups.filter(g => !q || g[0].toLowerCase().includes(q) || g[1].some(x => x.toLowerCase().includes(q)))
        .map(g => `<article class="reference-card"><span class="eyebrow">${g[0]}</span><h3>${g[0]}</h3><div class="chip-list">${g[1].filter(x => !q || x.toLowerCase().includes(q) || g[0].toLowerCase().includes(q)).map(x => `<a href="course.html?search=${encodeURIComponent(x)}">${x}</a>`).join("")}</div></article>`).join("");
    };
    refSearch?.addEventListener("input", e => render(e.target.value.trim().toLowerCase()));
    render("");
  }
})();