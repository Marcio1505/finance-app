import react from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Balance({balances, expenses}) {
  return (
    <View style={styles.container}>
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
    </View>
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
