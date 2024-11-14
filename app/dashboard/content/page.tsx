"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface Post {
  id: string;
  author: string;
  content: string;
  type: "text" | "image" | "video";
  status: "active" | "flagged" | "removed";
  date: string;
}

const mockPosts: Post[] = [
  {
    id: "1",
    author: "John Doe",
    content: "This is a sample post content",
    type: "text",
    status: "active",
    date: "2024-01-15",
  },
  {
    id: "2",
    author: "Jane Smith",
    content: "Image post",
    type: "image",
    status: "flagged",
    date: "2024-01-16",
  },
];

export default function ContentPage() {
  const [filter, setFilter] = useState("all");
  const [posts] = useState<Post[]>(mockPosts);

  return (
    <div className="h-full p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Content Moderation</h2>
        <div className="flex gap-4">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Content</SelectItem>
              <SelectItem value="flagged">Flagged</SelectItem>
              <SelectItem value="removed">Removed</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Search content..." className="max-w-sm" />
        </div>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <Card key={post.id} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold">{post.author}</h3>
                <p className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  post.status === "active"
                    ? "bg-green-100 text-green-800"
                    : post.status === "flagged"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {post.status}
              </span>
            </div>
            <p className="text-sm">{post.content}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}