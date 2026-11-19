(function () {
  "use strict";
  var root = document.documentElement;
  try {
    var q = new URLSearchParams(window.location.search).get("motion");
    if (q === "full" || q === "auto" || q === "off") {
      root.setAttribute("data-motion-mode", q);
      root.setAttribute("data-motion", q === "full" ? "full" : q === "off" ? "off" : "auto");
    }
  } catch (e) {}

  var mode = root.getAttribute("data-motion-mode") || "full";
  var reduced =
    mode === "off" ||
    (mode === "auto" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  window.ARGON_MOTION = { mode: mode, enabled: !reduced };
  window.__arAuto = !reduced;

  function downloadDraft(fields, title, filename) {
    var lines = [title, ""];
    Object.keys(fields).forEach(function (k) {
      lines.push(k + ": " + fields[k]);
    });
    lines.push("", "Status: local draft only — nothing was sent.");
    var blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      URL.revokeObjectURL(a.href);
      a.remove();
    }, 0);
  }

  function note(el, text) {
    if (!el) return;
    var n = el.querySelector(".argon-draft-note");
    if (!n) {
      n = document.createElement("p");
      n.className = "argon-draft-note";
      el.appendChild(n);
    }
    n.textContent = text;
  }

  function bindAuthForms() {
    document.querySelectorAll("form[role='form'], form.argon-auth-form").forEach(function (form) {
      if (form.getAttribute("data-argon-bound") === "1") return;
      var email = form.querySelector('input[type="email"]');
      var password = form.querySelector('input[type="password"]');
      if (!email && !password) return;
      form.setAttribute("data-argon-bound", "1");
      form.setAttribute("action", "#");
      form.addEventListener(
        "submit",
        function (ev) {
          ev.preventDefault();
          ev.stopImmediatePropagation();
          var fields = {};
          form.querySelectorAll("input").forEach(function (inp) {
            var key = inp.getAttribute("name") || inp.getAttribute("placeholder") || inp.type;
            if (inp.type === "password") fields[key] = "(hidden)";
            else if (inp.type === "checkbox") fields[key] = inp.checked ? "yes" : "no";
            else fields[key] = inp.value || "";
          });
          downloadDraft(fields, "Argon auth draft", "argon-auth-draft.txt");
          note(form, "Draft saved locally. Nothing was sent to a server.");
          return false;
        },
        true
      );
    });
  }

  function gateCarousel() {
    if (window.__arAuto !== false) return;
    document.querySelectorAll(".carousel").forEach(function (el) {
      el.removeAttribute("data-ride");
      if (window.jQuery) {
        try {
          window.jQuery(el).carousel("pause");
        } catch (e) {}
      }
    });
  }

  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }
  ready(function () {
    bindAuthForms();
    gateCarousel();
  });
})();
