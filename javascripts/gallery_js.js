function imageInfo(id, picture, date, title, descLong) {
    this.id = id;
    this.picture = picture;
    this.date = date;
    this.title = title;
    this.descLong = descLong;
}

var images = ["",
 
    new imageInfo(
        6,
        "images/gallery/fun.jpg",
        "Mar 19, 2018",
        "Fun! fun! fun!",
        "This is what we love doing, fun after fun! Thanks to Miss Shee who took us through the exercise. It was awesome!"
    ),
    new imageInfo(
        7,
        "images/gallery/billboard.jpg",
        "Sept 8, 2018",
        "Games and fun",
        "what can an actuarial mind not do? Absolutely nothing! Section of actuarial science studentns enjoying scrabble game."
    ),
    new imageInfo(
        8,
        "images/gallery/iten.jpg",
        "Mar 19, 2018",
        "People Gone Crazy",
        "Actuarial science ladies who attended the event looks to have a lot of fun. We love them though!"
    ),
    new imageInfo(
        9,
        "images/gallery/itenhike.jpg",
        "Oct 20, 2018",
        "Iten Hike",
        "UEASA team organised a hike to iten. One of the cool place around Chep you can have fun and appreciate beauty of the universe. All the actuarial science who attended loved the place!."
    ),
    new imageInfo(
        10,
        "images/gallery/hotsunday.jpg",
        "Aug 27, 2019",
        "Hot sun-day",
        "Actuarial science students hunging out on a hot sun day, they seem to be conteted by the scorching sun, definately a good place and best way to interact!."
    ),
    new imageInfo(
        11,
        "images/gallery/congressman.jpg",
        "Aug 27, 2019",
        "Congressman",
        "UEASA seems to be standing out at entire university by producing school of science congressman. Noel Wanzalla be his name, also delivers his speech during the event. Claims Ronaldo(footballer) to be his role model- UEASA appreciates his sence of humour."
    ),
    new imageInfo(
        12,
        "images/gallery/chairperson.jpg",
        "Aug 27, 2019",
        "UEASA chairperson",
        "Mr. Hillary Onyango, the chairperson of the association also Delivers his speech at the event. UEASA appreciate his leadership qualities that has moved UEASA huge steps forwad. God bless you!!."
    ),
    new imageInfo(
        13,
        "images/gallery/kimeli.jpg",
        "Aug 27, 2019",
        "Guest speaker",
        "Dr. Kimeli who is also UEASA patron, graced the event on data analysis land machine learning techniques. He was also Joined along with Dr. Sewe and Mr. Herbat (lectures at the university of Eldoret).Lucky as UEASA to have them around!!"
    ),
    new imageInfo(
        14,
        "images/gallery/actuarialday.jpg",
        "Aug 27, 2019",
        "UEASA Actuarial day",
        "An event organised by UEASA to unbox actuarial minds beyond actuarial tables. It was an internal event at the start of 2019/2020 Academic year. Machine learning and related technologies was the highlights of the event. More than 90 actuarial science students attended the event."
    )
];

var row = document.querySelector(".holder .row");

var i, l = images.length;
for (i = 1; i < l; i++){
    var div = document.createElement("div");
    div.setAttribute("class", "box");
    div.setAttribute("id", "box" + images[i].id);
    row.appendChild(div);

    var box = document.querySelector("#box" + images[i].id);

    box.innerHTML = `
        <div class="img-holder"></div>
            <div class="content">
            <p>` + images[i].date + `</p>
                <br>
                <h3>` + images[i].title + `</h3>
                <p>` + images[i].descLong + `</p>
                <div class="social">
                    <i id="grin" class="fas fa-grin"></i>
                    <i id="hearts" class="fas fa-grin-hearts"></i>
                    <i id="flushed" class="fas fa-flushed"></i>
                    <i id="laugh" class="fas fa-grin-squint-tears"></i>
                    <i id="stars" class="fas fa-grin-stars"></i>
                    <i id="angry" class="fas fa-angry"></i>
                </div>
            </div>
        </div>
    `;
    var emojis = document.querySelectorAll("#box" + images[i].id + " .social i");
    var j;
    for (j = 0; j < emojis.length; j++){
        emojis[j].id = emojis[j].id + images[i].id;
        emojis[j].classList.add("animated");
        emojis[j].setAttribute("onclick", "changeLike('" + images[i].id + "',this)");
    }
    var imgHolder = document.querySelector("#box" + images[i].id + " .img-holder");
    imgHolder.style.backgroundImage = "url(" + images[i].picture + ")";
}

if (localStorage["arr_emoji"] === undefined){
    var arr_emoji = [""];
    for (i = 1; i < l; i++){
        arr_emoji.push("");
    }
    localStorage["arr_emoji"] = JSON.stringify(arr_emoji);
}

function changeLike(img_id, emoji){
    if(emoji.style.color != "rgb(226, 71, 71)"){

        //unset all the emojis
        var emojis = document.querySelectorAll("#box" + img_id + " .social i");
        var j;
        for (j = 0; j < emojis.length; j++){
            emojis[j].classList.remove("bounce");
            emojis[j].style.color = "rgba(33, 33, 33, 0.5)";
            
        }
            // if (emojis[j].style.color == "rgb(226, 71, 71)"){
            var arr_emoji = localStorage["arr_emoji"];
            arr_emoji = JSON.parse(arr_emoji);
            arr_emoji[img_id] = emoji.id;
            arr_emoji = JSON.stringify(arr_emoji);
            localStorage["arr_emoji"] = arr_emoji;
            
            emoji.classList.add("bounce");
            emoji.style.color = "rgb(226, 71, 71)";
    }
    else if(emoji.style.color == "rgb(226, 71, 71)"){
        var arr_emoji = localStorage["arr_emoji"];
        arr_emoji = JSON.parse(arr_emoji);
        arr_emoji[img_id] = "";
        arr_emoji = JSON.stringify(arr_emoji);
        localStorage["arr_emoji"] = arr_emoji;
        emoji.classList.remove("bounce");
        emoji.style.color = "rgba(33, 33, 33, 0.5)";
    }
}

function updateEmojis(){
    var arr_emoji = localStorage["arr_emoji"];
    arr_emoji = JSON.parse(arr_emoji);
    var x;
    for (x = 1; x < arr_emoji.length; x++){
        if (arr_emoji[x] != ""){
            var emoji = document.getElementById(arr_emoji[x]);
            emoji.style.color = "rgb(226, 71, 71)";
        }
    }
}

window.onload = updateEmojis();