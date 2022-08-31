function leer(archivo){
    document.getElementById("miBody").innerHTML+=`
    
    <div class="visorPDF" id="visorPDF">
        <button class="btnExit" onclick="Exit()"><ion-icon name="close-circle-outline"></ion-icon></button>
        
        <object data="material/${archivo}.pdf" height="100%" width="100%"></object>
            
        <iframe src="http://docs.google.com/gview?  url=http://cquimica.github.io/fines/material/${archivo}.pdf&embedded=true" style="width:500px; height:375px;" frameborder="0"></iframe>


    </div>

    `;
}

function Exit(){
    document.getElementById("visorPDF").remove();
}

/*

<object data="material/${archivo}.pdf" height="100%" width="100%"></object>

*/