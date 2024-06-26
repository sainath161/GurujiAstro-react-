import React, { useState } from 'react';
import { Button } from './StyledComponents';

const PersonalInfo = ({ formData, setFormData, setStep }) => {
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.phone) newErrors.phone = 'Phone is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validate()) {
            setStep(2);
        }
    };

    return (
        <div>
            <h2>Personal Information</h2>
            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <div className="error">{errors.name}</div>}
            </div>
            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                {errors.phone && <div className="error">{errors.phone}</div>}
            </div>
            <div className="navigation-buttons">
                <Button onClick={handleNext}>Next</Button>
            </div>
        </div>
    );
};

export default PersonalInfo;
