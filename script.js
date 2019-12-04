let nameBirthday = new XMLHttpRequest();
nameBirthday.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let nameBirthdayObj = JSON.parse(this.responseText);
        document.getElementById("firstName").innerHTML = nameBirthdayObj.name;
        document.getElementById("birthday").innerHTML = nameBirthdayObj.birthdate;
    }
};
nameBirthday.open("GET", "einstein.json", true);
nameBirthday.send();



function einBio() {
    let einstein = new XMLHttpRequest();
    einstein.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let einsteinObj = JSON.parse(this.responseText);
            document.getElementById("albertbio").innerHTML = einsteinObj.bio;
            
        }
    };
    einstein.open("GET", "einstein.json", true);
    einstein.send();
}