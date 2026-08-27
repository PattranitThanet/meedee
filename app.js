/* ==========================================================================
   MeeDee Minimart - Main Application Engine & State Controller
   ========================================================================== */

// Initial Default Mock Products (78 Products Total)
const DEFAULT_PRODUCTS = [
  // Original Items (1-8)
  { id: '1', barcode: '885001234001', name: 'ชาเขียวโออิชิ ต้นตำรับ 500ml', category: 'เครื่องดื่ม', price: 20.00, stock: 45, image: 'assets/idp1.png', lastSold: '2026-08-08 18:30' },
  { id: '2', barcode: '885001234002', name: 'เลย์ มันฝรั่งแผ่นเรียบ 42g', category: 'ขนม/ของกินเล่น', price: 30.00, stock: 32, image: 'assets/idp2.png', lastSold: '2026-08-08 18:45' },
  { id: '3', barcode: '885001234003', name: 'มาม่าคัพ ต้มยำกุ้งน้ำข้น', category: 'บะหมี่/อาหารแห้ง', price: 15.00, stock: 3, image: 'assets/idp3.png', lastSold: '2026-08-08 17:15' },
  { id: '4', barcode: '885001234004', name: 'นมสดพาสเจอร์ไรส์ รสจืด 225ml', category: 'นม/เบเกอรี่', price: 18.00, stock: 25, image: 'assets/idp4.png', lastSold: '2026-08-08 19:00' },
  { id: '5', barcode: '885001234005', name: 'น้ำดื่มสิงห์ 600ml', category: 'เครื่องดื่ม', price: 7.00, stock: 120, image: 'assets/idp5.png', lastSold: '2026-08-08 18:50' },
  { id: '6', barcode: '885001234006', name: 'แซนวิชแฮมชีส ตราเมจิก', category: 'นม/เบเกอรี่', price: 29.00, stock: 4, image: 'assets/idp6.png', lastSold: '2026-08-08 16:40' },
  { id: '7', barcode: '885001234007', name: 'เป๊ปซี่ ออริจินัล 450ml', category: 'เครื่องดื่ม', price: 17.00, stock: 55, image: 'assets/idp7.png', lastSold: '2026-08-08 18:10' },
  { id: '8', barcode: '885001234008', name: 'ทิชชู่เปียกสูตรอ่อนโยน', category: 'ของใช้ประจำวัน', price: 25.00, stock: 18, image: 'assets/idp8.png', lastSold: '2026-08-08 14:20' },

  // Drinks (9-13)
  { id: '9', barcode: '885001234009', name: 'คาราบาวแดง 150ml', category: 'เครื่องดื่ม', price: 10.00, stock: 80, image: 'assets/idp9.png', lastSold: '2026-08-08 16:00' },
  { id: '10', barcode: '885001234010', name: 'สไปรท์ ไม่มีน้ำตาล 325ml', category: 'เครื่องดื่ม', price: 15.00, stock: 40, image: 'assets/idp10.png', lastSold: '2026-08-08 17:30' },
  { id: '11', barcode: '885001234011', name: 'กาแฟเบอร์ดี้ โรบัสต้า 180ml', category: 'เครื่องดื่ม', price: 17.00, stock: 65, image: 'assets/idp11.png', lastSold: '2026-08-08 18:00' },
  { id: '12', barcode: '885001234012', name: 'นมถั่วเหลืองไวตามิ้ลค์ 300ml', category: 'เครื่องดื่ม', price: 14.00, stock: 35, image: 'assets/idp12.png', lastSold: '2026-08-08 15:45' },
  { id: '13', barcode: '885001234013', name: 'น้ำส้มคั้น มาลี 100% 200ml', category: 'เครื่องดื่ม', price: 25.00, stock: 20, image: 'assets/idp13.png', lastSold: '2026-08-08 14:10' },

  // Snacks (14-23)
  { id: '14', barcode: '885001234014', name: 'โก๋แก่ ถั่วลิสงโรยเกลือ 40g', category: 'ขนม/ของกินเล่น', price: 20.00, stock: 50, image: 'assets/idp14.png', lastSold: '2026-08-08 18:20' },
  { id: '15', barcode: '885001234015', name: 'เบนโตะ ปลาหมึกอบกรอบ เผ็ดจัด', category: 'ขนม/ของกินเล่น', price: 18.00, stock: 45, image: 'assets/idp15.png', lastSold: '2026-08-08 19:10' },
  { id: '16', barcode: '885001234016', name: 'ป๊อกกี้ รสช็อกโกแลต 45g', category: 'ขนม/ของกินเล่น', price: 22.00, stock: 30, image: 'assets/idp16.png', lastSold: '2026-08-08 16:50' },
  { id: '17', barcode: '885001234017', name: 'ทาโร่ เส้นทาโร่รสเข้มข้น 30g', category: 'ขนม/ของกินเล่น', price: 20.00, stock: 40, image: 'assets/idp17.png', lastSold: '2026-08-08 17:40' },
  { id: '18', barcode: '885001234018', name: 'ฮานามิ ข้าวเกรียบกุ้ง 60g', category: 'ขนม/ของกินเล่น', price: 15.00, stock: 25, image: 'assets/idp18.png', lastSold: '2026-08-08 13:30' },
  { id: '19', barcode: '885001234019', name: 'คิทแคท เวเฟอร์ช็อกโกแลต 35g', category: 'ขนม/ของกินเล่น', price: 20.00, stock: 35, image: 'assets/idp19.png', lastSold: '2026-08-08 18:15' },
  { id: '20', barcode: '885001234020', name: 'คุกกี้โอรีโอ้ ออริจินัล 137g', category: 'ขนม/ของกินเล่น', price: 30.00, stock: 28, image: 'assets/idp20.png', lastSold: '2026-08-08 15:20' },
  { id: '21', barcode: '885001234021', name: 'ถั่วแระญี่ปุ่นอบกรอบ 30g', category: 'ขนม/ของกินเล่น', price: 25.00, stock: 15, image: 'assets/idp21.png', lastSold: '2026-08-08 12:40' },
  { id: '22', barcode: '885001234022', name: 'สาหร่ายเถ้าแก่น้อย รสเผ็ด 12g', category: 'ขนม/ของกินเล่น', price: 39.00, stock: 22, image: 'assets/idp22.png', lastSold: '2026-08-08 16:10' },
  { id: '23', barcode: '885001234023', name: 'เยลลี่จูปาจุ๊ปส์ มิกซ์เบอร์รี่ 45g', category: 'ขนม/ของกินเล่น', price: 15.00, stock: 40, image: 'assets/idp23.png', lastSold: '2026-08-08 17:00' },

  // Household Medicines (24-28)
  { id: '24', barcode: '885001234024', name: 'ยาพาราเซตามอล ซาร่า 500mg (10 เม็ด)', category: 'ยาสามัญประจำบ้าน', price: 18.00, stock: 50, image: 'assets/idp24.png', lastSold: '2026-08-08 18:35' },
  { id: '25', barcode: '885001234025', name: 'ยาดมโป๊ยเซียน เพียรบรรเทา', category: 'ยาสามัญประจำบ้าน', price: 24.00, stock: 60, image: 'assets/idp25.png', lastSold: '2026-08-08 19:05' },
  { id: '26', barcode: '885001234026', name: 'ผงเกลือแร่ ออเรสเต้ แก้ท้องเสีย', category: 'ยาสามัญประจำบ้าน', price: 8.00, stock: 100, image: 'assets/idp26.png', lastSold: '2026-08-08 14:50' },
  { id: '27', barcode: '885001234027', name: 'พลาสเตอร์ยา พลาสติกกันน้ำ (10 ชิ้น)', category: 'ยาสามัญประจำบ้าน', price: 12.00, stock: 70, image: 'assets/idp27.png', lastSold: '2026-08-08 16:25' },
  { id: '28', barcode: '885001234028', name: 'ยาน้ำแก้ไอ ตราอาปาเช่ 60ml', category: 'ยาสามัญประจำบ้าน', price: 35.00, stock: 25, image: 'assets/idp28.png', lastSold: '2026-08-08 17:55' },

  // Tissues 5 Brands (29-33)
  { id: '29', barcode: '885001234029', name: 'กระดาษทิชชู่ คลีเน็กซ์ Soft Pack 115 แผ่น', category: 'ของใช้ประจำวัน', price: 35.00, stock: 40, image: 'assets/idp29.png', lastSold: '2026-08-08 18:10' },
  { id: '30', barcode: '885001234030', name: 'กระดาษทิชชู่ ซิลค์ ม้วนใหญ่ (แพ็ค 6 ม้วน)', category: 'ของใช้ประจำวัน', price: 59.00, stock: 30, image: 'assets/idp30.png', lastSold: '2026-08-08 17:20' },
  { id: '31', barcode: '885001234031', name: 'กระดาษทิชชู่ สก๊อตต์ Extra (แพ็ค 4 ม้วน)', category: 'ของใช้ประจำวัน', price: 45.00, stock: 50, image: 'assets/idp31.png', lastSold: '2026-08-08 16:15' },
  { id: '32', barcode: '885001234032', name: 'กระดาษทิชชู่ พาซิโอ Luxury Soft (แบบกล่อง)', category: 'ของใช้ประจำวัน', price: 42.00, stock: 25, image: 'assets/idp32.png', lastSold: '2026-08-08 15:40' },
  { id: '33', barcode: '885001234033', name: 'กระดาษทิชชู่ เซลล็อกซ์ Purify (150 แผ่น)', category: 'ของใช้ประจำวัน', price: 39.00, stock: 35, image: 'assets/idp33.png', lastSold: '2026-08-08 14:10' },

  // Sanitary Pads 5 Types (34-38)
  { id: '34', barcode: '885001234034', name: 'ผ้าอนามัย โซฟี แบบกระชับ มีปีก 22cm (4 ชิ้น)', category: 'ของใช้ประจำวัน', price: 15.00, stock: 60, image: 'assets/idp34.png', lastSold: '2026-08-08 18:40' },
  { id: '35', barcode: '885001234035', name: 'ผ้าอนามัย ลอรีเอะ ซูเปอร์สลิม 25cm (4 ชิ้น)', category: 'ของใช้ประจำวัน', price: 18.00, stock: 55, image: 'assets/idp35.png', lastSold: '2026-08-08 17:50' },
  { id: '36', barcode: '885001234036', name: 'ผ้าอนามัย โมเดส คอตตอนนี่ คูล มีปีก 23cm', category: 'ของใช้ประจำวัน', price: 22.00, stock: 40, image: 'assets/idp36.png', lastSold: '2026-08-08 16:30' },
  { id: '37', barcode: '885001234037', name: 'ผ้าอนามัย โซฟี หลับสบายตลอดคืน 29cm (2 ชิ้น)', category: 'ของใช้ประจำวัน', price: 19.00, stock: 50, image: 'assets/idp37.png', lastSold: '2026-08-08 15:10' },
  { id: '38', barcode: '885001234038', name: 'ผ้าอนามัย ลอรีเอะ ซอฟท์แอนด์เซฟ กลางคืน 30cm', category: 'ของใช้ประจำวัน', price: 25.00, stock: 45, image: 'assets/idp38.png', lastSold: '2026-08-08 14:45' },

  // Spices & Seasonings 10 Items (39-48)
  { id: '39', barcode: '885001234039', name: 'พริกไทยป่น ตรามือที่ 1 50g', category: 'เครื่องเทศ/เครื่องปรุง', price: 28.00, stock: 40, image: 'assets/idp39.png', lastSold: '2026-08-08 18:25' },
  { id: '40', barcode: '885001234040', name: 'ผงพะโล้ สำเร็จรูป ตราคนอร์ 30g', category: 'เครื่องเทศ/เครื่องปรุง', price: 12.00, stock: 60, image: 'assets/idp40.png', lastSold: '2026-08-08 17:10' },
  { id: '41', barcode: '885001234041', name: 'ซีอิ๊วขาวสูตร 1 ตราเด็กสมบูรณ์ 700ml', category: 'เครื่องเทศ/เครื่องปรุง', price: 52.00, stock: 30, image: 'assets/idp41.png', lastSold: '2026-08-08 16:45' },
  { id: '42', barcode: '885001234042', name: 'น้ำปลาแท้ ตราทิพรส 700ml', category: 'เครื่องเทศ/เครื่องปรุง', price: 32.00, stock: 80, image: 'assets/idp42.png', lastSold: '2026-08-08 18:55' },
  { id: '43', barcode: '885001234043', name: 'ซอสหอยนางรม ตราแม่ครัว 600ml', category: 'เครื่องเทศ/เครื่องปรุง', price: 48.00, stock: 45, image: 'assets/idp43.png', lastSold: '2026-08-08 15:30' },
  { id: '44', barcode: '885001234044', name: 'น้ำตาลทรายขาว ตราmitr phol 1kg', category: 'เครื่องเทศ/เครื่องปรุง', price: 28.00, stock: 50, image: 'assets/idp44.png', lastSold: '2026-08-08 14:00' },
  { id: '45', barcode: '885001234045', name: 'เกลือป่นบริสุทธิ์ ตราปรุงทิพย์ 500g', category: 'เครื่องเทศ/เครื่องปรุง', price: 10.00, stock: 100, image: 'assets/idp45.png', lastSold: '2026-08-08 16:05' },
  { id: '46', barcode: '885001234046', name: 'ผงปรุงรสรสหมู ตรารสดี 75g', category: 'เครื่องเทศ/เครื่องปรุง', price: 15.00, stock: 70, image: 'assets/idp46.png', lastSold: '2026-08-08 17:35' },
  { id: '47', barcode: '885001234047', name: 'ซอสมะเขือเทศ ตราโรซ่า 300g', category: 'เครื่องเทศ/เครื่องปรุง', price: 24.00, stock: 35, image: 'assets/idp47.png', lastSold: '2026-08-08 18:05' },
  { id: '48', barcode: '885001234048', name: 'น้ำส้มสายชู 5% ตราอสร. 700ml', category: 'เครื่องเทศ/เครื่องปรุง', price: 22.00, stock: 40, image: 'assets/idp48.png', lastSold: '2026-08-08 13:50' },

  // Instant & Semi-processed Foods 10 Items (49-58)
  { id: '49', barcode: '885001234049', name: 'ไวไว บะหมี่ปรุงสำเร็จ รสหมูสับ (ซอง)', category: 'บะหมี่/อาหารแห้ง', price: 7.00, stock: 120, image: 'assets/idp49.png', lastSold: '2026-08-08 18:40' },
  { id: '50', barcode: '885001234050', name: 'ยำยำช้างน้อย รสบาร์บีคิว (แพ็ค 6 ซอง)', category: 'บะหมี่/อาหารแห้ง', price: 24.00, stock: 50, image: 'assets/idp50.png', lastSold: '2026-08-08 17:25' },
  { id: '51', barcode: '885001234051', name: 'นิสชิน บะหมี่เกาหลี เผ็ดคูณสอง 60g', category: 'บะหมี่/อาหารแห้ง', price: 45.00, stock: 35, image: 'assets/idp51.png', lastSold: '2026-08-08 16:15' },
  { id: '52', barcode: '885001234052', name: 'โจ๊กคัพ ตราคนอร์ รสหมู 35g', category: 'บะหมี่/อาหารแห้ง', price: 18.00, stock: 40, image: 'assets/idp52.png', lastSold: '2026-08-08 15:50' },
  { id: '53', barcode: '885001234053', name: 'วุ้นเส้นอบหม้อดิน สำเร็จรูป 40g', category: 'บะหมี่/อาหารแห้ง', price: 22.00, stock: 30, image: 'assets/idp53.png', lastSold: '2026-08-08 14:30' },
  { id: '54', barcode: '885001234054', name: 'แกงกะหรี่สำเร็จรูปสไตล์ญี่ปุ่น 200g', category: 'บะหมี่/อาหารแห้ง', price: 65.00, stock: 20, image: 'assets/idp54.png', lastSold: '2026-08-08 13:15' },
  { id: '55', barcode: '885001234055', name: 'ปลากระป๋อง มะเขือเทศสลัดอินโดรสเผ็ด', category: 'บะหมี่/อาหารแห้ง', price: 22.00, stock: 60, image: 'assets/idp55.png', lastSold: '2026-08-08 18:00' },
  { id: '56', barcode: '885001234056', name: 'ปลากระป๋อง สามแม่ครัว ในซอสมะเขือเทศ', category: 'บะหมี่/อาหารแห้ง', price: 19.00, stock: 90, image: 'assets/idp56.png', lastSold: '2026-08-08 17:05' },
  { id: '57', barcode: '885001234057', name: 'ซุปก้อน รสต้มยำ ตราคนอร์ (24g)', category: 'บะหมี่/อาหารแห้ง', price: 14.00, stock: 55, image: 'assets/idp57.png', lastSold: '2026-08-08 16:40' },
  { id: '58', barcode: '885001234058', name: 'ก๋วยเตี๋ยวเรือสำเร็จรูป เลอรส (เส้นเล็ก)', category: 'บะหมี่/อาหารแห้ง', price: 35.00, stock: 40, image: 'assets/idp58.png', lastSold: '2026-08-08 15:25' },

  // Rice & Household Essentials 10 Items (59-68)
  { id: '59', barcode: '885001234059', name: 'ข้าวหอมมะลิแท้ 100% ตราหงษ์ทอง 5kg', category: 'สินค้าจำเป็น/ข้าวสาร', price: 235.00, stock: 15, image: 'assets/59.png', lastSold: '2026-08-08 18:15' },
  { id: '60', barcode: '885001234060', name: 'ข้าวเสาไห้ ตราฉัตรส้ม 5kg', category: 'สินค้าจำเป็น/ข้าวสาร', price: 165.00, stock: 20, image: 'assets/idp60.png', lastSold: '2026-08-08 17:45' },
  { id: '61', barcode: '885001234061', name: 'ข้าวเหนียวเขี้ยวงู ตราไดโนเสาร์ 1kg', category: 'สินค้าจำเป็น/ข้าวสาร', price: 45.00, stock: 25, image: 'assets/idp61.png', lastSold: '2026-08-08 16:55' },
  { id: '62', barcode: '885001234062', name: 'น้ำมันพืชถั่วเหลือง ตราองุ่น 1 ลิตร', category: 'สินค้าจำเป็น/ข้าวสาร', price: 55.00, stock: 40, image: 'assets/idp62.png', lastSold: '2026-08-08 18:50' },
  { id: '63', barcode: '885001234063', name: 'น้ำมันปาล์ม ตรามรกต 1 ลิตร', category: 'สินค้าจำเป็น/ข้าวสาร', price: 48.00, stock: 45, image: 'assets/idp63.png', lastSold: '2026-08-08 15:15' },
  { id: '64', barcode: '885001234064', name: 'ไข่ไก่สดเบอร์ 3 (แผง 10 ฟอง)', category: 'สินค้าจำเป็น/ข้าวสาร', price: 48.00, stock: 30, image: 'assets/idp64.png', lastSold: '2026-08-08 14:55' },
  { id: '65', barcode: '885001234065', name: 'นมข้นหวาน ตรามะลิ 380g (หลอดบีบ)', category: 'สินค้าจำเป็น/ข้าวสาร', price: 26.00, stock: 50, image: 'assets/idp65.png', lastSold: '2026-08-08 13:40' },
  { id: '66', barcode: '885001234066', name: 'กะทิสด 100% ตราอร่อย-ดี 250ml', category: 'สินค้าจำเป็น/ข้าวสาร', price: 18.00, stock: 60, image: 'assets/idp66.png', lastSold: '2026-08-08 16:10' },
  { id: '67', barcode: '885001234067', name: 'สบู่ก้อน นกแก้ว พฤกษา 105g', category: 'สินค้าจำเป็น/ข้าวสาร', price: 15.00, stock: 70, image: 'assets/idp67.png', lastSold: '2026-08-08 17:00' },
  { id: '68', barcode: '885001234068', name: 'แชมพู ซันซิล สีชมพู 160ml', category: 'สินค้าจำเป็น/ข้าวสาร', price: 39.00, stock: 35, image: 'assets/idp68.png', lastSold: '2026-08-08 18:30' },

  // Stationery & School Supplies 10 Items (69-78)
  { id: '69', barcode: '885001234069', name: 'ปากกาลูกลื่น Lancer Spiral 0.5mm (สีน้ำเงิน)', category: 'อุปกรณ์การเรียน', price: 6.00, stock: 150, image: 'assets/idp69.png', lastSold: '2026-08-08 18:05' },
  { id: '70', barcode: '885001234070', name: 'ปากกาเคมี 2 หัว ตราHorse (สีดำ)', category: 'อุปกรณ์การเรียน', price: 15.00, stock: 80, image: 'assets/idp70.png', lastSold: '2026-08-08 17:15' },
  { id: '71', barcode: '885001234071', name: 'ดินสอดำ 2B Master Art (กล่อง 12 แท่ง)', category: 'อุปกรณ์การเรียน', price: 48.00, stock: 25, image: 'assets/idp71.png', lastSold: '2026-08-08 16:20' },
  { id: '72', barcode: '885001234072', name: 'ยางลบก้อน Pentel Hi-Polymer', category: 'อุปกรณ์การเรียน', price: 12.00, stock: 90, image: 'assets/idp72.png', lastSold: '2026-08-08 15:05' },
  { id: '73', barcode: '885001234073', name: 'ไม้บรรทัดพลาสติกใส 12 นิ้ว Elephant', category: 'อุปกรณ์การเรียน', price: 8.00, stock: 100, image: 'assets/idp73.png', lastSold: '2026-08-08 14:15' },
  { id: '74', barcode: '885001234074', name: 'สมุดตราบรรทัด 9/40 (40 แผ่น)', category: 'อุปกรณ์การเรียน', price: 15.00, stock: 120, image: 'assets/idp74.png', lastSold: '2026-08-08 13:50' },
  { id: '75', barcode: '885001234075', name: 'กาวลาเท็กซ์ TOA 4oz', category: 'อุปกรณ์การเรียน', price: 22.00, stock: 40, image: 'assets/idp75.png', lastSold: '2026-08-08 16:45' },
  { id: '76', barcode: '885001234076', name: 'กรรไกรตัดกระดาษ Elephant 5 นิ้ว', category: 'อุปกรณ์การเรียน', price: 35.00, stock: 30, image: 'assets/idp76.png', lastSold: '2026-08-08 17:35' },
  { id: '77', barcode: '885001234077', name: 'น้ำยาลบคำผิด โพนี่ Correction Fluid', category: 'อุปกรณ์การเรียน', price: 28.00, stock: 50, image: 'assets/idp77.png', lastSold: '2026-08-08 18:25' },
  { id: '78', barcode: '885001234078', name: 'เทปกาวใส 1/2 นิ้ว Louis Tapes', category: 'อุปกรณ์การเรียน', price: 10.00, stock: 85, image: 'assets/idp78.png', lastSold: '2026-08-08 19:00' }
];

