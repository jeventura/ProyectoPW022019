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
                <a href="/user/${element._id}" class="update btn btn-warning far fa-edit" data-toggle="modal" data-target="#exampleModal">
                <a href="/user/${element._id}" class="delete btn btn-danger far fa-trash-alt">
           </td>
           </tr>`
            });
            document.querySelector("#tbody_id").innerHTML = filas;
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