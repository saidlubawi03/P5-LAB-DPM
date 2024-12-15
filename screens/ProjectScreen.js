import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Box, Text, VStack, Flex, Heading } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const ProjectScreen = () => {
  return (
    <LinearGradient
      colors={['#134163', '#000d1d']} // Gradasi biru muda dan ungu
      start={{ x: 0.5, y: 0 }} // 70% gradasi biru muda di bagian atas
      end={{ x: 0.5, y: 1 }} // 30% gradasi ungu di bagian bawah
      style={styles.gradientBackground}
    >
      <VStack style={styles.container} space={6}>
        {/* Section Heading */}
        <Heading style={styles.projectsHeading}>Proyek Terbaru</Heading>

        {/* Project List */}
        <Flex direction="row" wrap="wrap" justify="space-between" style={styles.projectContainer}>
          {/* Project Boxes with Different Styles */}
          <Box style={[styles.box, styles.shadow]}>
            <Text style={styles.projectTitle}>Aplikasi Tiket Bioskop</Text>
            <Text style={styles.projectDescription}>
              Sebuah aplikasi untuk pemesanan tiket bioskop yang modern.
            </Text>
          </Box>
          <Box style={[styles.box, styles.shadow]}>
            <Text style={styles.projectTitle}>Sistem Manajemen Akademik</Text>
            <Text style={styles.projectDescription}>
              Sistem manajemen akademik untuk mahasiswa dan dosen.
            </Text>
          </Box>
          <Box style={[styles.box, styles.shadow]}>
            <Text style={styles.projectTitle}>E-Commerce Store</Text>
            <Text style={styles.projectDescription}>
              Platform belanja online dengan pengalaman pengguna yang responsif.
            </Text>
          </Box>
          <Box style={[styles.box, styles.shadow]}>
            <Text style={styles.projectTitle}>Aplikasi Pelacakan Kebugaran</Text>
            <Text style={styles.projectDescription}>
              Aplikasi untuk membantu pengguna melacak dan meningkatkan kesehatan.
            </Text>
          </Box>
          <Box style={[styles.box, styles.shadow]}>
            <Text style={styles.projectTitle}>Aplikasi Smart Home</Text>
            <Text style={styles.projectDescription}>
              Solusi pintar untuk mengontrol perangkat rumah dari ponsel Anda.
            </Text>
          </Box>
          <Box style={[styles.box, styles.shadow]}>
            <Text style={styles.projectTitle}>Portal Berita</Text>
            <Text style={styles.projectDescription}>
              Portal berita terkini dengan antarmuka yang ramah pengguna.
            </Text>
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
    paddingVertical: 100,
    height: height,
  },
  projectsHeading: {
    fontSize: 30,
    color: '#fccb06',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  projectContainer: {
    width: '100%',
  },
  // Different style for each box
  box: {
    backgroundColor: '#134163',
    borderWidth: 1,
    borderColor: '#E6E6FA',
    padding: 16,
    borderRadius: 16,
    marginVertical: 8,
    width: width * 0.44, // 44% of screen width for 2 columns
    justifyContent: 'center',
  },
  projectTitle: {
    color: '#fccb06', 
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'extra-bold',
    fontWeight: 'bold',
  },
  projectDescription: {
    color: 'white', 
    marginTop: 8,
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

export default ProjectScreen;
