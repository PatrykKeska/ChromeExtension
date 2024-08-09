const defaultConfigs = {
  pl: {
    "customer.name": "Jan",
    "customer.surname": "Kowalski",
    birthdate: {
      day: "1",
      month: "0",
      year: "1990",
    },
    "customer.phoneNumber": "123456789",
    "customer.email": "jan.kowalski@example.com",
    "customer.address": "Ulica 123",
    "customer.postCode": "12-345",
    "customer.city": "Miasto",
    invoice: {
      "invoice.taxIdentifier": "1234567890",
      "invoice.companyName": "Firma Sp. z o.o.",
    },
    persons: [
      {
        name: "Jan",
        surname: "Kowalski",
        birthdate: {
          day: "1",
          month: "0",
          year: "1990",
        },
        title: "Male",
      },
      {
        name: "Anna",
        surname: "Nowak",
        birthdate: {
          day: "2",
          month: "1",
          year: "1985",
        },
        title: "Female",
      },
    ],
    children: [
      {
        name: "Kasia",
        surname: "Kowalska",
        birthdate: {
          day: "3",
          month: "2",
          year: "2015",
        },
      },
      {
        name: "Piotr",
        surname: "Kowalski",
        birthdate: {
          day: "4",
          month: "3",
          year: "2018",
        },
      },
    ],
  },
  lv: {
    "customer.name": "Vardas",
    "customer.surname": "Pavardė",
    birthdate: {
      day: "1",
      month: "0",
      year: "1990",
    },
    "customer.phoneNumber": "29991234",
    "customer.email": "vardas.pavarde@example.com",
    "customer.address": "Gatvė 123",
    "customer.postCode": "12345",
    "customer.city": "Vilnius",
    invoice: {
      "invoice.taxIdentifier": "40003000000",
      "invoice.companyName": "SIA Uzņēmums",
    },
    persons: [
      {
        name: "Vardas",
        surname: "Pavardė",
        birthdate: {
          day: "1",
          month: "0",
          year: "1990",
        },
        title: "Male",
      },
      {
        name: "Anna",
        surname: "Nowak",
        birthdate: {
          day: "2",
          month: "1",
          year: "1985",
        },
        title: "Female",
      },
    ],
    children: [
      {
        name: "Kasia",
        surname: "Kowalska",
        birthdate: {
          day: "3",
          month: "2",
          year: "2015",
        },
        title: "Female",
      },
      {
        name: "Piotr",
        surname: "Kowalski",
        birthdate: {
          day: "4",
          month: "3",
          year: "2018",
        },
        title: "Male",
      },
    ],
  },
  lt: {
    "customer.name": "Vardas",
    "customer.surname": "Pavardė",
    birthdate: {
      day: "1",
      month: "0",
      year: "1990",
    },
    "customer.phoneNumber": "60333111",
    "customer.email": "vardas.pavarde@example.com",
    "customer.address": "Gatvė 123",
    "customer.postCode": "12345",
    "customer.city": "Vilnius",
    invoice: {
      "invoice.taxIdentifier": "123456789",
      "invoice.companyName": "UAB Įmonė",
    },
    persons: [
      {
        name: "Vardas",
        surname: "Pavardė",
        birthdate: {
          day: "1",
          month: "0",
          year: "1990",
        },
        title: "Male",
      },
      {
        name: "Anna",
        surname: "Nowak",
        birthdate: {
          day: "2",
          month: "1",
          year: "1985",
        },
        title: "Female",
      },
    ],
    children: [
      {
        name: "Kasia",
        surname: "Kowalska",
        birthdate: {
          day: "3",
          month: "2",
          year: "2015",
        },
        title: "Female",
      },
      {
        name: "Piotr",
        surname: "Kowalski",
        birthdate: {
          day: "4",
          month: "3",
          year: "2018",
        },
        title: "Male",
      },
    ],
  },
  ee: {
    "customer.name": "Vardas",
    "customer.surname": "Pavardė",
    birthdate: {
      day: "1",
      month: "0",
      year: "1990",
    },
    "customer.phoneNumber": "29991234",
    "customer.email": "vardas.pavarde@example.com",
    "customer.address": "Gatvė 123",
    "customer.postCode": "12345",
    "customer.city": "Vilnius",
    invoice: {
      "invoice.taxIdentifier": "12345678",
      "invoice.companyName": "OÜ Ettevõte",
    },
    persons: [
      {
        name: "Vardas",
        surname: "Pavardė",
        birthdate: {
          day: "1",
          month: "0",
          year: "1990",
        },
        title: "Male",
      },
      {
        name: "Anna",
        surname: "Nowak",
        birthdate: {
          day: "2",
          month: "1",
          year: "1985",
        },
        title: "Female",
      },
    ],
    children: [
      {
        name: "Kasia",
        surname: "Kowalska",
        birthdate: {
          day: "3",
          month: "2",
          year: "2015",
        },
        title: "Female",
      },
      {
        name: "Piotr",
        surname: "Kowalski",
        birthdate: {
          day: "4",
          month: "3",
          year: "2018",
        },
        title: "Male",
      },
    ],
  },
  hu: {
    "customer.name": "Név",
    "customer.surname": "Vezetéknév",
    birthdate: {
      day: "1",
      month: "0",
      year: "1990",
    },
    "customer.phoneNumber": "60333111",
    "customer.email": "nev.vezeteknev@example.com",
    "customer.address": "Utca 123",
    "customer.postCode": "1051",
    "customer.city": "Budapest",
    invoice: {
      "invoice.taxIdentifier": "12345678-1-41",
      "invoice.companyName": "Cég Kft.",
    },
    persons: [
      {
        name: "Név",
        surname: "Vezetéknév",
        birthdate: {
          day: "1",
          month: "0",
          year: "1990",
        },
        title: "Férfi",
      },
      {
        name: "Anna",
        surname: "Nowak",
        birthdate: {
          day: "2",
          month: "1",
          year: "1985",
        },
        title: "Nő",
      },
    ],
    children: [
      {
        name: "Kasia",
        surname: "Kowalska",
        birthdate: {
          day: "3",
          month: "2",
          year: "2015",
        },
        title: "Nő",
      },
      {
        name: "Piotr",
        surname: "Kowalski",
        birthdate: {
          day: "4",
          month: "3",
          year: "2018",
        },
        title: "Férfi",
      },
    ],
  },
  cz: {
    "customer.name": "Jan",
    "customer.surname": "Kowalski",
    birthdate: {
      day: "1",
      month: "0",
      year: "1990",
    },
    "customer.phoneNumber": "522333111",
    "customer.email": "jan.kowalski@example.com",
    "customer.address": "Ulica 123",
    "customer.postCode": "81000",
    "customer.city": "Bratislava",
    invoice: {
      "invoice.taxIdentifier": "12345678",
      "invoice.companyName": "Firma s.r.o.",
    },
    persons: [
      {
        name: "Jan",
        surname: "Kowalski",
        birthdate: {
          day: "1",
          month: "0",
          year: "1990",
        },
        title: "Male",
      },
      {
        name: "Anna",
        surname: "Nowak",
        birthdate: {
          day: "2",
          month: "1",
          year: "1985",
        },
        title: "Female",
      },
    ],
    children: [
      {
        name: "Kasia",
        surname: "Kowalska",
        birthdate: {
          day: "3",
          month: "2",
          year: "2015",
        },
        title: "Female",
      },
      {
        name: "Piotr",
        surname: "Kowalski",
        birthdate: {
          day: "4",
          month: "3",
          year: "2018",
        },
        title: "Male",
      },
    ],
  },
  sk: {
    "customer.name": "Jan",
    "customer.surname": "Kowalski",
    birthdate: {
      day: "1",
      month: "0",
      year: "1990",
    },
    "customer.phoneNumber": "522333111",
    "customer.email": "jan.kowalski@example.com",
    "customer.address": "Ulica 123",
    "customer.postCode": "81000",
    "customer.city": "Bratislava",
    invoice: {
      "invoice.taxIdentifier": "1234567890",
      "invoice.companyName": "Firma s.r.o.",
    },
    persons: [
      {
        name: "Jan",
        surname: "Kowalski",
        birthdate: {
          day: "1",
          month: "0",
          year: "1990",
        },
        title: "Male",
      },
      {
        name: "Anna",
        surname: "Nowak",
        birthdate: {
          day: "2",
          month: "1",
          year: "1985",
        },
        title: "Female",
      },
    ],
    children: [
      {
        name: "Kasia",
        surname: "Kowalska",
        birthdate: {
          day: "3",
          month: "2",
          year: "2015",
        },
        title: "Female",
      },
      {
        name: "Piotr",
        surname: "Kowalski",
        birthdate: {
          day: "4",
          month: "3",
          year: "2018",
        },
        title: "Male",
      },
    ],
  },
  en: {
    "customer.name": "Jan",
    "customer.surname": "Kowalski",
    birthdate: {
      day: "1",
      month: "0",
      year: "1990",
    },
    "customer.phoneNumber": "123456789",
    "customer.email": "jan.kowalski@example.com",
    "customer.address": "Ulica 123",
    "customer.postCode": "12-345",
    "customer.city": "Miasto",
    invoice: {
      "invoice.taxIdentifier": "1234567890",
      "invoice.companyName": "Company Ltd.",
    },
    persons: [
      {
        name: "Jan",
        surname: "Kowalski",
        birthdate: {
          day: "1",
          month: "0",
          year: "1990",
        },
        title: "Male",
      },
      {
        name: "Anna",
        surname: "Nowak",
        birthdate: {
          day: "2",
          month: "1",
          year: "1985",
        },
        title: "Female",
      },
    ],
    children: [
      {
        name: "Kasia",
        surname: "Kowalska",
        birthdate: {
          day: "3",
          month: "2",
          year: "2015",
        },
      },
      {
        name: "Piotr",
        surname: "Kowalski",
        birthdate: {
          day: "4",
          month: "3",
          year: "2018",
        },
      },
    ],
  },
};

