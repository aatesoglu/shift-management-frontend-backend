# Departmanlar
Department.destroy_all
User.destroy_all
Shift.destroy_all
Schedule.destroy_all
Leafe.destroy_all

puts "🧹 Eski veriler temizlendi..."

hr = Department.create!(name: "İnsan Kaynakları")
it = Department.create!(name: "Bilgi Teknolojileri")
ops = Department.create!(name: "Operasyon")
puts "🏢 Departmanlar oluşturuldu."

# Kullanıcılar
u1 = User.create!(name: "Ahmet Yılmaz", email: "ahmet@example.com", role: "Yönetici", department: hr)
u2 = User.create!(name: "Ayşe Demir", email: "ayse@example.com", role: "Personel", department: it)
u3 = User.create!(name: "Mehmet Kara", email: "mehmet@example.com", role: "Personel", department: ops)
puts "👤 Kullanıcılar oluşturuldu."

# Vardiyalar
s1 = Shift.create!(name: "Sabah Vardiyası", start_time: "08:00", end_time: "16:00")
s2 = Shift.create!(name: "Akşam Vardiyası", start_time: "16:00", end_time: "00:00")
s3 = Shift.create!(name: "Gece Vardiyası", start_time: "00:00", end_time: "08:00")
puts "⏰ Vardiyalar oluşturuldu."

# Programlar (Schedule)
Schedule.create!(user: u2, shift: s1, work_date: Date.today)
Schedule.create!(user: u3, shift: s2, work_date: Date.today)
puts "📅 Vardiya planları oluşturuldu."

# İzinler (Leafe)
Leafe.create!(user: u1, start_date: Date.today, end_date: Date.today + 2, reason: "Sağlık izni", status: "approved")
Leafe.create!(user: u2, start_date: Date.today + 5, end_date: Date.today + 6, reason: "Kişisel izin", status: "pending")
puts "🗓️ İzin kayıtları oluşturuldu."

puts "✅ Tüm örnek veriler başarıyla eklendi!"
