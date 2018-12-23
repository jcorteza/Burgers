$("document").ready(() => {
    let burgerName;
    let getBurgerNames = () => {
        $.ajax({
            method: "GET",
            url: "/",
            success: () => {
                console.log("render was successful");
            },
            error: (error) => {
                console.log(JSON.stringify(error));
            }
        });
    }

    getBurgerNames();

    $("#btnSubmit").on("click", (event) => {
        event.preventDefault();
        burgerName = $("#name").val().trim();
        $.ajax({
            method: "POST",
            url: "/",
            data: {
                burgerName: burgerName
            },
            success: (data) => {
                console.log("POST was successful");
                $("#name").val("");
                // getBurgerNames();
            },
            error: (error) => {
                console.log(JSON.stringify(error));
            }
        });
    });

    $(".btnDevour").on("click", function(event) {
        event.preventDefault();
        let clicked = $("this");
        $.ajax({
            method: "PUT",
            url: "/",
            data: {
                burgerName: burgerName
            },
            success: (data) => {
                console.log(`PUT was successful\n${JSON.stringify(data)}`);
                clicked.parent("li").remove();
            },
            error: (error) => {
                console.log(JSON.stringify(error));
            }
        });
    });
});