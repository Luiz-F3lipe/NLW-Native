import { useState } from "react"

import { View, Image, StatusBar, Alert } from "react-native"
import { Link, router } from "expo-router"
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons"

import { Input } from "@/components/Input"
import { Button } from "@/components/Button"

import { colors } from "@/styles/colors"

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleRegister() {
    if (!name.trim() || !email.trim()) {
      return Alert.alert("Inscrição", "Preencha todos os campos");
    }

    router.push("/ticket")
  }

  return (
    <View className="flex-1 bg-green-500 items-center justify-center p-8">
      <StatusBar barStyle="light-content" />

      <Image 
        className="h-16"
        resizeMode="contain"
        source={require("@/assets/logo.png")} 
      />
      <View
        className="w-full mt-12 gap-3"
      >
        <Input>
          <FontAwesome6 
            name="user-circle"
            size={20}  
            color={colors.green[200]}
          />

          <Input.Field 
            placeholder="Nome completo"
            onChangeText={setName}
          />
        </Input>

        <Input>
          <MaterialIcons 
            name="alternate-email"
            size={20}  
            color={colors.green[200]}
          />

          <Input.Field 
            placeholder="E-mail"
            keyboardType="email-address"
            onChangeText={setEmail}
          />
        </Input>

        <Button 
          title="Realizar Inscrição"
          onPress={handleRegister}
        />

        <Link 
          href="/"
          className="text-gray-100 text-base font-bold text-center mt-8"
          >
            Já possui ingresso?
          </Link>
      </View>
    </View>
  )
}