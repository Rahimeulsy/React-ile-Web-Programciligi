class Personel {
    constructor(ad, soyad) {
        this.ad = ad;
        this.soyad = soyad;
    }
    kaydet() {
        console.log("Personel kaydedildi..");
    }
}

const personel = new Personel("Engin", "Demirog")
personel.kaydet();
personel.ad = "Engin"
console.log(personel.adi);