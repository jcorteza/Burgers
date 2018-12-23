$("document").ready(() => {
    let burgerName;
    let getBurgerNames = () => {
        $.ajax({
            method: "GET",
            url: "/",
            dataType: "json",
            success: () => {
                console.log("GET was successful");
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
            dataType: "json",
            data: {
                burgerName: burgerName
            },
            success: () => {
                console.log(`${burgerName} successfully added to database or updated in db.`);
                $("#name").val("");
                getBurgerNames();
            },
            error: (error) => {
                console.log(error);
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
            success: () => {
                console.log(`${burgerName} successfully changed to devoured`);
                clicked.parent("li").remove();
            },
            error: (error) => {
                console.log(error);
            }
        });
    });
});