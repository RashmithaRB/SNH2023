document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput");
  const tableRows = document.querySelectorAll(".details-table tbody tr");

  searchInput.addEventListener("input", function(event) {
    const searchText = event.target.value.toLowerCase();

    tableRows.forEach(row => {
      const farmerName = row.querySelector('td:first-child').textContent.toLowerCase();

      if (farmerName.includes(searchText)) {
        row.style.display = "table-row";
      } else {
        row.style.display = "none";
      }
    });
  });
});
  
  