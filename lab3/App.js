import { Text, SafeAreaView, StyleSheet, View } from 'react-native'; 
 
export default function App() { 
  return ( 
    <SafeAreaView style={styles.container}> 
    <View style={styles.start}> 
    <Text style={styles.paragraph}> 
        5 книжных новинок октября 
      </Text> 
    </View>        
    <View style={styles.container1}> 
      <Text style={styles.text2}> 
        Как управлять деньгами в паре: техника четырех счетов
      </Text> 
    </View> 
    <View style={styles.container2}> 
      <Text style={styles.text1}> 
      Если в наступающем году вы собираетесь начать совместную жизнь с любимым человеком, то советы по управлению деньгами в паре вам могут очень даже пригодиться.   
      </Text> 
    </View> 
    </SafeAreaView> 
  ); 
} 
 
const styles = StyleSheet.create({ 
  container:{
    flex: 1
  },
  start:{
    marginTop: 40,
    height: 40,
  },
  paragraph: { 
    backgroundColor: 'white',  
    fontSize: 18, 
    fontWeight: 'bold', 
    textAlign: 'center', 
  }, 
  text2:{ 
    margin: 24, 
    fontSize: 18, 
    textAlign: 'center', 
  }, 
  container1:{ 
    backgroundColor: '#c2c4c3' 
  }, 
  text1:{ 
        margin: 24, 
    fontSize: 15, 
    textAlign: 'center', 
  }, 
  container2:{ 
    backgroundColor: '#8b8c8b',
    height: '100%'
  } 
});