const languages = Object.keys(defaultConfigs);
let formDataByLang = {};

export let formsData = {};

function createFormEditor() {
  const container = document.getElementById("Tab3");
  if (!container) {
    console.error("Container element with id 'Tab3' not found");
    return;
  }

  languages.forEach((lang) => {
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.textContent = lang.toUpperCase();
    details.appendChild(summary);

    const form = document.createElement("form");
    form.id = `${lang}Form`;
    form.className = "form-editor";
    form.setAttribute("data-lang", lang);

    const config = defaultConfigs[lang];
    let formHtml = "";

    for (const [key, value] of Object.entries(config)) {
      if (typeof value === "object" && !Array.isArray(value)) {
        if (key === "birthdate") {
          formHtml += `
            <h2 class="form-editor__section-title">Birthdate</h2>
            <div class="form-editor__birthdate-group">
              ${createInput(
                lang,
                `${key}.day`,
                "Day",
                "text",
                "form-editor__input form-editor__input--birthdate"
              )}
              ${createInput(
                lang,
                `${key}.month`,
                "Month",
                "text",
                "form-editor__input form-editor__input--birthdate"
              )}
              ${createInput(
                lang,
                `${key}.year`,
                "Year",
                "text",
                "form-editor__input form-editor__input--birthdate"
              )}
            </div>
          `;
        } else if (key === "invoice") {
          formHtml += `
            <h2 class="form-editor__section-title">Invoice Information</h2>
            ${createInput(lang, `invoice.taxIdentifier`, "Tax Identifier")}
            ${createInput(lang, `invoice.companyName`, "Company Name")}
          `;
        } else {
          formHtml += `<h2 class="form-editor__section-title">${
            key.charAt(0).toUpperCase() + key.slice(1)
          }</h2>`;
          for (const [nestedKey, nestedValue] of Object.entries(value)) {
            formHtml += createInput(lang, `${key}.${nestedKey}`, nestedKey);
          }
        }
      } else if (!Array.isArray(value)) {
        formHtml += createInput(lang, key, key);
      }
    }

    formHtml += `
      <h2 class="form-editor__section-title">Persons</h2>
      <div id="${lang}PersonsContainer" class="form-editor__dynamic-container"></div>
      
      <h2 class="form-editor__section-title">Children</h2>
      <div id="${lang}ChildrenContainer" class="form-editor__dynamic-container"></div>
      
      <button type="submit" class="form-editor__button form-editor__button--submit">
        Save to Local Storage
      </button>
    `;

    form.innerHTML = formHtml;
    details.appendChild(form);
    container.appendChild(details);
  });

  addFormEventListeners();
}

