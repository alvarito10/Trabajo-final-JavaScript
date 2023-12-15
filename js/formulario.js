/*------------------- JS FORMULARIO------------------*/


//Evento para mandar formulario, una vez esté todo correcto
let miBoton = document.getElementById("enviar")
let miForm = document.getElementById("formulario");

miBoton.addEventListener("click", (evento)=>{
    
    valido = validar();
    if(valido == true){
        miForm.submit();
    }
    
})

/*----1ª PARTE - DATOS PERSONALES + PRIVACIDAD--------------*/
//Función validar
function validar(){
    let ok = "si";
    let msg = "";
    
    //Input nombre
    if (document.getElementById('name').value == ''){
        ok = "no";
        msg = msg + 'El campo "Nombre" no puede estar vacio.\n';
    }else{
        let name = /^[a-zA-Z]{2,15}$/;
        if (name.exec(document.getElementById('name').value)){
            ok = "si";
    
        }else{
            ok = "no";
            msg = msg + 'El nombre no es correcto.\n';
        }    
    }
        
    //Input Apellidos
    if (document.getElementById('surname').value == ''){
        ok = "no";
        msg = msg + 'El campo "Apellidos" no puede estar vacio.\n';
    }else{
        let surname = /^[ a-zA-Z]{2,40}$/;
        if (surname.exec(document.getElementById('surname').value)){
            ok = "si";
    
        }else{
            ok = "no";
            msg = msg + 'Los apellidos no son correctos.\n';
        } 
    }
    //Input teléfono
    if(document.getElementById('tel').value == ''){
        ok = "no";
        msg = msg + 'El campo "Telefono" no puede estar vacio.\n';
    }else{
        let re = /^(6|7|8|9)[0-9]{8}$/;
        let valor = "";
        if(!re.exec(document.getElementById('tel').value)){
            ok = "no";
            msg = msg + 'El campo "Telefono" es erróneo.\n';
        }else{
            valor = document.getElementById('tel').value;
            if(!(/^\d{9}$/.test(valor))){
                ok = "no";
                msg = msg + 'El teléfono debe tener 9 cifras.\n';
            }
        }
    }
    
    //Input Email
    if(document.getElementById('email').value == ''){
        ok = "no";
        msg = msg + 'El campo "e-mail" no puede estar vacio.\n';
    }else{
        let correo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!correo.exec(document.getElementById('email').value)){
            ok = "no";
            msg = msg + 'El campo "e-mail" está mal insertado.\n';
        }else{
            ok = "si";
        }
    }
    
    //Checkbox privacidad
    if(document.getElementById('privacidad').checked){
        ok = "si";
    }else{
        ok = "no";
        msg = msg + "Tiene que aceptar la política de privacidad.\n";
    }

    
    //Condición para que si está todo correcto, se mande y si no, alerta de donde hay fallos
    if (ok == "si"){
        document.formulario.submit()
    }else{
        alert(msg);
        return false;
    }
}

/*----2ª PARTE - PRESUPUESTO--------------*/

let producto = document.getElementById("producto");
let entrega = document.getElementById("entrega");
let exp = document.getElementById("experiencia");
let ext1 = document.getElementById("ext1");
let ext2 = document.getElementById("ext2");
let ext3 = document.getElementById("ext3");
let ext4 = document.getElementById("ext4");
let ext5 = document.getElementById("ext5");


let v1 = 0;
let v2 = 0;
let v3 = 0;
let v4 = 0;
let v5 = 0;
let v6 = 0;
let v7 = 0;
let v8 = 0;


producto.addEventListener("change", function perfil(value){
    if(value == 0){
        entrega.disabled = true;
        ext1.disabled = true;
        ext2.disabled = true; 
        ext3.disabled = true;
        ext4.disabled = true;
        ext5.disabled = true;
        exp.disabled = true;
     }else{
        entrega.disabled = false;
        ext1.disabled = false;
        ext2.disabled = false; 
        ext3.disabled = false;
        ext4.disabled = false;
        ext5.disabled = false;
        exp.disabled = false;
     }
    v1 = document.getElementById("producto").value;
    updateTotal(v1, v2, v3, v4, v5, v6, v7, v8)
});

entrega.addEventListener("change", function plazo(value){
    
    let descuento = document.getElementById("entrega").value;
    if(descuento>=10){
        v2 = 10;
    }else{
        v2 = descuento;
    }
    updateTotal(v1, v2, v3, v4, v5, v6, v7, v8)
});
exp.addEventListener("change", function(value){
    v3 = document.getElementById("experiencia").value;
    updateTotal(v1, v2, v3, v4, v5, v6, v7, v8)
} )

ext1.addEventListener("change", function(value){
    if(document.getElementById("ext1").checked){
        v4 = document.getElementById("ext1").value; 
    }else{
        v4 = 0;
    }
    updateTotal(v1, v2, v3, v4, v5, v6, v7, v8)
})
ext2.addEventListener("click", function(value){
    if(document.getElementById("ext2").checked){
        v5 = document.getElementById("ext2").value;
    }else{
        v5 = 0;
    }
    updateTotal(v1, v2, v3, v4, v5, v6, v7, v8)
})
ext3.addEventListener("click", function(value){
    if(document.getElementById("ext3").checked){
        v6 = document.getElementById("ext3").value;
    }else{
        v6 = 0;
    }
    updateTotal(v1, v2, v3, v4, v5, v6, v7, v8)
})
ext4.addEventListener("change", function(value){
    if(document.getElementById("ext4").checked){
        v7 = document.getElementById("ext4").value;
    }else{
        v7 = 0;
    }
    updateTotal(v1, v2, v3, v4, v5, v6, v7, v8)
})
ext5.addEventListener("click", function(value){
    if(document.getElementById("ext5").checked){
        v8 = document.getElementById("ext5").value;
    }else{
        v8 = 0;
    }
    updateTotal(v1, v2, v3, v4, v5, v6, v7, v8)
})

function updateTotal(v1, v2, v3, v4, v5, v6, v7, v8){
    let dcto = v1/100 * parseInt(v2) *5;
    
    let total = (parseInt(v1) + parseInt(v3) + parseInt(v4) + parseInt(v5) + parseInt(v6) + parseInt(v7) + parseInt(v8)) - dcto;

    
    document.getElementById("presupuesto").value = total;
}


