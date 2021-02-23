function teamInfo(id, picture, title, descShort, descLong) {
    this.id = id;
    this.picture = picture;
    this.title = title;
    this.descShort = descShort;
    this.descLong = descLong;
}

function headsInfo(id, teamId, firstName, lastName, facebook, instagram, linkedin, twitter, picture){
    this.id = id;
    this.teamId = teamId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.facebook = facebook;
    this.instagram = instagram;
    this.linkedin = linkedin;
    this.twitter = twitter;
    this.picture = picture;
}

var heads = ["",
    new headsInfo(
        1,
        1,
        "Neville ",
        "Maloba",
        "#",
        "#",
        "#",
        "#",
        "images/cessteam/nevo.jpg"
    ),
    new headsInfo(
        2,
        1,
        "Assistant ",
        "Saini",
        "#",
        "#",
        "#",
        "#",
        "images/cessteam/nevo.jpg"
    ),
    new headsInfo(
        3,
        2,
        "Rodgers",
        "Ndocha",
        "#",
        "#",
        "#",
        "#",
        "images/cessteam/Rodgers.jpg"
    ),
   
   
    new headsInfo(
        4,
        2,
        "Assistant",
        "",
        "#",
        "#",
        "#",
        "#",
        "images/cessteam/Rodgers.jpg"
    ),
    new headsInfo(
        5,
        3,
        "Fabish ",
        "Nyamweya",
        "#",
        "#",
        "#",
        "#",
        "images/cessteam/fabsh.jpg"
    ),
    new headsInfo(
        6,
        3,
        "Assistant",
        "",
        "#",
        "#",
        "#",
        "#",
        "images/cessteam/fabsh.jpg"
    ),
    new headsInfo(
        7,
        4,
        "Paul",
        "Kebaso",
        "#",
        "#",
        "#",
        "#",
        "images/cessteam/paul.jpg"
    ),
    new headsInfo(
        8,
        4,
        "Assistant",
        "",
        "#",
        "#",
        "#",
        "#",
        "images/cessteam/paul.jpg"
    ),
    new headsInfo(
        9,
        5,
        "Hillary",
        "Onyango",
        "#",
        "#",
        "#",
        "#",
        "images/cessteam/hilla.jpg"
    ),
    new headsInfo(
        10,
        5,
        "Janet",
        "Cherono",
        "#",
        "#",
        "#",
        "#",
        "images/cessteam/janet.jpg"
    ),
    new headsInfo(
        11,
        6,
        "Noel",
        "Wanzalla",
        "#",
        "#",
        "#",
        "#",
        "images/cessteam/Noel.jpg"
    ),
    new headsInfo(
        12,
        6,
        "Assistant",
        "",
        "#",
        "#",
        "#",
        "#",
        "images/cessteam/Noel.jpg"
    ),
    
];

var teams = ["",
    new teamInfo(
        1,
        'images/teams/technical.jpg',
        "Incubation & project design Team",
       "We promote and organise for weekly projects.",
        "We as incubation and project design team, we promote, organise and facilitate for the weekly project design. Actuarial students meet up to brainstorm ideas aiming to solve societal challenges. We also represent our projects at Actuarial annual project design usually organised by TASK body with partinership with other key playing companies."
    ),
    new teamInfo(
        2,
        "images/teams/placement.jpg",
        "Statistical softwares & other Data analysis Technologies Team",
        "We make best efforts to improve data analytical skills of members.",
        "We as Statistical softwares & other Data analysis Technologies team, we do our best to improve the data analytics skills of the members. As actuaries are surounded by data in their proffession, they need special data analytic skills to develop useful insights that could be used for forecasting and decision making. We achieve this by exploring different technologies in the market(R, Spss, Stata, Python, excel,google sheets, power Bi, Google data studio). Thanks to our members who posess different skills in different technologies! We always learn alot from them. "
    ),
    new teamInfo(
        3,
        "images/teams/promotion.jpg",
        "Public Relations Team",
        "We earn our sponsors who help us in performing successful events.",
        "The members of our Public Relations team are meant to be the face of the UEASA. For any event or a workshop, one question always lies there, that is how to get all of those important people notice us? We need PR Team! The foundation of any event, either financially or for resources is laid by us. Our main task focuses upon gaining sponsors for certain events. We don’t come up with catchy phrases to make people pay for what they probably don’t need. We earn our sponsors who belive in our work and talent."
    ),
    new teamInfo(
        4,
        "images/teams/pr.jpg",
        "Promotion Team",
        "We promote and create a hype for revents to have mass participation.",
        "We as a team, form an integral part of the UEASA organisation. An event cannot be success if people are not aware about UEASA and its events. Promotion is done in all the ueasa departments. We also try to reach many other insitutes  across the country to promote our events and workshops. Our team help help members of the organisation to develop their communication skills. Members who are part of the UEASA promotion team also gain confidence and possess interactivity to speek anywhere at any platform or stage."
    ),
    new teamInfo(
        5,
        "images/teams/finearts.jpg",
        "Executive team",
        "We try and give our best to guide and reshape UEASA to give it a brand new look.",
        "We are men and women who put their soul to the work they do, to lead, Mentor & motivate the UEASA association. We are hardworking individuals with different levels of skills to stear our association towards global success. We value our differences, listen and communicate well, seek input from each other, and trust and respect one another- these makes our teams more effective."
    ),
    new teamInfo(
        6,
        "images/teams/design.jpg",
        "Library & Resources Team",
        "We look out for the best resources that can feed our members with quality knowledge and skills.",
        "In an academic instutitions, resources available at your disposal serves as a heart of your career. There we as a team we look out for the best easy to comprehend resources. We also advice the members on how to utilize the limited time on campus to gain hot cake skills that are easily absorbed to the market. We share the resources to them through the online platforms (mainly through our website) ."
    )
    // new teamInfo(
    //     8,
    //     "images/teams/music.jpg",
    //     "Music Team",
    //     "We find musical talent in our students and perform at various events and occasions."
    // )
];

