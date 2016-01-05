$(function () {
    $("#search_input").keyup(function () {
        var searchInput = $(this).val();
        console.log($(this).val());
        var output = "<ul>";
        var regex = new RegExp(searchInput, "i");
        $.getJSON("Json/products.json", function (data) {
            $.each(data, function (key, value) {
                if ((value.name.search(regex) !== -1) || (value.description.search(regex) !== -1)) {
                    console.log("Found");
                    output += "<li>";
                    output += "<img src='" + value.img + "' alt='" + value.name + "'/>";
                    output += value.name + "</br>";
                    output += value.description;
                    output += "</li>";               
                }
                output += "</ul>";
                $("#searchResults").html(output);
            });
        });
    });
});