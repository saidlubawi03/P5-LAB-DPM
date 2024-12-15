import React from 'react';
import { Box, Text, Button, VStack } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { Animated } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Animasi untuk efek "fade in"
  const fadeAnim = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <LinearGradient
      colors={['#134163', '#000d1d']} // Gradasi biru muda dan ungu
      start={{ x: 0.5, y: 0 }} // 70% gradasi biru muda di bagian atas
      end={{ x: 0.5, y: 1 }} // 30% gradasi ungu di bagian bawah
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}
    >
      <Box flex={1} justifyContent="center" alignItems="center" px={4}>
        <VStack space={6} alignItems="center">
          {/* Judul dengan bayangan dan animasi */}
          <Animated.View style={{ opacity: fadeAnim }}>
            <Text
              fontSize="5xl"
              color="#fccb06"
              bold
              textAlign="center"
              mb={4}
              style={{
                textShadow: '3px 3px 10px rgba(0, 0, 0, 0.5)',
                fontFamily: 'sans-serif-condensed',
              }}
            >
              Selamat Datang Di Aplikasi Portofolio
            </Text>
          </Animated.View>

          {/* Deskripsi dengan bayangan halus dan animasi */}
          <Animated.View style={{ opacity: fadeAnim }}>
            <Text
              color="white"
              fontSize="xl"
              textAlign="center"
              mb={6}
              style={{
                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                lineHeight: 30,
                fontFamily: 'sans-serif-light',
              }}
            >
              Aplikasi ini Akan Menampilkan Sebuah Data Diri, Projek dan Beragam Skill untuk Kebutuhan Portofolio
            </Text>
          </Animated.View>
          {/* Tombol dengan animasi hover dan pressed */}
          <Animated.View style={{ opacity: fadeAnim }}>
            <Button
              onPress={() => navigation.navigate('Home')}
              bg="#f5d34c"
              size="lg"
              _text={{
                color: '#000d1d',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
              borderRadius="full"
              shadow={5}
              width="80%"
              minWidth={200}
              height={50}
              _hover={{ bg: '#222e50' }}
              _pressed={{ bg: '#222e50' }}
              _focus={{ borderColor: 'purple.900' }}
              justifyContent="center"
            >
              Get Started
            </Button>
          </Animated.View>
        </VStack>
      </Box>
    </LinearGradient>
  );
};

export default WelcomeScreen;