var url = new URL(window.location.href);
var team_id = url.searchParams.get("team");

if (team_id < 1 || team_id > 7){
    window.location.href = "404.html";
}

document.title = "UEASA " + teams[team_id].title + " - University of Eldoret Actuarial science Association";

var j, lHeads = heads.length; 
var currentHeads = [""];
for (j = 1; j < lHeads; j++){
    if (heads[j].teamId == team_id){
        currentHeads.push(heads[j].id);
    }
};

var team_title = document.querySelector(".title-holder h1");
team_title.innerHTML = teams[team_id].title;
var team_descLong = document.querySelector(".title-holder p");
team_descLong.innerHTML = teams[team_id].descLong;

var row = document.querySelector(".holder .row");

row.innerHTML = `
    <div class="box"></div>

    <div class="box" id="name-card-holder">

    </div>
`;
var box = document.querySelector(".holder .row .box");
box.style.backgroundImage = "linear-gradient(-45deg, rgba(113, 0, 0, 0.4),rgba(33, 33, 33, 0.5)),url(" + teams[team_id].picture + ")";

var namecardHolder = document.querySelector("#name-card-holder");

var i;
for (i = 1; i < currentHeads.length; i++){
    var div = document.createElement("div");
    div.setAttribute("class", "name-card");
    div.setAttribute("id", "name-card" + i);
    namecardHolder.appendChild(div);

    var namecard = document.querySelector("#name-card" + i);
    namecard.innerHTML = `
        <div class="img-box">
            <div class="img"></div>
        </div>
        <div class="info">
            <h3>` + heads[currentHeads[i]].firstName + " " + heads[currentHeads[i]].lastName + `</h3>
            <p>` + teams[team_id].title + ` Head</p>
            <div class="social-area">
                <a id="facebook" target="_blank"><i class="fab fa-facebook social-icon"></i></a>
                <a id="instagram" target="_blank"><i class="fab fa-instagram social-icon"></i></a>
                <a id="linkedin" target="_blank"><i class="fab fa-linkedin-in social-icon"></i></a>
                <a id="twitter" target="_blank"><i class="fab fa-twitter social-icon"></i></a>
            </div>
        </div>
    `;

    var img = document.querySelector("#name-card" + i + " .img");
    img.style.backgroundImage = "url(" + heads[currentHeads[i]].picture + ")";

    var facebook = document.querySelector("#name-card" + i + " #facebook");
    facebook.href = heads[currentHeads[i]].facebook;
    var instagram = document.querySelector("#name-card" + i + " #instagram");
    instagram.href = heads[currentHeads[i]].instagram;
    var linkedin = document.querySelector("#name-card" + i + " #linkedin");
    linkedin.href = heads[currentHeads[i]].linkedin;
    var twitter = document.querySelector("#name-card" + i + " #twitter");
    twitter.href = heads[currentHeads[i]].twitter;

};