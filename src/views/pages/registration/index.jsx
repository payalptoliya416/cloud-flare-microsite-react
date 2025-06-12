    import React, { useState } from 'react'
    import { loadError } from '../../../utils/gaia';
    import { useNavigate } from 'react-router-dom';

    const CustomDropdown = ({ label, name, value, options, onChange, placeholder, isOpen, setOpenDropdown }) => {
  const handleSelect = (val) => {
    onChange({ target: { name, value: val } });
    setOpenDropdown(null); // close after selecting
  };

  const toggleDropdown = () => {
    setOpenDropdown(isOpen ? null : name); // toggle based on name
  };

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <div className="position-relative" onClick={toggleDropdown}>
        <div className="form-select" style={{ cursor: 'pointer' }}>
          {options.find(opt => opt.value === value)?.label || placeholder}
        </div>
        {isOpen && (
          <div className="select-drop">
            <h3 className="suggest">{placeholder}</h3>
            {options.map((opt) => (
              <div
                key={opt.value}
                className="suggest"
                onClick={() => handleSelect(opt.value)}
                style={{ padding: '5px 0', cursor: 'pointer' }}
              >
                {opt.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

    function Registration() {
        const [openDropdown, setOpenDropdown] = useState(null);
        const [formData, setFormData] = useState({
        registrationType: '',
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        jobTitle:'',
        mobile: '',
        country: '',
        companyType:'',
        cloudflareUsage: '',
        useCase: '',
        cloudUsers: '',
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    for (const [key, value] of Object.entries(formData)) {
        if (!value.trim()) {
        const fieldName = key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase());
        loadError(`${fieldName} is required.`);
        return;
        }
    }

    if (!emailRegex.test(formData.email)) {
        loadError("Please enter a valid email.");
        return;
    }
    navigate('/welcome')

    };
    return (
        <>
            <div className="main">
        <section className="login-page">
        <div className="logo">
                        <img src="/assets/image/logo-sec.png" alt="" className="mx-auto logo-sec"/>
                    </div>
                <div className="container">
            <div className="register-form">
            <h3 className='gradiant-text register-title'>Immerse: Bangkok <br/> 2025</h3>
            <form onSubmit={handleSubmit} className='mt-4'>
           
        <div className="mb-3 ">
              <CustomDropdown
                label="Registration Type"
                name="registrationType"
                value={formData.registrationType}
                onChange={handleChange}
                placeholder="Select your Registration Type *"
                options={[
                    { value: 'future', label: 'Future Customer' },
                    { value: 'customer', label: 'Customer' },
                    { value: 'partner', label: 'Partner' }
                ]}
                  isOpen={openDropdown === 'registrationType'}
              setOpenDropdown={setOpenDropdown}
                />
        </div>
            <div className="mb-3">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control" placeholder="First Name *" name="firstName" value={formData.firstName} onChange={handleChange} />
            </div>

            <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" placeholder="Last Name *" name="lastName" value={formData.lastName} onChange={handleChange} />
            </div>

        <div className="mb-3">
            <label className="form-label">Work Email</label>
            <input type="email" className="form-control" placeholder="Work Email *" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="mb-3">
            <label className="form-label">Company Name</label>
            <input type="text" className="form-control" placeholder="Company Name *" name="companyName" value={formData.companyName} onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label className="form-label">Job Title</label>
            <input type="text" className="form-control" placeholder="Job Title *" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
        </div>


        <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input type="text" className="form-control" placeholder="Mobile Number *" name="mobile" value={formData.mobile} onChange={handleChange} />
        </div>

        <div className="mb-3">
            <CustomDropdown
            label="Country / Region"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Select your Country *"
            options={[
                { value: 'india', label: 'India' },
                { value: 'bangkok', label: 'Bangkok' },
                { value: 'malaysia', label: 'Malaysia' }
            ]}
              isOpen={openDropdown === 'country'}
          setOpenDropdown={setOpenDropdown}
            />
        </div>
        <div className="mb-3">
                        <CustomDropdown
                label="Company Type"
                name="companyType"
                value={formData.companyType}
                onChange={handleChange}
                placeholder="Select your Company Type *"
                options={[
                    { value: 'india', label: 'India' },
                    { value: 'bangkok', label: 'Bangkok' },
                    { value: 'malaysia', label: 'Malaysia' }
                ]}
                  isOpen={openDropdown === 'companyType'}
          setOpenDropdown={setOpenDropdown}
                />
        </div>

        <div className="mb-3">
           <CustomDropdown
        label="Level of Cloudflare Usage"
        name="cloudflareUsage"
        value={formData.cloudflareUsage}
        onChange={handleChange}
        placeholder="Select your Level of Cloudflare Usage *"
        options={[
            { value: 'beginner', label: 'Beginner' },
            { value: 'intermediate', label: 'Intermediate' },
            { value: 'advanced', label: 'Advanced' }
        ]}
          isOpen={openDropdown === 'cloudflareUsage'}
          setOpenDropdown={setOpenDropdown}
        />
        </div>

        <div className="mb-3">
          <CustomDropdown
            label="Use Case"
            name="useCase"
            value={formData.useCase}
            onChange={handleChange}
            placeholder="Select your Use Case *"
            options={[
                { value: 'security', label: 'Security' },
                { value: 'performance', label: 'Performance' },
                { value: 'devops', label: 'DevOps' }
            ]}
             isOpen={openDropdown === 'useCase'}
          setOpenDropdown={setOpenDropdown}
            />
        </div>

        <div className="mb-3">
           <CustomDropdown
            label="No of Cloud Users"
            name="cloudUsers"
            value={formData.cloudUsers}
            onChange={handleChange}
            placeholder="Select the appropriate range *"
            options={[
                { value: '1-10', label: '1–10' },
                { value: '11-50', label: '11–50' },
                { value: '51+', label: '51+' }
            ]}
             isOpen={openDropdown === 'cloudUsers'}
          setOpenDropdown={setOpenDropdown}
            />
        </div>

        <div className="register-policy">
                <p>
                    In submitting this form, you agree to receive information from Cloudflare
                    related to our products, events, and special offers. You can unsubscribe from
                    such messages at any time. We never sell your data, and we value your
                    privacy choices. Please see our <a href="#">Privacy Policy</a> for information
                </p>
        </div>

        <div className="submit-btn">
            <button type="submit" className="btn">Register Now</button>
        </div>
        </form>
            </div>
            </div>
        </section>
            </div>
        </>
    )
    }

    export default Registration
