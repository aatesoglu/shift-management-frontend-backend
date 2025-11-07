import MainLayout from "@/components/Layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Users, Building2, X } from "lucide-react";
import { useMemo, useState } from "react";

const Departments = () => {
  const base = [
    { 
      id: 1, 
      name: "Üretim", 
      manager: "Ahmet Yılmaz",
      employeeCount: 45,
      description: "Ana üretim departmanı"
    },
    { 
      id: 2, 
      name: "Satış", 
      manager: "Selin Arslan",
      employeeCount: 28,
      description: "Satış ve pazarlama ekibi"
    },
    { 
      id: 3, 
      name: "IT", 
      manager: "Mehmet Kaya",
      employeeCount: 15,
      description: "Bilgi teknolojileri departmanı"
    },
    { 
      id: 4, 
      name: "İnsan Kaynakları", 
      manager: "Zeynep Şahin",
      employeeCount: 8,
      description: "İK ve personel işleri"
    },
    { 
      id: 5, 
      name: "Güvenlik", 
      manager: "Ali Vural",
      employeeCount: 20,
      description: "Tesis güvenliği"
    },
    { 
      id: 6, 
      name: "Lojistik", 
      manager: "Fatma Yıldız",
      employeeCount: 35,
      description: "Depo ve sevkiyat"
    },
  ];

  const [local, setLocal] = useState<typeof base>([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [success, setSuccess] = useState("");

  const departments = useMemo(() => [...base, ...local], [local]);

  const open = () => { setName(""); setShow(true); };
  const close = () => setShow(false);
  const save = () => {
    if (!name.trim()) return;
    const item = { id: Date.now(), name: name.trim(), manager: "-", employeeCount: 0, description: "" } as any;
    setLocal((p) => [item, ...p]);
    setShow(false);
    setSuccess("Department created successfully");
    setTimeout(() => setSuccess(""), 2000);
  };

  return (
    <>
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Departmanlar</h1>
            <p className="text-muted-foreground">Şirket departmanlarını yönetin</p>
          </div>
          <Button className="gap-2" data-testid="departments-add-btn" onClick={open}>
            <Plus className="h-4 w-4" />
            Yeni Departman
          </Button>
        </div>

        {success && (
          <div className="rounded-md bg-success/10 p-3 text-success" data-testid="departments-success">{success}</div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept) => (
            <Card key={dept.id} className="hover:shadow-lg transition-shadow" data-testid={`department-card-${dept.id}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{dept.name}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{dept.description}</p>
                
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Departman Müdürü</span>
                    <span className="text-sm font-medium text-foreground">{dept.manager}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>Çalışan Sayısı</span>
                    </div>
                    <span className="text-sm font-medium text-foreground">{dept.employeeCount}</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  Detayları Görüntüle
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>

    {show && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
        <div className="w-full max-w-md rounded-lg bg-card p-6 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Yeni Departman</h2>
            <button onClick={close} aria-label="Kapat" className="text-muted-foreground hover:text-foreground">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-3">
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Name</label>
              <input
                data-testid="departments-name"
                className="w-full rounded-md border border-border bg-background px-3 py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex gap-2 pt-2">
              <Button className="flex-1" data-testid="departments-save" onClick={save}>Save</Button>
              <Button className="flex-1" variant="outline" onClick={close}>Cancel</Button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};
export default Departments;
