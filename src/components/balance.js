import react from "react";
import { View, Text, StyleSheet } from "react-native";
import {MotiView} from 'moti'

export default function Balance({balances, expenses}) {
  return (
    <MotiView 
    style={styles.container}
    from={{
      rotateX: '-100deg',
      opacity: 0,
    }}
    animate={{
        rotateX: '0deg',
        opacity: 1,
    }}
    transition={{
        type: "timing",
        duration: 800,
        delay: 300,
    }}
    >
              <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
        <Text style={styles.currencysymbol}>R$</Text>
        <Text style={styles.balance}>{balances}</Text>
        </View>
      </View> 

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
        <Text style={styles.currencysymbol}>R$</Text>
        <Text style={styles.expenses}>{expenses}</Text>
        </View>
      </View>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  itemTitle:{
    fontSize: 20,
    color: '#bababa',
  },
  content:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  currencysymbol:{
    color: '#bababa',
    marginRight: 6,
  },
  balance:{
    fontSize: 20,
    color: '#2ecc71',
  },
  expenses:{
    fontSize:20,
    color: '#e74c3c',
  }
});
