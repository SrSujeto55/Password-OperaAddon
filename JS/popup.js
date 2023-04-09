const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$",
"%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
const GenBtn = document.querySelector("#Generate-Btn");
const fstGen = document.querySelector("#Gen1-Password");
const sndGen = document.querySelector("#Gen2-Password");
const trdGen = document.querySelector("#Gen3-Password");

GenBtn.addEventListener('click', function(){
    generate();
})

// fstGen.addEventListener('mouseover', function() {
//     console.log("HOVERED THE FST PASS");
// })
// sndGen.addEventListener('mouseover', function() {
//     console.log("HOVERED THE SND PASS");
// })
// trdGen.addEventListener('mouseover', function() {
//     console.log("HOVERED THE TRD PASS");
// })

// fstGen.addEventListener('click', function() {
//     console.log("CLICKED THE FST PASS");
// })
// sndGen.addEventListener('click', function() {
//     console.log("CLICKED THE SND PASS");
// })
// trdGen.addEventListener('click', function() {
//     console.log("CLICKED THE TRD PASS");
// })

function generate() {
    let firtsPass = "";
    let sencondPass = "";
    let thirdPass = "";
    
    for(let i = 0; i < 15; i++){
        firtsPass += characters[Math.floor(Math.random()*91)];
        sencondPass += characters[Math.floor(Math.random()*91)];
        thirdPass += characters[Math.floor(Math.random()*91)];
    }

    fstGen.textContent = firtsPass;
    sndGen.textContent = sencondPass;
    trdGen.textContent = thirdPass;
}