// Initial Past 90 Days Transactions for Pre-loaded Dashboard Data
function generateSampleTransactions() {
  const list = [];
  const today = new Date();
  
  // Sample popular items for realistic transaction generation
  const sampleItemsPool = [
    { name: 'ชาเขียวโออิชิ ต้นตำรับ 500ml', price: 20 },
    { name: 'เลย์ มันฝรั่งแผ่นเรียบ 42g', price: 30 },
    { name: 'มาม่าคัพ ต้มยำกุ้งน้ำข้น', price: 15 },
    { name: 'นมสดพาสเจอร์ไรส์ รสจืด 225ml', price: 18 },
    { name: 'น้ำดื่มสิงห์ 600ml', price: 7 },
    { name: 'เป๊ปซี่ ออริจินัล 450ml', price: 17 },
    { name: 'แซนวิชแฮมชีส ตราเมจิก', price: 29 },
    { name: 'คาราบาวแดง 150ml', price: 10 },
    { name: 'กาแฟเบอร์ดี้ โรบัสต้า 180ml', price: 17 },
    { name: 'ยาพาราเซตามอล ซาร่า 500mg', price: 18 },
    { name: 'ยาดมโป๊ยเซียน เพียรบรรเทา', price: 24 }
  ];

  for (let i = 89; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    
    // Generate 3-8 sample bills per day
    const numBills = Math.floor(Math.random() * 5) + 3;
    for (let b = 1; b <= numBills; b++) {
      const timeStr = `${String(Math.floor(Math.random() * 12) + 8).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`;
      
      // Random 1-3 items per bill
      const billItemsCount = Math.floor(Math.random() * 3) + 1;
      const billItems = [];
      let totalAmount = 0;
      
      for (let k = 0; k < billItemsCount; k++) {
        const randomItem = sampleItemsPool[Math.floor(Math.random() * sampleItemsPool.length)];
        const qty = Math.floor(Math.random() * 2) + 1;
        const itemTotal = randomItem.price * qty;
        totalAmount += itemTotal;
        billItems.push({
          name: randomItem.name,
          qty: qty,
          price: randomItem.price,
          total: itemTotal
        });
      }
      
      const vat = Math.round(totalAmount * 0.07 * 100) / 100;
      const grandTotal = Math.round((totalAmount + vat) * 100) / 100;
      const cashReceived = Math.ceil(grandTotal / 50) * 50 || 100;
      const change = Math.round((cashReceived - grandTotal) * 100) / 100;
      
      list.push({
        id: `REC-${1000 + list.length + 1}`,
        timestamp: `${dateStr} ${timeStr}`,
        date: dateStr,
        cashier: b % 2 === 0 ? 'นายสมชาย ใจดี' : 'นางสาวสมหญิง ผู้จัดการ',
        items: billItems,
        subtotal: totalAmount,
        vat: vat,
        total: grandTotal,
        cashReceived: cashReceived,
        change: change
      });
    }
  }
  return list;
}

