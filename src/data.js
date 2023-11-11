import tour1 from './assets/images/tour-1.jpeg';
import tour2 from './assets/images/tour-2.jpeg';
import tour3 from './assets/images/tour-3.jpeg';
import tour4 from './assets/images/tour-4.jpeg';
import tour5 from './assets/images/tour-5.jpeg';
import tour6 from './assets/images/tour-6.jpeg';

export const pageLinks = [
    {id: 1, href:"#home", text:"home"},
    {id: 2, href:"#about", text:"about"},
    {id: 3, href:"#services", text:"services"},
    {id: 4, href:"#tours", text:"tours"},
]

export const socialLinks = [
    {id: 1, href: "https://www.facebook.com", iconName: "fab fa-facebook"},
    {id: 2, href: "https://www.twitter.com", iconName: "fab fa-twitter"},
    {id: 3, href: "https://www.dribble.com", iconName: "fab fa-squarespace"},
    {id: 4, href: "https://www.instagram.com", iconName: "fab fa-instagram"}
]

export const services = [
    {
        id: 1, 
        iconName: "fas fa-wallet fa-fw", 
        title: "saving money", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
    },
    {
        id: 2, 
        iconName: "fas fa-tree fa-fw", 
        title: "endless hiking", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
    },
    {
        id: 3, 
        iconName: "fas fa-socks fa-fw", 
        title: "amazing comfort", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
    }
]

export const tours = [
    {
        id: 1,
        image: tour1,
        date: 'august 26th, 2020',
        title: 'Tibet Adventure',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'China',
        duration: '6 days',
        price: 'from $2100'
    },
    {
        id: 2,
        image: tour2,
        date: 'October 1th, 2020',
        title: 'Best Of Java',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'Indonesia',
        duration: '11 days',
        price: 'from $1400'
    },
    {
        id: 3,
        image: tour3,
        date: 'September 15th, 2020',
        title: 'Explore Hong Kong',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'Hong Kong',
        duration: '8 days',
        price: 'from $5000'
    },
    {
        id: 4,
        image: tour4,
        date: 'December 5th, 2019',
        title: 'Kenya Highlights',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'Kenya',
        duration: '20 days',
        price: 'from $3300'
    },
    {
        id: 5,
        image: tour5,
        date: 'January 11th, 2016',
        title: 'Autralia Insights',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'Autralia',
        duration: '9 days',
        price: 'from $6700'
    },
    {
        id: 6,
        image: tour6,
        date: 'February 1th, 2022',
        title: 'Indian Empire',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'India',
        duration: '25 days',
        price: 'from $2000'
    },
]