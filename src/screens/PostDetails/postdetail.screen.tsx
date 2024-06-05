import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

type RootStackParamList = {
  PostDetail: {
    post: {
      id: string;
      title: string;
      content: string;
      date: string;
      comments: number;
      location: {latitude: number; longitude: number} | null;
    };
  };
};
type PostDetailRouteProp = RouteProp<RootStackParamList, 'PostDetail'>;

export const PostDetails: React.FC = () => {
  const route = useRoute<PostDetailRouteProp>();
  const {post} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.content}>{post.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 18,
  },
});