// Global App State
let state = {
  currentUser: null,
  currentView: 'login',
  products: JSON.parse(localStorage.getItem('meedee_products')) || DEFAULT_PRODUCTS,
  transactions: JSON.parse(localStorage.getItem('meedee_transactions')) || generateSampleTransactions(),
  cart: [],
  selectedCategory: 'ทั้งหมด',
  searchQuery: '',
  salesChartInstance: null,
  selectedPeriodDays: 7
};

// Auto update products if localStorage had older items list
if (state.products.length < 78) {
  state.products = DEFAULT_PRODUCTS;
  localStorage.setItem('meedee_products', JSON.stringify(DEFAULT_PRODUCTS));
}

// Auto upgrade transactions to 90 days if less than 50 transactions
if (state.transactions.length < 50) {
  state.transactions = generateSampleTransactions();
  localStorage.setItem('meedee_transactions', JSON.stringify(state.transactions));
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  saveState();
  checkAuthSession();
  setupEventListeners();
  renderCategories();
});

function setupEventListeners() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        executeSearch();
      }
    });
  }
}

// Save State to LocalStorage
function saveState() {
  localStorage.setItem('meedee_products', JSON.stringify(state.products));
  localStorage.setItem('meedee_transactions', JSON.stringify(state.transactions));
}

