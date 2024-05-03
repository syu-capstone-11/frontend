import { AppRegistry } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { name as appName } from './app.json';

const App = () => {
  return (
    <MapView
      style={{ flex: 1 }}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 37.78825, // 초기 지도 중심 위도
        longitude: -122.4324, // 초기 지도 중심 경도
        latitudeDelta: 0.0922, // 지도의 높이. 값이 작을수록 지도가 더 확대됩니다.
        longitudeDelta: 0.0421, // 지도의 너비. 값이 작을수록 지도가 더 확대됩니다.
      }}
    >
      <Marker
        coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
        title={"Marker Title"}
        description={"Marker Description"}
      />
    </MapView>
  );
};

AppRegistry.registerComponent(appName, () => App);
