let currentLang = "en";

function t(key) {
  const val = key.split(".").reduce((obj, k) => obj?.[k], translations[currentLang]);
  if (val !== undefined && typeof val !== "object") return val;
  const enVal = key.split(".").reduce((obj, k) => obj?.[k], translations.en);
  return enVal !== undefined && typeof enVal !== "object" ? enVal : key;
}

window.t = t;

function changeLanguage(lng) {
  currentLang = lng;
  localStorage.setItem("vanmo-lang", lng);
  document.documentElement.lang = lng.slice(0, 2);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    const [attr, key] = el.dataset.i18nAttr.split(":");
    if (attr && key) el.setAttribute(attr, t(key));
  });

  document.getElementById("current-lang").textContent = lng.toUpperCase();

  document.title = t("seo.title");
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = t("seo.description");
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = t("seo.title");
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.content = t("seo.description");
}

function initI18n() {
  const saved = localStorage.getItem("vanmo-lang");
  const browser = (navigator.language || "").slice(0, 2);
  const supported = ["pt", "en", "es", "fr"];
  const detected = supported.includes(saved) ? saved :
                   supported.includes(browser) ? browser : "en";

  document.getElementById("lang-select").value = detected;
  changeLanguage(detected);

  document.getElementById("lang-select").addEventListener("change", e => {
    changeLanguage(e.target.value);
  });
}

/* ===== MODAL ===== */
function setModalMode(mode) {
  const isOrganizer = mode === "organizer";
  const title = document.getElementById("modalTitle");
  const volunteerForm = document.getElementById("volunteerForm");
  const organizerForm = document.getElementById("organizerForm");

  title.dataset.i18n = isOrganizer ? "modalOrganizer.title" : "modal.title";
  title.textContent = t(title.dataset.i18n);
  volunteerForm.classList.toggle("form-hidden", isOrganizer);
  organizerForm.classList.toggle("form-hidden", !isOrganizer);
  volunteerForm.setAttribute("aria-hidden", String(isOrganizer));
  organizerForm.setAttribute("aria-hidden", String(!isOrganizer));
}

function openModal(mode = "volunteer") {
  setModalMode(mode);
  document.getElementById("modalOverlay").classList.add("modal--open");
  document.body.style.overflow = "hidden";
  const focusId = mode === "organizer" ? "fieldCompany" : "fieldNome";
  setTimeout(() => document.getElementById(focusId).focus(), 100);
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("modal--open");
  document.body.style.overflow = "";
}

function showToast(message, type) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "toast toast--visible" + (type === "success" ? " toast--success" : "");
  setTimeout(() => { toast.className = "toast"; }, 4000);
}

let cityTimeout = null;
let selectedState = "";
let selectedCountry = "";
let organizerSelectedState = "";
let organizerSelectedCountry = "";

