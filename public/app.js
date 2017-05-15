var createList = function(){
  var catListUL = document.createElement("ul");
  catListUL.classList.add("cat");
  return catListUL;  
}

var createName = function(name){
  var catListName = document.createElement("li");
  catListName.innerText = "Name: " + name;
  return catListName;
}

var createFavFood = function(food){
  var catListFood = document.createElement("li");
  catListFood.innerText = "Favourite Food: " + food;
  return catListFood;
}

var createImgList = function(){
  var catListPicture = document.createElement("li");
  return catListPicture;
}

var createImg = function(imageLink){
  var catListPictureImg = document.createElement("img");
  catListPictureImg.setAttribute("src",imageLink);
  catListPictureImg.setAttribute("width","500");
  return catListPictureImg;
}

var appendAll = function(sectionId, catList, name, food, picture, pictureImg){
  catList.appendChild(name);
  catList.appendChild(food);
  catList.appendChild(picture);
  picture.appendChild(pictureImg);

  var cats = document.getElementById(sectionId);
  cats.appendChild(catList);
}

var addCat = function(name, food, link){
  var catListUL = createList();
  var catListName = createName(name);
  var catListFood = createFavFood(food);
  var catListPicture = createImgList();
  var catListPictureImg = createImg(link);

  appendAll("cats", catListUL, catListName, catListFood, catListPicture, catListPictureImg);
}

var catsToAdd = [
  {name: "Boba", food: "Sock Fluff", link: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
  {name: "Barnaby", food: "Tuna", link: "http://4.bp.blogspot.com/-XkviAtJ1s6Q/T3YFb2RUhDI/AAAAAAAAAVQ/EHomLZlFMKo/s1600/small+cat.jpg"},
  {name: "Max", food: "Whiskas Temptations", link: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
  {name: "Marbles", food: "Tuna", link: "http://www.pets4homes.co.uk/images/articles/1111/large/feline-influenza-all-about-cat-flu-5239fffd61ddf.jpg"},
];


var app = function(){

for (var cat of catsToAdd){
  addCat(cat.name, cat.food, cat.link);
}

}

window.onload = app;
