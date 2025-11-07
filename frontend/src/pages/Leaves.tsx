import MainLayout from "@/components/Layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Calendar, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Leaves = () => {
  const leaves = [
    { 
      id: 1, 
      employee: "Can Öztürk",
      type: "Yıllık İzin",
      startDate: "15 Kasım 2025",
      endDate: "20 Kasım 2025",
      days: 5,
      status: "approved",
      reason: "Aile ziyareti"
    },
    { 
      id: 2, 
      employee: "Selin Arslan",
      type: "Hastalık İzni",
      startDate: "7 Kasım 2025",
      endDate: "7 Kasım 2025",
      days: 1,
      status: "pending",
      reason: "Grip"
    },
    { 
      id: 3, 
      employee: "Ahmet Yılmaz",
      type: "Yıllık İzin",
      startDate: "1 Aralık 2025",
      endDate: "10 Aralık 2025",
      days: 10,
      status: "pending",
      reason: "Tatil"
    },
    { 
      id: 4, 
      employee: "Zeynep Şahin",
      type: "Mazeret İzni",
      startDate: "10 Kasım 2025",
      endDate: "10 Kasım 2025",
      days: 1,
      status: "approved",
      reason: "Kişisel işler"
    },
    { 
      id: 5, 
      employee: "Mehmet Kaya",
      type: "Yıllık İzin",
      startDate: "25 Kasım 2025",
      endDate: "30 Kasım 2025",
      days: 5,
      status: "rejected",
      reason: "Tatil"
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-success/10 text-success hover:bg-success/20">Onaylandı</Badge>;
      case "pending":
        return <Badge className="bg-warning/10 text-warning hover:bg-warning/20">Beklemede</Badge>;
      case "rejected":
        return <Badge variant="destructive">Reddedildi</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">İzin Talepleri</h1>
            <p className="text-muted-foreground">Çalışan izin taleplerini yönetin</p>
          </div>
          <Button className="gap-2" data-testid="leaves-add-btn" onClick={() => console.log('Yeni İzin Talebi')}>
            <Plus className="h-4 w-4" />
            Yeni İzin Talebi
          </Button>
        </div>

        <div className="space-y-4">
          {leaves.map((leave) => (
            <Card key={leave.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-foreground">{leave.employee}</h3>
                        {getStatusBadge(leave.status)}
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">{leave.type}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{leave.startDate} - {leave.endDate}</span>
                        <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs">
                          {leave.days} gün
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Sebep:</span> {leave.reason}
                      </p>
                    </div>
                  </div>
                  
                  {leave.status === "pending" && (
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-success border-success hover:bg-success/10" data-testid={`leave-approve-${leave.id}`} onClick={() => console.log('Onayla', leave.id)}>
                        Onayla
                      </Button>
                      <Button size="sm" variant="outline" className="text-destructive border-destructive hover:bg-destructive/10" data-testid={`leave-reject-${leave.id}`} onClick={() => console.log('Reddet', leave.id)}>
                        Reddet
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Leaves;
