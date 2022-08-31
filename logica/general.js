function leer(archivo){
    document.getElementById("miBody").innerHTML+=`
    
    <div class="visorPDF" id="visorPDF">
        <button class="btnExit" onclick="Exit()"><ion-icon name="close-circle-outline"></ion-icon></button>
        
        
        <embed src="material/${archivo}.pdf" type="application/pdf" width="100%" height="100%" />


    </div>

    `;
    
}

function Exit(){
    document.getElementById("visorPDF").remove();
    alert("embebed?");
}

/*
copiar
<iframe src="https://docs.google.com/viewer?srcid=1OEe5kHKB-olY1mjkpiyHfbi5aMZkVsrL&pid=explorer&efh=false&a=v&chrome=false&embedded=true" width="100%" height="680px"></iframe>


<object data="material/${archivo}.pdf" height="100%" width="100%"></object>




*/