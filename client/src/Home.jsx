import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function Home() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const token = document.cookie.split('; ').find(row => row.startsWith('token='));
        if (token) {
            const decoded = jwtDecode(token.split('=')[1]);
            setUserName(decoded.name);
        }
    }, []);

    return (
        <div>
            <h2>Welcome, {userName}</h2>
        </div>
    );
}

export default Home;
