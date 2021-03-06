import React, { Component } from 'react';
import { translate} from 'react-i18next';
import { Container, Content, Header, Left, H3, Button, Text, View } from 'native-base';

import styles from './styles';

class Login extends Component {
  render() {
    const { t, navigation } = this.props;
    // Auth.login();
    return (
        <Container>
          <Header style={{ paddingBottom: 30 }}>
            <Left><H3> {t('login:property-login')} </H3></Left>
          </Header>
          <Content>
            {this.props.loginForm}
            <View style={styles.footer}>
              <Text
                style={{ alignSelf: 'center', fontSize: 14 }}
                onPress={() => navigation.navigate('Home')}
              > {t('login:forget-password')} </Text>
              <Button block info
                onPress={() => this.props.onLogin()}
                style={{paddingRight: 20, paddingLeft: 20}}>
                <Text>{t('login:login')}</Text>
              </Button>
            </View>
          </Content>
        </Container>
    );
  }
}

export default translate(['home', 'common'], { wait: true })(Login);
