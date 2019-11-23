function getSum() {
            var numbers = document.getElementsByTagName(oninput);
            var s = 0;
            for(var i = 0; i <= numbers.length  ; i++){
                var item = numbers[i];
                s += parseInt(item.nodeValue, 10);
            }
            alert(s);
}