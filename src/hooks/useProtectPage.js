import { useNavigate } from 'react-router-dom';
import { goToLogin } from '../routes/coordinator';
import { useEffect } from 'react';

function useProtectPage () {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token === null) {
            goToLogin(navigate);
        }
    }, [navigate]);
}

export default useProtectPage;
