import React from 'react';
import { Outlet } from 'react-router-dom';
import ProjectDetailsNavbar from '../components/Shared/Navbar/ProjectDetailsNavbar';

const ProjectDetailsLayout = () => {
    return (
        <div>
            <ProjectDetailsNavbar></ProjectDetailsNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default ProjectDetailsLayout;