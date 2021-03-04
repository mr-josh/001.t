// ===== Plain Javascript ===== //

// Wait for page to load
document.addEventListener("DOMContentLoaded", function(){

    // Get all the like buttons
    Array.from(document.getElementsByClassName("like-button-v")).forEach(element => {
        // element = each like button

        // Add a "click" listener
        element.addEventListener("click", e => {
            // Select the icon
            let icon = element.querySelector(".like-icon");

            // If the icon text is "favorite" then change to the border version, else switch back
            if (icon.innerText == "favorite") {
                icon.innerText = "favorite_border";
            } else {
                icon.innerText = "favorite";
            }
        });

    });
});

// ===== jquery ===== //

// Wait for the page to load
$(document).ready(() => {

    // Get all the like buttons, and add the "click" listener
    $(".like-button-j").click(function(e) {
        // this = each like button

        // If the icon text is "favorite" then change to the border version, else switch back
        if ($(this).children('.like-icon').text() == "favorite") {
            $(this).children('.like-icon').text("favorite_border");
        } else {
            $(this).children('.like-icon').text("favorite");
        }
    });
});