import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Write} from '../Write';

interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  comments: number;
  location: {latitude: number; longitude: number} | null;
}

const initialData: Post[] = [
  {
    id: '9',
    title: '제1실습관 4층 에어팟 주웠습니다.',
    content: '409호 칠판에 둘게요',
    date: '2024-06-20',
    comments: 2,
    location: null,
  },
  {
    id: '8',
    title: '갈색 지갑 분실물 찾아가세요.',
    content: '다니엘관 312호',
    date: '2024-06-06',
    comments: 3,
    location: null,
  },
  {
    id: '7',
    title: '음악관 3층에서 애플펜슬 주웠습니다.',
    content: '301호 교탁에 뒀어요',
    date: '2024-06-05',
    comments: 1,
    location: null,
  },
  {
    id: '6',
    title: '셔틀에서 지갑 두고 내리신 분',
    content: '경비실에 맡겼습니다.',
    date: '2024-06-03',
    comments: 4,
    location: null,
  },
  {
    id: '5',
    title: '학생 테니스장 아디다스 운동화',
    content: '찾아가세요!',
    date: '2024-06-02',
    comments: 0,
    location: null,
  },
  {
    id: '4',
    title: '100주년 기념관 검정 노트북 가방 주움',
    content: '조교실에 맡겨놨어요',
    date: '2024-05-26',
    comments: 1,
    location: null,
  },
  {
    id: '3',
    title: '다니엘관 402호에',
    content: '검정색 지갑 주웠는데 잃어버리신분?',
    date: '2024-05-25',
    comments: 2,
    location: null,
  },
  {
    id: '2',
    title: '학교 CU에 토스카드',
    content: '형광색 카드 있어요',
    date: '2024-05-24',
    comments: 0,
    location: null,
  },
  {
    id: '1',
    title: '도서관 흔들그네',
    content: '지갑 찾아가세요',
    date: '2024-05-23',
    comments: 1,
    location: null,
  },
];

interface ItemProps {
  title: string;
  content: string;
  date: string;
  comments: number;
}

const Item: React.FC<ItemProps> = ({title, content, date, comments}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.content}>{content}</Text>
    <Text style={styles.info}>
      {date} | 댓글 {comments}
    </Text>
  </View>
);

export const LostItemBoard = () => {
  const [data, setData] = useState(initialData);
  const [modalVisible, setModalVisible] = useState(false);

  const writeComponentRef = useRef<any>(null);

  const handleIconPress = () => {
    setModalVisible(true);
  };

  const handleAddPost = (
    title: string,
    content: string,
    location: {latitude: number; longitude: number} | null,
  ) => {
    const newPost: Post = {
      id: (data.length + 1).toString(), // id 추가
      title,
      content,
      date: new Date().toISOString().split('T')[0],
      comments: 0,
      location,
    };
    setData([newPost, ...data]); // data 배열에 새로운 게시물 추가
    setModalVisible(false);

    // 데이터를 백엔드로 전달
    // sendToBackend(newPost); // newPost에 id 포함
  };

  // 데이터를 백엔드로 전달하는 코드
  //  const sendToBackend = async (postData: Post) => {
  //    try {
  //      const response = await fetch('https://your-backend-endpoint.com/posts', {
  //        method: 'POST',
  //        headers: {
  //          'Content-Type': 'application/json',
  //        },
  //        body: JSON.stringify(postData),
  //      });
  //      if (!response.ok) {
  //        throw new Error('Network response was not ok');
  //      }
  //      const responseData = await response.json();
  //      console.log('Data sent to backend:', responseData);
  //    } catch (error) {
  //      console.error('Error sending data to backend:', error);
  //    }
  //  };

  const handleCompletePress = () => {
    if (writeComponentRef.current) {
      writeComponentRef.current.handleAddPost();
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Item
            title={item.title}
            content={item.content}
            date={item.date}
            comments={item.comments}
          />
        )}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.plus} onPress={handleIconPress}>
        <Icon name="pluscircleo" size={45} color="#000" />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.writeContainer}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.arrowIcon}>
                <Icon name="arrowleft" size={25} color="black" />
              </TouchableOpacity>
              <Text style={styles.write}>글쓰기</Text>
              <TouchableOpacity
                style={styles.complete}
                onPress={handleCompletePress}>
                <Text style={styles.btnText}>완료</Text>
              </TouchableOpacity>
            </View>
            <Write
              ref={writeComponentRef}
              boardName="찾기"
              onAddPost={handleAddPost}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  content: {
    fontSize: 16,
    marginBottom: 4,
  },
  info: {
    fontSize: 14,
    color: '#888',
  },
  plus: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: '95%',
    height: '90%',
  },
  writeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  write: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
  },
  arrowIcon: {
    position: 'absolute',
    top: 9,
    left: 8,
    zIndex: 1,
  },
  complete: {
    position: 'absolute',
    top: 1,
    height: 40,
    right: 8,
    zIndex: 1,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#92BAF7',
  },
  btnText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});
