// document.querySelector("button").addEventListener("click", () => {
    
//     document.querySelector("button").classList.remove("not-clicked");
//     document.querySelector("button").classList.add("clicked");
//     document.querySelector("button").textContent = "COPIED";

//     setTimeout(() => {
//         document.querySelector("button").classList.remove("clicked");
//         document.querySelector("button").classList.add("not-clicked");
//         document.querySelector("button").textContent = "COPY";
//     }, 1500);
// });

$(document).ready(function() {
    $("button").on("click", function() {
        $(this).removeClass("not-clicked").addClass("clicked").text("COPIED");

        // copying mechanism
        $("#message").select();
        document.execCommand("copy");

        setTimeout(() => {
            $(this).removeClass("clicked").addClass("not-clicked").text("COPY");
        }, 1500);
    });
});
