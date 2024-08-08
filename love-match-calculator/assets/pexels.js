//*************************-PEXELS COMPATIBLE-*****************************************
var pexelsImg1 = document.querySelector("#pexels1")
var pexelsUrl1 = document.querySelector("#url-1")

var pexelsImg2 = document.querySelector("#pexels2")
var pexelsUrl2 = document.querySelector("#url-2")

var pexelsImg3 = document.querySelector("#pexels3")
var pexelsUrl3 = document.querySelector("#url-3")

var pexelsImg4 = document.querySelector("#pexels4")
var pexelsUrl4 = document.querySelector("#url-4")

var pexelsImg5 = document.querySelector("#pexels5")
var pexelsUrl5 = document.querySelector("#url-5")

var pexelsImg6 = document.querySelector("#pexels6")
var pexelsUrl6 = document.querySelector("#url-6")

var pexelsImg7 = document.querySelector("#pexels7")
var pexelsUrl7 = document.querySelector("#url-7")

var pexelsImg8 = document.querySelector("#pexels8")
var pexelsUrl8 = document.querySelector("#url-8")


fetch("https://api.pexels.com/v1/search?query=love", {
  headers: {
    Authorization: "563492ad6f917000010000012696f567e48a4f6395dea73b9b1ad62f"
  }
})
  .then(resp => {
    return resp.json()
  })
  .then(data => {
    console.log(data)
    pexelsImg1.setAttribute("src", data.photos[11].src.medium);
    pexelsUrl1.setAttribute("href", data.photos[11].photographer_url);

    pexelsImg2.setAttribute("src", data.photos[2].src.medium);
    pexelsUrl2.setAttribute("href", data.photos[2].photographer_url);

    pexelsImg3.setAttribute("src", data.photos[3].src.medium);
    pexelsUrl3.setAttribute("href", data.photos[3].photographer_url);

    pexelsImg4.setAttribute("src", data.photos[4].src.medium);
    pexelsUrl4.setAttribute("href", data.photos[4].photographer_url);

    pexelsImg5.setAttribute("src", data.photos[10].src.medium);
    pexelsUrl5.setAttribute("href", data.photos[10].photographer_url);

    pexelsImg6.setAttribute("src", data.photos[6].src.medium);
    pexelsUrl6.setAttribute("href", data.photos[6].photographer_url);

    pexelsImg7.setAttribute("src", data.photos[8].src.medium);
    pexelsUrl7.setAttribute("href", data.photos[8].photographer_url);

    pexelsImg8.setAttribute("src", data.photos[9].src.medium);
    pexelsUrl8.setAttribute("href", data.photos[9].photographer_url);
  })





//------------Button for Pexels--------------

//Display Images on Button click
$(document).ready(function () {
  $(".gallery").hide();
  $(".pexels-btn").click(function () {
    $(".gallery").toggle();
  });
});

//-----------------------------------------------------------------------------------
//**************************-PEXELS NOT COMPATIBLE-*********************************

var pexelsImg01 = document.querySelector("#pexels01")
var pexelsUrl01 = document.querySelector("#url-01")

var pexelsImg02 = document.querySelector("#pexels02")
var pexelsUrl02 = document.querySelector("#url-02")

var pexelsImg03 = document.querySelector("#pexels03")
var pexelsUrl03 = document.querySelector("#url-03")

var pexelsImg04 = document.querySelector("#pexels04")
var pexelsUrl04 = document.querySelector("#url-04")

var pexelsImg05 = document.querySelector("#pexels05")
var pexelsUrl05 = document.querySelector("#url-05")

var pexelsImg06 = document.querySelector("#pexels06")
var pexelsUrl06 = document.querySelector("#url-06")

var pexelsImg07 = document.querySelector("#pexels07")
var pexelsUrl07 = document.querySelector("#url-07")

var pexelsImg08 = document.querySelector("#pexels08")
var pexelsUrl08 = document.querySelector("#url-08")


fetch("https://api.pexels.com/v1/search?query=daredevil", {
  headers: {
    Authorization: "563492ad6f917000010000012696f567e48a4f6395dea73b9b1ad62f"
  }
})
  .then(resp => {
    return resp.json()
  })
  .then(data => {
    console.log(data)
    pexelsImg01.setAttribute("src", data.photos[1].src.medium);
    pexelsUrl01.setAttribute("href", data.photos[1].photographer_url);

    pexelsImg02.setAttribute("src", data.photos[2].src.medium);
    pexelsUrl02.setAttribute("href", data.photos[2].photographer_url);

    pexelsImg03.setAttribute("src", data.photos[3].src.medium);
    pexelsUrl03.setAttribute("href", data.photos[3].photographer_url);

    pexelsImg04.setAttribute("src", data.photos[4].src.medium);
    pexelsUrl04.setAttribute("href", data.photos[4].photographer_url);

    pexelsImg05.setAttribute("src", data.photos[5].src.medium);
    pexelsUrl05.setAttribute("href", data.photos[5].photographer_url);

    pexelsImg06.setAttribute("src", data.photos[6].src.medium);
    pexelsUrl06.setAttribute("href", data.photos[6].photographer_url);

    pexelsImg07.setAttribute("src", data.photos[8].src.medium);
    pexelsUrl07.setAttribute("href", data.photos[8].photographer_url);

    pexelsImg08.setAttribute("src", data.photos[9].src.medium);
    pexelsUrl08.setAttribute("href", data.photos[9].photographer_url);
  })
