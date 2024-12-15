import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Box, Text, Button, VStack, HStack, Icon, Avatar, Heading, Divider } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#134163', '#000d1d']} // Gradasi biru muda dan ungu
      start={{ x: 0.5, y: 0 }} // 70% gradasi biru muda di bagian atas
      end={{ x: 0.5, y: 1 }} // 30% gradasi ungu di bagian bawah
      style={styles.gradientBackground}
    >
      <VStack style={styles.container}>
        {/* Header Section - Profil Pengguna */}
        <VStack space={4} alignItems="center" justifyContent="center" style={styles.header}>
          <Avatar
            size="2xl"
            source={require('../assets/kucing.png')} // Menggunakan require untuk mengakses file gambar lokal
            style={styles.avatar}
          />
          <Heading style={styles.heading}>Said lubawi</Heading>
          <Text style={styles.subHeading}>
            Mahasiswa Teknik Informatika | Pengembang Aplikasi & Web
          </Text>

          <Text style={styles.description}>
            Saya adalah seorang pengembang aplikasi yang bersemangat untuk menciptakan solusi kreatif
            dan inovatif menggunakan teknologi terkini.
          </Text>

          <Button
            onPress={() => navigation.navigate('Profile')} // Navigasi ke halaman profil
            style={styles.button}
          >
            <Text style={styles.buttonText}>Lihat Profil</Text>
          </Button>
        </VStack>

        {/* Informasi Tambahan */}
        <HStack justifyContent="space-between" style={styles.statsContainer}>
          <Box style={styles.statBox}>
            <Icon as={Ionicons} name="code-slash" size={30} style={styles.statIcon} />
            <Text style={styles.statText}>10+ Proyek</Text>
          </Box>
          <Box style={styles.statBox}>
            <Icon as={Ionicons} name="book" size={30} style={styles.statIcon} />
            <Text style={styles.statText}>5 Tahun</Text>
          </Box>
          <Box style={styles.statBox}>
            <Icon as={Ionicons} name="happy" size={30} style={styles.statIcon} />
            <Text style={styles.statText}>50+ Klien</Text>
          </Box>
        </HStack>
        <Text style={styles.infoText}>
          Berpengalaman dalam pengembangan aplikasi berbasis web dan mobile.
        </Text>
      </VStack>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    height: height,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  avatar: {
    marginBottom: 16,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  heading: {
    fontSize: 28,
    color: '#fccb06',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginTop: 8,
  },
  subHeading: {
    color: '#f5d34c',
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 16,
  },
  description: {
    color: '#edf7f6',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#fccb06',
    width: '80%',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    paddingVertical: 12,
    alignSelf: 'center',
    marginBottom: 24,
  },
  buttonText: {
    color: '#000', // Warna hitam
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    marginVertical: 32,
    borderWidth: 0.5,
    borderColor: '#E5E6F7',
  },
  infoCard: {
    backgroundColor: '#f5d34c',
    padding: 16,
    borderRadius: 10,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  infoText: {
    color: '#f5d34c',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '600',
    fontStyle: 'italic',
    marginTop: 50,
  },
  statsContainer: {
    marginTop: 50,
    marginBottom: 24,
  },
  statBox: {
    backgroundColor: '#fccb06',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    width: width * 0.3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  statIcon: {
    color: '#134163',
    marginBottom: 8,
  },
  statText: {
    color: '#134163',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default HomeScreen;
