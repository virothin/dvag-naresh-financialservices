document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("lang-toggle");
  const savedLang = localStorage.getItem("site-lang") || "de";

  // LANGUAGE SWITCHER
  function applyLanguage(lang) {
    document.querySelectorAll(".lang-de").forEach(el => {
      el.style.display = lang === "de" ? "block" : "none";
    });
    document.querySelectorAll(".lang-en").forEach(el => {
      el.style.display = lang === "en" ? "block" : "none";
    });

    localStorage.setItem("site-lang", lang);
  }

  applyLanguage(savedLang);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = localStorage.getItem("site-lang") || "de";
      const next = current === "de" ? "en" : "de";
      applyLanguage(next);
    });
  }

  // ACCORDION FOR SERVICES
  document.querySelectorAll(".service-header").forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      item.classList.toggle("active");
    });
  });
});