function createInput(
  lang,
  name,
  label,
  type = "text",
  className = "form-editor__input"
) {
  const id = `${lang}-${name.replace(/\./g, "-")}`;

  // Add the h1 element for "Reservation Holder" before the first customer.name input
  const reservationHolderTitle =
    name === "customer.name"
      ? '<h1 class="form-editor__section-title">Reservation Holder</h1>'
      : "";

  return `
    ${reservationHolderTitle}
    <label for="${id}" class="form-editor__label">${label}:</label>
    <input type="${type}" id="${id}" name="${name}" class="${className}">
  `;
}

function addFormEventListeners() {
  languages.forEach((lang) => {
    const form = document.getElementById(`${lang}Form`);
    if (form) {
      form.addEventListener("submit", handleFormSubmit);
    } else {
      console.error(`Form not found for language: ${lang}`);
    }
  });
}

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const lang = form.getAttribute("data-lang");
  const formData = new FormData(form);
  formDataByLang[lang] = {};

  for (const [key, value] of formData.entries()) {
    if (key.startsWith("customer.") || key.startsWith("invoice.")) {
      formDataByLang[lang][key] = value;
    } else {
      const keys = key.split(".");
      let current = formDataByLang[lang];

      for (let i = 0; i < keys.length; i++) {
        if (i === keys.length - 1) {
          current[keys[i]] = value;
        } else {
          current[keys[i]] = current[keys[i]] || {};
          current = current[keys[i]];
        }
      }
    }
  }

  formDataByLang[lang].persons = getPersonsOrChildren(lang, "persons");
  formDataByLang[lang].children = getPersonsOrChildren(lang, "children");

  localStorage.setItem(`${lang}FormData`, JSON.stringify(formDataByLang[lang]));

  updateExportedFormsData();

  console.log(`Form submitted for language: ${lang}`);
  alert(`Data saved to local storage for ${lang.toUpperCase()}!`);
}

