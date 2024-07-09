import { FlatList } from "react-native";
import posts from "../../../assets/data/posts.json";
import PostCard from "../../components/post/PostCard";

export default function FeedScreen() {
  return (
    <FlatList
      data={posts}
      className="bg-slate-200"
      renderItem={({ item }) => <PostCard post={item} />}
      contentContainerStyle={{ gap: 2 }}
      showsVerticalScrollIndicator={false}
    />
  );
}
