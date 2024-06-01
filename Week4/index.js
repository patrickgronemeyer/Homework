// Example to dynamically create a section or add more items to existing lists:

// Professional Summary
const summarySection = document.getElementById("professional-summary");
const summaryPara = document.createElement("p");
summaryPara.textContent =
  "A dedicated developer and cybersecurity professional with a penchant for detail...";
summarySection.appendChild(summaryPara);

// You can expand this to dynamically create more sections and lists if desired.
