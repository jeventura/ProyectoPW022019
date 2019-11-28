user();
document.querySelector("#Registrar").addEventListener('submit', function (e) {
    e.preventDefault();
    let data = { 
        usuario: document.querySelector("#user_name").value,
        contrasena: document.querySelector("#pwd").value,
        tipousuario: document.querySelector("#type").options[document.querySelector("#type").selectedIndex].text,
        codigo: document.querySelector("#user_code").value, 
        nombre: document.querySelector("#name").value,
        documento: document.querySelector("#dui").value,
        telefono: document.querySelector("#tel").value,
        correo: document.querySelector("#email").value
    }
    console.log(data);
    fetch('/user', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response => {
            alert("Tarea insertada con exito");
            user();
        })
        .catch(err => {
            alert("Por favor revise los datos ingresados");
            console.log(err);
        });
});  

document.forms.formUpdate.addEventListener("submit", function (e) {
    e.preventDefault();
    let data = {
        usuario: document.forms.formUpdate.usernameU.value,
        contrasena: document.forms.formUpdate.pwdU.value,
        tipousuario: document.forms.formUpdate.typeU.options[document.querySelector("#typeU").selectedIndex].text,
        codigo: document.forms.formUpdate.usercodeU.value,
        nombre: document.forms.formUpdate.nameU.value,
        documento: document.forms.formUpdate.duiU.value,
        telefono: document.forms.formUpdate.telU.value,
        correo: document.forms.formUpdate.emailU.value
        
    }
    fetch('/user/' + document.forms.formUpdate._id.value, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response => {
            alert("Actualizado con exito");
            user();
        })
        .catch(err => {
            alert("Por favor revise los datos ingresados");
            console.log(err);
        });
        
});

function user() {
    fetch('/user',
        {
            method: 'GET'
        }).then(res => res.json())
        .then(data => {
            let filas = "";
            data.forEach(element => {
                console.log(element);
                filas = filas + `<tr>
           <td>${element.codigo}</td>
           <td>${element.tipousuario}</td>
           <td>${element.usuario}</td>
           <td>${element.contrasena}</td>
           <td>${element.nombre}</td>
           <td>${element.documento}</td>
           <td>${element.telefono}</td>
           <td>${element.correo}</td>
           <td>
                <a href="/user/${element._id}" class="update btn btn-warning far fa-edit" data-toggle="modal" data-target="#exampleModal" onclick="document.getElementById('modal_update').style.display='block'">
                <a href="/user/${element._id}" class="delete btn btn-danger far fa-trash-alt">
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
                            document.forms.formUpdate.usercodeU.value = response.codigo;
                            document.forms.formUpdate.typeU.options[document.querySelector("#typeU").selectedIndex].text = response.tipousuario;
                            document.forms.formUpdate.usernameU.value = response.usuario;
                            document.forms.formUpdate.pwdU.value = response.contrasena;
                            document.forms.formUpdate.nameU.value = response.nombre;
                            document.forms.formUpdate.duiU.value = response.documento;
                            document.forms.formUpdate.telU.value = response.telefono;
                            document.forms.formUpdate.emailU.value = response.correo;
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
                            user();
                        })
                        .catch(err => {
                            alert("Ocurrio un error al eliminar");
                            console.log(err);
                        });
                });
            })
        })
}