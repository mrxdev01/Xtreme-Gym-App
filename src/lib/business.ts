// Web3Forms access key — replace with your own from https://web3forms.com (free, no signup needed beyond entering your email).
// Submissions from the contact form will be emailed to the email you used to generate this key.
export const WEB3FORMS_ACCESS_KEY = "b37713ff-2f48-4eec-b800-49e634037483";

export const BUSINESS = {
  name: "Xtreme Fitness Gym",
  shortName: "XTREME",
  phone: "+91 9782089774",
  phoneHref: "tel:+919782089774",
  whatsapp: "+91 9782089774",
  whatsappHref: "https://wa.me/919782089774?text=Hi%2C%20I%27m%20interested%20in%20joining%20Xtreme%20Fitness%20Gym",
  email: "info@xtremefitnessgym.in",
  address: {
    line1: "Vatsalya-II, NRI Circle",
    line2: "Sector 19, Pratap Nagar",
    city: "Jaipur",
    state: "Rajasthan",
    postal: "302033",
    country: "India",
    full: "Vatsalya-II, NRI Circle, Sector 19, Pratap Nagar, Jaipur, Rajasthan 302033",
  },
  mapsUrl: "https://maps.app.goo.gl/37VbL3am2qDvNttk9",
  mapEmbed:
    "https://www.google.com/maps?q=Vatsalya-II,+NRI+Circle,+Sector+19,+Pratap+Nagar,+Jaipur,+Rajasthan+302033&output=embed",
  rating: { value: 4.8, count: 188 },
  hours: "Mo-Su 05:00-22:30",
  area: "Pratap Nagar, Jaipur",
  tagline: "Best Gym in Pratap Nagar, Jaipur",
  plans: [
    { name: "Monthly", price: 2000, cadence: "/ month", best: false },
    { name: "Quarterly", price: 5000, cadence: "/ 3 months", best: false },
    { name: "Half Yearly", price: 8000, cadence: "/ 6 months", best: true },
    { name: "Yearly", price: 12000, cadence: "/ year", best: false },
  ],
} as const;