const flagMap = {
  "+55":"🇧🇷","+93":"🇦🇫","+355":"🇦🇱","+49":"🇩🇪","+376":"🇦🇩","+244":"🇦🇴",
  "+1 264":"🇦🇮","+672":"🇦🇶","+1 268":"🇦🇬","+599":"🇧🇶","+966":"🇸🇦","+213":"🇩🇿",
  "+54":"🇦🇷","+374":"🇦🇲","+297":"🇦🇼","+61":"🇦🇺","+43":"🇦🇹","+994":"🇦🇿",
  "+1 242":"🇧🇸","+973":"🇧🇭","+880":"🇧🇩","+1 246":"🇧🇧","+375":"🇧🇾","+32":"🇧🇪",
  "+501":"🇧🇿","+229":"🇧🇯","+1 441":"🇧🇲","+591":"🇧🇴","+387":"🇧🇦","+267":"🇧🇼",
  "+673":"🇧🇳","+359":"🇧🇬","+226":"🇧🇫","+257":"🇧🇮","+975":"🇧🇹","+238":"🇨🇻",
  "+237":"🇨🇲","+855":"🇰🇭","+1":"🇨🇦","+974":"🇶🇦","+7":"🇰🇿","+235":"🇹🇩",
  "+56":"🇨🇱","+86":"🇨🇳","+357":"🇨🇾","+65":"🇸🇬","+57":"🇨🇴","+269":"🇰🇲",
  "+82":"🇰🇷","+850":"🇰🇵","+225":"🇨🇮","+506":"🇨🇷","+385":"🇭🇷","+53":"🇨🇺",
  "+45":"🇩🇰","+253":"🇩🇯","+1 767":"🇩🇲","+20":"🇪🇬","+503":"🇸🇻","+971":"🇦🇪",
  "+593":"🇪🇨","+291":"🇪🇷","+421":"🇸🇰","+386":"🇸🇮","+34":"🇪🇸","+372":"🇪🇪",
  "+268":"🇸🇿","+251":"🇪🇹","+679":"🇫🇯","+63":"🇵🇭","+358":"🇫🇮","+33":"🇫🇷",
  "+241":"🇬🇦","+220":"🇬🇲","+233":"🇬🇭","+995":"🇬🇪","+350":"🇬🇮","+30":"🇬🇷",
  "+299":"🇬🇱","+1 473":"🇬🇩","+590":"🇬🇵","+1 671":"🇬🇺","+502":"🇬🇹","+594":"🇬🇫",
  "+592":"🇬🇾","+509":"🇭🇹","+504":"🇭🇳","+852":"🇭🇰","+36":"🇭🇺","+967":"🇾🇪",
  "+91":"🇮🇳","+62":"🇮🇩","+98":"🇮🇷","+964":"🇮🇶","+353":"🇮🇪","+354":"🇮🇸",
  "+972":"🇮🇱","+39":"🇮🇹","+1 876":"🇯🇲","+81":"🇯🇵","+962":"🇯🇴","+383":"🇽🇰",
  "+965":"🇰🇼","+856":"🇱🇦","+266":"🇱🇸","+371":"🇱🇻","+961":"🇱🇧","+231":"🇱🇷",
  "+218":"🇱🇾","+423":"🇱🇮","+370":"🇱🇹","+352":"🇱🇺","+853":"🇲🇴","+389":"🇲🇰",
  "+261":"🇲🇬","+60":"🇲🇾","+265":"🇲🇼","+960":"🇲🇻","+223":"🇲🇱","+356":"🇲🇹",
  "+212":"🇲🇦","+596":"🇲🇶","+222":"🇲🇷","+230":"🇲🇺","+262":"🇾🇹","+52":"🇲🇽",
  "+691":"🇫🇲","+258":"🇲🇿","+373":"🇲🇩","+377":"🇲🇨","+976":"🇲🇳","+382":"🇲🇪",
  "+1 664":"🇲🇸","+95":"🇲🇲","+264":"🇳🇦","+674":"🇳🇷","+977":"🇳🇵","+505":"🇳🇮",
  "+227":"🇳🇪","+234":"🇳🇬","+683":"🇳🇺","+47":"🇳🇴","+687":"🇳🇨","+64":"🇳🇿",
  "+968":"🇴🇲","+31":"🇳🇱","+680":"🇵🇼","+970":"🇵🇸","+507":"🇵🇦","+675":"🇵🇬",
  "+92":"🇵🇰","+595":"🇵🇾","+51":"🇵🇪","+689":"🇵🇫","+48":"🇵🇱","+1 787":"🇵🇷",
  "+351":"🇵🇹","+254":"🇰🇪","+996":"🇰🇬","+686":"🇰🇮","+44":"🇬🇧","+236":"🇨🇫",
  "+243":"🇨🇩","+242":"🇨🇬","+420":"🇨🇿","+40":"🇷🇴","+250":"🇷🇼",
  "+685":"🇼🇸","+378":"🇸🇲","+290":"🇸🇭","+1 758":"🇱🇨","+1 869":"🇰🇳",
  "+239":"🇸🇹","+1 784":"🇻🇨","+221":"🇸🇳","+232":"🇸🇱","+381":"🇷🇸","+248":"🇸🇨",
  "+963":"🇸🇾","+94":"🇱🇰","+27":"🇿🇦","+249":"🇸🇩","+211":"🇸🇸","+46":"🇸🇪",
  "+41":"🇨🇭","+597":"🇸🇷","+992":"🇹🇯","+66":"🇹🇭","+886":"🇹🇼","+255":"🇹🇿",
  "+1 649":"🇹🇨","+228":"🇹🇬","+690":"🇹🇰","+676":"🇹🇴","+216":"🇹🇳","+993":"🇹🇲",
  "+90":"🇹🇷","+688":"🇹🇻","+380":"🇺🇦","+256":"🇺🇬","+598":"🇺🇾","+998":"🇺🇿",
  "+678":"🇻🇺","+379":"🇻🇦","+58":"🇻🇪","+84":"🇻🇳","+681":"🇼🇫","+260":"🇿🇲","+263":"🇿🇼"
};

