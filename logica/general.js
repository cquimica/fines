


function leer(archivo){
    document.getElementById("miBody").innerHTML+=`
    
    <div class="visorPDF" id="visorPDF">
        <button class="btnExit" onclick="Exit()"><ion-icon name="close-circle-outline"></ion-icon></button>
        <div class="loading" id="load"></div>
        
        <iframe src="https://docs.google.com/viewer?srcid=${archivo}&pid=explorer&efh=false&a=v&chrome=false&embedded=true" width="100%" height="100%"></iframe>

    </div>

    `;

    setTimeout(()=>{

        document.getElementById("load").remove();
    },3000)
    
}

function Exit(){
    document.getElementById("visorPDF").remove();
    
}



/*
copiar
<iframe src="https://docs.google.com/viewer?srcid=${archivo}&pid=explorer&efh=false&a=v&chrome=false&embedded=true" width="100%" height="680px"></iframe>

*/

/*
modulo:
1Zqhu7NJrwfSfkEryS3_jkS9P_jW9Fq26

actividades:
1Ss7k_ylJf0FlQNrJ_dPB300MfOZyUsqT

terminos:
1CcNY5RGmAlNzWoNKNi1K0l_Hk_K2Yu1F

t1:
1LZID22ouYDeoOn5xubnEDYfaRBsUIzoQ

t2:
1iXbPGGpcvgINjKfx3lpvFQgRYBX1IvaY

t3:

t4:
1uTsUU4qgZtHQOBi0a33aw5BavtDgqpPF

t5:
1WEZdvHyFl9t9C-kiFGUHQiizZhpSyRs8

t6:
13IWHzwfoXf2KYXbGwnZJkaiIDfI_njLA

t7:
17lKcmggzDEye3QKT9xIra6SYuVgLgeDJ
*/ 