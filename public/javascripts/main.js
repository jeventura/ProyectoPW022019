usuarios();
document.querySelector("#formRegistro").addEventListener('submit', function (e) {
    e.preventDefault();
    let data = { 
        nombre: document.querySelector("#name").value,   
        documento: document.querySelector("#doc").value, 
        tipo: document.querySelector("#type").options[document.querySelector("#type").selectedIndex].text,
        placa: document.querySelector("#placa").value, 
        descripcion: document.querySelector("#description").value
    }
    console.log(data);
    fetch('/visitante', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response => {
            alert("Tarea insertada con exito");
            usuarios();
        })
        .catch(err => {
            alert("Por favor revise los datos ingresados");
            console.log(err);
        });
});  

document.forms.formUpdate.addEventListener("submit", function (e) {
    e.preventDefault();
    let data = {
        nombre: document.forms.formUpdate.nameU.value,
        documento: document.forms.formUpdate.docU.value,
        tipo: document.forms.formUpdate.typeU.value,
        placa: document.forms.formUpdate.placaU.value,
        descripcion: document.forms.formUpdate.descriptionU.value
    }
    fetch('/visitante/' + document.forms.formUpdate._id.value, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response => {
            alert("Actualizado con exito");
            usuarios();
        })
        .catch(err => {
            alert("Por favor revise los datos ingresados");
            console.log(err);
        });
});

function usuarios() {
    fetch('/visitante',
        {
            method: 'GET'
        }).then(res => res.json())
        .then(data => {
            let filas = "";
            let datetime = new Date();
            data.forEach(element => {
                console.log(element);
                filas = filas + `<tr>
           <td>${element.nombre}</td>
           <td>${element.documento}</td>
           <td>${element.tipo}</td>
           <td>${element.placa}</td>
           <td>${element.descripcion}</td>
           <td>${datetime.toLocaleString()}</td>
           <td>
                <a href="/visitante/${element._id}" class="update btn btn-warning far fa-edit" data-toggle="modal" data-target="#exampleModal">
                <a href="/visitante/${element._id}" class="delete btn btn-danger far fa-trash-alt">
           </td>
           </tr>`
            });
            document.querySelector("#tbody_id").innerHTML = filas;
            let btn_update = document.querySelectorAll('.update');
            btn_update.forEach(item => {
                item.addEventListener("click", function (e) {
                    e.preventDefault();
                    let url = this["href"];
                    console.log(url);
                    fetch(url, {
                        method: "GET"
                    }).then(res => res.json())
                        .catch(err => console.error(err))
                        .then(response => {
                            document.forms.formUpdate._id.value = response._id;
                            document.forms.formUpdate.nameU.value = response.nombre;
                            document.forms.formUpdate.docU.value = response.documento;
                            document.forms.formUpdate.typeU.value = response.tipo;
                            document.forms.formUpdate.placaU.value = response.placa;
                            document.forms.formUpdate.descriptionU.value = response.descripcion;
                        });
                });
            });
            let btn_delete = document.querySelectorAll('.delete');
            btn_delete.forEach(item => {
                item.addEventListener("click", function (e) {
                    e.preventDefault();
                    let url = this["href"];
                    fetch(url, {
                        method: "DELETE",
                    }).then(res => res.json())
                        .then(response => {
                            alert("Eliminado con exito");
                            usuarios();
                        })
                        .catch(err => {
                            alert("Ocurrio un error al eliminar");
                            console.log(err);
                        });
                });
            })
        })
}




