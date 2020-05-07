var client = new XMLHttpRequest();
client.open('GET' ,'/home/markzuck/Desktop/RnD site/t.txt');
client.onreadystatechange = function() {
  alert("hi");
}
client.send();