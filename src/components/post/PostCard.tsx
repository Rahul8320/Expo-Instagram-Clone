import { View, Text, Image } from "react-native";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";

export default function PostCard({ post }: any) {
  return (
    <View className="bg-slate-100">
      {/* header */}
      <View className="p-3 flex-row items-center gap-2">
        <Image
          source={{ uri: post.user.image_url }}
          className="w-14 aspect-square rounded-full"
        />
        <Text className="font-semibold">{post.user.username}</Text>
      </View>

      {/* image */}
      <Image
        source={{ uri: post.image_url }}
        className="w-full aspect-square"
      />

      {/* footer */}
      <View className="flex-row gap-3 p-3">
        <AntDesign name="hearto" size={20} color="black" />
        <Ionicons name="chatbubble-outline" size={20} color="black" />
        <Feather name="send" size={20} color="black" />

        <Feather name="bookmark" size={20} color="black" className="ml-auto" />
      </View>
    </View>
  );
}
