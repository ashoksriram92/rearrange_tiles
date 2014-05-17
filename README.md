rearrange_tiles
===============

A simple javascript based game where the player has to rearrange a set of jumbled tiles in the correct order.

Input:
------
A 9X9 board with parts of an image scrambled in some random order. 

End condition:
--------------
A board contains a complete image

Game rules:
-----------
- Player can drag and drop tiles.
- Dropping a tile will swap the two tiles.
- Number of moves taken to complete the puzzle is shown

Future improvements:
--------------------
- Player has to arrange the tiles within a given time.
- Difficulty level -> lesser time to arrange, more tiles
- Make board size customizable
- Player can upload image which can be used to play the game

Tools and Libraries:
--------------------
Planning to use 
- jQuery        ->  Imagine life without this?
- Backbone.js   ->  Front End framework
- Underscore.js ->  templating

Additional details:
-------------------
No server side.
No plans to host app.

Status:
-------
P0 requirements are done. Game is ready to be played

Open issue:
-----------
- Upon completion of the game, the last moved tile (the associated image) is opened by default. Should suppress it. [Closed]
- Dragging tiles outside the container makes it translucent, even after the tile is dropped (albeit outside the container) [Closed]
