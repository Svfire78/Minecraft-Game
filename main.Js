var canvas=new fabric.Canvas('mycanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_hight = 30;

var player_object = "";
var block_image_object = "";

function player_update(){
    fabric.Image.fromURL("player.png",function(){
        player_object=Img;
        player_object.scaletowidth(150);
        player_object.scaletogheight(120);
        player_object.set({
            top:player_y,
            left:player_x

        });
        canvas.add(player_object);
    })
}


function new_image(get_image){
    fabric.Image.fromURL("get_image",function(Img){
        block_image_object=Img;
        block_image_object.scaletowidth(block_image_width);
        block_image_object.scaletogheight(block_image_hight);
        block_image_object.set({
            top:player_y,
            left:player_x

        });
        canvas.add(block_image_object);
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    if (keyPressed=='16'&& keyPressed=='80'){
        block_image_width +=10;
        block_image_hight +=20;
        document.getElementById("current_width").innerHTML=block_image_width
        document.getElementById("current_height").innerHTML=block_image_height
    }
    if (keyPressed=='16'&& keyPressed=='80'){
        block_image_width -=10;
        block_image_hight -=20;
        document.getElementById("current_width").innerHTML=block_image_width
        document.getElementById("current_height").innerHTML=block_image_height
} 


if (keyPressed == '38'){
    up();
    console.log("up");
}

if (keyPressed == '40'){
    down();
    console.log("down");
}

if (keyPressed == '37'){
    left();
    console.log("left");
}

if (keyPressed == '39'){
    right();
    console.log("right");
}

if (keyPressed == '87'){
    new_image('wall.jpg');
    console.log("w");
}

if (keyPressed == '71'){
    new_image('ground.png');
    console.log("a");
}

if (keyPressed == '76'){
    new_image('light_green.png');
    console.log("d");
}

if (keyPressed == '84'){
    new_image('trunk.jpg');
    console.log("s");
}

if (keyPressed == '82'){
    new_image('roof.jpg');
    console.log("e");
}

if (keyPressed == '89'){
    new_image('yellow_wall.png');
    console.log("q");
}

if (keyPressed == '68'){
    new_image('dark_green.png');
    console.log("r");
}

if (keyPressed == '85'){
    new_image('unique.png');
    console.log("f");
}

if (keyPressed == '67'){
    new_image('cloud.jpg');
    console.log("t");
}

}

function up() {
    if (player_y >= 0){
        player_y = player_y - block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y >= 510){
        player_y = player_y + block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x > 0){
        player_x = player_x - block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 850){
        player_x = player_x + block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}