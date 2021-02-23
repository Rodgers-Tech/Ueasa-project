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
        "Assistant ",
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
        "We as incubation and project design team, we promote, organise and facilitate for the weekly project design. Actuarial students meet up to brainstorm ideas aiming to solve the societal challenges. We also represent our projects at Actuarial annual project design usually organised by TASK body with partinership with other key playing companies."
    ),
    new teamInfo(
        2,
        "images/teams/placement.jpg",
        "Statistical softwares & other Data analysis Technologies Team",
        "We make best efforts to improve data analytical skills of members.",
        "We as Statistical softwares & other Data analysis Technologies Team, do our best to improve the data analytics skills of the members. As actuaries are surounded by data each day, they need special data analytic skills to develop useful insights that coulkd be used for forecaslting and decision making. We achieve this by exploring different technologies in the market(R, Spss, Stata, Python, excel,google sheets, power Bi, Google dat studio). Thanks to our members who posess different skills in different technologies! We always learn alot from them. "
    ),
    new teamInfo(
        3,
        "images/teams/promotion.jpg",
        "Public Relations Team",
        "We shape our organisation's image.",
        "We build the brand, spread the organization's message and minimize the effect of negative publicity. We as UEASA we have build a strong relations with key playing companies.We have good communication technicians who are also PR writers. we turn out press release, Newsletters, Website content, Speeches, Blogs and social media posts."
    ),
    new teamInfo(
        4,
        "images/teams/pr.jpg",
        "Promotion Team",
        "We earn our sponsors who help us in performing successful events.",
        "The members of our Public Relations team are meant to be the face of the UEASA. For any event or a workshop, one question always lies there, that is how to get all of those important people notice us? We need PR Team! The foundation of any event, either financially or for resources is laid by us. Our main task focuses upon gaining sponsors for certain events. We don’t come up with catchy phrases to make people pay for what they probably don’t need. We earn our sponsors who belive in our work and talent."
    ),
    new teamInfo(
        5,
        "images/teams/finearts.jpg",
        "Executivecutive team",
        "We try and give our best to guide and reshape UEASA to give it a brand new look.",
        "We are men and women who put their soul to the work they do, to lead, Mentor & motivate the UEASA association. We are hardworking individuals with different levels of skills to stear our association towards global success. We value our differences, listen and communicate well, seek input from each other, and trust and respect one another- these makes our teams more effective."
    ),
    new teamInfo(
        6,
        "images/teams/design.jpg",
        "Library & Resources Team",
        "We look out for the best resources that can feed our members with quality knowledge and skills.",
        "In an academic instutitions, resources available at your disposal serves as a heart of your career. There we as a team we look out for the best and easy to comprehend resources. We also advice the members on how to utilize the limited time on campus to gain hot cake skills that are easily absorbed to the market. We share resources to them through the online platforms (mainly through our website) ."
    )
    // new teamInfo(
    //     8,
    //     "images/teams/music.jpg",
    //     "Music Team",
    //     "We find musical talent in our students and perform at various events and occasions."
    // )
];


function openPage(team_id){
    var box = document.querySelector("#box" + team_id);
    box.addEventListener("click", location.href = 'team.html?team=' + team_id);
}

var row = document.querySelector(".holder .row");

var i, lTeams = teams.length;
for (i = 1; i < lTeams; i++){
    
    var j, lHeads = heads.length; 
    var currentHeads = [""];
    for (j = 1; j < lHeads; j++){
        if (heads[j].teamId == i){
            currentHeads.push(heads[j].firstName);
        }
    }

    var div = document.createElement("div");
    div.setAttribute("class", "box");
    div.setAttribute("id", "box" + teams[i].id);
    div.setAttribute("onclick", "openPage('" + teams[i].id + "')");
    row.appendChild(div);
    var box = document.querySelector("#box" + teams[i].id);
    box.style.backgroundImage = "linear-gradient(-45deg, rgba(0, 0, 0, 0.8),rgba(33, 33, 33, 1)),url(" + teams[i].picture + ")";
    box.innerHTML = `
        <div class="content">
            <p class="title">` + teams[i].title + `</p>
            <p class="desc">` + teams[i].descShort + `</p>
            <br>
            <p class="heads"></p>
            <a class="link">More <i class="fas fa-angle-double-right"></i></a>
        </div>
    `;

    var heads_p = document.querySelector("#box" + teams[i].id + " .heads");
    if (currentHeads.length > 3){
        heads_p.innerHTML = "Headed by " + currentHeads[1] + ", " + currentHeads[2] + " and " + currentHeads[3];
    }
    else{
        heads_p.innerHTML = "Headed by " + currentHeads[1] + " and " + currentHeads[2];
    }

    var link = document.querySelector("#box" + teams[i].id + " a");
    link.setAttribute("onclick", "openPage('" + teams[i].id + "')");
}
