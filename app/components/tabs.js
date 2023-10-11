import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import Tab from './tab';

const Tabs = ({ tabsData, onChange }) => {
  const [activeTab, setActiveTab] = useState(tabsData[0].label);

  return (
    <View style={styles.tabsContainer}>
      {tabsData.map(tab => (
        <Tab
          key={tab.label}
          label={tab.label}
          icon={tab.icon}
          isActive={tab.label === activeTab}
          onPress={() => {
            setActiveTab(tab.label);
            onChange(tab.label);
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
});

export default Tabs;
