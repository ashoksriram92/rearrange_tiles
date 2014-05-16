/**
 * Created by ashoksrirampandian on 16/05/14.
 */
_.templateSettings.variable = "data";

// Pre-compiling the template
var template = _.template(
    $(".template").html()
);

// Data against which the template will be rendered
var templateData = {
    rows        : 3,
    contents    : [
        {
            image   :   "assets/images/1.jpeg",
            value   :   1
        },
        {
            image   :   "assets/images//2.jpeg",
            value   :   2
        },
        {
            image   :   "assets/images/3.jpeg",
            value   :   3
        },
        {
            image   :   "assets/images/4.jpeg",
            value   :   4
        },
        {
            image   :   "assets/images/5.jpeg",
            value   :   5
        },
        {
            image   :   "assets/images/6.jpeg",
            value   :   6
        },
        {
            image   :   "assets/images/7.jpeg",
            value   :   7
        },
        {
            image   :   "assets/images/8.jpeg",
            value   :   8
        },
        {
            image   :   "assets/images/9.jpeg",
            value   :   9
        }
        ]
    }


// Rendering template with templateData
$(".container").append(
    template(templateData)
);