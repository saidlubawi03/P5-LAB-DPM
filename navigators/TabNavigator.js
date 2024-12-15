import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen'; // Sesuaikan dengan nama file HomeScreen Anda
import ProfileScreen from '../screens/ProfileScreen';
import ProjectScreen from '../screens/ProjectScreen';
import SkillScreen from '../screens/SkillScreen'; // Sesuaikan dengan nama file SkillScreen Anda

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#4e00ff', // Warna untuk tab yang aktif
        tabBarInactiveTintColor: '#6e6e6e', // Warna untuk tab yang tidak aktif
      }}
    >
      {/* Tab untuk Home */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      {/* Tab untuk Profile */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
        }}
      />
      {/* Tab untuk Project */}
      <Tab.Screen
        name="Projects"
        component={ProjectScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="folder" size={24} color={color} />,
        }}
      />
      {/* Tab untuk Skill */}
      <Tab.Screen
        name="Skills"
        component={SkillScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="ribbon" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
