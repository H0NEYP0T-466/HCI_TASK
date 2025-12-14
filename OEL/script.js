

document.addEventListener("DOMContentLoaded", () => {

  const navToggle = document.querySelector(".nav__toggle");
  const navMenu = document.getElementById("primary-menu");

  if (navToggle && navMenu) {

    navToggle.setAttribute("aria-expanded", "false");

    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.classList.toggle("is-active", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });


    navMenu.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.matches("a.nav__link")) {
        if (navMenu.classList.contains("is-open")) {
          navMenu.classList.remove("is-open");
          navToggle.classList.remove("is-active");
          navToggle.setAttribute("aria-expanded", "false");
        }
      }
    });


    const mq = window.matchMedia("(min-width: 880px)");
    mq.addEventListener("change", () => {

      navMenu.classList.remove("is-open");
      navToggle.classList.remove("is-active");
      navToggle.setAttribute("aria-expanded", "false");
    });
  }


  const form = document.getElementById("feedbackForm");
  const statusEl = document.getElementById("formStatus");


  const fields = {
    name: {
      el: document.getElementById("name"),
      errorEl: document.getElementById("error-name"),
      requiredMsg: "Please enter your name.",
    },
    email: {
      el: document.getElementById("email"),
      errorEl: document.getElementById("error-email"),
      requiredMsg: "Please enter your email.",

    },
    comments: {
      el: document.getElementById("comments"),
      errorEl: document.getElementById("error-comments"),
      requiredMsg: "Please share your comments.",
    },
  };


  Object.values(fields).forEach(({ el, errorEl }) => {
    if (!el) return;
    el.addEventListener("input", () => {
      clearError(el, errorEl);
      markAsValidIfFilled(el);
    });
    el.addEventListener("blur", () => {

      if (el.value.trim().length === 0) {
        setError(el, errorEl, getRequiredMsg(el.id));
      } else {
        setValid(el);
      }
    });
  });


  form?.addEventListener("submit", (event) => {
    event.preventDefault(); 

    let hasError = false;


    for (const [key, cfg] of Object.entries(fields)) {
      const value = cfg.el?.value.trim() || "";
      if (value.length === 0) {
        setError(cfg.el, cfg.errorEl, cfg.requiredMsg);
        hasError = true;
        continue;
      }

    
      if (key === "email" && cfg.pattern) {
        if (!cfg.pattern.test(value)) {
          setError(cfg.el, cfg.errorEl, cfg.invalidMsg || "Invalid email.");
          hasError = true;
          continue;
        }
      }
      if(key==="name"){
        const namePattern = /^[a-zA-Z\s'-]+$/;
        if (!namePattern.test(value)) {
          setError(cfg.el, cfg.errorEl, "Invalid name.");
          hasError = true;
          continue;
        }
      }
      setValid(cfg.el);
      clearError(cfg.el, cfg.errorEl);
    }

    if (hasError) {
      showStatus("Please fix the errors and try again.", "error");
      return;
    }




    showStatus("Thanks! Your feedback was sent successfully.", "success");
    visualSuccessPulse();

    setTimeout(() => {
      form.reset();
   
      Object.values(fields).forEach(({ el, errorEl }) => {
        clearError(el, errorEl);
        clearValidationState(el);
      });
    }, 800);
  });


  function getRequiredMsg(id) {
    switch (id) {
      case "name":
        return fields.name.requiredMsg;
      case "email":
        return fields.email.requiredMsg;
      case "comments":
        return fields.comments.requiredMsg;
      default:
        return "This field is required.";
    }
  }

  function setError(inputEl, errorEl, message) {
    const wrapper = inputEl?.closest(".field");
    if (wrapper) {
      wrapper.classList.add("invalid");
      wrapper.classList.remove("valid");
    }
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.add("show"); 
    }

    inputEl?.setAttribute("aria-invalid", "true");
  }

  function clearError(inputEl, errorEl) {
    const wrapper = inputEl?.closest(".field");
    if (wrapper) wrapper.classList.remove("invalid");
    if (errorEl) {
      errorEl.textContent = "";
      errorEl.classList.remove("show");
    }
    inputEl?.removeAttribute("aria-invalid");
  }

  function setValid(inputEl) {
    const wrapper = inputEl?.closest(".field");
    if (wrapper) {
      wrapper.classList.add("valid");
      wrapper.classList.remove("invalid");
    }
  }

  function clearValidationState(inputEl) {
    const wrapper = inputEl?.closest(".field");
    if (wrapper) {
      wrapper.classList.remove("valid", "invalid");
    }
  }

  function markAsValidIfFilled(inputEl) {
    const value = inputEl.value.trim();
    if (value.length > 0) {
      setValid(inputEl);
    } else {
      const wrapper = inputEl.closest(".field");
      if (wrapper) wrapper.classList.remove("valid");
    }
  }

  function showStatus(message, kind = "success") {
    if (!statusEl) return;
    statusEl.hidden = false;
    statusEl.textContent = message;


    statusEl.classList.remove("show");

    statusEl.offsetHeight; 
    statusEl.classList.add("show");

    if (kind === "error") {
      statusEl.style.borderColor = "rgba(255, 77, 109, 0.35)";
      statusEl.style.background = "linear-gradient(180deg, rgba(255,77,109,0.12), rgba(255,77,109,0.06))";
      statusEl.style.color = "#ffe8ee";
    } else {
      statusEl.style.borderColor = "rgba(34, 197, 94, 0.35)";
      statusEl.style.background = "linear-gradient(180deg, rgba(34,197,94,0.12), rgba(34,197,94,0.06))";
      statusEl.style.color = "#d9ffe8";
    }
  }

  function visualSuccessPulse() {
    const btn = document.querySelector(".btn--neon .btn__inner");
    if (!btn) return;
    const prev = btn.style.transform;
    btn.style.transform = "scale(1.03)";
    setTimeout(() => (btn.style.transform = prev || ""), 220);
  }
});
