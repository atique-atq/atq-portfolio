
export const allProjectsData = async (id) => {
    const projects = [
        {
            _id: 'phsw-20221',
            name: 'Share Wear Bd',
            title: 'Website for buying and selling second-hand dresses',
            shortDescription: 'Implemented admin, seller and buyer authorization. Admin can verify seller, delete any post, any buyer or seller. Also implemented uploading a product, book and complete the purchase.',
            technologies: 'Tailwind CSS, daisyUI, React.js, Node.js, MongoDB, Vercel',
            liveUrl: 'https://sharewearbd.web.app',
            image: []
        },
        {
            _id: 'phds-20222',
            name: 'Doc Service',
            title: 'Service and Review based website for a doctor',
            technologies: 'Firebase, Tailwind CSS, React.js, Node.js, MongoDB',
            shortDescription: 'Users can find the details of a service and see other’s reviews about that service. Also can add/edit his reviews. Used authentication and Private route, Context API. Also made responsive',
            liveUrl: 'https://doctor-service-atq.web.app',
            image: [],
        },
        {
            _id: 'phtl-20223',
            name: 'Tech Learning Bd',
            title: 'Edutech site for technology learning and practicing',
            shortDescription: 'After log in user can see detailed and practice the course. Besides username and password, user can also log in using Google, GitHub',
            technologies: 'Bootstrap, Firebase, React.js, Node.js, MongoDB',
            liveUrl: 'https://tech-learning-bd-880c4.web.app',
            image: [],
        }
    ];
    const matchedProject = projects.find(project => project._id === id);
    console.log('matched product:', matchedProject);

    return matchedProject;
};
