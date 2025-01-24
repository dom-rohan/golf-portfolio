import {
    driver,
    iron7,
    wedge,
    putter,
    augusta,
    pebbleBeach,
    stAndrews,
    pinehurst,
    sawgrass,
    torreyPines,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "courses",
      title: "Courses Played",
    },
    {
      id: "scores",
      title: "Scores",
    },
    {
      id: "clubs",
      title: "Clubs",
    },
  ];
  
  const services = [
    {
      title: "Score Tracker",
      icon: "⛳",
    },
    {
      title: "Course Explorer",
      icon: "📍",
    },
    {
      title: "Club Manager",
      icon: "🏌️‍♂️",
    },
    {
      title: "Golf Analytics",
      icon: "📊",
    },
  ];
  
  const clubs = [
    {
      name: "Driver",
      averageDistance: 250,
      type: "Wood",
      icon: driver,
    },
    {
      name: "3-Wood",
      averageDistance: 220,
      type: "Wood",
      icon: "🪵",
    },
    {
      name: "5-Wood",
      averageDistance: 200,
      type: "Wood",
      icon: "🪓",
    },
    {
      name: "7-Iron",
      averageDistance: 150,
      type: "Iron",
      icon: iron7,
    },
    {
      name: "9-Iron",
      averageDistance: 130,
      type: "Iron",
      icon: "🔩",
    },
    {
      name: "Pitching Wedge",
      averageDistance: 100,
      type: "Wedge",
      icon: wedge,
    },
    {
      name: "Sand Wedge",
      averageDistance: 90,
      type: "Wedge",
      icon: "🏖️",
    },
    {
      name: "Lob Wedge",
      averageDistance: 70,
      type: "Wedge",
      icon: "🎯",
    },
    {
      name: "Putter",
      averageDistance: 10,
      type: "Putter",
      icon: putter,
    },
  ];
  
  const courses = [
    {
      name: "Augusta National Golf Club",
      location: "Georgia, USA",
      holes: 18,
      par: 72,
      icon: augusta,
    },
    {
      name: "Pebble Beach Golf Links",
      location: "California, USA",
      holes: 18,
      par: 72,
      icon: pebbleBeach,
    },
    {
      name: "St. Andrews Links",
      location: "Scotland, UK",
      holes: 18,
      par: 72,
      icon: stAndrews,
    },
    {
      name: "Pinehurst No. 2",
      location: "North Carolina, USA",
      holes: 18,
      par: 72,
      icon: pinehurst,
    },
    {
      name: "TPC Sawgrass",
      location: "Florida, USA",
      holes: 18,
      par: 72,
      icon: sawgrass,
    },
    {
      name: "Torrey Pines",
      location: "California, USA",
      holes: 18,
      par: 72,
      icon: torreyPines,
    },
  ];
  
  const scores = [
    {
      course: "Augusta National Golf Club",
      date: "2024-01-05",
      holes: 18,
      totalScore: 74,
      birdies: 4,
      bogeys: 2,
    },
    {
      course: "Pebble Beach Golf Links",
      date: "2024-02-10",
      holes: 9,
      totalScore: 36,
      birdies: 2,
      bogeys: 1,
    },
    {
      course: "St. Andrews Links",
      date: "2023-12-15",
      holes: 18,
      totalScore: 78,
      birdies: 3,
      bogeys: 5,
    },
    {
      course: "Pinehurst No. 2",
      date: "2023-11-20",
      holes: 9,
      totalScore: 40,
      birdies: 1,
      bogeys: 3,
    },
    {
      course: "TPC Sawgrass",
      date: "2023-10-30",
      holes: 18,
      totalScore: 80,
      birdies: 2,
      bogeys: 6,
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "This app makes tracking my golf progress so much easier. I love seeing my scores improve over time!",
      name: "Jordan Smith",
      designation: "Amateur Golfer",
      company: "Golf Enthusiasts Club",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I’ve always wanted a tool to log my clubs and distances. This app is exactly what I needed.",
      name: "Emily Carter",
      designation: "Golf Instructor",
      company: "Pro Golf Academy",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "The course explorer is my favorite feature. It helped me discover new courses nearby!",
      name: "Ryan Lopez",
      designation: "Weekend Golfer",
      company: "Local Golf League",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Golf Score Tracker",
      description:
        "A web-based application that helps golfers track their scores, analyze their performance, and manage their golf clubs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "chartjs",
          color: "green-text-gradient",
        },
        {
          name: "mui",
          color: "pink-text-gradient",
        },
      ],
      image: augusta,
      source_code_link: "https://github.com/",
    },
    {
      name: "Course Explorer",
      description:
        "A platform for discovering and rating golf courses worldwide, complete with user reviews and location details.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "googlemapsapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: pebbleBeach,
      source_code_link: "https://github.com/",
    },
    {
      name: "Club Manager",
      description:
        "A tool for logging golf clubs, tracking their average distances, and recommending new equipment.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: stAndrews,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, clubs, courses, scores, testimonials, projects };
  