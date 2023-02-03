


// Membuat Object

// cara  - object literal
// var obj = { nama : 'Azmi', usia : '25'};
// obj.halo = function() {
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();



// cara 2 - function declaration
// function halo(){
//     console.log(this);
//     console.log('halo');
// }
// halo();




// cara 3 - constructor
function Halo(){
    console.log(this);
    console.log('halo');
}
new Halo();