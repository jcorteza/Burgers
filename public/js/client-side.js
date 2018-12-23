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

    $("#btnSubmit").on("click", (event) => {
        event.preventDefault();
        burgerName = $("#name").val().trim();
        console.log(burgerName);
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
                $("#burgers").load(`${document.URL} #burgers>*`);
            },
            error: (error) => {
                console.log(JSON.stringify(error));
            }
        });
    });

    $(".btnDevour").on("click", function(event) {
        console.log("devour button clicked");
        event.preventDefault();
        burgerName = $(this)
            .parent("li")
            .text()
            .replace($(this).text(), "");
        $.ajax({
            method: "PUT",
            url: "/",
            data: {
                burgerName: burgerName
            },
            success: (data) => {
                console.log(`PUT was successful\n${JSON.stringify(data)}`);
                $("#burgers").load(`${document.URL} #burgers *`);
            },
            error: (error) => {
                console.log(JSON.stringify(error));
            }
        });
    });
});