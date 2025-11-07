import MainLayout from "@/components/Layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

const Schedule = () => {
  const days = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];
  const currentWeek = [4, 5, 6, 7, 8, 9, 10];
  
  const scheduleData = [
    { 
      employee: "Ahmet Yılmaz", 
      shifts: ["08-16", "08-16", "08-16", "08-16", "08-16", "-", "-"] 
    },
    { 
      employee: "Ayşe Demir", 
      shifts: ["09-17", "09-17", "09-17", "09-17", "09-17", "-", "-"] 
    },
    { 
      employee: "Mehmet Kaya", 
      shifts: ["16-00", "16-00", "-", "16-00", "16-00", "16-00", "-"] 
    },
    { 
      employee: "Zeynep Şahin", 
      shifts: ["08-16", "-", "08-16", "08-16", "08-16", "-", "-"] 
    },
    { 
      employee: "Can Öztürk", 
      shifts: ["-", "-", "-", "-", "-", "08-16", "08-16"] 
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Vardiya Çizelgesi</h1>
            <p className="text-muted-foreground">Haftalık vardiya planlaması</p>
          </div>
          <Button className="gap-2" data-testid="schedule-export-btn">
            <Calendar className="h-4 w-4" />
            Çizelgeyi Dışa Aktar
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>4-10 Kasım 2025</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-4 pr-4 text-left font-medium text-muted-foreground">
                      Çalışan
                    </th>
                    {days.map((day, index) => (
                      <th key={day} className="pb-4 px-4 text-center font-medium text-muted-foreground">
                        <div>{day}</div>
                        <div className="text-xs font-normal">{currentWeek[index]} Kas</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {scheduleData.map((item, idx) => (
                    <tr key={idx} className="border-b border-border last:border-0">
                      <td className="py-4 pr-4 font-medium text-foreground">
                        {item.employee}
                      </td>
                      {item.shifts.map((shift, shiftIdx) => (
                        <td key={shiftIdx} className="py-4 px-4 text-center">
                          {shift === "-" ? (
                            <span className="text-muted-foreground">-</span>
                          ) : (
                            <div className="inline-flex items-center justify-center rounded-lg bg-primary/10 px-3 py-2 text-xs font-medium text-primary">
                              {shift}
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
                <div>
                  <p className="text-sm font-medium text-foreground">Sabah Vardiyası</p>
                  <p className="text-xs text-muted-foreground">08:00 - 16:00</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-accent"></div>
                <div>
                  <p className="text-sm font-medium text-foreground">Öğle Vardiyası</p>
                  <p className="text-xs text-muted-foreground">09:00 - 17:00</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-info"></div>
                <div>
                  <p className="text-sm font-medium text-foreground">Akşam Vardiyası</p>
                  <p className="text-xs text-muted-foreground">16:00 - 00:00</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Schedule;