const countryCodes = [
  ["+55","Brazil"],["+93","Afghanistan"],["+355","Albania"],["+49","Germany"],
  ["+376","Andorra"],["+244","Angola"],["+1 264","Anguilla"],["+672","Antarctica"],
  ["+1 268","Antigua and Barbuda"],["+599","Netherlands Antilles"],["+966","Saudi Arabia"],
  ["+213","Algeria"],["+54","Argentina"],["+374","Armenia"],["+297","Aruba"],
  ["+61","Australia"],["+43","Austria"],["+994","Azerbaijan"],["+1 242","Bahamas"],
  ["+973","Bahrain"],["+880","Bangladesh"],["+1 246","Barbados"],["+375","Belarus"],
  ["+32","Belgium"],["+501","Belize"],["+229","Benin"],["+1 441","Bermuda"],
  ["+591","Bolivia"],["+387","Bosnia and Herzegovina"],["+267","Botswana"],
  ["+673","Brunei"],["+359","Bulgaria"],["+226","Burkina Faso"],["+257","Burundi"],
  ["+975","Bhutan"],["+238","Cape Verde"],["+237","Cameroon"],["+855","Cambodia"],
  ["+1","Canada"],["+974","Qatar"],["+7","Kazakhstan"],["+235","Chad"],
  ["+56","Chile"],["+86","China"],["+357","Cyprus"],["+65","Singapore"],
  ["+57","Colombia"],["+269","Comoros"],["+82","South Korea"],["+850","North Korea"],
  ["+225","Ivory Coast"],["+506","Costa Rica"],["+385","Croatia"],["+53","Cuba"],
  ["+45","Denmark"],["+253","Djibouti"],["+1 767","Dominica"],["+20","Egypt"],
  ["+503","El Salvador"],["+971","United Arab Emirates"],["+593","Ecuador"],
  ["+291","Eritrea"],["+421","Slovakia"],["+386","Slovenia"],["+34","Spain"],
  ["+1","United States"],["+372","Estonia"],["+268","Eswatini"],["+251","Ethiopia"],
  ["+679","Fiji"],["+63","Philippines"],["+358","Finland"],["+33","France"],
  ["+241","Gabon"],["+220","Gambia"],["+233","Ghana"],["+995","Georgia"],
  ["+350","Gibraltar"],["+30","Greece"],["+299","Greenland"],["+1 473","Grenada"],
  ["+590","Guadeloupe"],["+1 671","Guam"],["+502","Guatemala"],["+594","French Guiana"],
  ["+592","Guyana"],["+509","Haiti"],["+504","Honduras"],["+852","Hong Kong"],
  ["+36","Hungary"],["+967","Yemen"],["+91","India"],["+62","Indonesia"],
  ["+98","Iran"],["+964","Iraq"],["+353","Ireland"],["+354","Iceland"],
  ["+972","Israel"],["+39","Italy"],["+1 876","Jamaica"],["+81","Japan"],
  ["+962","Jordan"],["+383","Kosovo"],["+965","Kuwait"],["+856","Laos"],
  ["+266","Lesotho"],["+371","Latvia"],["+961","Lebanon"],["+231","Liberia"],
  ["+218","Libya"],["+423","Liechtenstein"],["+370","Lithuania"],["+352","Luxembourg"],
  ["+853","Macau"],["+389","North Macedonia"],["+261","Madagascar"],["+60","Malaysia"],
  ["+265","Malawi"],["+960","Maldives"],["+223","Mali"],["+356","Malta"],
  ["+212","Morocco"],["+596","Martinique"],["+222","Mauritania"],["+230","Mauritius"],
  ["+262","Mayotte"],["+52","Mexico"],["+691","Micronesia"],["+258","Mozambique"],
  ["+373","Moldova"],["+377","Monaco"],["+976","Mongolia"],["+382","Montenegro"],
  ["+1 664","Montserrat"],["+95","Myanmar"],["+264","Namibia"],["+674","Nauru"],
  ["+977","Nepal"],["+505","Nicaragua"],["+227","Niger"],["+234","Nigeria"],
  ["+683","Niue"],["+47","Norway"],["+687","New Caledonia"],["+64","New Zealand"],
  ["+968","Oman"],["+31","Netherlands"],["+680","Palau"],["+970","Palestine"],
  ["+507","Panama"],["+675","Papua New Guinea"],["+92","Pakistan"],["+595","Paraguay"],
  ["+51","Peru"],["+689","French Polynesia"],["+48","Poland"],["+1 787","Puerto Rico"],
  ["+351","Portugal"],["+254","Kenya"],["+996","Kyrgyzstan"],["+686","Kiribati"],
  ["+44","United Kingdom"],["+236","Central African Republic"],
  ["+243","Democratic Republic of the Congo"],["+242","Republic of the Congo"],
  ["+420","Czech Republic"],["+40","Romania"],["+250","Rwanda"],["+7","Russia"],
  ["+212","Western Sahara"],["+685","Samoa"],["+378","San Marino"],["+290","Saint Helena"],
  ["+1 758","Saint Lucia"],["+1 869","Saint Kitts and Nevis"],
  ["+239","Sao Tome and Principe"],["+1 784","Saint Vincent and the Grenadines"],
  ["+221","Senegal"],["+232","Sierra Leone"],["+381","Serbia"],["+248","Seychelles"],
  ["+963","Syria"],["+94","Sri Lanka"],["+27","South Africa"],["+249","Sudan"],
  ["+211","South Sudan"],["+46","Sweden"],["+41","Switzerland"],["+597","Suriname"],
  ["+992","Tajikistan"],["+66","Thailand"],["+886","Taiwan"],["+255","Tanzania"],
  ["+1 649","Turks and Caicos"],["+228","Togo"],["+690","Tokelau"],["+676","Tonga"],
  ["+216","Tunisia"],["+993","Turkmenistan"],["+90","Turkey"],["+688","Tuvalu"],
  ["+380","Ukraine"],["+256","Uganda"],["+598","Uruguay"],["+998","Uzbekistan"],
  ["+678","Vanuatu"],["+379","Vatican"],["+58","Venezuela"],["+84","Vietnam"],
  ["+681","Wallis and Futuna"],["+260","Zambia"],["+263","Zimbabwe"]
];

