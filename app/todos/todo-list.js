import React from "react";
import { StyleSheet, Alert, View, Text, SafeAreaView } from "react-native";
import { useObserver } from "mobx-react-lite";

export default function TodoList() {
    return useObserver(() => (
        <SafeAreaView>
            <View style={styles.view}>
                <Text style={styles.text}>Hello Worlds from TodoList!</Text>
            </View>
        </SafeAreaView>
    ));
}

const styles = StyleSheet.create({
    view: {
        paddingTop: 25
    },
    text: {
        textAlign: "center"
    }
});
