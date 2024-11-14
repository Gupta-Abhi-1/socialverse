"use client";

import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Report {
  id: string;
  type: "spam" | "harassment" | "inappropriate" | "other";
  status: "pending" | "resolved" | "dismissed";
  reporter: string;
  reported: string;
  date: string;
  description: string;
}

const mockReports: Report[] = [
  {
    id: "1",
    type: "spam",
    status: "pending",
    reporter: "John Doe",
    reported: "User123",
    date: "2024-01-15",
    description: "Multiple promotional messages",
  },
  {
    id: "2",
    type: "harassment",
    status: "pending",
    reporter: "Jane Smith",
    reported: "User456",
    date: "2024-01-16",
    description: "Threatening messages",
  },
];

export default function ReportsPage() {
  const [filter, setFilter] = useState("all");
  const [reports] = useState<Report[]>(mockReports);

  return (
    <div className="h-full p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Report Management</h2>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Reports</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
            <SelectItem value="dismissed">Dismissed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4">
        {reports.map((report) => (
          <Card key={report.id} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold">Report #{report.id}</h3>
                  <Badge variant={report.status === "pending" ? "destructive" : "secondary"}>
                    {report.status}
                  </Badge>
                  <Badge>{report.type}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Reported on {new Date(report.date).toLocaleDateString()}
                </p>
              </div>
              <div className="space-x-2">
                <Button variant="outline" size="sm">
                  Dismiss
                </Button>
                <Button size="sm">
                  Resolve
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-medium">Reporter:</span> {report.reporter}
              </p>
              <p className="text-sm">
                <span className="font-medium">Reported User:</span> {report.reported}
              </p>
              <p className="text-sm">
                <span className="font-medium">Description:</span> {report.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}