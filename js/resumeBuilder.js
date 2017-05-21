/*
This is empty on purpose! Your code to build the resume will go here.
 */


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

        var skills = bio.skills;
        if (skills.length > 0) {
            $("#header").append(HTMLskillsStart);      
            skills.forEach(function(skill) {
                var formattedSkill = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkill);
            });

        }
    }
}



var work = {
    'jobs' : [
        {
            'employer': 'GetUWired',
            'title': 'Junior Developer',
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
        $("#workExperience").append(HTMLworkStart);       

        var jobs = work.jobs;

        jobs.forEach(function (job) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry").append(formattedDates);

            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry").append(formattedDescription);

        })
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
            'url': 'http://theironyard.com'
        },
        {
            'name': 'Butler University',
            'location': 'Indianapolis, IN',
            'degree': 'BA in Dance',
            'majors': 'Dance, Pedagogy concentration',
            'dates': '2000',
            'url': 'http://www.butler.edu'
        }
    ],
    'onlineCourses' : [
        {
           'title': 'Front-End Web Developer Nanodegree',
           'school': 'Udacity',
           'dates': 'December 2016-present (in progress)',
           'url': 'https://www.udacity.com'
       }
    ],
    'display': function displaySchools() {
        var schools = education.schools;
        var online = education.onlineCourses;

        $('#education').append(HTMLschoolStart);

        schools.forEach(function (school) {
            var formattedSchool = HTMLschoolName.replace("#", school.url).replace("%data%", school.name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedDatesSchool = HTMLschoolDates.replace("%data%", school.dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);

            $('.education-entry').append(formattedSchool);
            $('.education-entry').append(formattedDegree);
            $('.education-entry').append(formattedDatesSchool);
            $('.education-entry').append(formattedLocation);
            $('.education-entry').append(formattedMajor);

        });

        $('.education-entry').append(HTMLonlineClasses);
        online.forEach(function (course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("#", course.url).replace("%data%", course.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);

            $(".education-entry").append(formattedOnlineTitle);
            $(".education-entry").append(formattedOnlineSchool);
            $(".education-entry").append(formattedOnlineDates);

        })
    }
}


var projects = {
    'projects': [
        {
            'title': 'Milk Ninja',
            'dates': 'April 2016 - May 2016',
            'description': 'This web application for mobile devices helps moms find and share locations where they can comfortably feed their ninjas, er, um...babies.',
            'images': 'images/ninja.jpg'
        },
        {
            'title': 'Animal Action',
            'dates': 'April 2016',
            'description': 'A preschool game filled with animals and multiple-choice answers',
            'images': 'images/game.png'
        },
        {
            'title': 'jQuery Slider',
            'dates': 'February 2017',
            'description': 'Simple jQuery slider',
            'images': 'images/jquery_slider_img.png'
        }
    ]
    ,
    'display': function displayProjects() {
        $("#projects").append(HTMLprojectStart);
        
        projects.projects.forEach(function (project) {
            var formattedProjTitle = HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry").append(formattedProjTitle);
            var formattedProjDates = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry").append(formattedProjDates);
            var formattedProjDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry").append(formattedProjDescription);


            var image = project.images;

            if (image.length > 0) {
                var formattedProjImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry").append(formattedProjImage);
            }
        })
    }
}





bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);




