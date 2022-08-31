function leer(archivo){
    document.getElementById("miBody").innerHTML+=`
    
    <div class="visorPDF" id="visorPDF">
        <button class="btnExit" onclick="Exit()"><ion-icon name="close-circle-outline"></ion-icon></button>
        <object data="material/${archivo}.pdf" height="100%" width="100%"></object>
    </div>

    `;
}

function Exit(){
    document.getElementById("visorPDF").remove();
}