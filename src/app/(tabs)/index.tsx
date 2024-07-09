import { FlatList } from "react-native";
import posts from "../../../assets/data/posts.json";
import PostCard from "../../components/post/PostCard";

export default function FeedScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostCard post={item} />}
      contentContainerStyle={{ gap: 1, backgroundColor: "#e2e8f0" }}
      showsVerticalScrollIndicator={false}
    />
  );
}
