var canvas = new fabric.Canvas('myCanvas') ;
player_x = 10 ;
player_y = 10;
block_img_width = 30 ;
block_img_height = 30 ;
var player_object = "" ;
var block_object = "" ;

function player_update() {
    fabric.Image.fromURL("player.png" , function(IMG){
        player_object = IMG ;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object) ;
    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image , function(IMG){
        block_object = IMG ;
        block_object.scaleToWidth(block_img_width);
        block_object.scaleToHeight(block_img_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object) ;
    });
}


window.addEventListener('keydown' , myKeyDown());
function myKeyDown(e) {
    keypress = e.keyCode ;
    if(e.shiftKey == true && keypress == '80') {
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById('current-width').innerHTML = block_img_width;
        document.getElementById('current-height').innerHTML = block_img_height;
    }
    if(e.shiftKey == true && keypress == '77') {
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById('current-width').innerHTML = block_img_width;
        document.getElementById('current-height').innerHTML = block_img_height;
    }
    if(keypress == '38'){
        up();
    }
    if(keypress == '40'){
        down();
    }
    if(keypress == '37'){
        left();
    }
    if(keypress == '39'){
        right();
    }
    if(keypress == '87'){
        new_image('wall.jpg'); 
    }
    if(keypress == '71'){
        new_image('ground.png'); 
    }
    if(keypress == '87'){
        new_image('yellow_wall.png'); 
    }
    if(keypress == '76'){
        new_image('light_green.png'); 
    }
    if(keypress == '84'){
        new_image('trunk.jpg'); 
    }
    if(keypress == '82'){
        new_image('roof.jpg'); 
    }
    if(keypress == '68'){
        new_image('dark_green.png'); 
    }
    if(keypress == '67'){
        new_image('cloud.jpg'); 
    }
}