/* ==========================================================================
   AUTHENTICATION & NAVIGATION CONTROLLER
   ========================================================================== */
function checkAuthSession() {
  const savedUser = JSON.parse(sessionStorage.getItem('meedee_user'));
  if (savedUser) {
    state.currentUser = savedUser;
    document.getElementById('main-header').classList.remove('hidden');
    document.getElementById('user-display-name').textContent = savedUser.name;
    document.getElementById('user-display-role').textContent = savedUser.role;
    switchView('pos');
  } else {
    document.getElementById('main-header').classList.add('hidden');
    switchView('login');
  }
}

function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  
  const user = {
    username: username,
    name: username.toLowerCase() === 'admin' ? 'นางสาวสมหญิง ผู้จัดการ' : 'นายสมชาย ใจดี',
    role: username.toLowerCase() === 'admin' ? 'ผู้จัดการร้าน (Admin)' : 'พนักงานขาย (Cashier)'
  };
  
  sessionStorage.setItem('meedee_user', JSON.stringify(user));
  state.currentUser = user;
  
  document.getElementById('main-header').classList.remove('hidden');
  document.getElementById('user-display-name').textContent = user.name;
  document.getElementById('user-display-role').textContent = user.role;
  
  showToast(`ยินดีต้อนรับคุณ ${user.name} เข้าสู่ระบบ`, 'success');
  switchView('pos');
}

function quickLogin(role) {
  if (role === 'admin') {
    document.getElementById('username').value = 'admin';
    document.getElementById('password').value = 'admin123';
  } else {
    document.getElementById('username').value = 'cashier';
    document.getElementById('password').value = '1234';
  }
  document.getElementById('login-form').dispatchEvent(new Event('submit'));
}

