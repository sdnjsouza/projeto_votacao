//https://www.senado.leg.br/atividade/const/con1988/con1988_03.07.2019/art_14_.asp
//o voto é obrigatório para os cidadãos alfabetizados maiores de 18 anos e menores de 70 anos. 
//No entanto, é facultado para os jovens a partir de 16 anos e para os acima de 70 anos. 

/* let numero = 0, idade = 0;
       let estado;
       for (let l = 0; l < 2; l++) {
           for (let c = 0; c < 3; c++) {
               numero++;
               document.write(numero);
           }
       }
       document.write("<br>");
        function teste(valor) {             
           if(valor < 16 ){
               let y ="ererer";
           y = formvotacao.estado.value();
             
           }
       }
       for (let l = 0; l < 10; l++) {
           document.write(" | ");
           for (let c = 0; c < 20; c++) {
               idade++;
               document.write(idade);
               document.write(" ");
           }
           document.write(" | <br> ");

       }
        var formvotacao = document.getElementById("form01");

           var idade = formvotacao.idade.value;
       
           if(idade< 16){
           
        formvotacao.estado.value = "INAPTO!";
          
           }
           document.getElementById("rrr").innerHTML = "Hello JavaScript!";
console.log()
       
       */

function votacao() {
    //let dn = new Date(document.getElementById("nascimento").value) exibe  o dia aterior
    dteste1 = document.getElementById("nascimento").value.split('-')
    dteste2 = document.getElementById("votacao").value.split('-')

    let dn = new Date(dteste1[0], dteste1[1], dteste1[2])
    let dv = new Date(dteste2[0], dteste2[1], dteste2[2])

    if (dn > dv) {
        //alert('Você nasceu hoje!?!?')
        alert('Seja coerente com as datas!!!!')
    }
    if (dn < dv) {
        let idade = Math.floor(Math.ceil(Math.abs(dn.getTime() - dv.getTime()) / (1000 * 3600 * 24)) / 365.25)
        document.getElementById("idade").value = idade

        if (idade < 16) {
            document.getElementById("estado").value = "INAPTO"
        } else if (idade < 18) {
            document.getElementById("estado").value = "FACULTATIVO"
        } else if (idade <= 70) {
            document.getElementById("estado").value = "OBRIGATÓRIO"
        } else {
            document.getElementById("estado").value = "INAPTO"
        }
    }

    //document.getElementById("rrr").innerHTML = dn + " | Hello JavaScript! | " + dv;



    // console.log(hoje)
    // console.log(dn.getDate())
    //console.log(dv.getDate())
}
function testevotacao() {
    //console.log("OK!")

    let dv = new Date(2019, 10, 10)
    document.getElementById("votacao").innerHTML = 
    "  Data de votação testada: "+dv.getDate() + "/"+ dv.getMonth() + "/" + dv.getFullYear() 
        
    for (let index = 1910; index <= 2019; index++) {
        let dn = new Date(index, 10, 10)
       
    if (dn < dv) {
        let idade = Math.floor(Math.ceil(Math.abs(dn.getTime() - dv.getTime()) / (1000 * 3600 * 24)) / 365.25)
        let situacao = ""
        if (idade < 16) {
            situacao = "INAPTO"
        } else if (idade < 18) {
            situacao = "FACULTATIVO"
        } else if (idade <= 70) {
            situacao = "OBRIGATÓRIO"
        } else {
            situacao = "INAPTO"
        }
        console.log(" idade: " + idade+ " | Situação "+ situacao + " | "
        + dn.getFullYear() +"/"+dn.getMonth() + "/"+dn.getDate()
        )
        document.getElementById("idades").innerHTML +="<li>  idade: " + idade+ " | Situação "+ situacao
        +" |  Data de nascimento testada: "+dn.getDate() + "/"+ dn.getMonth() + "/" + dn.getFullYear()
        + "  </li> "
       
    }
}
    //console.log("OK!" + " " + dn)
}

