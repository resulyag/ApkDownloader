import React, { Component } from 'react';
import { View, Button, Alert, Linking } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

class ApkDownloadScreen extends Component {
    handleDownloadAndInstall = async () => {
        const apkUrl = 'https://app.diemobiliar.x-lodge.com/dating.apk'; // İndirilecek APK dosyasının URL'sini buraya ekleyin

        const dirs = RNFetchBlob.fs.dirs;
        const downloadFilePath = `${dirs.DownloadDir}/dating.apk`;

        try {
            await RNFetchBlob.config({
                fileCache: true,
                path: downloadFilePath,
            }).fetch('GET', apkUrl);

            this.openFile(downloadFilePath);
        } catch (error) {
            console.error('APK indirme hatası:', error);
            Alert.alert('Hata', 'APK indirme sırasında bir hata oluştu.');
        }
    };

    openFile = (filePath) => {
        Linking.openURL(`file:/${filePath}`)
            .then(() => {
                console.log('Dosya açıldı:', filePath);
            })
            .catch((error) => {
                console.error('Dosya açma hatası:', error);
                Alert.alert('Hata', 'Dosya açma sırasında bir hata oluştu.');
            });
    };

    componentDidMount() {
        this.handleDownloadAndInstall();
    }

    render() {
        return (
            <View>
            </View>
        );
    }
}

export default ApkDownloadScreen;