function getCountryFlag(code, name) {
  if (code === "+1" && name === "United States") return "🇺🇸";
  if (code === "+1" && name === "Canada") return "🇨🇦";
  return flagMap[code] || "";
}

function setupDDIAutocomplete(inputId = "fieldDDI", resultsId = "ddiResults", phoneId = "fieldPhone") {
  const priorityCountries = ["United States", "Brazil", "France", "United Kingdom", "Germany"];
  countryCodes.sort((a, b) => {
    const priorityA = priorityCountries.indexOf(a[1]);
    const priorityB = priorityCountries.indexOf(b[1]);
    if (priorityA !== -1 || priorityB !== -1) {
      return (priorityA === -1 ? priorityCountries.length : priorityA) -
        (priorityB === -1 ? priorityCountries.length : priorityB);
    }
    return a[1].localeCompare(b[1], "en", { sensitivity: "base" });
  });

  const input = document.getElementById(inputId);
  const results = document.getElementById(resultsId);
  const normalizeSearch = value => value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s+]/gu, "")
    .trim();

  function render(filter) {
    results.innerHTML = "";
    const q = normalizeSearch(filter);
    const qDigits = q.replace(/\D/g, "");
    const filtered = q
      ? countryCodes.filter(c => {
          const digits = c[0].replace(/\D/g, '');
          const name = normalizeSearch(c[1]);
          return (qDigits && digits.includes(qDigits)) || name.includes(q);
        })
      : countryCodes;
    if (!filtered.length) { results.classList.remove("active"); return; }
    filtered.forEach(c => {
      const div = document.createElement("div");
      div.className = "autocomplete-item ddi-item";
      const flag = getCountryFlag(c[0], c[1]);
      div.innerHTML = `${flag} ${c[0]} <small>${c[1]}</small>`;
      div.addEventListener("click", () => {
        input.value = `${flag} ${c[0]}`;
        input.dataset.ddi = c[0];
        results.innerHTML = "";
        results.classList.remove("active");
        updatePhoneMask(c[0], phoneId);
      });
      results.appendChild(div);
    });
    results.classList.add("active");
  }

  input.addEventListener("focus", () => {
    input.select();
    render("");
  });
  input.addEventListener("input", () => render(input.value));
  input.addEventListener("keydown", e => { if (e.key === "Escape") results.classList.remove("active"); });

  document.addEventListener("click", e => {
    if (!input.contains(e.target) && !results.contains(e.target)) {
      results.classList.remove("active");
    }
  });
}

