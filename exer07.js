function exibir(t,z){

    alert('A soma é ' + t + ' e subt  ' + z)
}




function somar(x,y,cb){

    var n= x+y 
    var h= x-y

    cb(n ,h) 

}

somar(10,5,exibir);  