const form = document.getElementById('employeeForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      } else {
        console.error(xhr.statusText);
      }
    }
  };

  xhr.open(form.method, form.action, true);
  xhr.send(data);
});
