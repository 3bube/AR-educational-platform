import { StyleSheet, Text, View } from "react-native";
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber/native";
import Trigger from "../models/Trigger";
import Loader from "../models/Loader";
import { SafeAreaView } from "react-native-safe-area-context";
import Ram from "../models/RamModel";
import useControls from "r3f-native-orbitcontrols";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
import Ram from "../models/RamModel";


const Ram = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [OrbitControls, events] = useControls();


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated style="light" />
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>Random access memory</Text>
        <Text style={styles.text}>
        RAM stands for random access memory, and it's a type of computer memory that temporarily stores data for quick access
        </Text>
      </View>
      <View style={styles.modelContainer} {...events}>
        {loading && <Loader />}
        <Canvas>
          <OrbitControls enablePan={false} enableZoom={false} />
          <directionalLight position={[1, 0, 0]} args={["white", 2]} />
          <directionalLight position={[-1, 0, 0]} args={["white", 2]} />
          <directionalLight position={[0, 0, 1]} args={["white", 2]} />
          <directionalLight position={[0, 0, -1]} args={["white", 2]} />
          <directionalLight position={[0, 1, 0]} args={["white", 15]} />
          <directionalLight position={[0, -1, 0]} args={["white", 2]} />
          <Suspense fallback={<Trigger setLoading={setLoading} />}>
            <Ram />
          </Suspense>
        </Canvas>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.back();
        }}
      >
        <Text style={styles.textButton}>Colntinue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};


export default Index;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  modelContainer: {
    flex: 1,
  },
  textContainer: {
    marginHorizontal: 24,
    gap: 4,
    marginVertical: 20,
  },
  textTitle: {
    fontFamily: "Inter-Bold",
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  text: {
    fontFamily: "Inter-Light",
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  button: {
    backgroundColor: "white",
    padding: 14,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  textButton: {
    fontFamily: "Inter-Bold",
    color: "black",
    fontSize: 14,
  },
});
