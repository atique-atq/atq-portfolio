import React from 'react';

const useCurrentPath = () => {
    return (
        <div>
    const [currentPath, setCurrentPath] = useState('/');

    useEffect(() => {
        setCurrentPath(window.location.pathname);
        console.log('path:', currentPath)
    }, window.location.pathname);

        </div>
    );
};

export default useCurrentPath;