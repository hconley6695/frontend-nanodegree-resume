/*
This is empty on purpose! Your code to build the resume will go here.
 */


var skills = ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'ReactJS', 'Wordpress'];

var bio = {
    'name': 'Heather Conley',
    'role': 'Junior Front End Developer',
    'contacts': {
        'email': 'hconley6695@gmail.com',
        'mobile': '678-697-3248',
        'github': 'https://github.com/hconley6695',
        'twitter': '@hconley6695',
        'location': 'Atlanta, GA'
        },
    'pictureURL': 'images/profile.jpg',
    'welcomeMessage': 'Hello, welcome to my page!',
    'skills': skills,
    // 'biopic': stringURL, 
    'display': function displayBio() {
        console.log("hi");
    }
}



var work = {
    'jobs' : [
        {
            'employer': 'GetUWired',
            'title': 'CrossFit Developer',
            'location': 'Gainesville, GA',
            'dates': 'January 2017 - present',
            'description': 'Worked on websites specifically for CrossFit gyms, individually stylizing sites to specific needs, changing name servers to push sites live. '
        }, 
        {
            'employer': 'The Weather Company',
            'title': 'Junior Developer/Internship',
            'location': 'Marietta, GA',
            'dates': 'June 2016 - August 2016',
            'description': 'Worked on project to expand weather.com from 40 locales to over 220 worldwide.'
        }, 
        {
            'employer': 'Atlanta Ballet',
            'title': 'Centre Principal',
            'location': 'Marietta, GA',
            'dates': 'August 2007 - February 2016',
            'description': 'Managed a dance studio with enrollment of 200+ annually; Designed and implemented programs for children and adults; Organized and produced a spring performance for over 1200 children annually.'
        }, 
    ],
    'display': function displayWork() {
        console.log('display work');
    }
}

var education = {
    'schools' : [
        {
            'name': 'The Iron Yard',
            'location': 'Atlanta, GA',
            'degree': 'Front End Engineering Certificate',
            'majors': ['HTML', 'CSS', 'JavaScript'],
            'dates': 'February 2016 - May 2016',
            'url': 'http://www.butler.edu'
        },
        {
            'name': 'Butler University',
            'location': 'Indianapolis, IN',
            'degree': 'BA in Dance',
            'majors': 'Dance, Pedagogy concentration',
            'dates': '2000',
            'url': 'http://theironyard.com'
        }
    ],
    'onlineCourses' : [
        {
           'title': 'Front-End Web Developer Nanodegree',
           'school': 'Udacity',
           'dates': 'December 2016-present',
           'url': 'https://www.udacity.com'
       }
    ],
    'display': function displaySchools() {
        console.log('hello');
    }
}


var projects = {
    'projects': [
        {
            'title': 'Milk Ninja',
            'dates': 'April 2016 - May 2016',
            'description': 'This web application for mobile devices helps moms find and share locations where they can comfortably feed their ninjas, er, um...babies.'
            ,
            'images': 
                [{'image': 'images/ninja.jpg'}]

        },
        {
            'title': 'Animal Action',
            'dates': 'April 2016',
            'description': 'A preschool game filled with animals and multiple-choice answers'
            ,
            'images': [{'image': 'images/game.png'}]
        },
        {
            'title': 'jQuery Slider',
            'dates': 'February 2017',
            'description': 'Simple jQuery slider'
            ,
            'images': [{'image': 'images/jquery_slider_img.png'}]
        }
    ]
    // ,
    // 'display': function displayProjects() {
    //     console.log("hello");
    // }
}


var formattedName =  HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#topContacts").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
$(".welcome-message").prepend(HTMLbioPic.replace("%data%", bio.pictureURL));
// $(".welcome-message").append(HTMLskillsStart);
// skills.forEach(function(skill) {
//     $("#skills-h3").append(HTMLskills.replace("%data%", skill));
// })

// $("#workExperience").append(HTMLworkTitle.replace("%data%", work.jobs[0]['title']));
$("#education").append(HTMLschoolName.replace("%data%", education.schools[0].name));


if (skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
    $("#skills").append(formattedSkill);

}
// $("#skills").append(skills.forEach(function(skill) {
//     $("#skills").append(HTMLskills.replace("%data%", skill));
// }))

var jobs = work.jobs;
function displayWork() {
    for(job in jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}
displayWork();


$(document).click(function  (loc) {

    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);


});

$("#main").append(internationalizeButton);

function inName(name) {
    var firstArray = name.split(" ");
    var first = firstArray[0];
    var last = firstArray[1];

    var x = first.charAt(0).toUpperCase();
    var y = first.slice(1, (first.length));
    first = x + y;


    last = last.toUpperCase();
    var fullName = first + " " + last;
    
        console.log(fullName);
        return fullName;
}
inName("heather conley");

projects.display = function() {
    for (proj in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        
        var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
        $(".project-entry:last").append(formattedProjTitle);
        var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
        $(".project-entry:last").append(formattedProjDates);
        var formattedProjDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
        $(".project-entry:last").append(formattedProjDescription);
        
        if (projects.projects[proj].images.length > 0) {
            for (image in projects.projects[proj].images) {
                var formattedProjImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images[image]);
                console.log(formattedProjImage)''
                $(".project-entry:last").append(formattedProjImage);

            }
        }
    }
}
projects.display();