function handleLogout() {
  sessionStorage.removeItem('meedee_user');
  state.currentUser = null;
  document.getElementById('main-header').classList.add('hidden');
  switchView('login');
  showToast('ออกจากระบบเรียบร้อยแล้ว', 'info');
}

function switchView(viewName) {
  state.currentView = viewName;
  
  // Hide all sections
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.add('hidden'));
  
  // Reset Nav active tabs
  document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
  
  // Show target section & highlight tab
  const targetSec = document.getElementById(`view-${viewName}`);
  if (targetSec) targetSec.classList.remove('hidden');
  
  const activeTab = document.getElementById(`nav-${viewName}`);
  if (activeTab) activeTab.classList.add('active');
  
  // View specific re-renders
  if (viewName === 'pos') {
    renderProducts();
    updateCartUI();
  } else if (viewName === 'inventory') {
    const todayStr = new Date().toISOString().split('T')[0];
    document.getElementById('sales-date-filter').value = todayStr;
    renderInventoryTable();
  } else if (viewName === 'dashboard') {
    renderDashboard();
  }
}

/* ==========================================================================
   POS SALE PAGE CONTROLLER (Exact Wireframe #2)
   ========================================================================== */
function renderCategories() {
  const categories = ['ทั้งหมด', 'เครื่องดื่ม', 'ขนม/ของกินเล่น', 'บะหมี่/อาหารแห้ง', 'นม/เบเกอรี่', 'ยาสามัญประจำบ้าน', 'เครื่องเทศ/เครื่องปรุง', 'สินค้าจำเป็น/ข้าวสาร', 'อุปกรณ์การเรียน', 'ของใช้ประจำวัน'];
  const container = document.getElementById('category-pills');
  if (!container) return;
  
  container.innerHTML = categories.map(cat => `
    <button class="cat-pill ${state.selectedCategory === cat ? 'active' : ''}" onclick="selectCategory('${cat}')">
      ${cat}
    </button>
  `).join('');
}

function selectCategory(cat) {
  state.selectedCategory = cat;
  renderCategories();
  renderProducts();
}

function handleSearchInput(e) {
  state.searchQuery = e.target.value.toLowerCase().trim();
  renderProducts();
}

function executeSearch() {
  renderProducts();
}

function simulateBarcodeScan() {
  // Beep Audio Feedback via Web Audio API
  playBeepSound();
  
  // Pick random product or first product matching search
  const availableProds = state.products.filter(p => p.stock > 0);
  if (availableProds.length === 0) {
    showToast('ไม่มีสินค้าเหลือในสต็อก', 'error');
    return;
  }
  
  const randomProd = availableProds[Math.floor(Math.random() * availableProds.length)];
  document.getElementById('search-input').value = randomProd.barcode;
  state.searchQuery = randomProd.barcode.toLowerCase();
  
  addToCart(randomProd.id);
  showToast(`📷 สแกนบาร์โค้ด [${randomProd.barcode}] สำเร็จ: ${randomProd.name}`, 'success');
}

function playBeepSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1046.50, audioCtx.currentTime); // High C
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.12);
  } catch(err) {
    // Audio Context not initialized yet
  }
}

function renderProducts() {
  const container = document.getElementById('product-grid');
  if (!container) return;
  
  let list = state.products;
  
  // Category Filter
  if (state.selectedCategory !== 'ทั้งหมด') {
    list = list.filter(p => p.category === state.selectedCategory);
  }
  
  // Search Query Filter
  if (state.searchQuery) {
    list = list.filter(p => 
      p.name.toLowerCase().includes(state.searchQuery) ||
      p.barcode.includes(state.searchQuery)
    );
  }
  
  document.getElementById('product-count-badge').textContent = `${list.length} รายการ`;
  
  if (list.length === 0) {
    container.innerHTML = `<div class="empty-cart-msg"><i class="fa-solid fa-magnifying-glass"></i> ไม่พบสินค้าที่ตรงกับการค้นหา</div>`;
    return;
  }
  
  container.innerHTML = list.map(prod => `
    <div class="product-card shadow-card" onclick="addToCart('${prod.id}')">
      <span class="product-stock-tag ${prod.stock < 5 ? 'low' : ''}">
        คงเหลือ: ${prod.stock}
      </span>
      <div class="product-img-wrapper">
        <img src="${prod.image}" alt="${prod.name}" class="product-img" onerror="this.src='assets/drink_tea.png'">
      </div>
      <h4 class="product-name">${prod.name}</h4>
      <span class="product-barcode">รหัส: ${prod.barcode}</span>
      <span class="product-price">฿${prod.price.toFixed(2)}</span>
      <button class="btn btn-sm btn-primary btn-block">
        <i class="fa-solid fa-plus"></i> เพิ่มลงตะกร้า
      </button>
    </div>
  `).join('');
}

/* ==========================================================================
   CART & CHECKOUT CONTROLLER (Wireframe #2 Cart Panel)
   ========================================================================== */
function addToCart(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;
  
  if (product.stock <= 0) {
    showToast(`สินค้า "${product.name}" หมดสต็อกแล้ว!`, 'error');
    return;
  }
  
  const existingItem = state.cart.find(item => item.id === productId);
  if (existingItem) {
    if (existingItem.qty >= product.stock) {
      showToast(`จำนวนเกินสต็อกที่มีคงเหลือ (${product.stock} ชิ้น)`, 'error');
      return;
    }
    existingItem.qty += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      qty: 1
    });
  }
  
  updateCartUI();
}

function updateCartQuantity(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;
  
  const product = state.products.find(p => p.id === productId);
  
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  if (product && item.qty > product.stock) {
    item.qty = product.stock;
    showToast(`ไม่สามารถเพิ่มเกินสต็อก (${product.stock} ชิ้น)`, 'error');
  }
  updateCartUI();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  updateCartUI();
}

function clearCart() {
  state.cart = [];
  document.getElementById('cash-received').value = '';
  updateCartUI();
}

function updateCartUI() {
  const container = document.getElementById('cart-items-list');
  if (!container) return;
  
  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-msg">
        <i class="fa-solid fa-cart-flatbed fa-2x"></i>
        <p class="mt-2">ตะกร้าสินค้าว่างเปล่า<br>เลือกสินค้าจากเมนูด้านซ้ายเพื่อเริ่มสั่งซื้อ</p>
      </div>
    `;
  } else {
    container.innerHTML = state.cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-info">
          <span class="cart-item-title">${item.name}</span>
          <span class="cart-item-sub">฿${item.price.toFixed(2)} / ชิ้น</span>
        </div>
        <div class="cart-item-controls">
          <button class="cart-qty-btn" onclick="updateCartQuantity('${item.id}', -1)">-</button>
          <span class="cart-qty-val">${item.qty}</span>
          <button class="cart-qty-btn" onclick="updateCartQuantity('${item.id}', 1)">+</button>
        </div>
        <span class="cart-item-total">฿${(item.price * item.qty).toFixed(2)}</span>
        <button class="btn-sm btn-outline-danger" style="padding: 0.15rem 0.35rem;" onclick="removeFromCart('${item.id}')">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    `).join('');
  }
  
  updateCartTotals();
}

function updateCartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const vatToggle = document.getElementById('cart-vat-toggle').checked;
  const vat = vatToggle ? (subtotal * 0.07) : 0;
  const grandTotal = subtotal + vat;
  
  document.getElementById('cart-subtotal').textContent = `฿${subtotal.toFixed(2)}`;
  document.getElementById('cart-vat-amount').textContent = `฿${vat.toFixed(2)}`;
  document.getElementById('cart-grand-total').textContent = `฿${grandTotal.toFixed(2)}`;
  
  calculateChange();
}

function setQuickCash(amount) {
  document.getElementById('cash-received').value = amount;
  calculateChange();
}

function setExactCash() {
  const grandTotalStr = document.getElementById('cart-grand-total').textContent.replace('฿', '');
  const grandTotal = parseFloat(grandTotalStr) || 0;
  document.getElementById('cash-received').value = grandTotal.toFixed(2);
  calculateChange();
}

function calculateChange() {
  const grandTotalStr = document.getElementById('cart-grand-total').textContent.replace('฿', '');
  const grandTotal = parseFloat(grandTotalStr) || 0;
  const cashInput = document.getElementById('cash-received').value;
  const cashReceived = parseFloat(cashInput) || 0;
  
  const changeEl = document.getElementById('cart-change-amount');
  const checkoutBtn = document.getElementById('btn-checkout');
  
  if (state.cart.length === 0) {
    changeEl.textContent = '฿0.00';
    changeEl.style.color = '#38bdf8';
    checkoutBtn.disabled = true;
    return;
  }
  
  const change = cashReceived - grandTotal;
  
  if (cashReceived < grandTotal) {
    changeEl.textContent = `ขาดอีก ฿${Math.abs(change).toFixed(2)}`;
    changeEl.style.color = '#f87171';
    checkoutBtn.disabled = true;
  } else {
    changeEl.textContent = `฿${change.toFixed(2)}`;
    changeEl.style.color = '#34d399';
    checkoutBtn.disabled = false;
  }
}

/* ==========================================================================
   CHECKOUT & RECEIPT MODAL CONTROLLER (Wireframe #4)
   ========================================================================== */
function processCheckout() {
  if (state.cart.length === 0) {
    showToast('ไม่มีสินค้าในตะกร้า', 'error');
    return;
  }
  
  const grandTotalStr = document.getElementById('cart-grand-total').textContent.replace('฿', '');
  const grandTotal = parseFloat(grandTotalStr) || 0;
  const cashReceived = parseFloat(document.getElementById('cash-received').value) || 0;
  
  if (cashReceived < grandTotal) {
    showToast('จำนวนเงินที่รับมาไม่เพียงพอ', 'error');
    return;
  }
  
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];
  const timeStr = now.toTimeString().split(' ')[0];
  const timestamp = `${dateStr} ${timeStr}`;
  
  const subtotalStr = document.getElementById('cart-subtotal').textContent.replace('฿', '');
  const vatStr = document.getElementById('cart-vat-amount').textContent.replace('฿', '');
  const subtotal = parseFloat(subtotalStr) || 0;
  const vat = parseFloat(vatStr) || 0;
  const change = cashReceived - grandTotal;
  
  // Deduct Stock
  state.cart.forEach(cartItem => {
    const prod = state.products.find(p => p.id === cartItem.id);
    if (prod) {
      prod.stock = Math.max(0, prod.stock - cartItem.qty);
      prod.lastSold = timestamp;
    }
  });
  
  // Create New Transaction Record
  const newBillId = `REC-${Math.floor(10000 + Math.random() * 90000)}`;
  const transaction = {
    id: newBillId,
    timestamp: timestamp,
    date: dateStr,
    cashier: state.currentUser ? state.currentUser.name : 'นายสมชาย ใจดี',
    items: state.cart.map(i => ({
      name: i.name,
      qty: i.qty,
      price: i.price,
      total: i.price * i.qty
    })),
    subtotal: subtotal,
    vat: vat,
    total: grandTotal,
    cashReceived: cashReceived,
    change: change
  };
  
  state.transactions.unshift(transaction);
  saveState();
  
  // Open Receipt Modal (Wireframe #4)
  renderReceiptModal(transaction);
  
  showToast(`ชำระเงินสำเร็จ! ออกใบเสร็จเลขที่ #${transaction.id}`, 'success');
}

function renderReceiptModal(t) {
  document.getElementById('slip-date-time').textContent = `วันที่ ${t.timestamp}`;
  document.getElementById('slip-bill-id').textContent = `เลขที่บิล: #${t.id}`;
  document.getElementById('slip-cashier-name').textContent = `พนักงาน: ${t.cashier}`;
  
  // Render Item Lines (Matching Wireframe #4: สินค้า x2 - จำนวนเงิน)
  const itemsContainer = document.getElementById('slip-items-container');
  itemsContainer.innerHTML = t.items.map(item => `
    <div class="slip-item-row">
      <span>${item.name} x${item.qty}</span>
      <span>฿${item.total.toFixed(2)}</span>
    </div>
  `).join('');
  
  document.getElementById('slip-vat-val').textContent = `฿${t.vat.toFixed(2)}`;
  document.getElementById('slip-total-val').textContent = `฿${t.total.toFixed(2)}`;
  document.getElementById('slip-cash-val').textContent = `฿${t.cashReceived.toFixed(2)}`;
  document.getElementById('slip-change-val').textContent = `฿${t.change.toFixed(2)}`;
  
  document.getElementById('receipt-modal').classList.remove('hidden');
}

function printReceiptSlip() {
  window.print();
}

function closeReceiptModal() {
  document.getElementById('receipt-modal').classList.add('hidden');
  clearCart();
  renderProducts();
}

/* ==========================================================================
   INVENTORY & SALES RECORD CONTROLLER (Wireframe #5)
   ========================================================================== */
