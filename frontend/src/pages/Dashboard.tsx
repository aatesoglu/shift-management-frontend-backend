import MainLayout from "@/components/Layout/MainLayout";
import StatCard from "@/components/Dashboard/StatCard";
import { Users, Clock, Calendar, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const upcomingShifts = [
    { id: 1, employee: "Ahmet Yılmaz", department: "Üretim", time: "08:00 - 16:00", date: "Bugün" },
    { id: 2, employee: "Ayşe Demir", department: "Satış", time: "09:00 - 17:00", date: "Bugün" },
    { id: 3, employee: "Mehmet Kaya", department: "IT", time: "16:00 - 00:00", date: "Bugün" },
    { id: 4, employee: "Zeynep Şahin", department: "İK", time: "08:00 - 16:00", date: "Yarın" },
  ];

  const recentLeaves = [
    { id: 1, employee: "Can Öztürk", type: "Yıllık İzin", dates: "15-20 Kasım", status: "Onaylandı" },
    { id: 2, employee: "Selin Arslan", type: "Hastalık", dates: "7 Kasım", status: "Beklemede" },
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Vardiya yönetim sisteminize hoş geldiniz</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Toplam Çalışan"
            value={156}
            icon={Users}
            trend={{ value: "12%", isPositive: true }}
            variant="default"
          />
          <StatCard
            title="Aktif Vardiyalar"
            value={23}
            icon={Clock}
            trend={{ value: "5%", isPositive: true }}
            variant="success"
          />
          <StatCard
            title="Bekleyen İzinler"
            value={8}
            icon={Calendar}
            trend={{ value: "3%", isPositive: false }}
            variant="warning"
          />
          <StatCard
            title="Bu Ay Tamamlanan"
            value={342}
            icon={TrendingUp}
            trend={{ value: "18%", isPositive: true }}
            variant="info"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Yaklaşan Vardiyalar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingShifts.map((shift) => (
                  <div key={shift.id} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                    <div>
                      <p className="font-medium text-foreground">{shift.employee}</p>
                      <p className="text-sm text-muted-foreground">{shift.department}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">{shift.time}</p>
                      <p className="text-xs text-muted-foreground">{shift.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Son İzin Talepleri</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentLeaves.map((leave) => (
                  <div key={leave.id} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                    <div>
                      <p className="font-medium text-foreground">{leave.employee}</p>
                      <p className="text-sm text-muted-foreground">{leave.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-foreground">{leave.dates}</p>
                      <span className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${
                        leave.status === "Onaylandı" 
                          ? "bg-success/10 text-success" 
                          : "bg-warning/10 text-warning"
                      }`}>
                        {leave.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
