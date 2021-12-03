const contact_stepper = () => {
    let tabs = document.getElementsByClassName("tab");
    let steps = document.getElementsByClassName("step");
    let idx = 0;

    let currentTab = tabs[idx];
    let currentStep = steps[idx];

    let nextTab = tabs[idx+1];
    let nextStep = steps[idx+1];

    currentTab.style.display = "inline";
    currentStep.classList.add("active");
    nextTab.style.display = "none";


    let boton = document.getElementById("send-button");
    boton.onclick = function(){
        console.log(validar());
        currentStep.classList.remove("active");
        nextStep.classList.add("active");
        currentTab.style.display = "none";
        nextTab.style.display = "inline";
    };
}

contact_stepper();