function renderInventoryTable() {
  const tableBody = document.getElementById('inventory-table-body');
  if (!tableBody) return;
  
  const filterDate = document.getElementById('sales-date-filter').value;
  
  // Filter sales totals for selected date
  const filteredSales = state.transactions.filter(t => t.date === filterDate);
  const totalSalesAmount = filteredSales.reduce((sum, t) => sum + t.total, 0);
  const totalSalesQty = filteredSales.reduce((sum, t) => sum + t.items.reduce((s, i) => s + i.qty, 0), 0);
  
  document.getElementById('inv-total-sales-amount').textContent = `฿${totalSalesAmount.toFixed(2)}`;
  document.getElementById('inv-total-sales-qty').textContent = `${totalSalesQty} ชิ้น`;
  
  const lowStockCount = state.products.filter(p => p.stock < 5).length;
  document.getElementById('inv-low-stock-count').textContent = `${lowStockCount} รายการ`;
  
  tableBody.innerHTML = state.products.map(prod => `
    <tr>
      <td class="bold-row" style="color: var(--color-accent);">${prod.barcode}</td>
      <td><img src="${prod.image}" alt="${prod.name}" class="tbl-thumb" onerror="this.src='assets/drink_tea.png'"></td>
      <td class="bold-row">${prod.name}</td>
      <td><span class="badge">${prod.category}</span></td>
      <td>฿${prod.price.toFixed(2)}</td>
      <td>
        <span class="badge ${prod.stock < 5 ? 'bg-amber' : 'bg-mint'}">
          ${prod.stock} ชิ้น
        </span>
      </td>
      <td>
        <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.25rem;">
          <i class="fa-solid fa-clock"></i> ${prod.lastSold || 'ยังไม่มีการขาย'}
        </div>
        <div class="action-btn-group">
          <button class="btn btn-sm btn-outline-info" onclick="openEditProductModal('${prod.id}')">
            <i class="fa-solid fa-pen"></i> แก้ไข/เติมสต็อก
          </button>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteProduct('${prod.id}')">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function openAddProductModal() {
  document.getElementById('edit-product-id').value = '';
  document.getElementById('product-modal-title').innerHTML = '<i class="fa-solid fa-plus"></i> เพิ่มสินค้าใหม่';
  document.getElementById('product-form').reset();
  document.getElementById('prod-barcode').value = String(Math.floor(885001234000 + Math.random() * 9999));
  document.getElementById('product-modal').classList.remove('hidden');
}

function openEditProductModal(id) {
  const prod = state.products.find(p => p.id === id);
  if (!prod) return;
  
  document.getElementById('edit-product-id').value = prod.id;
  document.getElementById('product-modal-title').innerHTML = '<i class="fa-solid fa-pen"></i> แก้ไขข้อมูล / เติมสต็อก';
  document.getElementById('prod-barcode').value = prod.barcode;
  document.getElementById('prod-name').value = prod.name;
  document.getElementById('prod-category').value = prod.category;
  document.getElementById('prod-price').value = prod.price;
  document.getElementById('prod-stock').value = prod.stock;
  document.getElementById('product-modal').classList.remove('hidden');
}

function saveProductForm(e) {
  e.preventDefault();
  const id = document.getElementById('edit-product-id').value;
  const barcode = document.getElementById('prod-barcode').value;
  const name = document.getElementById('prod-name').value;
  const category = document.getElementById('prod-category').value;
  const price = parseFloat(document.getElementById('prod-price').value) || 0;
  const stock = parseInt(document.getElementById('prod-stock').value) || 0;
  const imgType = document.getElementById('prod-img-type').value;
  
  if (id) {
    // Edit existing
    const prod = state.products.find(p => p.id === id);
    if (prod) {
      prod.barcode = barcode;
      prod.name = name;
      prod.category = category;
      prod.price = price;
      prod.stock = stock;
    }
    showToast('อัปเดตข้อมูลสินค้าเรียบร้อยแล้ว', 'success');
  } else {
    // Add new
    state.products.push({
      id: String(Date.now()),
      barcode: barcode,
      name: name,
      category: category,
      price: price,
      stock: stock,
      image: imgType,
      lastSold: 'สินค้าใหม่'
    });
    showToast('เพิ่มสินค้าใหม่เรียบร้อยแล้ว', 'success');
  }
  
  saveState();
  closeProductModal();
  renderInventoryTable();
  renderProducts();
}

function deleteProduct(id) {
  if (confirm('คุณต้องการลบรายการสินค้านี้ใช่หรือไม่?')) {
    state.products = state.products.filter(p => p.id !== id);
    saveState();
    renderInventoryTable();
    showToast('ลบรายการสินค้าเรียบร้อยแล้ว', 'info');
  }
}

function closeProductModal() {
  document.getElementById('product-modal').classList.add('hidden');
}

/* Excel Export & Import Engine */
function exportToExcel() {
  try {
    const data = state.products.map(p => ({
      'รหัสสินค้า (Barcode)': p.barcode,
      'ชื่อสินค้า': p.name,
      'หมวดหมู่': p.category,
      'ราคาขาย (บาท)': p.price,
      'จำนวนคงเหลือ (สต็อก)': p.stock,
      'เวลาที่ขายล่าสุด': p.lastSold || '-'
    }));
    
    if (window.XLSX) {
      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "คลังสินค้า");
      XLSX.writeFile(wb, `MeeDee_Inventory_${new Date().toISOString().split('T')[0]}.xlsx`);
      showToast('Export รายงานคลังสินค้าเป็นไฟล์ Excel เรียบร้อย!', 'success');
    } else {
      exportToCSV(data, 'MeeDee_Inventory');
    }
  } catch(err) {
    showToast('เกิดข้อผิดพลาดในการส่งออก Excel', 'error');
  }
}

function exportTransactionsExcel() {
  try {
    const data = state.transactions.map(t => ({
      'เลขที่บิล': t.id,
      'วันที่ & เวลา': t.timestamp,
      'พนักงานขาย': t.cashier,
      'รายการสินค้า': t.items.map(i => `${i.name} x${i.qty}`).join(', '),
      'ยอดรวม (บาท)': t.total,
      'รับเงินมา (บาท)': t.cashReceived,
      'เงินทอน (บาท)': t.change
    }));
    
    if (window.XLSX) {
      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "ประวัติการขาย");
      XLSX.writeFile(wb, `MeeDee_Sales_History_${new Date().toISOString().split('T')[0]}.xlsx`);
      showToast('Export ประวัติการซื้อขายเป็น Excel เรียบร้อย!', 'success');
    } else {
      exportToCSV(data, 'MeeDee_Sales_History');
    }
  } catch(err) {
    showToast('เกิดข้อผิดพลาดในการส่งออก Excel', 'error');
  }
}

function exportToCSV(data, filename) {
  if (data.length === 0) return;
  const keys = Object.keys(data[0]);
  let csv = keys.join(',') + '\n';
  data.forEach(row => {
    csv += keys.map(k => `"${row[k]}"`).join(',') + '\n';
  });
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${filename}.csv`;
  link.click();
  showToast('Export ไฟล์ CSV เรียบร้อยแล้ว', 'success');
}

function triggerImportExcel() {
  document.getElementById('excel-import-input').click();
}

function handleImportExcel(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      if (window.XLSX) {
        const data = new Uint8Array(evt.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(firstSheet);
        
        let importedCount = 0;
        jsonData.forEach(row => {
          const barcode = String(row['รหัสสินค้า (Barcode)'] || row['Barcode'] || Math.floor(885001234000 + Math.random() * 9999));
          const name = row['ชื่อสินค้า'] || row['Name'] || 'สินค้าใหม่นำเข้า';
          const price = parseFloat(row['ราคาขาย (บาท)'] || row['Price']) || 10;
          const stock = parseInt(row['จำนวนคงเหลือ (สต็อก)'] || row['Stock']) || 20;
          
          state.products.push({
            id: String(Date.now() + Math.random()),
            barcode: barcode,
            name: name,
            category: row['หมวดหมู่'] || 'ของใช้ประจำวัน',
            price: price,
            stock: stock,
            image: 'assets/snack_chips.png',
            lastSold: 'นำเข้าจาก Excel'
          });
          importedCount++;
        });
        
        saveState();
        renderInventoryTable();
        renderProducts();
        showToast(`นำเข้าสินค้าจาก Excel เรียบร้อยแล้ว (${importedCount} รายการ)`, 'success');
      }
    } catch(err) {
      showToast('ไม่สามารถอ่านไฟล์ Excel ได้', 'error');
    }
  };
  reader.readAsArrayBuffer(file);
}

/* ==========================================================================
   DASHBOARD CONTROLLER (Wireframe #3 + Transaction History)
   ========================================================================== */
