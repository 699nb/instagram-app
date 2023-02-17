

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthPath, Layout } from '../services/Path';

export default function UseLocations() {
    const navigate = useNavigate();

    // AuthForwards
    const goToLogin = React.useCallback(() => navigate(AuthPath.login), [navigate])

    // LayoutForwards

    const goToHome  = React.useCallback(() => navigate(Layout.home), [navigate])

    return {
        goToLogin,
        goToHome
    }
};

