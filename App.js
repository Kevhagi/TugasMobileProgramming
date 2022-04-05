import React from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';

export default function App() {
  const UBD = require('./img/ubd.png')

  const [nama, setNama] = React.useState('')
  const [kode, setKode] = React.useState('')
  const [checked, setChecked] = React.useState('Pria');
  const [fakultas, setFakultas] = React.useState('Fakultas Sains & Teknologi')
  const [prodi, setProdi] = React.useState('Sistem Informasi')

  function saveForm(){
    Alert.alert(
      'Data berhasil disimpan!',
      `
      Kode mahasiswa : ${kode}
      Nama mahasiswa : ${nama}
      Jenis kelamin : ${checked}
      Fakultas : ${fakultas}
      Program studi : ${prodi}
      `,
      [
        { text: 'OK'}
      ]
    )
  }

  function clearAll(){
    setKode('')
    setNama('')
  }

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
        <TextInput 
          style={styles.formsInput}
          value={kode}
          onChangeText={(value) => setKode(value)}
        />
      </View>

      <View style={styles.formsContainer}>
        <Text style={styles.formsLabel}>Nama Mahasiswa</Text>
        <TextInput 
          style={styles.formsInput}
          value={nama}
          onChangeText={(value) => setNama(value)}
        />
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
          <Picker.Item label="Fakultas Sains & Teknologi" value='Fakultas Sains & Teknologi' />
          <Picker.Item label="Fakultas Sosial & Humaniora" value='Fakultas Sosial & Humaniora' />
          <Picker.Item label="Fakultas Ekonomi & Bisnis" value='Fakultas Ekonomi & Bisnis' />
        </Picker>
      </View>

      <View style={styles.formsContainer}>
        <Text style={styles.formsLabel}>Program Studi</Text>
        {fakultas === 'Fakultas Sains & Teknologi' ?
          <Picker
            style={styles.picker}
            selectedValue={prodi}
            onValueChange={(itemValue, itemIndex) => setProdi(itemValue)}
          >
            <Picker.Item label="Sistem Informasi" value='Sistem Informasi' />
            <Picker.Item label="Teknik Informatika" value='Teknik Informatika' />
            <Picker.Item label="Teknik Industri" value='Teknik Industri' />
          </Picker>
        : 
        <>
          {fakultas === 'Fakultas Sosial & Humaniora' ?
          <Picker
            style={styles.picker}
            selectedValue={prodi}
            onValueChange={(itemValue, itemIndex) => setProdi(itemValue)}
          > 
            <Picker.Item label="Sastra Inggris" value='Sastra Inggris' />
            <Picker.Item label="Ilmu Komunikasi" value='Ilmu Komunikasi' />
          </Picker>
          :
          <>
            {fakultas === 'Fakultas Ekonomi & Bisnis' ?
            <Picker
              style={styles.picker}
              selectedValue={prodi}
              onValueChange={(itemValue, itemIndex) => setProdi(itemValue)}
            > 
              <Picker.Item label="Akuntansi" value='Akuntansi' />
              <Picker.Item label="Manajemen" value='Manajemen' />
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
        <Pressable style={styles.button} onPress={() => saveForm()}>
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => clearAll()}>
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