function renderDashboard() {
  const todayStr = new Date().toISOString().split('T')[0];
  const todaySales = state.transactions.filter(t => t.date === todayStr);
  
  const todayTotalRevenue = todaySales.reduce((sum, t) => sum + t.total, 0);
  const todayOrderCount = todaySales.length;
  const lowStockCount = state.products.filter(p => p.stock < 5).length;
  
  document.getElementById('dash-today-sales').textContent = `฿${todayTotalRevenue.toFixed(2)}`;
  document.getElementById('dash-order-count').textContent = `${todayOrderCount} บิล`;
  document.getElementById('dash-low-stock-count').textContent = `${lowStockCount} รายการ`;
  
  // Update active button state based on saved period
  const currentPeriod = state.selectedPeriodDays || 7;
  document.querySelectorAll('.period-btn').forEach(b => {
    if (b.textContent.includes(String(currentPeriod))) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });
  const daysText = document.getElementById('chart-days-text');
  if (daysText) daysText.textContent = currentPeriod;

  render7DayChart(currentPeriod);
  renderTopSellers();
  renderTransactionHistory();
}

function changeChartPeriod(days, btnEl) {
  state.selectedPeriodDays = days;
  
  // Update active button state
  document.querySelectorAll('.period-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  
  // Update label text
  const daysText = document.getElementById('chart-days-text');
  if (daysText) daysText.textContent = days;
  
  // Re-render chart with new period
  render7DayChart(days);
}

function render7DayChart(days = 7) {
  const ctx = document.getElementById('salesProfitChart');
  if (!ctx) return;
  
  if (state.salesChartInstance) {
    state.salesChartInstance.destroy();
  }
  
  // Calculate revenue & profit for selected period
  const labels = [];
  const salesData = [];
  const profitData = [];
  
  const today = new Date();
  
  // For >7 days, group by week to avoid too many labels
  if (days <= 7) {
    // Daily labels
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      labels.push(`${d.getDate()}/${d.getMonth() + 1}`);
      
      const dayTrans = state.transactions.filter(t => t.date === dateStr);
      const totalRev = dayTrans.reduce((sum, t) => sum + t.total, 0);
      salesData.push(totalRev);
      profitData.push(Math.round(totalRev * 0.35 * 100) / 100);
    }
  } else {
    // Weekly grouped labels for 30/60/90 days
    const weeksCount = Math.ceil(days / 7);
    for (let w = weeksCount - 1; w >= 0; w--) {
      const weekStart = new Date(today);
      weekStart.setDate(weekStart.getDate() - (w + 1) * 7 + 1);
      const weekEnd = new Date(today);
      weekEnd.setDate(weekEnd.getDate() - w * 7);
      
      // Clamp to period start
      const periodStart = new Date(today);
      periodStart.setDate(periodStart.getDate() - days + 1);
      if (weekStart < periodStart) weekStart.setTime(periodStart.getTime());
      
      const label = `${weekStart.getDate()}/${weekStart.getMonth() + 1}`;
      labels.push(label);
      
      let weekRev = 0;
      let cursor = new Date(weekStart);
      while (cursor <= weekEnd && cursor <= today) {
        const dateStr = cursor.toISOString().split('T')[0];
        const dayTrans = state.transactions.filter(t => t.date === dateStr);
        weekRev += dayTrans.reduce((sum, t) => sum + t.total, 0);
        cursor.setDate(cursor.getDate() + 1);
      }
      salesData.push(weekRev);
      profitData.push(Math.round(weekRev * 0.35 * 100) / 100);
    }
  }
  
  state.salesChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'ยอดขายรวม (บาท)',
          data: salesData,
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.15)',
          fill: true,
          tension: 0.4,
          borderWidth: 3,
          pointRadius: days <= 7 ? 5 : 4,
          pointHoverRadius: 7
        },
        {
          label: 'ประมาณการกำไร (บาท)',
          data: profitData,
          borderColor: '#f59e0b',
          backgroundColor: 'rgba(245, 158, 11, 0.1)',
          fill: true,
          tension: 0.4,
          borderWidth: 2,
          borderDash: [5, 5],
          pointRadius: days <= 7 ? 4 : 3,
          pointHoverRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        legend: {
          labels: { color: '#f8fafc', font: { family: 'Prompt', size: 12 } }
        },
        tooltip: {
          callbacks: {
            label: (ctx) => ` ${ctx.dataset.label}: ฿${ctx.parsed.y.toLocaleString('th-TH', { minimumFractionDigits: 2 })}`
          }
        }
      },
      scales: {
        x: {
          ticks: { color: '#94a3b8', font: { size: days > 7 ? 10 : 12 } },
          grid: { color: 'rgba(255,255,255,0.05)' }
        },
        y: {
          ticks: {
            color: '#94a3b8',
            callback: (val) => `฿${val.toLocaleString('th-TH')}`
          },
          grid: { color: 'rgba(255,255,255,0.05)' }
        }
      }
    }
  });
}

function renderTopSellers() {
  const container = document.getElementById('top-sellers-list');
  if (!container) return;
  
  // Aggregate item sales
  const salesMap = {};
  state.transactions.forEach(t => {
    t.items.forEach(item => {
      if (!salesMap[item.name]) {
        salesMap[item.name] = { qty: 0, revenue: 0 };
      }
      salesMap[item.name].qty += item.qty;
      salesMap[item.name].revenue += item.total;
    });
  });
  
  const sorted = Object.keys(salesMap)
    .map(name => ({ name: name, ...salesMap[name] }))
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 5);
    
  const maxRev = sorted.length > 0 ? sorted[0].revenue : 1;
  
  container.innerHTML = sorted.map((item, index) => `
    <div class="top-seller-item">
      <span class="seller-rank ${index === 0 ? 'gold' : ''}">${index + 1}</span>
      <div class="seller-info">
        <span class="seller-name">${item.name}</span>
        <div class="seller-bar-bg">
          <div class="seller-bar-fill" style="width: ${(item.revenue / maxRev * 100)}%;"></div>
        </div>
      </div>
      <div class="seller-val">
        <span>฿${item.revenue.toFixed(2)}</span>
        <div style="font-size: 0.72rem; color: var(--text-muted); font-weight: 400;">${item.qty} ชิ้น</div>
      </div>
    </div>
  `).join('');
}

function renderTransactionHistory() {
  const tbody = document.getElementById('transaction-history-body');
  if (!tbody) return;
  
  tbody.innerHTML = state.transactions.map(t => `
    <tr>
      <td class="bold-row" style="color: var(--color-primary);">#${t.id}</td>
      <td>${t.timestamp}</td>
      <td>${t.items.map(i => `${i.name} x${i.qty}`).join(', ')}</td>
      <td>${t.items.reduce((s, i) => s + i.qty, 0)} ชิ้น</td>
      <td class="bold-row" style="color: var(--color-accent);">฿${t.total.toFixed(2)}</td>
      <td>รับ ฿${t.cashReceived.toFixed(2)} (ทอน ฿${t.change.toFixed(2)})</td>
      <td>${t.cashier}</td>
      <td>
        <button class="btn btn-sm btn-outline-success" onclick='renderReceiptModal(${JSON.stringify(t)})'>
          <i class="fa-solid fa-receipt"></i> ดูใบเสร็จ
        </button>
      </td>
    </tr>
  `).join('');
}

/* ==========================================================================
   TOAST NOTIFICATIONS ENGINE
   ========================================================================== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = 'fa-circle-info';
  if (type === 'success') icon = 'fa-circle-check';
  if (type === 'error') icon = 'fa-triangle-exclamation';
  
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3500);
}
