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
        'location': 'Alpharetta, GA'
        },
    'pictureURL': 'images/profile.jpg',
    'welcomeMessage': 'Hello, Welcome to my Page!',
    'skills': ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'ReactJS', 'Wordpress'],
    'display': function displayBio() {
        var formattedName =  HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

        $('#header').prepend(formattedRole);
        $('#header').prepend(formattedName);
        $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
        var stuff = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $(stuff).insertAfter('#topContacts');
        $(".welcome-message").prepend(HTMLbioPic.replace("%data%", bio.pictureURL));

        console.log(bio.skills);
        var skills = bio.skills;
        if (skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            
            skills.forEach(function(skill) {
                console.log(skill);
                var formattedSkill = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkill);
                console.log(formattedSkill);

            });

        }
    }
}



var work = {
    'jobs' : [
        {
            'employer': 'GetUWired',
            'title': 'CrossFit Developer',
            'location': 'Gainesville, GA',
            'dates': 'January 2017 - present',
            'description': 'Contributed to building websites of small businesses'
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
        var jobs = work.jobs;
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
            'images': 'images/ninja.jpg'
                

        },
        {
            'title': 'Animal Action',
            'dates': 'April 2016',
            'description': 'A preschool game filled with animals and multiple-choice answers'
            ,
            'images': 'images/game.png'
        },
        {
            'title': 'jQuery Slider',
            'dates': 'February 2017',
            'description': 'Simple jQuery slider'
            ,
            'images': 'images/jquery_slider_img.png'
        }
    ]
    // ,
    // 'display': function displayProjects() {
    //     console.log("hello");
    // }
}



// $(".welcome-message").append(HTMLskillsStart);
// skills.forEach(function(skill) {
//     $("#skills-h3").append(HTMLskills.replace("%data%", skill));
// })

// $("#workExperience").append(HTMLworkTitle.replace("%data%", work.jobs[0]['title']));
$("#education").append(HTMLschoolName.replace("%data%", education.schools[0].name));


// $("#skills").append(skills.forEach(function(skill) {
//     $("#skills").append(HTMLskills.replace("%data%", skill));
// }))


$("#main").append(internationalizeButton);


projects.display = function() {
    for (proj in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        
        var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
        $(".project-entry:last").append(formattedProjTitle);
        var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
        $(".project-entry:last").append(formattedProjDates);
        var formattedProjDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
        $(".project-entry:last").append(formattedProjDescription);
        var projImages = projects.projects[proj].images;
        if (projImages.length > 0) {
            // // console.log(projects.projects[proj].images);
            // // var array = [];
            // projImages.forEach(function (image) {
            //     array.push(image);
            //     console.log(array);
            // })
            // // return array;


            // for (image in projects.projects[proj].images) {
            //     var formattedProjImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images[image]);
            //     console.log(formattedProjImage);
            //     $(".project-entry:last").append(formattedProjImage);

            // }
        }

    }
}
projects.display();


bio.display();
work.display();




