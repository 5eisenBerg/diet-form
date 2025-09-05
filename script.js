document.getElementById('dietForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Collect inputs
  const formData = {
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    gender: document.getElementById('gender').value,
    activity: document.getElementById('activity').value,
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
    dislikes: document.getElementById('dislikes').value || "None",
    dailyCalories: document.getElementById('daily-calories').value,
    caloriesConsumed: document.getElementById('calories-consumed').value,
    currentWeight: document.getElementById('current-weight').value,
    targetWeight: document.getElementById('target-weight').value
  };

  // Calculate diet goal completion
  const completion = ((formData.caloriesConsumed / formData.dailyCalories) * 100).toFixed(1);
  document.getElementById('goal-completion').textContent = `Diet Goal Completion: ${completion}%`;

  // Display diet summary table dynamically
  const summaryTable = document.getElementById('diet-summary').querySelector('tbody');
  summaryTable.innerHTML = `
    <tr><td>Breakfast</td><td>Example Food</td><td>300</td></tr>
    <tr><td>Lunch</td><td>Example Food</td><td>600</td></tr>
    <tr><td>Dinner</td><td>Example Food</td><td>500</td></tr>
  `;

  // Display full summary
  const resultDiv = document.getElementById('result');
  let html = `<h3>Full Diet & Health Summary for ${formData.name}</h3><table>`;
  for (const key in formData) {
    const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
    html += `<tr><td>${label}:</td><td>${formData[key]}</td></tr>`;
  }
  html += `</table>`;
  resultDiv.innerHTML = html;
});
