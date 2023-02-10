var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "img/sun.png";
    }else{
        icon.src ="img/moon.png" ;
    }
}

function storeData(v){
    var txtInput = document.getElementById('txtInput');
    var oldValue = txtInput.value;
    var t = oldValue.length;
    var lastChr = oldValue[t-1];
    

    var oprSym = ["+","-","*",".","/","%"];
    if(oprSym.includes(v)){
        if(oprSym.includes(lastChr)){
            var removeLast = oldValue.slice(0,-1);
            txtInput.value = removeLast+v;

        }else{
            txtInput.value=oldValue+v;
        }
    }else{
        txtInput.value=oldValue+v;
    }
}

function calData(){
    var txtInput = document.getElementById('txtInput');
    var oldValue = eval(txtInput.value);
    txtInput.value=oldValue;
}
   
function clrData(){
    var txtInput = document.getElementById('txtInput').value='';
}

function clrBack(){
    var txtInput = document.getElementById('txtInput')
}


