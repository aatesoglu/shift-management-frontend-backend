import MainLayout from "@/components/Layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Clock, MapPin, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useMemo, useState } from "react";

const Shifts = () => {
  const base = [
    { 
      id: 1, 
      name: "Sabah Vardiyası", 
      time: "08:00 - 16:00", 
      department: "Üretim",
      employees: 12,
      location: "Ana Fabrika",
      status: "active"
    },
    { 
      id: 2, 
      name: "Öğle Vardiyası", 
      time: "12:00 - 20:00", 
      department: "Satış",
      employees: 8,
      location: "Merkez Ofis",
      status: "active"
    },
    { 
      id: 3, 
      name: "Gece Vardiyası", 
      time: "00:00 - 08:00", 
      department: "Güvenlik",
      employees: 5,
      location: "Ana Fabrika",
      status: "scheduled"
    },
    { 
      id: 4, 
      name: "Akşam Vardiyası", 
      time: "16:00 - 00:00", 
      department: "Üretim",
      employees: 10,
      location: "Ana Fabrika",
      status: "active"
    },
  ];

  const [local, setLocal] = useState<typeof base>([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ name: "", start: "08:00", end: "16:00" });
  const [success, setSuccess] = useState("");

  const shifts = useMemo(() => [...base, ...local], [local]);

  const open = () => { setForm({ name: "", start: "08:00", end: "16:00" }); setShow(true); };
  const close = () => setShow(false);
  const save = () => {
    if (!form.name.trim()) return;
    const item = { id: Date.now(), name: form.name.trim(), time: `${form.start} - ${form.end}`, department: "-", employees: 0, location: "-", status: "active" } as any;
    setLocal((p) => [item, ...p]);
    setShow(false);
    setSuccess("Shift created successfully");
    setTimeout(() => setSuccess(""), 2000);
  };

  return (
    <>
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Vardiyalar</h1>
            <p className="text-muted-foreground">Tüm vardiya planlarını yönetin</p>
          </div>
          <Button className="gap-2" data-testid="shifts-add-btn" onClick={open}>
            <Plus className="h-4 w-4" />
            Yeni Vardiya
          </Button>
        </div>

        {success && (
          <div className="rounded-md bg-success/10 p-3 text-success" data-testid="shifts-success">{success}</div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shifts.map((shift) => (
            <Card key={shift.id} className="hover:shadow-lg transition-shadow" data-testid={`shift-card-${shift.id}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{shift.name}</CardTitle>
                  <Badge variant={shift.status === "active" ? "default" : "secondary"}>
                    {shift.status === "active" ? "Aktif" : "Planlandı"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{shift.time}</span>
                </div>
                <div className="text-xs text-muted-foreground" data-testid={`shift-combined-${shift.id}`}>{`${shift.name} (${String(shift.time).replace(' ', '')})`}</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{shift.location}</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Departman</span>
                    <span className="text-sm font-medium text-foreground">{shift.department}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Çalışan Sayısı</span>
                    <span className="text-sm font-medium text-foreground">{shift.employees}</span>
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
            <h2 className="text-lg font-semibold text-foreground">Yeni Vardiya</h2>
            <button onClick={close} aria-label="Kapat" className="text-muted-foreground hover:text-foreground">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-3">
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">Name</label>
              <input
                data-testid="shifts-name"
                className="w-full rounded-md border border-border bg-background px-3 py-2"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-sm text-muted-foreground">Start Time</label>
                <input
                  type="time"
                  data-testid="shifts-start"
                  className="w-full rounded-md border border-border bg-background px-3 py-2"
                  value={form.start}
                  onChange={(e) => setForm((f) => ({ ...f, start: e.target.value }))}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-muted-foreground">End Time</label>
                <input
                  type="time"
                  data-testid="shifts-end"
                  className="w-full rounded-md border border-border bg-background px-3 py-2"
                  value={form.end}
                  onChange={(e) => setForm((f) => ({ ...f, end: e.target.value }))}
                />
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <Button className="flex-1" data-testid="shifts-save" onClick={save}>Save</Button>
              <Button className="flex-1" variant="outline" onClick={close}>Cancel</Button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default Shifts;
