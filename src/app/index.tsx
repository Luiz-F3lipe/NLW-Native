import { useState } from "react"

import { View, Image, StatusBar, Alert } from "react-native"
import { Link } from "expo-router"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import { Input } from "@/components/Input"
import { Button } from "@/components/Button"

import { colors } from "@/styles/colors"

export default function Home() {
  const [code, setCode] = useState('');

  function handleAccessCredential() {
    if (!code.trim()) {
      return Alert.alert("Ingresso", "Informe o código do ingresso!")
    }
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
          <MaterialCommunityIcons 
            name="ticket-confirmation-outline"
            size={20}  
            color={colors.green[200]}
          />

          <Input.Field 
            placeholder="Código do ingresso"
            onChangeText={setCode}
          />
        </Input>

        <Button 
          title="Acessar Credencial"
          onPress={handleAccessCredential}
        />

        <Link 
          href="/register"
          className="text-gray-100 text-base font-bold text-center mt-8"
          >
            Ainda não possui ingresso?
          </Link>
      </View>
    </View>
  )
}