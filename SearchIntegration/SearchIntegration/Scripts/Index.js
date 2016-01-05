$(function () {
    $("#search_input").keyup(function () {
        var searchInput = $(this).val();
        var regex = new RegExp(searchInput, "i");

        $.getJSON("Json/drinks.json", function (data) {
            var output = "<ul>";
            $.each(data.drinks, function (key, value) {
                if ((value.name.search(regex) !== -1) || (value.description.search(regex) !== -1)) {
                    output += "<li>";
                    output += "<img src='" + value.img + "' alt='" + value.name + "'/>";
                    output += value.name + "</br>";
                    output += value.description;
                    output += "</li>";
                }
            });
            output += "</ul>";
            $("#searchResults").html(output);
        });
    });
});