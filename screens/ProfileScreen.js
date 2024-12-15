import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Box, Text, Avatar, Button, HStack, VStack, Center, Divider, Checkbox } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const ProfileScreen = () => {
  // State untuk menyimpan status checkbox
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  // Fungsi untuk menangani perubahan checkbox
  const handleHobbyChange = (hobby) => {
    setSelectedHobbies((prev) =>
      prev.includes(hobby) ? prev.filter((item) => item !== hobby) : [...prev, hobby]
    );
  };

  return (
    <LinearGradient
      colors={['#134163', '#000d1d']} // Gradasi biru muda dan ungu
      start={{ x: 0.5, y: 0 }} // 70% gradasi biru muda di bagian atas
      end={{ x: 0.5, y: 1 }} // 30% gradasi ungu di bagian bawah
      style={styles.gradientBackground}
    >
      <Box style={styles.container}>
        <Center mb={6}>
          <Avatar
            size="2xl"
            bg="purple.600"
            source={require('../assets/kucing.png')} // Menggunakan require untuk mengakses file gambar lokal
            borderWidth={2}
            borderColor="#fccb06"
            shadow={4}
            style={styles.avatar}
          />
          <Text style={styles.userName}>Said lubawi</Text>
          <Text style={styles.userEmail}>Bawik@gmail.com</Text>
        </Center>

        {/* Info Section */}
        <VStack space={4} alignItems="flex-start" px={4}>
          <HStack justifyContent="space-between" width="100%">
            <Text style={styles.infoLabel}>NPM:</Text>
            <Text style={styles.infoValue}>223510</Text>
          </HStack>
          <HStack justifyContent="space-between" width="100%">
            <Text style={styles.infoLabel}>Jurusan:</Text>
            <Text style={styles.infoValue}>Teknik Informatika</Text>
          </HStack>
          <HStack justifyContent="space-between" width="100%">
            <Text style={styles.infoLabel}>Fakultas:</Text>
            <Text style={styles.infoValue}>Fakultas Teknik</Text>
          </HStack>
          <HStack justifyContent="space-between" width="100%">
            <Text style={styles.infoLabel}>Jenis Kelamin:</Text>
            <Text style={styles.infoValue}>Laki - Laki / </Text><Text style={styles.infoValue2}>Perempuan</Text>
          </HStack>
          <HStack justifyContent="space-between" width="100%">
            <Text style={styles.infoLabel}>Agama:</Text>
            <Text style={styles.infoValue}>Islam</Text>
          </HStack>

          {/* Hobi Section with Checkboxes */}
          <HStack justifyContent="space-between" width="100%">
            <Text style={styles.infoLabel}>Hobi:</Text>
            <VStack space={2} alignItems="flex-start">
              {/* Checkbox Berenang */}
              <HStack alignItems="center">
                <Checkbox
                  value="Berenang"
                  isChecked={selectedHobbies.includes('Berenang')}
                  onChange={() => handleHobbyChange('Berenang')}
                  style={styles.checkbox}
                  colorScheme="yellow" // Menetapkan warna checkbox yang tercentang menjadi kuning
                />
                <Text 
                  style={[
                    styles.checkboxText, 
                    !selectedHobbies.includes('Berenang') && styles.strikethrough
                  ]}
                >
                  Berenang
                </Text>
              </HStack>

              {/* Checkbox Membaca */}
              <HStack alignItems="center">
                <Checkbox
                  value="Membaca"
                  isChecked={selectedHobbies.includes('Membaca')}
                  onChange={() => handleHobbyChange('Membaca')}
                  style={styles.checkbox}
                  colorScheme="yellow" // Menetapkan warna checkbox yang tercentang menjadi kuning
                />
                <Text 
                  style={[
                    styles.checkboxText, 
                    !selectedHobbies.includes('Membaca') && styles.strikethrough
                  ]}
                >
                  Membaca
                </Text>
              </HStack>
            </VStack>
          </HStack>
        </VStack>

        {/* Divider */}
        <Divider my={6} style={styles.divider} />

        {/* Button Section */}
        <Center>
          <Button
            onPress={() => alert('Edit Profil')}
            style={styles.editButton}
            _text={styles.editButtonText}
            _hover={{ bg: "#fccb06" }} // Gaya saat hover
            _pressed={{ bg: "#f5d34c" }} // Gaya saat ditekan
          >
            Edit Profil
          </Button>
        </Center>
      </Box>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  avatar: {
    marginBottom: 16,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  userName: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 16,
    textAlign: 'center',
  },
  userEmail: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#fff',
    marginTop: 4,
    textAlign: 'center',
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fccb06',
  },
  infoValue: {
    fontSize: 18,
    color: '#fff',
    paddingLeft: 80,
  },
  infoValue2: {
    fontSize: 18,
    color: '#fff',
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },
  checkbox: {
    marginLeft: 8,
    marginTop: 8,
  },
  checkboxText: {
    fontSize: 18,
    color: '#fff',
    paddingLeft: 15,
  },
  strikethrough: {
    textDecorationLine: 'line-through',
    fontStyle: 'italic',
  },
  divider: {
    backgroundColor: '#E5E6F7',
    height: 1,
  },
  editButton: {
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
  editButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
