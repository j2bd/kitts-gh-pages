
'use strict';

(function() {

  var cl = new cloudinary.Cloudinary({cloud_name: "des7ayfwu", secure: true});
  var balise = document.getElementById("imagesjb");


// insertion de mes images au fur et à mesure
  var audi = cl.imageTag('logos/audi', {effect: "colorize", color: "#506690", height: 12, quality: 100, crop: "scale", format: "png"}).toHtml();
  var getaround = cl.imageTag('logos/getaround', {effect: "colorize", color: "#506690", height: 30, quality: 100, crop: "scale", format: "png"}).toHtml();
  var ada = cl.imageTag('logos/ada2', {effect: "colorize", color: "#506690", height: 20, quality: 100, crop: "scale", format: "png"}).toHtml();
  var enterprise = cl.imageTag('logos/enterprise2', {transformation: [
    {effect: "make_transparent:66"},{effect: "colorize", color: "#506690", height: 30, quality: 100, crop: "scale", format: "png"}]}).toHtml();
  //var ouicar = cl.imageTag('logos/ouicar2', {effect: "colorize:30", color: "#506690", height: 15, quality: 100, crop: "scale", format: "png"}).toHtml();
  
  //#0AC5A8 #F76262 #506690 #293462 #FFF1C1
  
  balise.innerHTML = audi + getaround + ada + enterprise ;

})();
