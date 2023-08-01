/*
- Keszits AJAX hivast amivel lekered az lokaciokat
- A lokaciokat jelenitsd meg BS tablaban
- A megjelenitendo adatok:
    - Name
    - Type
    - Dimension
*/

var xhr = new XMLHttpRequest();
xhr.open("get", "https://rickandmortyapi.com/api/location");
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var json = JSON.parse(xhr.responseText);
        
        for(var i = 0; i < json.results.length; i++){
            console.log(json.results[i]);

            var tr = document.createElement("tr");

            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");

            td1.appendChild(document.createTextNode(json.results[i].name));
            td2.appendChild(document.createTextNode(json.results[i].type));
            td3.appendChild(document.createTextNode(json.results[i].dimension));

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);

            document.getElementById("torzs").appendChild(tr);
        }
    }
};
xhr.send(null);