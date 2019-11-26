usuarios();
document.querySelector("#Registro").addEventListener('submit', function (e) {
    e.preventDefault();
    let data = { 
        nombre: document.querySelector("#nombre").value,   
        documento: document.querySelector("#documento").value, 
        tipo: document.querySelector("#tipo").options[document.querySelector("#tipo").selectedIndex].text,
        placa: document.querySelector("#placa").value, 
        descripcion: document.querySelector("#descripcion").value
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
           </tr>`
            });
            document.querySelector("#tbody_id").innerHTML = filas;
        });
}


