/*
This is empty on purpose! Your code to build the resume will go here.
 */

// var funThoughts = "Hi, my name is " + "Heather, " + "I am fun.";
// console.log(funThoughts);

//  var awesomeThoughts = funThoughts.replace('fun', 'awesome');
//  console.log(awesomeThoughts);

//  // $('#main').append(awesomeThoughts);

// var name = "Heather Conley";
//  // var formattedName =  HTMLheaderName.replace('%data%', name);

// var role = "Junior Front End Developer";
// var formattedRole = HTMLheaderRole.replace('%data%', role);

// $('#header').prepend(formattedRole);
// $('#header').prepend(formattedName);

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
    // 'pictureURL': 'http://placehold.it/350x350',
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
            'description': 'Worked on websites specifically for CrossFit gyms, individually stylizing sites to specific needs, changing name servers, etc.'
        }, 
        {
            'employer': 'The Weather Company',
            'title': 'Junior Developer/Internship',
            'location': 'Marietta, GA',
            'dates': 'June 2016 - August 2016',
            // 'description': 'Worked on project to expand weather.com from 40 locales to over 220 worldwide.'
        }, 
        {
            'employer': 'Atlanta Ballet',
            'title': 'Centre Principal',
            'location': 'Marietta, GA',
            'dates': 'August 2007 - February 2016',
            // 'description': 'Managed a dance studio with enrollment of 200+ annually; Designed and implemented programs for children and adults; Organized and produced a spring performance for over 1200 children annually'
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
            'majors': 'HTML, CSS, JavaScript',
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
    ],
    'display': function displaySchools() {
        console.log('hello');
    }
}

var projects = {
    projects: [
        {
            'title': 'Milk Ninja',
            'dates': 'April 2016 - May 2016',
            'description': 'This web application for mobile devices helps moms find and share locations where they can comfortably feed their ninjas, er, um...babies.',
            'images': 'coming soon'
        },
        {
            'title': 'Animal Action',
            'dates': 'April 2016',
            'description': 'A preschool game filled with animals and multiple-choice answers',
            'images': 'coming soon'
        }
    ],
    'display': function displayProjects() {
        console.log("hello");
    }
}









