import React from 'react';
import { NavigationButton } from './StyledComponents';

const Navigation = ({ currentStep }) => {
    return (
        <div className="navigation">
            <NavigationButton active={currentStep === 1}>Personal Info</NavigationButton>
            <NavigationButton active={currentStep === 2}>Address Info</NavigationButton>
            <NavigationButton active={currentStep === 3}>Confirmation</NavigationButton>
        </div>
    );
};

export default Navigation;