var kullanicilar = [
    { email: "engindemirog@gmail.com", sifre: "12345" },
    { email: "derindemirog@gmail.com", sifre: "12345" }
]
var tivitler = [
    { email: "engindemirog@gmail.com", tivit: "Bugün hava çok güzel" },
    { email: "derindemirog@gmail.com", tivit: "Bugün hava çok güzel 2" },
    { email: "derindemirog@gmail.com", tivit: "Kapıyı ben açacağım!" }

]

var email = prompt("email?")
var sifre = prompt("sifre?")
function kullaniciVarmi(email, sifre) {
    console.log(email);
    console.log(sifre);
    for (i = 0; i < kullanicilar.length; i++) {
        if (kullanicilar[i].email == email && kullanicilar[i].sifre == sifre) {
            return true;
        }
    }
    return false;
}

function giris() {
    if (kullaniciVarmi(email,sifre)) {
        console.log(tivitler)
    } else {
        console.log("Kullanıcı adı veya şifresi hatalı");
    }

}
giris(email, sifre)