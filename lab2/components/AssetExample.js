import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
   <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Кнопка нажата")}
      >
        <Text style={styles.buttonText}>Новости</Text>
      </TouchableOpacity>
      <Image style={styles.logo} source={require('../assets/2.jpg')} />
      <Text style={styles.paragraph}>
        Как управлять деньгами в паре: техника четырех счетов
      </Text>
      <Text style={styles.text}>
      Если в наступающем году вы собираетесь начать совместную жизнь с любимым человеком, то советы по управлению деньгами в паре вам могут очень даже пригодиться. 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  paragraph: {
    marginBottom: 25,
    marginTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    width: 280,
  },
  logo: {
    alignSelf: 'flex-start',
    height: 200,
    width: 250,
  },
  text: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 35,
    width: 280,
  },
  button: {
    paddingTop: 40,
    marginBottom: 40,
    alignSelf: 'flex-start',
    paddingBottom: 15,
    
  },
  buttonText: {
    fontSize: 15,
    color: 'blue',
  },
});
