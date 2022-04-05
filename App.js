import React from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Divider, RadioButton } from 'react-native-paper';

export default function App() {
  const UBD = require('./img/ubd.png')

  const [checked, setChecked] = React.useState('Pria');
  const [fakultas, setFakultas] = React.useState('FST')
  const [prodi, setProdi] = React.useState('FST_SI')

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.banner}>
        <View>
          <Image 
            source={UBD}
            style={styles.image}
          />  
        </View>
        <View style={styles.bannerTitleContainer}>
          <Text style={styles.bannerTitle}>UNIVERSITAS BUDDHI DHARMA</Text>
          <Text style={styles.bannerSubtitle}>Kreativitas Membangun Inovasi</Text>
        </View>
      </View>

      <View style={styles.formsContainer}>
        <Text style={styles.formsLabel}>Kode Mahasiswa</Text>
        <TextInput style={styles.formsInput} />
      </View>

      <View style={styles.formsContainer}>
        <Text style={styles.formsLabel}>Nama Mahasiswa</Text>
        <TextInput style={styles.formsInput} />
      </View>

      <View style={styles.formsContainer}>
        <Text style={styles.formsLabel}>Jenis Kelamin</Text>
        <View style={styles.radioContainer}>
          <View style={styles.radio}>
            <RadioButton 
              value='Pria'
              status={ checked === 'Pria' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('Pria')}
              color='black'
            />
            <Text style={styles.formsLabel}>Pria</Text>  
          </View>
          <View style={styles.radio}>
            <RadioButton 
              value='Wanita'
              status={ checked === 'Wanita' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('Wanita')}
              color='black'
            />
            <Text style={styles.formsLabel}>Wanita</Text>
          </View>
        </View>
      </View>

      <View style={styles.formsContainer}>
        <Text style={styles.formsLabel}>Fakultas</Text>
        <Picker
          style={styles.picker}
          selectedValue={fakultas}
          onValueChange={(itemValue, itemIndex) => setFakultas(itemValue)}
        >
          <Picker.Item label="Fakultas Sains & Teknologi" value='FST' />
          <Picker.Item label="Fakultas Sosial & Humaniora" value='FSH' />
          <Picker.Item label="Fakultas Ekonomi & Bisnis" value='FEB' />
        </Picker>
      </View>

      <View style={styles.formsContainer}>
        <Text style={styles.formsLabel}>Program Studi</Text>
        {fakultas === 'FST' ?
          <Picker
            style={styles.picker}
            selectedValue={prodi}
            onValueChange={(itemValue, itemIndex) => setProdi(itemValue)}
          >
            <Picker.Item label="Sistem Informasi" value='FST_SI' />
            <Picker.Item label="Teknik Informatika" value='FST_TI' />
            <Picker.Item label="Teknik Industri" value='FST_TIn' />
          </Picker>
        : 
        <>
          {fakultas === 'FSH' ?
          <Picker
            style={styles.picker}
            selectedValue={prodi}
            onValueChange={(itemValue, itemIndex) => setProdi(itemValue)}
          > 
            <Picker.Item label="Sastra Inggris" value='FSH_SI' />
            <Picker.Item label="Ilmu Komunikasi" value='FSH_IK' />
          </Picker>
          :
          <>
            {fakultas === 'FEB' ?
            <Picker
              style={styles.picker}
              selectedValue={prodi}
              onValueChange={(itemValue, itemIndex) => setProdi(itemValue)}
            > 
              <Picker.Item label="Akuntansi" value='FEB_A' />
              <Picker.Item label="Manajemen" value='FEB_M' />
            </Picker>
            :
            <></>
            }
          </>
          }
        </>
        }
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Clear</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 25
  },
  banner : {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    height: 100,
    marginVertical: 20
  },
  bannerTitleContainer : {
    marginLeft: 20,
    flexShrink: 1
  },
  bannerTitle : {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#800000'
  },
  bannerSubtitle : {
    fontStyle: 'italic',
    fontWeight: '500',
    color: '#800000'
  },
  image : {
    position: 'relative',
    height: 100,
    width: 100
  },
  formsContainer : {
    width: '100%',
    marginVertical: 10
  },
  formsLabel : {
    fontSize: 18,
    color: '#038C9E'
  },
  formsInput : {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 18,
    padding: 10
  },
  radioContainer : {
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5
  },
  radio : {
    flexDirection: 'row',
    alignItems: 'center'
  },
  picker : {
    fontSize: 18,
    marginVertical: 10,
    padding: 10
  },
  buttonContainer : {
    width: '100%',
    marginVertical: 10,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  button : {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#038C9E',
    marginVertical: 10
  },
  buttonText : {
    fontSize: 18,
    color: '#038C9E'
  }
});
