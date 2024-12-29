var parad = setInterval( function(){

    document.write('<p>Feliz Natal </p> ')
}, 1000)  


setTimeout(function(){

    document.write('<p>Parouu</p>')
    clearInterval(parad)
},3000) 