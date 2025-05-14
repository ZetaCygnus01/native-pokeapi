import { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function Lista() {
const [ data, setData ] = useState([]);

useEffect(() => {
    const obtenerDatos = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025");
        const json = await response.json();
        setData(json.results);
    };
    obtenerDatos();
}, []);

    return (
        <ScrollView>
            <View style={ StyleSheet.lista}>
                {data.map((pokemon, index) => (
                    <View key={index} style={style.item}>
                        <Text>{pokemon.url.split("/") [6] }</Text>
                        <Image
                            source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split("/")[6]}.png` }}
                            style={style.imagen}
                        />
                        <Text>{pokemon.name}</Text>
                    </View>
                ) ) }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    lista: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "2%",
        justifyContent: "space-between", //para distribuir en 2 columnas
        padding: 10,
    },
    item: {
        backgroundColor: "aliceblue",
        width: "48%", // 50% del ancho de la pantalla - Equivalente a calc(50%  5px)
        padding: 10,
        alignItems: "center",
        marginBottom: 10,
    },
    imagen: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    }
});
