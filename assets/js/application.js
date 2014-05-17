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
    image       : "/rearrange_tiles/assets/images/puzzle1.jpg"
    }


// Rendering template with templateData
$(".container .row .jumbotron").append(
    template(templateData)
);

$('.puzzle').css('background-image', 'url(' + templateData.image + ')');

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


    // Makes source tile opaque again on drop
    dragSrcEl.style.opacity = '1';


    // Removes the border on any tile on drop
    _.each(tiles, function(tile) {
        tile.classList.remove("over");
    });

    // Don't do anything if dropping the same column we're dragging.
    if (dragSrcEl != this) {
        // Increment number of moves
        numMoves++;
        $(".move-count").html("<strong>Moves</strong> : " + numMoves);

        // Set the source column's HTML to the HTML of the column we dropped on.
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }

    var solved = verifyCorrectness();

    if (solved) {
        $(".container .alert-success").css("display" , "block");
    } else {
        $(".container .alert-success").css("display" , "none");
    }

    if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
    }

    return false;
}

function handleDragEnd(e) {
    // Fix for [Issue #2] See readme for more details
    dragSrcEl.style.opacity = '1';
}

var dragSrcEl;
var tiles = $(".container").find(".tile");
var numMoves = 0;
_.each(tiles, function(tile){
    tile.addEventListener('dragstart', handleDragStart, false);
    tile.addEventListener('dragenter', handleDragEnter, false);
    tile.addEventListener('dragover', handleDragOver, false);
    tile.addEventListener('dragleave', handleDragLeave, false);
    tile.addEventListener('dragend', handleDragEnd, false);
    tile.addEventListener('drop', handleDrop, false);

});

verifyCorrectness = function() {
    var previousValue;
    var result = true;
    var pieces = $(".container").find(".puzzle");
    _.each(pieces, function(piece) {
        var currentValue = parseInt(piece.dataset["value"]);
        if (previousValue === undefined || currentValue === previousValue+1) {
            previousValue = currentValue;
        } else {
            result = false;
        }
    });

    return result;
}
