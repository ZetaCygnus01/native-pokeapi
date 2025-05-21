import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Filtro({ onTipoChange }) {
    const tipos = [
        "All",
        "Normal", "Fighting", "Flying", "Poison", "Ground", "Rock",
        "Bug", "Ghost", "Steel", "Fire", "Water", "Grass", "Electric",
        "Psychic", "Ice", "Dragon", "Dark", "Fairy", "Stellar", "Shadow",
        "Unknown",
    ];

    return (
        <View style={styles.filtroContainer}>
            {tipos.map((untipo, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.button}
                    onPress={() => onTipoChange(untipotipo)}
                >
                    <Text style={styles.textoFiltro}>{untipo}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    filtroContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin: 10,
        padding: 10,
    },
    button: {
        backgroundColor: "#007bff",
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    burronText: {
        color: "#fff",
        fontSize: 14,
    },
});