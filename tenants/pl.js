export function plForm(formData) {
  const triggerEvents = (input) => {
    const events = ["input", "change", "blur"];
    events.forEach((eventType) => {
      const event = new Event(eventType, { bubbles: true });
      input.dispatchEvent(event);
    });
  };

  const setNativeValue = (input, value) => {
    const valueDescriptor = Object.getOwnPropertyDescriptor(input, "value");
    const prototype = Object.getPrototypeOf(input);
    const prototypeValueDescriptor = Object.getOwnPropertyDescriptor(
      prototype,
      "value"
    );

    if (
      valueDescriptor &&
      valueDescriptor.set &&
      valueDescriptor.set !== prototypeValueDescriptor.set
    ) {
      prototypeValueDescriptor.set.call(input, value);
    } else if (valueDescriptor && valueDescriptor.set) {
      valueDescriptor.set.call(input, value);
    } else {
      input.value = value;
    }

    triggerEvents(input);
  };

  const setInputValue = (selector, value) => {
    const input = document.querySelector(selector);
    if (input) {
      try {
        setNativeValue(input, value);
      } catch (error) {}
    }
  };

  const setPhoneNumberValue = (selector, value) => {
    const input = document.querySelector(selector);
    if (input) {
      try {
        if (input.type === "tel") {
          input.focus();
          input.value = "";
          for (const char of value) {
            input.value += char;
            input.dispatchEvent(
              new KeyboardEvent("keydown", { bubbles: true })
            );
            input.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true }));
            input.dispatchEvent(
              new KeyboardEvent("keypress", { bubbles: true })
            );
            input.dispatchEvent(new Event("input", { bubbles: true }));
          }
          input.blur();
        } else {
          setNativeValue(input, value);
        }
      } catch (error) {}
    }
  };

  document.querySelectorAll("select").forEach((select) => {
    Array.from(select.options).forEach((option) => {
      if (option.value === "PL") {
        select.value = option.value;
        // Trigger change event
        const event = new Event("change", { bubbles: true });
        select.dispatchEvent(event);
      }
    });
  });

  // Special handling for select elements
  const setSelectValue = (selector, value) => {
    const select = document.querySelector(selector);
    if (select) {
      const option = Array.from(select.options).find(
        (opt) => opt.value === value
      );
      if (option) {
        try {
          select.value = option.value; // Set the select element's value
          triggerEvents(select); // Trigger necessary events to react to value change
        } catch (error) {}
      }
    }
  };

  // Fill text inputs
  setInputValue(`[name="customer.name"]`, formData["customer.name"]);
  setInputValue(`[name="customer.surname"]`, formData["customer.surname"]);
  setInputValue(
    `[name="customer.phoneNumber"]`,
    formData["customer.phoneNumber"]
  );
  setInputValue(`[name="customer.email"]`, formData["customer.email"]);
  setInputValue(`[name="customer.address"]`, formData["customer.address"]);
  setInputValue(`[name="customer.postCode"]`, formData["customer.postCode"]);
  setInputValue(`[name="customer.city"]`, formData["customer.city"]);

  // Use special handling for phone number input
  setPhoneNumberValue(
    `[name="customer.phoneNumber"]`,
    formData["customer.phoneNumber"]
  );

  // Fill Customer Birthdate select inputs
  setInputValue(
    `[data-testid="customer-birthdate-day"]`,
    formData.birthdate.day
  );
  setInputValue(
    `[data-testid="customer-birthdate-month"]`,
    formData.birthdate.month
  );
  setInputValue(
    `[data-testid="customer-birthdate-year"]`,
    formData.birthdate.year
  );

  if (formData && formData.invoice && typeof formData.invoice === "object") {
    for (const [key, value] of Object.entries(formData.invoice)) {
      if (value != null) {
        setInputValue(`[name="${key}"]`, value);
      }
    }
  } else {
    console.warn("formData.invoice is not a valid object");
  }

  // Fill form data for Persons/Adults
  formData.persons.forEach((person, index) => {
    setInputValue(`[name="adults.${index}.name"]`, person.name);
    setInputValue(`[name="adults.${index}.surname"]`, person.surname);
    setInputValue(
      `[data-testid="adults-${index}-birthdate-day"]`,
      person.birthdate.day
    );
    setInputValue(
      `[data-testid="adults-${index}-birthdate-month"]`,
      person.birthdate.month
    );
    setInputValue(
      `[data-testid="adults-${index}-birthdate-year"]`,
      person.birthdate.year
    );

    // Corrected data-testid and set title value using the new setSelectValue function
    setSelectValue(`[data-testid="title-adult-${index}}"]`, person.title);
  });

  // Fill form data for Children
  formData.children.forEach((child, index) => {
    setInputValue(`[name="children.${index}.name"]`, child.name);
    setInputValue(`[name="children.${index}.surname"]`, child.surname);
    setInputValue(
      `[data-testid="children-${index}-birthdate-day"]`,
      child.birthdate.day
    );
    setInputValue(
      `[data-testid="children-${index}-birthdate-month"]`,
      child.birthdate.month
    );
    setInputValue(
      `[data-testid="children-${index}-birthdate-year"]`,
      child.birthdate.year
    );

    setSelectValue(`[data-testid="title-child-${index}}"]`, child.gender);
  });
}
