const ayirishBtn = document.getElementById("ayirishBtn")
const boshidanBtn = document.getElementById("boshidanBtn")
const qoshishBtn = document.getElementById("qoshishBtn")
const countlabel = document.getElementById("countlabel")
let coun = 0;

qoshishBtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
ayirishBtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}
boshidanBtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}


