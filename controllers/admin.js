function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<!DOCTYPE html><html><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"><title>" + (jade.escape(null == (jade_interp = "Historial de visitas") ? "" : jade_interp)) + "</title><link rel=\"stylesheet\" href=\"/stylesheets/sadmin-style.css\"><link href=\"https://fonts.googleapis.com/css?family=Josefin+Sans|Montez&amp;display=swap\" rel=\"stylesheet\"><script src=\"https://kit.fontawesome.com/07bd293ac9.js\" crossorigin=\"anonymous\"></script><link href=\"https://fonts.googleapis.com/css?family=Roboto&amp;display=swap\" rel=\"stylesheet\"></head><body><header><div class=\"title-box\"><img src=\"img/uca_white.png\" alt=\"logo\" class=\"logo\"><h1>" + (jade.escape(null == (jade_interp = "Registro de usuarios y administradores") ? "" : jade_interp)) + "</h1></div><div class=\"sesion-box\"><div class=\"sesion\"><h3 class=\"hi\">Bienvenido: </h3><p id=\"username\" class=\"username\">Usuario</p></div><div class=\"logout\"><a href=\"/login\">\"Cerrar sesión\" </a></div></div><div class=\"sesion-btn\"><button type=\"button\" onclick=\"showHide(&quot;sesion_list&quot;)\" class=\"fas fa-user\"></button><div id=\"sesion_list\" class=\"sesion-list\"><a href=\"/login\">\"Cerrar sesión\" </a></div></div></header><section class=\"history-container\"><div class=\"table-header\"><div class=\"title-container\"><p>Lista de <strong>personas</strong></p></div><div class=\"add-btn-box\"><button onclick=\"document.getElementById('modal_id').style.display='block'\" class=\"add-btn\">Agregar</button></div></div><div class=\"search-box\"><form class=\"search\"><input type=\"text\" placeholder=\"Buscar..\" name=\"search\"><button class=\".btn(type='button')\"><i class=\"fa fa-search\"></i></button></form></div><table id=\"lista\" class=\"table-container\"><thead><tr><th>Nombre</th><th>Documento</th><th>Tipo</th><th>Placa</th><th>Descripcion</th><th>Fecha/Hora entrada</th><th class=\"sticky\">Accion</th></tr></thead><tbody id=\"tbody_id\"></tbody></table></section><div id=\"modal_id\" class=\"modal\"><form class=\"modal-box modal-anim\"><div class=\"modal-content\"><div id=\"pea_info\" class=\"pea-container\"><label for=\"name\" class=\"title-bold\">Nombre</label><input id=\"name\" type=\"text\" placeholder=\"Nombre\" name=\"name\" class=\"input-form\"><label for=\"document\" class=\"title-bold\">Documento</label><input id=\"doc\" type=\"text\" placeholder=\"Número de documento\" name=\"doc\" class=\"input-form\"></div><button type=\"button\" onclick=\"showHide(&quot;parking_info&quot;)\" class=\"parking-btn\">Parqueo<span class=\".fas.fa-angle-down\"></span></button><div id=\"parking_info\" class=\".parking-container\"><div class=\"information\"><div class=\"type-box\"><label for=\"type\" class=\"title-bold\">Tipo</label><select id=\"type\" name=\"type\"><option value=\"Auto\">Automovil</option><option value=\"Moto\">Motocicleta</option></select></div><div class=\"placa-box\"><label for=\"placa\" class=\"title-bold\">Placa</label><input id=\"placa\" type=\"text\" placeholder=\"Número de placa\" name=\"placa\" required=\"\" class=\"input-form\"></div></div><label for=\"description\" class=\"title-bold\">Descripcion</label><textarea id=\"description\" name=\"description\" class=\"description\"></textarea></div></div><div class=\"modal-btns-box\"><button type=\"button\" onclick=\"document.getElementById('modal_id').style.display='none'\" class=\"cancel-btn\">Cancelar</button><button id=\"enter_btn\" type=\"button\" class=\"enter-btn\">Entra</button><button id=\"save_btn\" type=\"submit\" class=\"save-btn\">Guardar</button></div></form></div><script src=\"/javascripts/parqueo.js\"></script></body></html>");;return buf.join("");
}