import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Box, Text, VStack, Flex, Icon, Heading } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const SkillScreen = () => {
  return (
    <LinearGradient
      colors={['#134163', '#000d1d']} // Gradasi biru muda dan ungu
      start={{ x: 0.5, y: 0 }} // 70% gradasi biru muda di bagian atas
      end={{ x: 0.5, y: 1 }} // 30% gradasi ungu di bagian bawah
      style={styles.gradientBackground}
    >
      <VStack style={styles.container} space={6} alignItems="center">
        {/* Section Heading */}
        <Heading style={styles.skillsHeading}>Keahlian Saya</Heading>

        {/* Skills List */}
        <Flex direction="row" justifyContent="space-between" wrap="wrap" style={styles.skillContainer}>
          <Box style={[styles.skillBox, styles.shadow]}>
            <Icon as={Ionicons} name="code-slash" size={32} style={styles.icon} />
            <Text style={styles.skillText}>Pengembangan Web</Text>
          </Box>
          <Box style={[styles.skillBox, styles.shadow]}>
            <Icon as={Ionicons} name="phone-portrait" size={32} style={styles.icon} />
            <Text style={styles.skillText}>Aplikasi Mobile</Text>
          </Box>
          <Box style={[styles.skillBox, styles.shadow]}>
            <Icon as={Ionicons} name="cloud" size={32} style={styles.icon} />
            <Text style={styles.skillText}>Cloud Computing</Text>
          </Box>
          <Box style={[styles.skillBox, styles.shadow]}>
            <Icon as={Ionicons} name="construct" size={32} style={styles.icon} />
            <Text style={styles.skillText}>DevOps</Text>
          </Box>
          <Box style={[styles.skillBox, styles.shadow]}>
            <Icon as={Ionicons} name="analytics" size={32} style={styles.icon} />
            <Text style={styles.skillText}>Analisis Data</Text>
          </Box>
          <Box style={[styles.skillBox, styles.shadow]}>
            <Icon as={Ionicons} name="lock-closed" size={32} style={styles.icon} />
            <Text style={styles.skillText}>Keamanan Siber</Text>
          </Box>
        </Flex>
      </VStack>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    backgroundColor: 'transparent', // Background transparan karena sudah ada gradasi
    paddingHorizontal: 16,
    paddingVertical: 50,
    height: height,
  },
  skillsHeading: {
    fontSize: 28,
    color: '#fccb06', // Warna header sesuai dengan tema proyek
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    textShadowRadius: 8,
  },
  skillContainer: {
    width: '100%',
  },
  skillBox: {
    backgroundColor: '#134163', // Warna kuning untuk box skill
    borderWidth: 1,
    borderColor: '#E6E6FA',
    padding: 16,
    borderRadius: 16,
    marginVertical: 8,
    width: width * 0.44, // 44% of screen width for 2 columns with spacing
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#fccb06', // Warna ikon putih agar kontras dengan latar belakang
    marginBottom: 8,
  },
  skillText: {
    color: '#fff', // Teks putih untuk kontras yang lebih baik
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 14,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
});

export default SkillScreen;
