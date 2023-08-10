document.addEventListener('DOMContentLoaded', () => {
    const savedCountries = JSON.parse(localStorage.getItem('countries')) || [];
    const gridView = document.getElementById("grid-view").getElementsByTagName('tbody')[0];
    savedCountries.forEach(country => {
      const newRow = gridView.insertRow(-1);
      const countryCell = newRow.insertCell(0);
      const deleteCell = newRow.insertCell(1);
      const editCell = newRow.insertCell(2);
  
      countryCell.innerHTML = country;
      deleteCell.innerHTML = `<button class="btn btn-danger btn-sm" onclick="deleteRow(this)">Delete</button>`;
      editCell.innerHTML = `<button class="btn btn-dark btn-sm" onclick="editRow(this)">Edit</button>`;
    });
  });
  
  function addCountry() {
    const countryDropdown = document.getElementById("country-dropdown");
    const selectedCountry = countryDropdown.value;
  
    if (selectedCountry !== "") {
      const gridView = document.getElementById("grid-view").getElementsByTagName('tbody')[0];
      const newRow = gridView.insertRow(-1);
  
      const countryCell = newRow.insertCell(0);
      const deleteCell = newRow.insertCell(1);
      const editCell = newRow.insertCell(2);
  
      countryCell.innerHTML = selectedCountry;
      deleteCell.innerHTML = `<button class="btn btn-danger btn-sm" onclick="deleteRow(this)">Delete</button>`;
      editCell.innerHTML = `<button class="btn btn-secondary btn-sm" onclick="editRow(this)">Edit</button>`;
  
      countryDropdown.value = ""; 
      saveCountries();
    }
  }
  
  function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  
    
    saveCountries();
  }
  
  function editRow(button) {
    const row = button.parentNode.parentNode;
    const countryCell = row.cells[0];
    const editedCountry = prompt("Enter edited country name:", countryCell.innerHTML);
    
    if (editedCountry !== null) {
      countryCell.innerHTML = editedCountry;
  
      saveCountries();
    }
  }
  
   function saveCountries() {
     const gridView = document.getElementById("grid-view").getElementsByTagName('tbody')[0];
     const countries = Array.from(gridView.rows).map(row => row.cells[0].innerHTML);
     localStorage.setItem('countries', JSON.stringify(countries));
 }
