$(function () {

    $(".checkboxes").change(function () {
        var output = "<ul class='resultList'>";
        var searchInput = $("#search_input").val();
        console.log(searchInput);
        var regex = new RegExp(searchInput, "i");
        $.getJSON("Json/products.json", function (data) {
            $.each(data, function (key, value) {
                if ((value.name.search(regex) !== -1) || (value.description.search(regex) !== -1)) {
                    if ($("#" + value.category).is(":checked")) {
                        output += "<li>";
                        output += "<img src='" + value.img + "' alt='" + value.name + "'/>";
                        output += "<h2>" + value.name + "</h2>" + "</br>";
                        output += value.description;
                        output += "</li>";
                    }
                }
            });
            output += "</ul>";
            $("#searchResults").html(output);
        });
    });

    var output = "<ul class='resultList'>";
    $.getJSON("Json/products.json", function (data) {
        $.each(data, function (key, value) {
            if ($("#" + value.category).is(":checked")) {
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

    $("#search_input").keyup(function () {
        var output = "<ul class='resultList'>";
        var searchInput = $(this).val();     
        var regex = new RegExp(searchInput, "i");
        $.getJSON("Json/products.json", function (data) {
            $.each(data, function (key, value) {
                if ((value.name.search(regex) !== -1) || (value.description.search(regex) !== -1)) {
                    if ($("#" + value.category).is(":checked")) {
                        output += "<li>";
                        output += "<img src='" + value.img + "' alt='" + value.name + "'/>";
                        output += "<h2>" + value.name + "</h2>" + "</br>";
                        output += value.description;
                        output += "</li>";
                    }
                }
            });
            output += "</ul>";
            $("#searchResults").html(output);
        });
    });
});