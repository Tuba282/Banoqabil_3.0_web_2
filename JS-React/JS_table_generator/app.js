function generateTable() {
  const number = document.getElementById('user_inpt').value;
  let table = '<table border="1" cellpadding="5" cellspacing="2" width="300" >';
  for (let i = 1; i <= 10; i++) {
      table += 
      `<tr align="center">
          <td> ${number} </td>
          <td> x </td>
          <td> ${i} </td>
          <td> = </td>
          <td> ${number * i} </td>
          
          </tr>                    
          
          `;
  }
  table += '</table>';
  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = table;
}