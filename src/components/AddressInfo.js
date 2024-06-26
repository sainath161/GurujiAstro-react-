import React, { useState } from 'react';
import { Button, BackButton } from './StyledComponents';

const AddressInfo = ({ formData, setFormData, setStep }) => {
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.address1) newErrors.address1 = 'Address Line 1 is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.state) newErrors.state = 'State is required';
        if (!formData.zip) newErrors.zip = 'Zip Code is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validate()) {
            setStep(3);
        }
    };

    return (
        <div>
            <h2>Address Information</h2>
            <div className="form-group">
                <label>Address Line 1</label>
                <input
                    type="text"
                    value={formData.address1}
                    onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
                />
                {errors.address1 && <div className="error">{errors.address1}</div>}
            </div>
            <div className="form-group">
                <label>Address Line 2</label>
                <input
                    type="text"
                    value={formData.address2}
                    onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
                />
            </div>
            <div className="form-group">
                <label>City</label>
                <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
                {errors.city && <div className="error">{errors.city}</div>}
            </div>
            <div className="form-group">
                <label>State</label>
                <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                />
                {errors.state && <div className="error">{errors.state}</div>}
            </div>
            <div className="form-group">
                <label>Zip Code</label>
                <input
                    type="text"
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                />
                {errors.zip && <div className="error">{errors.zip}</div>}
            </div>
            <div className="navigation-buttons">
                <BackButton onClick={() => setStep(1)}>Back</BackButton>
                <Button onClick={handleNext}>Next</Button>
            </div>
        </div>
    );
};

export default AddressInfo;