function getPersonsOrChildren(lang, type) {
  const container = document.getElementById(
    `${lang}${type.charAt(0).toUpperCase() + type.slice(1)}Container`
  );
  if (!container) return [];

  const items = [];
  const elements = container.getElementsByClassName(
    "form-editor__dynamic-item"
  );
  for (let i = 0; i < elements.length; i++) {
    const item = {};
    const inputs = elements[i].getElementsByTagName("input");
    for (let input of inputs) {
      const nameParts = input.name.split(".");
      if (nameParts.length === 2) {
        item[nameParts[1]] = input.value;
      } else if (nameParts.length === 3) {
        if (!item.birthdate) item.birthdate = {};
        item.birthdate[nameParts[2]] = input.value;
      }
    }
    items.push(item);
  }
  return items;
}

function mergeWithDefault(lang, savedData) {
  const defaultConfig = defaultConfigs[lang];
  const mergedData = JSON.parse(JSON.stringify(defaultConfig)); // Deep clone

  function merge(target, source) {
    for (const key in source) {
      if (typeof source[key] === "object" && !Array.isArray(source[key])) {
        target[key] = target[key] || {};
        merge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }

  merge(mergedData, savedData);
  return mergedData;
}

function loadFromLocalStorage() {
  languages.forEach((lang) => {
    const savedData = localStorage.getItem(`${lang}FormData`);
    if (savedData) {
      formDataByLang[lang] = mergeWithDefault(lang, JSON.parse(savedData));
    } else {
      formDataByLang[lang] = defaultConfigs[lang];
    }
    populateForm(lang);
  });
  updateExportedFormsData();
}

function populateForm(lang) {
  const form = document.getElementById(`${lang}Form`);
  if (!form) {
    console.error(`Form not found for language: ${lang}`);
    return;
  }

  const formData = formDataByLang[lang];

  for (const [key, value] of Object.entries(formData)) {
    if (typeof value === "object" && !Array.isArray(value)) {
      if (key === "invoice") {
        for (const [invoiceKey, invoiceValue] of Object.entries(value)) {
          const input = form.querySelector(`[name="${invoiceKey}"]`);
          if (input) input.value = invoiceValue;
        }
      } else {
        for (const [nestedKey, nestedValue] of Object.entries(value)) {
          const input = form.querySelector(`[name="${key}.${nestedKey}"]`);
          if (input) input.value = nestedValue;
        }
      }
    } else if (!Array.isArray(value)) {
      const input = form.querySelector(`[name="${key}"]`);
      if (input) input.value = value;
    }
  }

  renderPersons(lang);
  renderChildren(lang);
}

function createPersonElement(person, index, type, lang) {
  const div = document.createElement("div");
  div.className = "form-editor__dynamic-item";

  const title =
    type === "persons" ? `Person ${index + 1}` : `Child ${index + 1}`;

  div.innerHTML = `
    <h3 class="form-editor__person-title">${title}</h3>
    <div class="form-editor__input-group">
      <label for="${lang}-${type}-${index}-name" class="form-editor__label">Name:</label>
      <input type="text" id="${lang}-${type}-${index}-name" name="${type}.name" value="${
    person.name || ""
  }" class="form-editor__input">
    </div>
    <div class="form-editor__input-group">
      <label for="${lang}-${type}-${index}-surname" class="form-editor__label">Surname:</label>
      <input type="text" id="${lang}-${type}-${index}-surname" name="${type}.surname" value="${
    person.surname || ""
  }" class="form-editor__input">
    </div>
    <div class="form-editor__birthdate-group">
      <label class="form-editor__label">Birthday:</label>
      <div class="form-editor__birthdate-inputs">
        <input type="text" name="${type}.birthdate.day" value="${
    person.birthdate?.day || ""
  }" class="form-editor__input form-editor__input--birthdate" placeholder="Day">
        <input type="text" name="${type}.birthdate.month" value="${
    person.birthdate?.month || ""
  }" class="form-editor__input form-editor__input--birthdate" placeholder="Month">
        <input type="text" name="${type}.birthdate.year" value="${
    person.birthdate?.year || ""
  }" class="form-editor__input form-editor__input--birthdate" placeholder="Year">
      </div>
    </div>
    ${
      type === "persons"
        ? `
    <div class="form-editor__input-group">
      <label for="${lang}-${type}-${index}-title" class="form-editor__label">Title:</label>
      <input type="text" id="${lang}-${type}-${index}-title" name="${type}.title" value="${
            person.title || ""
          }" class="form-editor__input">
    </div>
    `
        : ""
    }
  `;
  return div;
}

function renderPersons(lang) {
  const container = document.getElementById(`${lang}PersonsContainer`);
  if (!container) {
    console.error(`Persons container not found for language: ${lang}`);
    return;
  }
  container.innerHTML = "";
  formDataByLang[lang].persons.forEach((person, index) => {
    container.appendChild(createPersonElement(person, index, "persons", lang));
  });
}

function renderChildren(lang) {
  const container = document.getElementById(`${lang}ChildrenContainer`);
  if (!container) {
    console.error(`Children container not found for language: ${lang}`);
    return;
  }
  container.innerHTML = "";
  formDataByLang[lang].children.forEach((child, index) => {
    container.appendChild(createPersonElement(child, index, "children", lang));
  });
}

function updateExportedFormsData() {
  Object.assign(formsData, JSON.parse(JSON.stringify(formDataByLang)));
}

export function updateFormsData() {
  updateExportedFormsData();
}

document.addEventListener("DOMContentLoaded", () => {
  createFormEditor();
  loadFromLocalStorage();
  updateFormsData();
});

window.getFormData = function (lang) {
  return formDataByLang[lang];
};

languages.forEach((lang) => {
  const form = document.getElementById(`${lang}Form`);
  if (form) {
    form.addEventListener("submit", (event) => {
      handleFormSubmit(event);
      updateFormsData();
      window.location.reload();
    });
  }
});
