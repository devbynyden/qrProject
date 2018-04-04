QRReader.init("#webcam");
    function scan() {
        QRReader.scan(function (result) {
            var list = document.getElementById("list");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(result));
            list.appendChild(li);
            setTimeout(scan, 200);
        });
    }
scan();
