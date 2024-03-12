import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Movements({ data }) {
    const [showValue, setSwowValue] = useState(false);

  return (
    <TouchableOpacity style={styles.container} onPress={()=> setSwowValue(!showValue)}>
      <Text style={styles.date}>{data.date}</Text>
      <View style={styles.content}>
      <Text style={styles.label1}>{data.label1}</Text>
        { showValue ? (
            <View>
             <Text style={data.type === 1 ? styles.value : styles.expeses}>
              {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
            </Text>
            </View>
        ):(
            <View style={styles.skell}></View>
        )

        }
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: "#bababa",
    marginBottom: 24,
    borderBottomWidth: 0.5,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 8,
  },
  date: {
    color: "#bababa",
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  value: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#2ecc71",
  },
  expeses: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#e74c3c",
  },
  skell: {
    marginTop: 6,
    width: 80,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#bababa",
  },
});
