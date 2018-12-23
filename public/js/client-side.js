$("document").ready(() => {
    let burgerName;
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
    let getBurgerNames = () => {
        $.ajax({
            method: "GET",
            url: "/burgers",
            success: (data) => {
                console.log(`GET was successful\n${JSON.stringify(data)}`);
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
            url: "/burgers",
            dataType: "json",
            data: {
                burgerName: burgerName
            },
            success: (data) => {
                console.log(`POST was successful\n${JSON.stringify(data)}`);
                $("#name").val("");
                getBurgerNames();
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
            url: "/burgers",
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