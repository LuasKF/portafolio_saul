//INICIO ....
let mensaje = true;

if (mensaje) {
    console.log('inicia');
    Swal.fire(
        'HOLA MUNDO!',
        'Para una mejor experiencia te recomiendo usar Mozilla Firefox \n Saludos!',
        'success'
    );
    mensaje = false;

}

//--------------------------

let portal = document.getElementById('portal');
console.log('inicia for');
let chispas = '';
for (let index = 0; index < 360; index++) {
    
    // let chispa = document.createElement('div');
    // chispa.classList.add('chispa');
    //let rotate = index * 2 + 'deg';
    //  console.log(rotate);
    // chispa.style.rotate = rotate;
   
    // let chispaTraslation = Math.random() * (120 - 100) + 100;
    
    // chispa.style.transform = 'translate(' + chispaTraslation + 'px)';
    // portal.appendChild(chispa);

    let rotate = index * 2 + 'deg';
    let chispaTraslation = Math.random() * (120 - 100) + 100;
    let transform= 'translate(' + parseInt(chispaTraslation) + 'px)';
    chispas += `<div class="chispa" style="rotate:` + rotate + `; transform: ` + transform + `;"></div>`;
    portal.innerHTML = chispas;
}

console.log('fin');