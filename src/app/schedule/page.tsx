import Footer from "@/components/common/Footer";
export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-4xl mx-auto bg-card rounded-xl shadow-elevated p-6">
        <h1 className="text-3xl font-bold mb-6">
          Book a Product Consultation
        </h1>

        <iframe
          src="https://cal.com/dnyaneshwar-shinde-7hnky9"
          className="w-full h-[700px] rounded-lg border"
        />
      </div>
    </div>
    
  );
  
}
