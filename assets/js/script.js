const toggleDiv = document.getElementById("toggleDiv");
        const buttonToggle = document.getElementById("buttonToggle");

        function buttonClick() {
            if (toggleDiv.style.display !== "flex"){
                toggleDiv.style.display = "flex";
            } else {
                toggleDiv.style.display = "none";
            }
}