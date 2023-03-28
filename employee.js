]const form = document.getElementById('employeeForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const employeeId = document.getElementById('employeeId').value;
  const location = document.getElementById('location').value;
  const address = document.getElementById('address').value;
  const bloodGroup = document.getElementById('bloodGroup').value;
  const experience = document.getElementById('experience').value;
  const skill = document.getElementById('skill').value;
  
  const data = {
    name: name,
    employeeId: employeeId,
    location: location,
    address: address,
    bloodGroup: bloodGroup,
    experience: experience,
    skill: skill
  };
  
  const xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const displayData = document.getElementById('displayData');
      displayData.innerHTML = `
        <h2>Entered Employee Details:</h2>
        <p><strong>Name:</strong> ${response.name}</p>
        <p><strong>Employee ID:</strong> ${response.employeeId}</p>
        <p><strong>Location:</strong> ${response.location}</p>
        <p><strong>Address:</strong> ${response.address}</p>
        <p><strong>Blood Group:</strong> ${response.bloodGroup}</p>
        <p><strong>Experience:</strong> ${response.experience} years</p>
        <p><strong>Skill:</strong> ${response.skill}</p>
      `;
    }
  };
  
  xhr.open('GET', `submit_employee.php?data=${JSON.stringify(data)}`);
  xhr.send();
});
