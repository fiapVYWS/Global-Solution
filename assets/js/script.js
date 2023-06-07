const toggleDiv = document.getElementById("toggleDiv");
        const buttonToggle = document.getElementById("buttonToggle");

        function buttonClick() {
            if (toggleDiv.style.display !== "none"){
                toggleDiv.style.display = "none";
            } else {
                toggleDiv.style.display = "flex";
            }
}