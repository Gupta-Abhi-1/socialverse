"use client";

import { Card } from "@/components/ui/card";
import {
  Users,
  MessageSquare,
  AlertCircle,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";

interface DashboardData {
  totalUsers: number;
  activeUsers: number;
  totalPosts: number;
  pendingReports: number;
  engagement: number;
}

const mockData: DashboardData = {
  totalUsers: 15234,
  activeUsers: 8456,
  totalPosts: 45678,
  pendingReports: 123,
  engagement: 78,
};

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    // In production, replace with actual API call
    setData(mockData);
  }, []);

  if (!data) return null;

  return (
    <div className="h-full p-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Dashboard Overview</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6 border-l-4 border-l-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Users</p>
                <h3 className="text-2xl font-bold">{data.totalUsers.toLocaleString()}</h3>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </Card>
          <Card className="p-6 border-l-4 border-l-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Users</p>
                <h3 className="text-2xl font-bold">{data.activeUsers.toLocaleString()}</h3>
              </div>
              <Users className="h-8 w-8 text-green-500" />
            </div>
          </Card>
          <Card className="p-6 border-l-4 border-l-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Posts</p>
                <h3 className="text-2xl font-bold">{data.totalPosts.toLocaleString()}</h3>
              </div>
              <MessageSquare className="h-8 w-8 text-purple-500" />
            </div>
          </Card>
          <Card className="p-6 border-l-4 border-l-red-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Reports</p>
                <h3 className="text-2xl font-bold">{data.pendingReports.toLocaleString()}</h3>
              </div>
              <AlertCircle className="h-8 w-8 text-red-500" />
            </div>
          </Card>
        </div>
        
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 mt-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Engagement Rate</h3>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <div className="h-3 w-full bg-secondary rounded-full">
                  <div 
                    className="h-3 bg-blue-500 rounded-full" 
                    style={{ width: `${data.engagement}%` }}
                  />
                </div>
              </div>
              <span className="text-2xl font-bold">{data.engagement}%</span>
            </div>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition">
                <Users className="h-6 w-6 mx-auto mb-2" />
                <span className="text-sm">Manage Users</span>
              </button>
              <button className="p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition">
                <MessageSquare className="h-6 w-6 mx-auto mb-2" />
                <span className="text-sm">Review Content</span>
              </button>
              <button className="p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition">
                <AlertCircle className="h-6 w-6 mx-auto mb-2" />
                <span className="text-sm">Handle Reports</span>
              </button>
              <button className="p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition">
                <TrendingUp className="h-6 w-6 mx-auto mb-2" />
                <span className="text-sm">View Analytics</span>
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}