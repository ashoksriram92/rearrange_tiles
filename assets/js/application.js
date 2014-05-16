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
            value   :   0
        },
        {
            image   :   "assets/images//2.jpeg",
            value   :   1
        },
        {
            image   :   "assets/images/3.jpeg",
            value   :   2
        },
        {
            image   :   "assets/images/4.jpeg",
            value   :   3
        },
        {
            image   :   "assets/images/5.jpeg",
            value   :   4
        },
        {
            image   :   "assets/images/6.jpeg",
            value   :   5
        },
        {
            image   :   "assets/images/7.jpeg",
            value   :   6
        },
        {
            image   :   "assets/images/8.jpeg",
            value   :   7
        },
        {
            image   :   "assets/images/9.jpeg",
            value   :   8
        }
        ]
    }


// Rendering template with templateData
$(".container").append(
    template(templateData)
);


// DragNDrop eventListeners
// TODO Structure code better using Backbone.js
function handleDragStart(e) {
    this.style.opacity = '0.4';
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'all';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
    }

    e.dataTransfer.dropEffect = 'all';  // See the section on the DataTransfer object.

    return false;
}

function handleDragEnter(e) {
    // this / e.target is the current hover target.
    this.classList.add('over');
}

function handleDragLeave(e) {
    this.classList.remove('over');  // this / e.target is previous target element.
}

function handleDrop(e) {

    if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
    }

    // Makes source tile opaque again on drop
    dragSrcEl.style.opacity = '1';

    // Removes the border on any tile on drop
    _.each(tiles, function(tile) {
        tile.classList.remove("over");
    });

    // Don't do anything if dropping the same column we're dragging.
    if (dragSrcEl != this) {
        // Set the source column's HTML to the HTML of the column we dropped on.
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }

    return false;
}

function handleDragEnd(e) {
    // Nothing needed as of now
}

var dragSrcEl;
var tiles = $(".container").find(".tile");
_.each(tiles, function(tile){
    tile.addEventListener('dragstart', handleDragStart, false);
    tile.addEventListener('dragenter', handleDragEnter, false);
    tile.addEventListener('dragover', handleDragOver, false);
    tile.addEventListener('dragleave', handleDragLeave, false);
    tile.addEventListener('dragend', handleDragEnd, false);
    tile.addEventListener('drop', handleDrop, false);

});

