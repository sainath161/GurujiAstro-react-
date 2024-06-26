import React, { useState, useEffect } from 'react';
import PersonalInfo from './components/PersonalInfo';
import AddressInfo from './components/AddressInfo';
import Confirmation from './components/Confirmation';
import Navigation from './components/Navigation';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <div className="form-container">
      <GlobalStyles />
      <Navigation currentStep={currentStep} />
      {currentStep === 1 && (
        <PersonalInfo formData={formData} setFormData={setFormData} setStep={setCurrentStep} />
      )}
      {currentStep === 2 && (
        <AddressInfo formData={formData} setFormData={setFormData} setStep={setCurrentStep} />
      )}
      {currentStep === 3 && (
        <Confirmation formData={formData} setFormData={setFormData} setStep={setCurrentStep} />
      )}
    </div>
  );
};

export default App;
