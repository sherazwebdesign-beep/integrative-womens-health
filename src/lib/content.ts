export type Group = { title: string; items: string[] };
export type Section = { slug: string; name: string; short: string; intro: string; badge?: string; groups: Group[]; compare?: boolean };

export const services: Section[] = [
  {
    slug: "functional-longevity-medicine", name: "Functional & Longevity Medicine", short: "Hormones, gut, heart, bone & advanced labs.",
    intro: "Root-cause care that connects your symptoms, history, labs, and goals into one personalized plan.",
    groups: [
      { title: "Hormone Optimization", items: [] }, { title: "Gut Health", items: [] }, { title: "Autoimmune & Inflammatory Health", items: [] },
      { title: "Sexual Health", items: [] }, { title: "Heart Health, Cardiometabolic Wellness & Longevity", items: [] }, { title: "Bone Health", items: [] },
      { title: "Lab Testing Panels", items: ["Hormone", "Cardiometabolic / Energy", "Gut Health", "Bone Health"] },
    ],
  },
  {
    slug: "regenerative-aesthetic", name: "Regenerative & Aesthetic Treatments", short: "PRP, exosomes, copper peptides & anti-aging.",
    intro: "Restorative treatments that support your body's natural renewal for hair, skin, and healthy aging.",
    groups: [
      { title: "Hair Regeneration", items: ["Microneedling with PRP", "Add-on: Juvosonic with Exosomes / GHK-Copper"] },
      { title: "Facial Regeneration / Vampire Microneedling", items: ["With PRP", "With Juvosonic Exosomes", "With GHK-Cu Copper Peptides"] },
      { title: "Neurotoxin Injections & Anti-aging Services", items: [] },
    ],
  },
  {
    slug: "longevity-membership", name: "Longevity & Functional Medicine Membership", short: "A 12-month precision health partnership.",
    intro: "Assess, understand, optimize, and reassess your health with the Ultimate Longevity Membership.",
    groups: ["Annual Health Assessment", "Biomarker & Health Metric Tracking", "Quarterly Clinical Reviews", "Prescription & Nutraceutical Review", "Four Lifestyle Pillars", "IV Therapy or Mindfulness"].map((t) => ({ title: t, items: [] })),
  },
  {
    slug: "iv-nutrient-therapy", name: "IV Nutrient Therapy", short: "Restore, immune, jet lag, hangover & aging.",
    intro: "Nutrient and hydration infusions tailored to how you feel and what you need.",
    groups: ["Restore + Recover", "Immune Support", "Jet Lag Recovery", "Hangover Relief", "Healthy Aging"].map((t) => ({ title: t, items: [] })),
  },
  {
    slug: "gynecology", name: "Gynecology", short: "Insurance-based gynecologic care.", badge: "Insurance-Based Gynecologic Care",
    intro: "Traditional women's health care, billed through your insurance.",
    groups: ["Annual Exams & Pap/HPV Screening", "Breast Care", "STI Screening", "Vaginitis", "PCOS", "Abnormal Bleeding"].map((t) => ({ title: t, items: [] })),
  },
];

export const resources: Section[] = [
  {
    slug: "functional-medicine", name: "Functional Medicine", short: "Hormones, menopause, gut & more.", compare: true,
    intro: "Educational videos and guides to help you understand functional medicine before your visit.",
    groups: ["Hormones", "Menopause", "Gut Health", "Cardiometabolic Health", "Autoimmune Health", "Sexual Health", "Bone Health"].map((t) => ({ title: t, items: [] })),
  },
  {
    slug: "regenerative-medicine", name: "Regenerative Medicine", short: "PRP, exosomes & microneedling explainers.",
    intro: "Pre-consultation treatment explainers so you know what to expect.",
    groups: ["PRP", "Juvosonic Exosomes", "GHK-Cu Copper Peptides", "Hair Restoration", "Vampire Microneedling"].map((t) => ({ title: t, items: [] })),
  },
  {
    slug: "longevity", name: "Longevity & Functional Medicine", short: "Healthy aging, prevention & lifestyle.",
    intro: "Educational modules on healthier aging, prevention, and lasting habits.",
    groups: ["Healthy Aging", "Cardiovascular Prevention", "Nutrition", "Movement & Strength", "Sleep & Recovery", "Mindfulness"].map((t) => ({ title: t, items: [] })),
  },
  {
    slug: "iv-therapy", name: "IV Therapy", short: "Ingredients, prep, FAQs & aftercare.",
    intro: "Everything to know before and after your infusion.",
    groups: ["IV Ingredients", "How to Prepare", "IV FAQs", "Post-Infusion Aftercare"].map((t) => ({ title: t, items: [] })),
  },
  {
    slug: "gynecology", name: "Gynecology", short: "Pap/HPV, vaginal health, PCOS & cycles.",
    intro: "Patient guides for common gynecologic care and questions.",
    groups: ["Pap/HPV", "Vaginal Health", "PCOS", "Menstrual Health"].map((t) => ({ title: t, items: [] })),
  },
  {
    slug: "faqs-forms", name: "FAQs & Forms", short: "Forms, insurance, labs & membership FAQs.",
    intro: "Forms and answers to the questions we hear most. Your patient portal is one click away.",
    groups: [
      { title: "New Patient Forms", items: ["Completed securely through the OptiMantra patient portal after booking."] },
      { title: "Insurance FAQ", items: ["Gynecology services are billed through your insurance.", "Functional, regenerative, IV, and membership services are self-pay."] },
      { title: "Lab Testing Instructions", items: ["Some panels require fasting — we'll tell you which before your draw.", "Hydrate well and bring a list of medications and supplements."] },
      { title: "Membership FAQ", items: ["Ultimate Longevity is a 12-month precision health membership. See the membership page for pricing and full details.", "Includes the annual assessment and specified labs, four quarterly reviews totaling four provider hours, medication review, and lifestyle reviews.", "Choose three eligible IV nutrient sessions OR three guided mindfulness sessions annually. Optional specialized tests may cost extra."] },
    ],
  },
];
