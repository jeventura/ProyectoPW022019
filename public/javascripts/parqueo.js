//Función para mostrar u ocultar un elemento
var clic = 1;
function showHide(id) {
    if (clic == 1) {
        document.getElementById(id).style.display = 'block';
        clic = clic + 1;
    } else {
        document.getElementById(id).style.display = 'none';
        clic = 1;
    }
}

//Función para mostrar el formulario de editar
function showEditModal(){
    document.getElementById('modal_id').style.display='block';
    document.getElementById('enter_btn').style.display='none';
    document.getElementById('save_btn').style.display='block';
}


//Guardar
let code_field =document.querySelector("#user_code")
let type_radio = document.querySelector("#type")
let user_name_field = document.querySelector("#user_name")
let password_field = document.querySelector("#pwd")
let name_field = document.querySelector("#name")
let dui_field = document.querySelector("#dui")
let tel_field = document.querySelector("#tel")
let email_field = document.querySelector("#email")
let submit_btn = document.querySelector("#enter_btn")
let table_body = document.querySelector("#tbody_id")

let addVisitor = (code, type, user_name, password, name, dui, telephone, email) => {
    let new_row = document.createElement("tr")
    let datetime = new Date()
    new_row.className = "table_active"
    new_row.innerHTML =
        `<td scope='row'>${code}</td>
         <td>${type}</td>
        <td>${user_name}</td>
        <td>${password}</td>
        <td>${name}</td>
        <td>${dui}</td>
        <td>${telephone}</td>
        <td>${email}</td>
        <td class="sticky">
            <button class="btn edit" onClick="onEdit(this)"><i class="fa fa-edit"></i></button>
            <button type="button" id="btn" class="btn delete" onclick="deleteRow('table_id',this)"><i class="fa fa-trash"></i></button>
        </td> `
   
    table_body.appendChild(new_row)
}
submit_btn.addEventListener("click", () => {
    let code = code_field.value
    let type = type_radio.options[type_radio.selectedIndex].text
    let user_name = user_name_field.value
    let password = password_field.value
    let name = name_field.value
    let dui = dui_field.value
    let telephone = tel_field.value
    let email = email_field.value
    
    addVisitor(code, type, user_name, password, name, dui, telephone, email)

 //Validaciones RegExp
    
})



//Funcioin hora salida (Sin terminar)
function timeOut(){
    let datetime = new Date()
    var time;
    time=document.getElementById('out');
    time.innerHTML = datetime.toLocaleString(); 
}


//Función Buscar
function search() {
  var input, cell, fltr, table, tr, td, i, j;
  input = document.getElementById("search_input");
  fltr = input.value.toUpperCase();
  table = document.getElementById("table_id");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    tr[i].style.display = "none";  // Oculta inicalmente la fila
    td = tr[i].getElementsByTagName("td");
    for (var j = 0; j < td.length; j++) {
      cell = tr[i].getElementsByTagName("td")[j];
      if (cell) {
        if (cell.innerHTML.toUpperCase().indexOf(fltr) > -1) {
          tr[i].style.display = "";
          break;
        } 
      }
    }
  }
}

//Funcion Eliminar
function deleteRow(table_id,currentRow) {
    try {
        var table = document.getElementById(table_id);
        var cont = table.rows.length;
        for (var i = 0; i < cont; i++) {
            var row = table.rows[i];
            if (row==currentRow.parentNode.parentNode) {
                if (cont <= 1) {
                    alert("No se pueden eliminar todas las filas");
                    break;
                }
                table.deleteRow(i);
                cont--;
                i--;
            }
        }
    } catch (e) {
        alert(e);
    }
}

