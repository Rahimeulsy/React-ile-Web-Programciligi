var selamFonksiyon = function selam(){
    console.log("Merhaba");
}
selamFonksiyon();

const selamFonksiyon2 = () => {
    console.log("Merhaba2");
    console.log("Birşey");
}
selamFonksiyon2();

const selamFonksiyon3 = (mesaj) => {
    console.log(mesaj);
    
}
selamFonksiyon3("Merhaba Dünya!!");

var topla=(sayi1,sayi2)=>{
    return sayi1+sayi2;
}
let toplam = topla(3,4);
console.log(toplam);
