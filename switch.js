var item = prompt('masukan nama makanan \n (cth: nasi, daging, susu, hamburger, softdrink)');

switch( item ){
    case 'nasi':  
    case 'daging':   
    case 'susu':
        alert('makanan / minuman SEHAT!');
        break;
    case 'hamburger':
    case 'softdrink':
        alert('makanan / minuman TIDAK SEHAT!');
        break;
    default:
        alert('makanan / minuman yang anda masukan salah.')
}