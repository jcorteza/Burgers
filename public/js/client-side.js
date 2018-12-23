$("document").ready(() => {
    let burgerName;
    
    $.ajax({
        method: "GET",
        url: "/",
        error: (error) => {
            console.log(JSON.stringify(error));
        }
    });

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
                $("#name").val("");
                location.reload();
            },
            error: (error) => {
                console.log(JSON.stringify(error));
            }
        });
    });

    $(".btnDevour").on("click", function(event) {
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
            success: () => {
                location.reload();
            },
            error: (error) => {
                console.log(JSON.stringify(error));
            }
        });
    });
});