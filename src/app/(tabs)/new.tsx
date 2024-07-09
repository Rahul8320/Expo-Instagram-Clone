import { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";

export default function CreateNewScreen() {
  const [caption, setCaption] = useState<string>("");

  return (
    <View className="p-2 items-center flex-1">
      {/* image picker */}
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
        }}
        className="w-64 aspect-[3/4] rounded-lg shadow-lg my-7"
      />

      <TouchableOpacity onPress={() => Alert.alert("Caption", caption)}>
        <Text className="text-blue-500 font-semibold text-lg">Change</Text>
      </TouchableOpacity>

      {/* text input for caption */}
      <TextInput
        value={caption}
        onChangeText={(newValue) => setCaption(newValue)}
        placeholder="What's on your mind"
        className="w-[90%] p-3"
      />
      {/* submit button */}
      <TouchableOpacity className="bg-blue-500 w-[90%] p-3 rounded-lg items-center mt-auto mb-5">
        <Text className="text-white font-semibold text-lg">Share</Text>
      </TouchableOpacity>
    </View>
  );
}
