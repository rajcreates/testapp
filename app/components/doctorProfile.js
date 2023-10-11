import { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import DoctorProfileHeader from './doctorProfileHeader';
import Tabs from './tabs';
import Button from './button';
import Availability from './availability';
import Fees from './fee';
import Reviews from './review';

const DoctorProfile = ({ doctorInfo, activeTab, onTabPress, reviews }) => {

  const [selectedContent, setSelectedContent] = useState('');

  const handleTabChange = (activeLabel) => {
      setSelectedContent(activeLabel);
  };
    
  return (
    <>
        <ScrollView>
            <DoctorProfileHeader
                doctorName={doctorInfo.name}
                details={doctorInfo.details}
                images={doctorInfo.images}
            />

            <View style={{ flex: 1 }}>
                <Tabs
                    tabsData={[
                    { label: 'Profile', icon: require('../../assets/profile.png') },
                    { label: 'Availability', icon: require('../../assets/availability.png') },
                    { label: 'Fees', icon: require('../../assets/fees.png') },
                    { label: 'Reviews', icon: require('../../assets/reviews.png') },
                    ]}
                    onChange={handleTabChange}
                />
                {selectedContent === 'Profile' && <Text>Profile Content Here</Text>}
                {selectedContent === 'Availability' && <Availability/>}
                {selectedContent === 'Fees' && <Fees/>}
                {selectedContent === 'Reviews' && <Reviews/>}
            </View>

        </ScrollView>
        <Button label="Book" onPress={() => {}} />
    </>
  );
};

export default DoctorProfile;
