import React, { useState } from 'react';
import { CookingClass } from '../types';

interface ContactViewProps {
  classes: CookingClass[];
}

export const ContactView: React.FC<ContactViewProps> = ({ classes }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedClass, setSelectedClass] = useState(classes[0]?.title || 'Artisanal Sourdough Mastery');
  const [preferredBatch, setPreferredBatch] = useState('Weekend Morning (9 AM - 1 PM)');
  const [dietaryNotes, setDietaryNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedMessage(true);
      setFullName('');
      setEmail('');
      setDietaryNotes('');
    }, 1200);
  };

  return (
    <div className="space-y-16 pb-20 animate-fadeIn">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase font-semibold text-[#8d4b00] tracking-widest block mb-3">
              Get in Touch
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#3E2723] font-bold mb-6 leading-tight">
              Let's Bake Something Beautiful Together
            </h1>
            <p className="text-[#77574d] text-base md:text-lg mb-10 leading-relaxed">
              Whether you're a curious beginner or a seasoned baker looking to refine your technique, our doors (and ovens) are always open. Reach out for course details, corporate workshops, or private sessions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/918587956987"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white px-7 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-transform hover:scale-105 active:scale-95 shadow-sm"
              >
                <span className="material-symbols-outlined text-xl">chat</span>
                WhatsApp Inquiry
              </a>
              <a
                href="tel:+918587956987"
                className="flex items-center gap-3 border-2 border-[#8d4b00] text-[#8d4b00] px-7 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#8d4b00] hover:text-white transition-all hover:scale-105 active:scale-95"
              >
                <span className="material-symbols-outlined text-xl">call</span>
                Call Us Now
              </a>
            </div>
          </div>

          <div className="relative h-[440px] rounded-2xl overflow-hidden shadow-lg border border-[#77574d]/10">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg8YXUuNXeSP46dYCcznQ6TCVmpZ99uLcMyIVtdeY_wpSmoOAUpUFigQ6bMv-liOakoo2ULAYMgFTO-HIF4qY9CrjmmTABr2LLtetvXdTskyRs-V1c6vDbS8gjbQjN5ZCIIC3de5qVQIxeDUwavN70xIiz1A184_QnWfjGKurOXhOmdW1eRIuBhqjxQMhZIZ7FclHrExV_Aoo41fvuxQb7xg_iog-46n9BEKmmPCySZDv1l5lfjMmPZiP-gi22aSfr8awgbD7ag9M"
              alt="Bakery kitchen studio golden hour"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Form & Hours Bento Grid */}
      <section className="bg-[#fff1e9] py-16 px-6 md:px-16 border-y border-[#77574d]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Registration Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-xs border border-[#77574d]/10">
            <h3 className="font-serif text-3xl text-[#3E2723] font-bold mb-2">Class Registration</h3>
            <p className="text-[#77574d] text-sm mb-8">
              Fill out the form below and we'll contact you to finalize your spot.
            </p>

            {submittedMessage ? (
              <div className="p-8 bg-green-50 border border-green-200 rounded-2xl text-center space-y-3">
                <span className="material-symbols-outlined text-5xl text-green-700">task_alt</span>
                <h4 className="font-serif text-2xl text-green-900 font-bold">Request Received!</h4>
                <p className="text-sm text-green-800">
                  Thank you! Our studio team will reach out via WhatsApp or email within 2 hours to confirm batch availability.
                </p>
                <button
                  onClick={() => setSubmittedMessage(false)}
                  className="mt-4 bg-[#3E2723] text-white px-6 py-2.5 rounded-xl text-xs uppercase font-bold tracking-wider"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-semibold text-[#3E2723]">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#F9F6F0] border border-[#77574d]/20 rounded-xl p-4 text-sm text-[#3E2723] focus:outline-none focus:border-[#8d4b00]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-semibold text-[#3E2723]">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#F9F6F0] border border-[#77574d]/20 rounded-xl p-4 text-sm text-[#3E2723] focus:outline-none focus:border-[#8d4b00]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-semibold text-[#3E2723]">Select Class</label>
                    <select
                      value={selectedClass}
                      onChange={(e) => setSelectedClass(e.target.value)}
                      className="w-full bg-[#F9F6F0] border border-[#77574d]/20 rounded-xl p-4 text-sm text-[#3E2723] focus:outline-none focus:border-[#8d4b00]"
                    >
                      {classes.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title} (₹{c.price.toLocaleString('en-IN')})
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-semibold text-[#3E2723]">Preferred Batch</label>
                    <select
                      value={preferredBatch}
                      onChange={(e) => setPreferredBatch(e.target.value)}
                      className="w-full bg-[#F9F6F0] border border-[#77574d]/20 rounded-xl p-4 text-sm text-[#3E2723] focus:outline-none focus:border-[#8d4b00]"
                    >
                      <option>Weekend Morning (9 AM - 1 PM)</option>
                      <option>Weekend Evening (3 PM - 7 PM)</option>
                      <option>Weekday Intensive (Tue - Thu)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase font-semibold text-[#3E2723]">
                    Dietary Restrictions / Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about any allergies or specific goals you have..."
                    value={dietaryNotes}
                    onChange={(e) => setDietaryNotes(e.target.value)}
                    className="w-full bg-[#F9F6F0] border border-[#77574d]/20 rounded-xl p-4 text-sm text-[#3E2723] focus:outline-none focus:border-[#8d4b00]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#3E2723] text-white font-bold py-4 rounded-xl hover:bg-opacity-95 transition-all shadow-md active:scale-[0.99] text-xs uppercase tracking-widest cursor-pointer"
                >
                  {isSubmitting ? 'Submitting Registration...' : 'Submit Registration Request'}
                </button>
              </form>
            )}
          </div>

          {/* Business Hours & Contact Info */}
          <div className="space-y-6">
            <div className="bg-[#F2E8D5] p-8 rounded-2xl border border-[#77574d]/10">
              <h4 className="font-serif text-2xl text-[#3E2723] font-semibold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#8d4b00]">schedule</span>
                Working Hours
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between border-b border-[#77574d]/10 pb-2">
                  <span className="text-[#77574d]">Monday - Tuesday</span>
                  <span className="font-bold text-[#3E2723]">09:00 AM - 09:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-[#77574d]/10 pb-2">
                  <span className="text-[#77574d]">Wednesday</span>
                  <span className="font-bold text-[#3E2723]">09:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-[#77574d]/10 pb-2">
                  <span className="text-[#77574d]">Thursday - Sunday</span>
                  <span className="font-bold text-[#3E2723]">09:00 AM - 05:00 PM</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-white/60 rounded-xl italic text-[#77574d] text-xs leading-relaxed">
                * Note: Special workshops and private events may happen outside regular hours.
              </div>
            </div>

            <div className="bg-[#3E2723] text-[#F2E8D5] p-8 rounded-2xl border border-[#8d4b00]/20 shadow-md">
              <h4 className="font-serif text-2xl text-[#F59E0B] font-semibold mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined">location_on</span>
                Visit Us
              </h4>
              <p className="text-sm leading-relaxed mb-4 opacity-90">
                <strong className="text-white block font-semibold text-base mb-1">The Nikki's Cooking Classes</strong>
                Near Maharaja Agrasen, Sundaram Khand,<br />
                Sector 19, Vasundhara, Ghaziabad,<br />
                Uttar Pradesh 201012, India
              </p>
              <p className="text-sm opacity-90 mb-4">
                <strong className="text-white">Email:</strong> hello@nikkiscooking.com<br />
                <strong className="text-white">Phone:</strong> +91 85879 56987
              </p>
              <a
                href="https://www.google.com/maps/place/The+Nikki's+Cooking+Classes/@28.65139,77.35341,15z/data=!4m6!3m5!1s0x390cfac70c00006b:0x9f219c3591ef9fe3!8m2!3d28.65139!4d77.35341!16s%2Fg%2F11g6xx5zw2"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#F59E0B] hover:underline font-bold uppercase tracking-wider"
              >
                <span className="material-symbols-outlined text-base">directions</span>
                Get Directions on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] relative w-full overflow-hidden shadow-inner border-y border-[#77574d]/10 bg-[#f8f5f0]">
        <iframe
          title="The Nikki's Cooking Classes Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.077271810488!2d77.350831!3d28.65139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfac70c00006b%3A0x9f219c3591ef9fe3!2sThe%20Nikki%27s%20Cooking%20Classes!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
        <div className="absolute bottom-4 right-4 z-10 flex gap-2">
          <a
            href="https://www.google.com/maps/place/The+Nikki's+Cooking+Classes/@28.65139,77.35341,15z/data=!4m6!3m5!1s0x390cfac70c00006b:0x9f219c3591ef9fe3!8m2!3d28.65139!4d77.35341!16s%2Fg%2F11g6xx5zw2"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-[#3E2723] text-[#F59E0B] px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#8d4b00] hover:text-white transition-all border border-[#F59E0B]/30"
          >
            <span className="material-symbols-outlined text-base">directions</span>
            Get Directions
          </a>
        </div>
      </section>
    </div>
  );
};
