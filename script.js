// Exercício 3
// Criar outra lista para adicionar nome dos filmes.

var listaFilmes = [
    'https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_SL1500_.jpg', 'https://f001.backblazeb2.com/file/papocine/2016/10/20191229-poster.png','https://i.pinimg.com/originals/7d/fd/dd/7dfddd911b8040729896c5be83f8e139.jpg','https://br.web.img3.acsta.net/r_1280_720/medias/nmedia/18/69/96/84/19151192.jpg','https://br.web.img3.acsta.net/pictures/16/11/21/15/29/457312.jpg'
]

var titulo = [
'Interstellar',
'A Chegada',
'Inception',
'Ilha do Medo', 
'Até o Último Homem'
]

var resultado = []



for(var i=0; i < listaFilmes.length; i++) {
    document.write(`<div id="titulo"> <img src=${listaFilmes[i]}> ${titulo[i]} </div>`)
  
}



