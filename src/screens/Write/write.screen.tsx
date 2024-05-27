import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

interface WriteProps {
  boardName: string;
  onAddPost: (title: string, content: string, location: { latitude: number, longitude: number } | null) => void;
}

const defaultLocation = {
  latitude: 37.643587,
  longitude: 127.106351
};

export const Write = forwardRef<any, WriteProps>(({ boardName, onAddPost }, ref) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [markerPosition, setMarkerPosition] = useState<{ latitude: number, longitude: number } | null>(defaultLocation);

  useImperativeHandle(ref, () => ({
    handleAddPost() {
      onAddPost(title, content, markerPosition);  // 사용자가 작성한 제목, 내용, 위치 전달
      setTitle('');
      setContent('');
      setMarkerPosition(defaultLocation);  // 게시물 추가 후 마커 위치 초기화
    }
  }));

  const handleTitleChange = (text: string) => {
    setTitle(text);
  };

  const handleContentChange = (text: string) => {
    setContent(text);
  };

  const handleMapPress = (event: any) => {
    const { coordinate } = event.nativeEvent;
    setMarkerPosition(coordinate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.board}>{boardName}</Text>
      <TextInput 
        style={styles.title} 
        placeholder="제목"
        value={title}
        onChangeText={handleTitleChange}
      />
      <View style={styles.horizontalLine}></View>
      <TextInput 
        style={styles.content} 
        multiline={true} 
        placeholder="내용"
        value={content}
        onChangeText={handleContentChange}
      />
      <MapView 
        style={styles.map} 
        initialRegion={{
          latitude: defaultLocation.latitude,
          longitude: defaultLocation.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }}
        onPress={handleMapPress}
      >
        {markerPosition && (
          <Marker coordinate={markerPosition} />
        )}
      </MapView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginTop: 0
  },
  board: {
    marginTop: 30,
    marginLeft: 5,
    fontSize: 17
  },
  title: {
    marginTop: 7,
    marginLeft: 3,
    fontSize: 20,
    textAlign: 'left'
  },
  horizontalLine: {
    width: '98%',
    height: 1,
    backgroundColor: 'black',
    marginLeft: 3,
    textAlign: 'center'
  },
  content: {
    marginTop: 5,
    marginLeft: 3,
    fontSize: 17,
    width: '98%',
    height: '25%',
    textAlignVertical: 'top',
    paddingTop: 6,
    paddingLeft: 6,
    borderWidth: 1
  },
  map: {
    marginTop: 20,
    marginLeft: 3,
    borderWidth: 1,
    borderColor: 'lightgrey',
    width: '98%',
    height: '45%',
    textAlignVertical: 'top',
  }
});