$(function () {
    var output = "<ul class='resultList'>";
    $.getJSON("Json/products.json", function (data) {
        $.each(data, function (key, value) {
                output += "<li>";
                output += "<img src='" + value.img + "' alt='" + value.name + "'/>";
                output += "<h2>" + value.name + "</h2>" + "</br>";
                output += value.description;
                output += "</li>";
        });
        output += "</ul>";
        $("#searchResults").html(output);
    });

    $("#search_input").keyup(function () {
        var searchInput = $(this).val();
        var output = "<ul class='resultList'>";
        var regex = new RegExp(searchInput, "i");
        $.getJSON("Json/products.json", function (data) {
            $.each(data, function (key, value) {
                if ((value.name.search(regex) !== -1) || (value.description.search(regex) !== -1)) {
                    output += "<li>";
                    output += "<img src='" + value.img + "' alt='" + value.name + "'/>";
                    output += "<h2>" + value.name + "</h2>" + "</br>";
                    output += value.description;
                    output += "</li>";
                }
            });
            output += "</ul>";
            $("#searchResults").html(output);
        });
    });
});