function onInputClick() {
  console.log('checked');
  var checkBox = document.getElementById('switch');
  var monthPrice = document.getElementsByClassName('monthPrice');
  var yearPrice = document.getElementsByClassName('yearPrice');
  // if(checkBox.checked) {
    for(var i=0; i< monthPrice.length; i++) {
      monthPrice[i].style.display = checkBox.checked ? 'block' : 'none';
      yearPrice[i].style.display = checkBox.checked ? 'none' : 'block';
    }
}