const phoneMasks = {
  "+55": "(XX) XXXXX-XXXX", "+1": "(XXX) XXX-XXXX", "+351": "XXX XXX XXX",
  "+34": "XXX XXX XXX", "+33": "XX XX XX XX XX", "+44": "XXXX XXX XXX",
  "+39": "XXX XXX XXXX", "+49": "XXXX XXXXXXX", "+56": "X XXXX XXXX",
  "+54": "XX XXXX XXXX", "+52": "XX XXXX XXXX", "+81": "XX XXXX XXXX",
  "+61": "X XXXX XXXX", "+86": "XXX XXXX XXXX", "+91": "XXXXX XXXXXX",
  "+7": "X XXX XXX XX XX", "+58": "XXX-XXX XXXX", "+57": "XXX XXX XXXX"
};

const phoneMaxDigits = {
  "+55":11,"+1":10,"+351":9,"+34":9,"+33":10,"+44":11,"+39":10,"+49":11,
  "+56":9,"+54":10,"+52":10,"+81":10,"+61":9,"+86":11,"+91":10,"+7":11,
  "+58":10,"+57":10
};

function applyPhoneMask(digits, ddi) {
  const pattern = phoneMasks[ddi];
  if (!pattern) return digits;
  let result = "", di = 0;
  for (let i = 0; i < pattern.length && di < digits.length; i++) {
    result += pattern[i] === "X" ? digits[di++] : pattern[i];
  }
  return result;
}

function updatePhoneMask(ddi, phoneId = "fieldPhone") {
  const input = document.getElementById(phoneId);
  const mask = phoneMasks[ddi];
  input.placeholder = mask || "";
}

function setupPhoneMask(phoneId = "fieldPhone", ddiId = "fieldDDI") {
  const input = document.getElementById(phoneId);
  const ddiInput = document.getElementById(ddiId);
  input.addEventListener("input", () => {
    let v = input.value.replace(/\D/g, "");
    const ddi = ddiInput.dataset.ddi || "+55";
    const max = phoneMaxDigits[ddi] || 15;
    if (v.length > max) v = v.slice(0, max);
    input.value = applyPhoneMask(v, ddi);
  });
}

