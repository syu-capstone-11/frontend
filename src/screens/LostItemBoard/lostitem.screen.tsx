import React, {useState} from 'react';
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
}

const DATA: Post[] = [
  {
    id: '9',
    title: '제1실습관에서 에어팟 잃어버렸습니다.',
    content: '분홍색 케이스입니다.',
    date: '2024-06-20',
    comments: 2,
  },
  {
    id: '8',
    title: '갈색 지갑을 잃어버렸습니다.',
    content: '다니엘관에서 보신 분 연락주세요.',
    date: '2024-06-06',
    comments: 3,
  },
  {
    id: '7',
    title: '음악관 3층에서 애플펜슬',
    content: '주우신분 있나요?',
    date: '2024-06-05',
    comments: 1,
  },
  {
    id: '6',
    title: '파인하우스에서 핸드폰 주우신 분',
    content: '아이폰 실버 14입니다.. 보시면 연락주세요..',
    date: '2024-06-03',
    comments: 4,
  },
  {
    id: '5',
    title: '학생 테니스장 아디다스 운동화',
    content: '보신 분 있으신가요?',
    date: '2024-06-02',
    comments: 0,
  },
  {
    id: '4',
    title: '100주년 기념관 검정 노트북 가방',
    content: '4층에서 보신 분 있나요?',
    date: '2024-05-26',
    comments: 1,
  },
  {
    id: '3',
    title: '다니엘관 402호에',
    content: '검정색 지갑 두고왔는데 보신분 댓글부탁드립니다.',
    date: '2024-05-25',
    comments: 2,
  },
  {
    id: '2',
    title: '학교 CU에 토스카드',
    content: '형광색 보신분...',
    date: '2024-05-24',
    comments: 0,
  },
  {
    id: '1',
    title: '도서관 흔들그네에',
    content: '지갑 두고온 거 같은데 주우신분 있나요..?',
    date: '2024-05-23',
    comments: 1,
  },
];

const sortedData = DATA.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

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
  const [modalVisible, setModalVisible] = useState(false);

  const handleIconPress = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedData}
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
            <Write />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(false)}>
                <Text>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text>저장</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#ffffff',
  },
  item: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    marginVertical: 0,
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
    fontSize: 17.2,
    marginBottom: 8,
  },
  info: {
    fontSize: 14.6,
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
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  button: {
    width: '48%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#87ceeb',
    borderRadius: 5,
  },
});

export default LostItemBoard;
