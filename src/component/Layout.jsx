// Layout.js
import React from 'react';

const Layout = ({ children, title }) => {
    // Set the document title when the component mounts
    React.useEffect(() => {
        document.title = title;
    }, [title]);

    return <div>{children}</div>;
};

export default Layout;