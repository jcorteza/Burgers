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
        burgerName = $(this).parent("li").text();
        $.ajax({
            method: "PUT",
            url: "/",
            data: {
                burgerName: burgerName
            },
            success: (data) => {
                console.log(`PUT was successful\n${JSON.stringify(data)}`);
            },
            error: (error) => {
                console.log(JSON.stringify(error));
            }
        });
    });
});