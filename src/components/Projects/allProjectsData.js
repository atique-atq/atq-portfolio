import sw1 from '../../assets/images/sharewear/1.JPG';
import sw2 from '../../assets/images/sharewear/2.JPG';
import sw3 from '../../assets/images/sharewear/3.JPG';
import sw4 from '../../assets/images/sharewear/4.JPG';
import sw5 from '../../assets/images/sharewear/5.JPG';
import sw6 from '../../assets/images/sharewear/6.JPG';
import sw7 from '../../assets/images/sharewear/7.JPG';
import sw8 from '../../assets/images/sharewear/8.JPG';
import sw9 from '../../assets/images/sharewear/9.JPG';

export const allProjectsData = async (id) => {
    const projects = [
        {
            _id: 'phsw-20221',
            name: 'Share Wear Bd',
            title: 'E-commerce website for buying and selling second-hand dresses',
            description: ['On the homepage, customer(buyer) will see navbar will necessary menu, a landing banner with necessary images and information. Below that banner, category of the available dresses will be found. Upon click on the show details product of that category will be shown.', 'Going on the products page by clicking a category, card of the available products will be shown. If any seller is verified by the admin there will be tick means verified seller by the admin.', 'If user find any unwanted product, he/she can report that specific product which will be deleted by the admin later.', 'If any seller wants to show his products in the advertisement section, seller can have that access', 'Besides authentication of seller, buyer and admin, authorization of each roll has been implemented. Where seller can add product,delete product, admin can delete seller, delete buyer and reported items', 'From booked items, buyer can complete his online payment.'],
            technologies: 'Tailwind CSS, daisyUI, React.js, Node.js, MongoDB, Vercel',
            liveUrl: 'https://sharewearbd.web.app',
            image: [sw1, sw2, sw3, sw4, sw5, sw6, sw7, sw8, sw9]
        },
        {
            _id: 'phds-20222',
            name: 'Doc Service',
            title: 'Service and Review based website for a doctor',
            technologies: 'Firebase, Tailwind CSS, React.js, Node.js, MongoDB',
            description: 'Users can find the details of a service and see other’s reviews about that service. Also can add/edit his reviews. Used authentication and Private route, Context API. Also made responsive',
            liveUrl: 'https://doctor-service-atq.web.app',
            image: [],
        },
        {
            _id: 'phtl-20223',
            name: 'Tech Learning Bd',
            title: 'Edutech site for technology learning and practicing',
            description: 'After log in user can see detailed and practice the course. Besides username and password, user can also log in using Google, GitHub',
            technologies: 'Bootstrap, Firebase, React.js, Node.js, MongoDB',
            liveUrl: 'https://tech-learning-bd-880c4.web.app',
            image: [],
        }
    ];
    const matchedProject = projects.find(project => project._id === id);
    console.log('matched product:', matchedProject);

    return matchedProject;
};
