var data = document.getElementById("container");
var c= 1;
function newlist () {
    for (var i = 0; i < 25; i++) {
        var item = document.createElement('li');
        item.id="list"
        item.innerText = 'Masai Student ' + c++;
        data.appendChild(item);

    }
}
data.addEventListener('scroll', function () {
    if (data.scrollTop + data.clientHeight >= data.scrollHeight) {
        newlist();
    }
});
newlist();