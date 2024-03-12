import { StyleSheet, Text, View, FlatList } from "react-native";

import Header from "../components/Header";
import Balance from "../components/balance";
import Movements from "../components/Movements";

const list = [
{
    id: 1,
    label1: 'Boleto conta de luz',
    value: '300,04',
    date: '17/12/2015',
    type: 0 // saidas
},
{
    id: 2,
    label1: 'Pix',
    value: '3.200,00',
    date: '11/12/2015',
    type: 1 // entradas
},
{
    id: 3,
    label1: 'Boleto conta de agua',
    value: '200,04',
    date: '15/12/2015',
    type: 0 // saidas
},
]

export default function Home(){
    return (
        <View style={styles.container}>
            <Header name='Marcio Jr' />
            <Balance balances='9.250,54' expenses='154,12'/>
            
            <Text style={styles.title}>Últimas movimentações</Text>
            <FlatList
            style={styles.list}
            data={list}
            keyExtractor={(item => String(item.id))}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=> <Movements data={item}/>}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft:14,
        marginRight:14,
        marginTop:14,
        marginBottom:14
    },
    list: {
        marginStart:14,
        marginEnd:14,
    }
});
