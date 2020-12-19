import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  Modal,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {generateShadow} from 'react-native-shadow-generator';
import {ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

class Wellcom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTerms: false,

      illustrations: [
        {
          id: 1,
          source: require('../assets/images/Illustrations/Illustrations2.jpg'),
        },
        {
          id: 2,
          source: require('../assets/images/Illustrations/Illustrations3.jpg'),
        },
        {
          id: 3,
          source: require('../assets/images/Illustrations/Illustrations1.jpg'),
        },
        {
          id: 4,
          source: require('../assets/images/Illustrations/Illustrations4.jpg'),
        },
      ],
    };
  }

  renderTermsService() {
    return (
      <Modal animationType="slide" visible={this.state.showTerms}>
        <View style={{flex: 1, padding: 25, justifyContent: 'space-evenly'}}>
          <Text style={{fontSize: 20, color: 'gray', letterSpacing: 2}}>
            Terms of Service
          </Text>
          <ScrollView>
            <Text style={{fontSize: 12, color: 'gray', marginTop: 10}}>
              Magni rerum delectus. Ut officia quod quisquam impedit nihil
              voluptas repellendus est velit. Autem nesciunt distinctio rem odit
              enim voluptatibus. Fugiat dolorum est voluptas et qui. Voluptatem
              dolore porro dolorum vel. Blanditiis dolorem sint vero laudantium
              saepe nemo sapiente fuga. Suscipit voluptatem vel veritatis. Iusto
              vel nihil vel qui magnam molestiae earum autem qui. Quasi suscipit
              ut impedit aut earum quam suscipit iste nisi. Totam ut ducimus
              amet et ipsum maiores ullam quas quos. Neque error tenetur quam
              alias officia aut voluptas. Deleniti impedit itaque magnam modi
              rerum in numquam eius quia. Ea eos nesciunt non consequuntur
              minus. Omnis sed facere dolorum nulla magnam minus quia. Et rerum
              quae eos id. Ea maiores sed est rerum aut.
            </Text>
            <Text style={{fontSize: 12, color: 'gray', marginTop: 20}}>
              Magni rerum delectus. Ut officia quod quisquam impedit nihil
              voluptas repellendus est velit. Autem nesciunt distinctio rem odit
              enim voluptatibus. Fugiat dolorum est voluptas et qui. Voluptatem
              dolore porro dolorum vel. Blanditiis dolorem sint vero laudantium
              saepe nemo sapiente fuga. Suscipit voluptatem vel veritatis. Iusto
              vel nihil vel qui magnam molestiae earum autem qui. Quasi suscipit
              ut impedit aut earum quam suscipit iste nisi. Totam ut ducimus
              amet et ipsum maiores ullam quas quos. Neque error tenetur quam
              alias officia aut voluptas. Deleniti impedit itaque magnam modi
              rerum in numquam eius quia. Ea eos nesciunt non consequuntur
              minus. Omnis sed facere dolorum nulla magnam minus quia. Et rerum
              quae eos id. Ea maiores sed est rerum aut.
            </Text>
            <Text style={{fontSize: 12, color: 'gray', marginTop: 20}}>
              Magni rerum delectus. Ut officia quod quisquam impedit nihil
              voluptas repellendus est velit. Autem nesciunt distinctio rem odit
              enim voluptatibus. Fugiat dolorum est voluptas et qui. Voluptatem
              dolore porro dolorum vel. Blanditiis dolorem sint vero laudantium
              saepe nemo sapiente fuga. Suscipit voluptatem vel veritatis. Iusto
              vel nihil vel qui magnam molestiae earum autem qui. Quasi suscipit
              ut impedit aut earum quam suscipit iste nisi. Totam ut ducimus
              amet et ipsum maiores ullam quas quos. Neque error tenetur quam
              alias officia aut voluptas. Deleniti impedit itaque magnam modi
              rerum in numquam eius quia. Ea eos nesciunt non consequuntur
              minus. Omnis sed facere dolorum nulla magnam minus quia. Et rerum
              quae eos id. Ea maiores sed est rerum aut.
            </Text>
            <Text style={{fontSize: 12, color: 'gray', marginTop: 20}}>
              Magni rerum delectus. Ut officia quod quisquam impedit nihil
              voluptas repellendus est velit. Autem nesciunt distinctio rem odit
              enim voluptatibus. Fugiat dolorum est voluptas et qui. Voluptatem
              dolore porro dolorum vel. Blanditiis dolorem sint vero laudantium
              saepe nemo sapiente fuga. Suscipit voluptatem vel veritatis. Iusto
              vel nihil vel qui magnam molestiae earum autem qui. Quasi suscipit
              ut impedit aut earum quam suscipit iste nisi. Totam ut ducimus
              amet et ipsum maiores ullam quas quos. Neque error tenetur quam
              alias officia aut voluptas. Deleniti impedit itaque magnam modi
              rerum in numquam eius quia. Ea eos nesciunt non consequuntur
              minus. Omnis sed facere dolorum nulla magnam minus quia. Et rerum
              quae eos id. Ea maiores sed est rerum aut.
            </Text>
            <Text style={{fontSize: 12, color: 'gray', marginTop: 20}}>
              Magni rerum delectus. Ut officia quod quisquam impedit nihil
              voluptas repellendus est velit. Autem nesciunt distinctio rem odit
              enim voluptatibus. Fugiat dolorum est voluptas et qui. Voluptatem
              dolore porro dolorum vel. Blanditiis dolorem sint vero laudantium
              saepe nemo sapiente fuga. Suscipit voluptatem vel veritatis. Iusto
              vel nihil vel qui magnam molestiae earum autem qui. Quasi suscipit
              ut impedit aut earum quam suscipit iste nisi. Totam ut ducimus
              amet et ipsum maiores ullam quas quos. Neque error tenetur quam
              alias officia aut voluptas. Deleniti impedit itaque magnam modi
              rerum in numquam eius quia. Ea eos nesciunt non consequuntur
              minus. Omnis sed facere dolorum nulla magnam minus quia. Et rerum
              quae eos id. Ea maiores sed est rerum aut.
            </Text>
          </ScrollView>

          <View style={{alignItems: 'center'}}>
            <LinearGradient
              style={styles.linearGradient}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#10B2AC', '#15BA9F', '#25C77C']}>
              <TouchableOpacity
                style={styles.TouchableOpacityService}
                onPress={() => this.setState({showTerms: false})}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    marginTop: -10,
                    letterSpacing: 1,
                  }}>
                  I Understand
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </Modal>
    );
  }

  renderIllustrations() {
    return (
      <FlatList
        horizontal={true}
        pagingEnabled={true}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={this.state.illustrations}
        extraData={this.state.illustrations}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item}) => {
          return (
            <Image
              source={item.source}
              resizeMode="contain"
              style={{
                width: width,
                height: height / 2,
                overflow: 'visible',
              }}
            />
          );
        }}
      />
    );
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 0.2,
            justifyContent: 'flex-end',
            alignContent: 'center',
            marginTop: 40,
          }}>
          <Text
            style={{fontWeight: 'bold', fontSize: 30, alignContent: 'center'}}>
            Your Home.
            <Text style={{color: '#3ec5a9'}}> Greener</Text>
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: 'gray',
              textAlign: 'center',
              opacity: 0.5,
            }}>
            Enjoy the experience.
          </Text>
        </View>
        <View
          style={{
            flex: 0.7,
            justifyContent: 'space-between',
          }}>
          {this.renderIllustrations()}
        </View>
        <View>
          <LinearGradient
            style={styles.linearGradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#10B2AC', '#15BA9F', '#25C77C']}>
            <TouchableOpacity
              style={styles.TouchableOpacity}
              onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  marginTop: -10,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </LinearGradient>

          <TouchableOpacity
            style={(styles.TouchableOpacity, styles.shadow)}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={{fontSize: 16, letterSpacing: 1}}>Signup</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => this.setState({showTerms: true})}>
            <Text style={{paddingTop: 20, letterSpacing: 2}}>
              Terms of Sevice
            </Text>
          </TouchableOpacity>
        </View>
        {this.renderTermsService()}
      </View>
    );
  }
}

export default Wellcom;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#fff',
  },
  TouchableOpacity: {
    padding: 10,
    paddingLeft: 90,
    paddingRight: 90,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  TouchableOpacityService: {
    padding: 10,
    paddingLeft: 100,
    paddingRight: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  linearGradient: {
    borderRadius: 5,
  },
  shadow: {
    alignItems: 'center',
    marginTop: 10,
    padding: 15,
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    ...generateShadow(7),
  },
});
