document.getElementById('dietForm').addEventListener('submit', function(e){
  e.preventDefault(); // prevent page reload

  // Collect all inputs
  const formData = {
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    gender: document.getElementById('gender').value,
    weight: document.getElementById('weight').value,
    height: document.getElementById('height').value,
    diet: document.getElementById('diet').value,
    meals: document.getElementById('meals').value,
    water: document.getElementById('water').value,
    exercise: document.getElementById('exercise').value,
    goal: document.getElementById('goal').value,
    cuisine: document.getElementById('cuisine').value,
    allergies: document.getElementById('allergies').value || "None",
    diseases: document.getElementById('diseases').value || "None",
    snacks: document.getElementById('snacks').value,
    supplements: document.getElementById('supplements').value,
    sleep: document.getElementById('sleep').value,
    dislikes: document.getElementById('dislikes').value || "None"
  };

  // Display summary
  const resultDiv = document.getElementById('result');
  let html = `<h3>Diet & Health Summary for ${formData.name}</h3><table>`;
  for (const key in formData) {
    const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
    html += `<tr><td>${label}:</td><td>${formData[key]}</td></tr>`;
  }
  html += `</table>`;
  resultDiv.innerHTML = html;
});
