import { doctors as seedDoctors } from "@/lib/medical-data";
import type { DoctorRecord } from "@/types/shifa";

const parseAvailability = (value: string): string[] => {
  if (value.toLowerCase().includes("mon") && value.toLowerCase().includes("fri") && value.toLowerCase().includes("to")) {
    return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  }

  if (value.toLowerCase().includes("mon") && value.toLowerCase().includes("wed") && value.toLowerCase().includes("fri")) {
    return ["Monday", "Wednesday", "Friday"];
  }

  if (value.toLowerCase().includes("tue") && value.toLowerCase().includes("sat")) {
    return ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  }

  if (value.toLowerCase().includes("mon") && value.toLowerCase().includes("thu")) {
    return ["Monday", "Tuesday", "Wednesday", "Thursday"];
  }

  return [];
};

const genderBySlug: Record<string, "male" | "female"> = {
  "dr-ayesha-khan": "female",
  "dr-umer-farooq": "male",
  "dr-sara-naveed": "female",
  "dr-hina-ashraf": "female",
};

export const specialtyOptions = [
  "Anesthesiology",
  "Audiology",
  "Cardiology",
  "Cardiac Surgery",
  "Dentistry & Orthodontics",
  "Dermatology",
  "Emergency Medicine",
  "Endocrinology & Diabetes",
  "ENT",
  "Gastroenterology & Hepatology",
  "General Surgery",
  "Infectious Diseases",
  "Internal Medicine",
  "Nephrology",
  "Neurology",
  "Neurosurgery",
  "Obstetrics & Gynaecology",
  "Medical Oncology",
  "Radiation Oncology",
  "Ophthalmology",
  "Orthopaedics",
  "Paediatrics",
  "Pathology",
  "Physical Medicine & Rehabilitation",
  "Plastic Surgery",
  "Psychiatry",
  "Pulmonology & Critical Care",
  "Radiology & Imaging",
  "Rheumatology",
  "Urology",
  "Liver Transplant",
  "Bone Marrow Transplant",
  "Kidney Transplant",
  "Corneal Transplant",
];

export const doctorDirectory: DoctorRecord[] = seedDoctors.map((doctor, index) => ({
  id: `doc-${index + 1}`,
  slug: doctor.slug,
  name: doctor.name,
  title: doctor.name.startsWith("Dr.") ? "Dr." : "Consultant",
  specialty: doctor.specialty,
  departmentSlug: doctor.departmentSlug,
  qualifications: doctor.qualifications,
  experience: doctor.experience,
  gender: genderBySlug[doctor.slug] ?? "male",
  languages: ["English", "Urdu"],
  location: "islamabad",
  availability: parseAvailability(doctor.availability),
  image: doctor.image,
  profileUrl: `/doctors/${doctor.slug}`,
  bio: doctor.summary,
  procedures: doctor.procedures,
}));
