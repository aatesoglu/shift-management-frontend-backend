import MainLayout from "@/components/Layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Mail, Phone } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useEmployees } from "@/hooks/useEmployees";

const fallbackEmployees = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    email: "ahmet.yilmaz@example.com",
    phone: "+90 555 123 4567",
    department: "Üretim",
    position: "Üretim Müdürü",
    status: "active",
  },
  {
    id: 2,
    name: "Ayşe Demir",
    email: "ayse.demir@example.com",
    phone: "+90 555 234 5678",
    department: "Satış",
    position: "Satış Temsilcisi",
    status: "active",
  },
  {
    id: 3,
    name: "Mehmet Kaya",
    email: "mehmet.kaya@example.com",
    phone: "+90 555 345 6789",
    department: "IT",
    position: "Yazılım Geliştirici",
    status: "active",
  },
];

const Employees = () => {
  const { data: employees, isLoading, isError } = useEmployees();
  const list = employees ?? fallbackEmployees;

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Çalışanlar</h1>
            <p className="text-muted-foreground">Çalışan bilgilerini yönetin</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Yeni Çalışan
          </Button>
        </div>

        {isLoading ? (
          <div>Yükleniyor...</div>
        ) : isError ? (
          <div>Hata oluştu</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((employee) => (
              <Card key={employee.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {employee.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-foreground">
                          {employee.name}
                        </h3>
                        <Badge
                          variant={
                            employee.status === "active" ? "default" : "secondary"
                          }
                        >
                          {employee.status === "active" ? "Aktif" : "İzinde"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {employee.position}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {employee.department}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 border-t border-border pt-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span className="truncate">{employee.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>{employee.phone}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="mt-4 w-full">
                    Profili Görüntüle
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Employees;
