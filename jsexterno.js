function verificar(){
  var data = new Date() // cria a variavel
  var ano = data.getFullYear() // cria a var ano chama a data e grava nela para exibir acima em data
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || Number (fano.value) > ano){
      alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute ('id', 'foto')
      if (fsex[0].checked){
          genero = 'Homem'
          if(idade >= 0 && idade < 10){
              //criança
              img.setAttribute('src', 'bbmenino.png')
          } else if (idade < 21){
              //jovem
              img.setAttribute('src', 'jovemhomem.png')
          } else if (idade < 50){
              //adulto
              img.setAttribute('src', 'adultohomem.png')
          } else {
              //idoso
              img.setAttribute('src', 'idosohomem.png')
          }
      } else if (fsex[1].checked){
          genero = 'Mulher'
          if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'bbmenina.png')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', 'jovemmulher.png')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'adultamulher.png')
        } else {
            //idoso
            img.setAttribute('src', 'idosamulher.png')
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
  }
}