function setupCityAutocomplete(inputId = "fieldCity", resultsId = "cityResults", onSelect = () => {}) {
  const input = document.getElementById(inputId);
  const results = document.getElementById(resultsId);
  let cityRequestId = 0;
  let selectedCityValue = "";

  input.addEventListener("focus", () => {
    if (!input.value.trim()) selectedCityValue = "";
  });

  input.addEventListener("input", () => {
    clearTimeout(cityTimeout);
    const q = input.value.trim();
    if (q === selectedCityValue) {
      results.innerHTML = "";
      results.classList.remove("active");
      return;
    }
    if (q.length < 2) { results.innerHTML = ""; results.classList.remove("active"); return; }
    const requestId = ++cityRequestId;
    cityTimeout = setTimeout(async () => {
      try {
        const res = await fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(q)}&limit=5`);
        const data = await res.json();
        if (requestId !== cityRequestId || input.value.trim() !== q) return;
        results.innerHTML = "";
        if (!data.features || !data.features.length) { results.classList.remove("active"); return; }
        data.features.forEach(place => {
          const p = place.properties;
          const city = p.city || p.name || "";
          const state = p.state || "";
          const country = p.country || "";
          const div = document.createElement("div");
          div.className = "autocomplete-item";
          div.innerHTML = `<strong>${city}</strong><small>${state ? state + " — " : ""}${country}</small>`;
          div.addEventListener("click", () => {
            input.value = city;
            selectedCityValue = city;
            onSelect(state, country);
            cityRequestId++;
            clearTimeout(cityTimeout);
            results.innerHTML = "";
            results.classList.remove("active");
          });
          results.appendChild(div);
        });
        results.classList.add("active");
      } catch { results.classList.remove("active"); }
    }, 300);
  });

  document.addEventListener("click", e => {
    if (!input.contains(e.target) && !results.contains(e.target)) {
      results.innerHTML = "";
      results.classList.remove("active");
    }
  });
}

function validateField(id, errorId, test) {
  const field = document.getElementById(id);
  const error = document.getElementById(errorId);
  const valid = test(field.value);
  field.classList.toggle("error", !valid && field.value.length > 0);
  error.textContent = !valid && field.value.length > 0 ? t("formMessages.required") : "";
  return valid;
}

function resetDDI(inputId, phoneId, value, ddi) {
  const input = document.getElementById(inputId);
  input.value = value;
  input.dataset.ddi = ddi;
  updatePhoneMask(ddi, phoneId);
}

function clearFormState(form) {
  form.reset();
  form.querySelectorAll(".form-error").forEach(e => e.textContent = "");
  form.querySelectorAll(".form-input").forEach(e => e.classList.remove("error"));
}

function isOptionalUrl(value) {
  if (!value) return true;
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

function setupVolunteerForm() {
  const form = document.getElementById("volunteerForm");

  form.addEventListener("submit", async e => {
    e.preventDefault();

    const nome = document.getElementById("fieldNome").value.trim();
    const email = document.getElementById("fieldEmail").value.trim();
    const ddi = document.getElementById("fieldDDI").dataset.ddi || "+1";
    const phoneRaw = document.getElementById("fieldPhone").value.replace(/\D/g, "");
    const city = document.getElementById("fieldCity").value.trim();

    const validNome = validateField("fieldNome", "errorNome", v => v.length >= 2);
    const validEmail = validateField("fieldEmail", "errorEmail", v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
    const validPhone = validateField("fieldPhone", "errorPhone", v => v.replace(/\D/g, "").length >= 8);
    const validCity = validateField("fieldCity", "errorCity", v => v.length >= 2);

    if (!validNome || !validEmail || !validPhone || !validCity) {
      showToast(t("formMessages.invalidFields"));
      return;
    }

    try {
      await createVolunteer({
        name: nome,
        email,
        phone: phoneRaw,
        city,
        state: selectedState,
        country: selectedCountry,
        ddi,
      });
      showToast(t("formMessages.volunteerSuccess"), "success");
    } catch (err) {
      showToast(err.message);
      return;
    }

    clearFormState(form);
    selectedState = "";
    selectedCountry = "";
    resetDDI("fieldDDI", "fieldPhone", "🇺🇸 +1", "+1");
    setTimeout(closeModal, 1500);
  });

  document.getElementById("fieldNome").addEventListener("blur", () => validateField("fieldNome", "errorNome", v => v.length >= 2));
  document.getElementById("fieldEmail").addEventListener("blur", () => validateField("fieldEmail", "errorEmail", v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)));
  document.getElementById("fieldPhone").addEventListener("blur", () => validateField("fieldPhone", "errorPhone", v => v.replace(/\D/g, "").length >= 8));
  document.getElementById("fieldCity").addEventListener("blur", () => validateField("fieldCity", "errorCity", v => v.length >= 2));
}

function setupOrganizerForm() {
  const form = document.getElementById("organizerForm");

  form.addEventListener("submit", async e => {
    e.preventDefault();

    const company = document.getElementById("fieldCompany").value.trim();
    const responsible = document.getElementById("fieldResponsible").value.trim();
    const email = document.getElementById("fieldOrganizerEmail").value.trim();
    const ddi = document.getElementById("fieldOrganizerDDI").dataset.ddi || "+1";
    const phoneRaw = document.getElementById("fieldOrganizerPhone").value.replace(/\D/g, "");
    const website = document.getElementById("fieldWebsite").value.trim();
    const instagram = document.getElementById("fieldInstagram").value.trim();
    const city = document.getElementById("fieldOrganizerCity").value.trim();

    const validCompany = validateField("fieldCompany", "errorCompany", v => v.length >= 2);
    const validResponsible = validateField("fieldResponsible", "errorResponsible", v => v.length >= 2);
    const validEmail = validateField("fieldOrganizerEmail", "errorOrganizerEmail", v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
    const validPhone = validateField("fieldOrganizerPhone", "errorOrganizerPhone", v => v.replace(/\D/g, "").length >= 8);
    const validWebsite = validateField("fieldWebsite", "errorWebsite", isOptionalUrl);
    const validCity = validateField("fieldOrganizerCity", "errorOrganizerCity", v => v.length >= 2);

    if (!validCompany || !validResponsible || !validEmail || !validPhone || !validWebsite || !validCity) {
      showToast(t("formMessages.invalidOrganizerFields"));
      return;
    }

    try {
      await createOrganizer({
        company,
        responsible,
        email,
        phone: phoneRaw,
        website,
        instagram,
        city,
        state: organizerSelectedState,
        country: organizerSelectedCountry,
        ddi,
      });
      showToast(t("formMessages.organizerSuccess"), "success");
    } catch (err) {
      showToast(err.message);
      return;
    }

    clearFormState(form);
    organizerSelectedState = "";
    organizerSelectedCountry = "";
    resetDDI("fieldOrganizerDDI", "fieldOrganizerPhone", "🇺🇸 +1", "+1");
    setTimeout(closeModal, 1500);
  });

  document.getElementById("fieldCompany").addEventListener("blur", () => validateField("fieldCompany", "errorCompany", v => v.length >= 2));
  document.getElementById("fieldResponsible").addEventListener("blur", () => validateField("fieldResponsible", "errorResponsible", v => v.length >= 2));
  document.getElementById("fieldOrganizerEmail").addEventListener("blur", () => validateField("fieldOrganizerEmail", "errorOrganizerEmail", v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)));
  document.getElementById("fieldOrganizerPhone").addEventListener("blur", () => validateField("fieldOrganizerPhone", "errorOrganizerPhone", v => v.replace(/\D/g, "").length >= 8));
  document.getElementById("fieldWebsite").addEventListener("blur", () => validateField("fieldWebsite", "errorWebsite", isOptionalUrl));
  document.getElementById("fieldOrganizerCity").addEventListener("blur", () => validateField("fieldOrganizerCity", "errorOrganizerCity", v => v.length >= 2));
}

function initModal() {
  setupDDIAutocomplete("fieldDDI", "ddiResults", "fieldPhone");
  setupDDIAutocomplete("fieldOrganizerDDI", "organizerDdiResults", "fieldOrganizerPhone");
  updatePhoneMask("+1", "fieldPhone");
  updatePhoneMask("+1", "fieldOrganizerPhone");
  document.querySelectorAll('[data-i18n="hero.ctaVolunteer"]').forEach(btn => btn.addEventListener("click", () => openModal("volunteer")));
  document.querySelectorAll('[data-i18n="hero.ctaOrganizer"]').forEach(btn => btn.addEventListener("click", () => openModal("organizer")));
  document.querySelectorAll(".btn-login").forEach(btn => btn.addEventListener("click", () => openModal("volunteer")));
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("modalOverlay").addEventListener("click", e => { if (e.target === e.currentTarget) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
  setupPhoneMask("fieldPhone", "fieldDDI");
  setupPhoneMask("fieldOrganizerPhone", "fieldOrganizerDDI");
  setupCityAutocomplete("fieldCity", "cityResults", (state, country) => {
    selectedState = state;
    selectedCountry = country;
    validateField("fieldCity", "errorCity", v => v.length >= 2);
  });
  setupCityAutocomplete("fieldOrganizerCity", "organizerCityResults", (state, country) => {
    organizerSelectedState = state;
    organizerSelectedCountry = country;
    validateField("fieldOrganizerCity", "errorOrganizerCity", v => v.length >= 2);
  });
  setupVolunteerForm();
  setupOrganizerForm();
}

document.addEventListener("DOMContentLoaded", () => {
  initI18n();
  initModal();
});
