import { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import Filtro from "./filtro";
import { useNavigation } from "@react-navigation/native";

export default function Lista() {
  const [data, setData] = useState([]);
  const [tipoSeleccionado, setTipoSeleccionado] = useState("All");
  const navigation = useNavigation();

  const handleTipoChange = (tipo) => {
    setTipoSeleccionado(tipo);
  };

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        if (tipoSeleccionado === "All") {
          const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025");
          const json = await response.json();
          setData(json.results);
        } else {
          const response = await fetch(`https://pokeapi.co/api/v2/type/${tipoSeleccionado}`);
          const json = await response.json();
          const listaFiltrada = json.pokemon.map((p) => p.pokemon);
          setData(listaFiltrada);
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    obtenerDatos();
  }, [tipoSeleccionado]);

  return (
    <ScrollView>
      <Filtro onTipoChange={handleTipoChange} />
      <View style={styles.lista}>
        {data.map((pokemon, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => navigation.navigate('Pokemon', { nombre: pokemon.name })}
          >
            <Text>{pokemon.url.split("/")[6]} {index}</Text>
            <Image
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split("/")[6]}.png`
              }}
              style={styles.imagen}
            />
            <Text>{pokemon.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  lista: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  item: {
    backgroundColor: "aliceblue",
    width: "48%",
    padding: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  imagen: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
