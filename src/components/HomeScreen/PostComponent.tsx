import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Avatar, Button, Icon} from '@rneui/themed';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const PostComponent = () => {
  return (
    <View style={styles.containerMain}>
      <View style={styles.containerHeader}>
        <Avatar
          size={32}
          rounded
          source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
        />
        <View style={styles.userInfo}>
          <View style={styles.userNameRow}>
            <Text style={styles.userName}>Adrian Thompson</Text>
            <Button
              title="Follow"
              type="clear"
              titleStyle={styles.followButtonText}
              containerStyle={styles.followButton}
            />
          </View>
          <View style={styles.postInfo}>
            <Text style={styles.postTime}>3h</Text>
            <Text style={styles.dotSeparator}>·</Text>
            <FontAwesome5Icon name="globe-americas" size={10} color="#ccc" />
          </View>
        </View>
        <View style={styles.iconActions}>
          <Icon name="more-horiz" size={25} color="#fff" />
          <Icon
            name="close"
            size={25}
            color="#fff"
            style={{marginHorizontal: 15}}
          />
        </View>
      </View>
      <Text style={styles.postDescription}>
        Beautiful day at the beach! 🏖️ #vacation #sunset
      </Text>
      <Image
        source={{
          uri: 'https://preview.redd.it/do-you-think-spider-man-beyond-the-spider-verse-would-be-v0-rzizz9s2jfoc1.jpeg?auto=webp&s=350c5d0aea4949c2fd859c88899d17f0bf593695',
        }}
        style={styles.postImage}
        resizeMode="cover"
      />
      <View style={styles.actionsRow}>
        <Button
          icon={<FontAwesome5Icon name="thumbs-up" size={20} color="#fff" />}
          title="Like"
          type="clear"
          titleStyle={styles.actionButtonText}
        />
        <Button
          icon={<FontAwesome5Icon name="comment" size={25} color="#fff" />}
          title="Comment"
          type="clear"
          titleStyle={styles.actionButtonText}
        />
        <Button
          icon={<FontAwesome5Icon name="whatsapp" size={25} color="#fff" />}
          title="Send"
          type="clear"
          titleStyle={styles.actionButtonText}
        />
        <Button
          icon={<FontAwesome5Icon name="share" size={20} color="#fff" />}
          title="Share"
          type="clear"
          titleStyle={styles.actionButtonText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#1C1C1C',
    marginVertical: 5,
    width: '100%',
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  followButton: {
    marginLeft: 5,
  },
  followButtonText: {
    color: '#1E90FF',
    fontSize: 14,
  },
  postInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postTime: {
    color: '#ccc',
    fontSize: 12,
  },
  dotSeparator: {
    color: '#ccc',
    fontSize: 12,
    marginHorizontal: 5,
  },
  iconActions: {
    flexDirection: 'row',
  },
  postImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginVertical: 5,
  },
  postDescription: {
    color: '#fff',
    fontSize: 14,
    margin: 5,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButtonText: {
    color: '#fff',
    marginLeft: 5,
  },
});

export default PostComponent;
