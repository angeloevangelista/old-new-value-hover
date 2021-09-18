const rootElement = document.getElementById("root");

if (rootElement)
  for (let i = 0; i < 20; i++) {
    const isEven = !!(i % 2);

    rootElement.innerHTML += `
    <div class="hoverable-highlight-container">
      <strong class="${isEven ? "highlight" : ""}">Old ${i}</strong>

      <div class="new-value-container">
        <strong>New ${i}</strong>
      </div>
    </div>
  `;
  }
