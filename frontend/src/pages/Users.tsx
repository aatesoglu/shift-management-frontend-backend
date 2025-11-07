import MainLayout from "@/components/Layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Mail, X } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useUsers } from "@/hooks/useUsers";
import { useMemo, useState } from "react";

type LocalUser = { id: number; name: string; email?: string; role?: string; department?: string };

const fallbackUsers: LocalUser[] = [
  { id: 1, name: "Ahmet Yılmaz", email: "ahmet.yilmaz@example.com", role: "Yönetici", department: "IT" },
  { id: 2, name: "Ayşe Demir", email: "ayse.demir@example.com", role: "Personel", department: "Satış" },
  { id: 3, name: "Mehmet Kaya", email: "mehmet.kaya@example.com", role: "Personel", department: "IT" },
];

const Users = () => {
  const { data: users, isLoading, isError } = useUsers();
  const [localUsers, setLocalUsers] = useState<LocalUser[]>([]);
  const [showSuccess, setShowSuccess] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", department: "IT" });

  const list: LocalUser[] = useMemo(() => {
    const apiUsers: LocalUser[] = Array.isArray(users)
      ? users.map((u: any) => ({ id: u.id ?? Math.random(), name: u.name ?? "", email: u.email, role: u.role, department: u.department }))
      : [];
    const base = apiUsers.length ? apiUsers : fallbackUsers;
    return [...base, ...localUsers];
  }, [users, localUsers]);

  const initials = (name?: string) =>
    (name?.split?.(" ") ?? [])
      .map((n: string) => n?.[0])
      .filter(Boolean)
      .join("") || "?";

  const openAdd = () => {
    setForm({ firstName: "", lastName: "", email: "", department: "IT" });
    setShowModal(true);
  };
  const closeAdd = () => setShowModal(false);

  const saveUser = () => {
    const fullName = `${form.firstName.trim()} ${form.lastName.trim()}`.trim();
    if (!fullName || !form.email) return;
    const newUser: LocalUser = {
      id: Date.now(),
      name: fullName,
      email: form.email,
      role: "Personel",
      department: form.department,
    };
    setLocalUsers((prev) => [newUser, ...prev]);
    setShowModal(false);
    setShowSuccess("Employee added successfully");
    setTimeout(() => setShowSuccess(""), 2000);
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Çalışanlar</h1>
            <p className="text-muted-foreground">Kullanıcıları yönetin</p>
          </div>
          <Button className="gap-2" data-testid="users-add-btn" onClick={openAdd}>
            <Plus className="h-4 w-4" />
            Yeni Kullanıcı
          </Button>
        </div>

        {showSuccess && (
          <div className="rounded-md bg-success/10 p-3 text-success" data-testid="users-success">
            {showSuccess}
          </div>
        )}

        {isLoading ? (
          <div>Yükleniyor...</div>
        ) : isError ? (
          <div>Hata oluştu</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((user) => (
              <Card key={user.id} className="hover:shadow-lg transition-shadow" data-testid={`user-card-${user.id}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {initials(user.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-foreground">{user.name || "İsimsiz"}</h3>
                        <Badge variant="secondary">{user.role ?? "-"}</Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span className="truncate">{user.email ?? "-"}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-lg bg-card p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">Yeni Kullanıcı</h2>
              <button onClick={closeAdd} aria-label="Kapat" className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="mb-1 block text-sm text-muted-foreground">First Name</label>
                <input
                  data-testid="users-first-name"
                  className="w-full rounded-md border border-border bg-background px-3 py-2"
                  value={form.firstName}
                  onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-muted-foreground">Last Name</label>
                <input
                  data-testid="users-last-name"
                  className="w-full rounded-md border border-border bg-background px-3 py-2"
                  value={form.lastName}
                  onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-muted-foreground">Email</label>
                <input
                  type="email"
                  data-testid="users-email"
                  className="w-full rounded-md border border-border bg-background px-3 py-2"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-muted-foreground">Department</label>
                <select
                  data-testid="users-department"
                  className="w-full rounded-md border border-border bg-background px-3 py-2"
                  value={form.department}
                  onChange={(e) => setForm((f) => ({ ...f, department: e.target.value }))}
                >
                  <option value="IT">IT</option>
                  <option value="HR">HR</option>
                  <option value="Satış">Satış</option>
                </select>
              </div>
              <div className="flex gap-2 pt-2">
                <Button className="flex-1" data-testid="users-save" onClick={saveUser}>Save</Button>
                <Button className="flex-1" variant="outline" onClick={closeAdd}>Cancel</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Users;
