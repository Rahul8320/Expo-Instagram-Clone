import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function ProfileScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [username, setUsername] = useState<string>("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className="p-3 flex-1">
      {/* image picker for avatar */}
      {image ? (
        <Image
          source={{ uri: image }}
          className="w-64 aspect-square rounded-full self-center shadow-lg my-7"
        />
      ) : (
        <View className="w-64 aspect-square rounded-full self-center shadow-lg my-7 bg-slate-400" />
      )}

      <TouchableOpacity onPress={pickImage} className="self-center">
        <Text className="text-blue-500 font-semibold text-lg">Change</Text>
      </TouchableOpacity>

      {/* form */}
      <View className="mx-3 my-2">
        <Text className="mb-3 text-gray-500 font-semibold">Username</Text>
        <TextInput
          value={username}
          onChangeText={(newValue) => setUsername(newValue)}
          placeholder="Please enter your username"
          className="p-3 border-2 border-gray-300 rounded-md px-3 text-gray-700 font-medium"
        />
      </View>

      {/* button */}
      <View className="mt-auto mb-5 mx-3 gap-3">
        <TouchableOpacity className="bg-blue-500 w-full p-3 rounded-lg items-center">
          <Text className="text-white font-semibold text-lg">
            Update Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-blue-500 w-full p-3 rounded-lg items-center">
          <Text className="text-white font-semibold text-lg">Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
