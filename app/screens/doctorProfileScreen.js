import React, { useState } from 'react';
import DoctorProfile from '../components/doctorProfile';

const DoctorsProfileScreen = () => {
  const [activeTab, setActiveTab] = useState('fees');
  const doctorInfo = {
    name: 'Dr. Anuj Verma',
    details: 'General Physician | MBBS, NBD',
    images: [require('../../assets/hospital-one.jpg'),
    require('../../assets/hospital-one.jpg')],
  };

  const reviews = [
    // Sample data; integrate real data here.
    { reviewerName: 'Maggie Rhee', comment: 'Great caring doctor & practice. Highly recommend.' },
  ];

  return (
    <DoctorProfile
      doctorInfo={doctorInfo}
      activeTab={activeTab}
      onTabPress={setActiveTab}
      reviews={reviews}
    />
  );
};

export default DoctorsProfileScreen;
