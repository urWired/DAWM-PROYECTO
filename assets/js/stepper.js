const contact_stepper = () => {
    var currentTab = 0;
    showTab(currentTab);
    
    function showTab(n) {
        var x = document.getElementsByClassName("tab");

        if (n==0){
            x[0].style.display = "inline";
            x[1].style.display = "none";
        }else if (n==1){
            x[1].style.display = "inline";
            x[0].style.display = "none";
        }
        
        fixStepIndicator(n);
    }

    let boton = document.getElementById("send-button");

    boton.onclick = function nextTab() {
        var x = document.getElementsByClassName("tab");
        if(currentTab == 0 && !validateForm()){
            alert("Hay campos incompletos en el formulario!")
            return false;
        } 

        x[currentTab].style.display = "none";
        currentTab = currentTab + 1;

        showTab(currentTab);
    }

    function validateForm() {
        var x, y, i, valid = true;
        x = document.getElementsByTagName("tab");

        inp_nombres = document.getElementById("form-nombres");
        inp_apellidos = document.getElementById("form-apellidos");
        inp_fecha = document.getElementById("form-fecha");
        inp_ciudad = document.getElementById("inputState");
        inp_correo = document.getElementById("exampleInputEmail1");

        y= [inp_nombres, inp_apellidos, inp_fecha, inp_ciudad, inp_correo];

        for(i = 0 ; i < y.length; i++){
            if(y[i].value == "") {
                y[i].classList.add("invalid");
                valid = false;
            }else{
                y[i].classList.remove("invalid");
            }
        }

        if (valid) {
            document.getElementsByClassName("step")[currentTab].className += " finish";
        }
        return valid;
    }

    function fixStepIndicator(n) {
        var i, x = document.getElementsByClassName("step");
        for(i = 0; i < x.length; i++) {
            x[i].className = x[i].className.replace(" active", "");
        }
        x[n].className += " active";
    }
}

contact_stepper();