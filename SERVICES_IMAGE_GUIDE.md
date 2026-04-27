# 📸 How to Add Services Images

## Step 1: Crop the Images

I've provided 8 service images that need to be cropped. Here's how to do it:

### **Recommended Crop Specs:**
- **Size**: 400×320px (4:3 aspect ratio)
- **Format**: WebP or JPG (optimized for web)
- **Quality**: 85-90% JPG quality

### **Tools You Can Use:**

**Option A: Free Online Tools**
- [Photopea.com](https://www.photopea.com/) — Full editor (no login needed)
- [Canva.com](https://www.canva.com/crop-image/) — Simple crop tool
- [Pixlr.com](https://pixlr.com/x/) — Quick image editor
- [TinyPNG.com](https://tinypng.com/) — Compress after cropping

**Option B: Desktop Tools**
- **macOS**: Preview (built-in) - Open image → Tools → Crop
- **Windows**: Paint (built-in) or Photoshop
- **All platforms**: GIMP (free, [gimp.org](https://www.gimp.org/))

**Option C: Command Line (Advanced)**
```bash
# Using ImageMagick (install via: brew install imagemagick)
convert input.jpg -crop 400x320+0+0 +repage output.jpg

# Or using FFmpeg
ffmpeg -i input.jpg -vf "crop=400:320:0:0" output.jpg
```

---

## Step 2: Save Images to Project

### **Directory Structure:**
```
src/
└── images/
    └── services/
        ├── shifa-cancer-center.jpg
        ├── organ-transplant.jpg
        ├── lab-automation.jpg
        ├── shifa-heart-center.jpg
        ├── executive-clinics.jpg
        ├── lithotripsy.jpg
        ├── sunday-opd-clinics.jpg
        └── ambulance-services.jpg
```

### **Create the Folder:**
```bash
mkdir -p src/images/services
```

### **Save Each Cropped Image:**
1. **SHIFA CANCER CENTER** → `src/images/services/shifa-cancer-center.jpg`
2. **ORGAN TRANSPLANT** → `src/images/services/organ-transplant.jpg`
3. **TOTAL LAB AUTOMATION** → `src/images/services/lab-automation.jpg`
4. **SHIFA HEART CENTER** → `src/images/services/shifa-heart-center.jpg`
5. **EXECUTIVE CLINICS** → `src/images/services/executive-clinics.jpg`
6. **LITHOTRIPSY** → `src/images/services/lithotripsy.jpg`
7. **SUNDAY OPD CLINICS** → `src/images/services/sunday-opd-clinics.jpg`
8. **SHIFA AMBULANCE SERVICES** → `src/images/services/ambulance-services.jpg`

---

## Step 3: Add Component to Your Pages

The component is ready at: **`src/components/services/ServicesGrid.tsx`**

### **Add to Your Home Page:**

Edit `src/app/page.tsx`:

```tsx
import { ServicesGrid } from "@/components/services/ServicesGrid";

export default function Home() {
  return (
    <main>
      {/* Your other sections */}
      
      {/* Add this section */}
      <ServicesGrid />
      
      {/* More sections */}
    </main>
  );
}
```

### **Or Create a Dedicated Page:**

Create `src/app/services/page.tsx`:

```tsx
import { ServicesGrid } from "@/components/services/ServicesGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Centers | Shifa International Hospitals",
  description: "Explore our world-class medical services and specialized centers offering comprehensive healthcare solutions.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesGrid />
    </main>
  );
}
```

---

## Step 4: View Your Services Section

Start the dev server:
```bash
npm run dev
```

Then visit:
- **Home page**: http://localhost:3000 (if added to home)
- **Services page**: http://localhost:3000/services (if created as separate page)

---

## Image Cropping Guide (Visual)

For each image, crop to show:

### **SHIFA CANCER CENTER**
- Focus: Doctor-patient consultation room
- Crop area: Center on the doctor and patient discussion

### **ORGAN TRANSPLANT**
- Focus: Surgical operation in progress
- Crop area: Center on the surgical instruments and team

### **TOTAL LAB AUTOMATION**
- Focus: Lab equipment and technicians
- Crop area: Center on the automated machines

### **SHIFA HEART CENTER**
- Focus: Cardiologist with patient monitoring equipment
- Crop area: Center on the doctor and cardiac monitor

### **EXECUTIVE CLINICS**
- Focus: Doctor-patient consultation in premium setting
- Crop area: Center on comfortable consultation room

### **LITHOTRIPSY**
- Focus: Equipment or procedure illustration
- Crop area: Center on the lithotripsy machine

### **SUNDAY OPD CLINICS**
- Focus: Patients waiting/in consultation area
- Crop area: Center on the OPD clinic environment

### **SHIFA AMBULANCE SERVICES**
- Focus: Modern ambulance with paramedic
- Crop area: Center on the ambulance and professional staff

---

## Features of the Component

✅ **Responsive Grid**: 1 col (mobile) → 2 cols (tablet) → 4 cols (desktop)  
✅ **Image Hover Effect**: Smooth zoom-in on hover  
✅ **Animated Entrance**: Staggered fade-in on scroll  
✅ **Dark Mode Ready**: Uses CSS variables  
✅ **SEO Optimized**: Proper alt text for images  
✅ **Performance**: Uses Next.js Image component for optimization  
✅ **Link Integration**: Links to relevant specialty pages  
✅ **Special Offers Banner**: Featured discount section at bottom  

---

## File I Created

**`src/components/services/ServicesGrid.tsx`** (180 lines)
- Full component with animations
- Image lazy loading
- Responsive design
- Internal linking to specialty pages
- Special offers banner

---

## What You'll Get

Once images are in place:

```
┌─────────────────────────────────────┐
│  Our Services & Centers             │
├─────────────────────────────────────┤
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ │
│ │Image │ │Image │ │Image │ │Image │ │
│ │      │ │      │ │      │ │      │ │
│ │Title │ │Title │ │Title │ │Title │ │
│ │Desc  │ │Desc  │ │Desc  │ │Desc  │ │
│ └──────┘ └──────┘ └──────┘ └──────┘ │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ │
│ │Image │ │Image │ │Image │ │Image │ │
│ │      │ │      │ │      │ │      │ │
│ │Title │ │Title │ │Title │ │Title │ │
│ │Desc  │ │Desc  │ │Desc  │ │Desc  │ │
│ └──────┘ └──────┘ └──────┘ └──────┘ │
├─────────────────────────────────────┤
│   Special Discounts Banner          │
└─────────────────────────────────────┘
```

---

## Need Help Cropping?

If you want to crop the images automatically:

### **Using Python (requires PIL/Pillow):**
```python
from PIL import Image

# Open and crop image
img = Image.open('original.jpg')
cropped = img.crop((0, 0, 400, 320))  # (left, top, right, bottom)
cropped.save('cropped.jpg', quality=85)
```

### **Using Node.js (requires sharp):**
```javascript
const sharp = require('sharp');

sharp('original.jpg')
  .resize(400, 320, { fit: 'cover' })
  .toFile('cropped.jpg');
```

---

**Once images are added, the component is production-ready!** 🚀
