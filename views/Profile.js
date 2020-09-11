import React, {useContext, useState, useEffect} from 'react';
import {Image} from 'react-native';
import {AuthContext} from '../contexts/AuthContext';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Body,
  Button,
} from 'native-base';
import {getAvatar} from '../hooks/APIhooks';

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const Profile = ({navigation}) => {
  const {setIsLoggedIn, user} = useContext(AuthContext);
  const [avatar, setAvatar] = useState([{filename: ''}]);

  const fetchAvatar = async () => {
    setAvatar(await getAvatar());
  };

  useEffect(() => {
    fetchAvatar();
  }, []);

  console.log('Profile.js', avatar[0].filename);

  console.log('logged in user data:', user);
  const logout = async () => {
    setIsLoggedIn(false);
    await AsyncStorage.clear();
    navigation.navigate('Login');
  };
  return (
    <Container>
      <Content padder>
        {user && ( //näyttää allaovan jos user on olemassa
          <Card>
            <CardItem header bordered>
              <Icon name="person" />
              <Text>{user.username}</Text>
              <Text style={{ textAlign: "right", flex: 1 }}>
                ID: {user.user_id}
              </Text>
            </CardItem>
            <CardItem>
              <Image
                source={{uri: mediaUrl + avatar[0].filename}}
                style={{ height: 400, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Body>
                <Text>Full name: {user.full_name}</Text>
                <Text>Email: {user.email}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Button block onPress={logout}>
                  <Text>Logout</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        )}
      </Content>
    </Container>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
