import React, { useState, useEffect } from 'react';
import { CookingClass } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  classes: CookingClass[];
  initialClassId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  classes,
  initialClassId
}) => {
  const [selectedClassId, setSelectedClassId] = useState<string>(
    initialClassId || classes[0]?.id || ''
  );
  const [selectedBatch, setSelectedBatch] = useState<string>('');
  const [attendees, setAttendees] = useState<number>(1);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [dietaryNotes, setDietaryNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingCode, setBookingCode] = useState<string>('');

  useEffect(() => {
    if (initialClassId) {
      setSelectedClassId(initialClassId);
    } else if (classes.length > 0 && !selectedClassId) {
      setSelectedClassId(classes[0].id);
    }
  }, [initialClassId, classes]);

  const currentClass = classes.find((c) => c.id === selectedClassId) || classes[0];

  useEffect(() => {
    if (currentClass && currentClass.batchOptions?.length > 0) {
      setSelectedBatch(currentClass.batchOptions[0]);
    }
  }, [selectedClassId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    const randomCode = 'NIKKI-' + Math.floor(100000 + Math.random() * 900000);
    setBookingCode(randomCode);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setDietaryNotes('');
    onClose();
  };

  const totalPrice = currentClass ? currentClass.price * attendees : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="bg-[#F9F6F0] rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 border border-[#77574d]/20 shadow-2xl relative my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#3E2723] hover:text-[#8d4b00] p-1 rounded-full transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#8d4b00] bg-[#F2E8D5] px-3 py-1 rounded-full">
                Boutique Workshop Registration
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-[#3E2723] font-semibold mt-2">
                Reserve Your Kitchen Station
              </h2>
              <p className="text-[#77574d] text-xs md:text-sm mt-1">
                Intimate small-batch classes (capped at 8 students).
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Class */}
              <div>
                <label className="block text-xs uppercase font-semibold text-[#3E2723] mb-1">
                  Select Masterclass
                </label>
                <select
                  value={selectedClassId}
                  onChange={(e) => setSelectedClassId(e.target.value)}
                  className="w-full bg-[#F2E8D5] border border-[#77574d]/20 rounded-xl p-3 text-sm font-medium text-[#3E2723] focus:ring-2 focus:ring-[#8d4b00] outline-none"
                >
                  {classes.map((cls) => (
                    <option key={cls.id} value={cls.id}>
                      {cls.title} — ₹{cls.price.toLocaleString('en-IN')} ({cls.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Batch */}
              {currentClass && currentClass.batchOptions && (
                <div>
                  <label className="block text-xs uppercase font-semibold text-[#3E2723] mb-1">
                    Preferred Batch Schedule
                  </label>
                  <select
                    value={selectedBatch}
                    onChange={(e) => setSelectedBatch(e.target.value)}
                    className="w-full bg-[#F2E8D5] border border-[#77574d]/20 rounded-xl p-3 text-sm font-medium text-[#3E2723] focus:ring-2 focus:ring-[#8d4b00] outline-none"
                  >
                    {currentClass.batchOptions.map((batch, i) => (
                      <option key={i} value={batch}>
                        {batch}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Number of Seats */}
              <div>
                <label className="block text-xs uppercase font-semibold text-[#3E2723] mb-1">
                  Number of Attendees
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setAttendees(Math.max(1, attendees - 1))}
                    className="w-10 h-10 rounded-xl bg-[#F2E8D5] border border-[#77574d]/20 font-bold text-lg text-[#3E2723] hover:bg-[#8d4b00] hover:text-white transition-colors"
                  >
                    -
                  </button>
                  <span className="font-bold text-lg text-[#3E2723] w-8 text-center">{attendees}</span>
                  <button
                    type="button"
                    onClick={() => setAttendees(Math.min(4, attendees + 1))}
                    className="w-10 h-10 rounded-xl bg-[#F2E8D5] border border-[#77574d]/20 font-bold text-lg text-[#3E2723] hover:bg-[#8d4b00] hover:text-white transition-colors"
                  >
                    +
                  </button>
                  <span className="text-xs text-[#77574d] ml-2 font-medium">
                    (Max 4 seats per booking)
                  </span>
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs uppercase font-semibold text-[#3E2723] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#F2E8D5] border border-[#77574d]/20 rounded-xl p-3 text-sm text-[#3E2723] focus:ring-2 focus:ring-[#8d4b00] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-semibold text-[#3E2723] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#F2E8D5] border border-[#77574d]/20 rounded-xl p-3 text-sm text-[#3E2723] focus:ring-2 focus:ring-[#8d4b00] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold text-[#3E2723] mb-1">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#F2E8D5] border border-[#77574d]/20 rounded-xl p-3 text-sm text-[#3E2723] focus:ring-2 focus:ring-[#8d4b00] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold text-[#3E2723] mb-1">
                  Dietary Restrictions / Special Requests
                </label>
                <textarea
                  rows={2}
                  placeholder="E.g., Eggless preference, nut allergies, sourdough starter goals..."
                  value={dietaryNotes}
                  onChange={(e) => setDietaryNotes(e.target.value)}
                  className="w-full bg-[#F2E8D5] border border-[#77574d]/20 rounded-xl p-3 text-sm text-[#3E2723] focus:ring-2 focus:ring-[#8d4b00] outline-none"
                />
              </div>

              {/* Pricing Summary */}
              <div className="p-4 bg-[#fff1e9] rounded-xl border border-[#8d4b00]/15 flex items-center justify-between mt-4">
                <div>
                  <span className="text-xs text-[#77574d] block font-medium">Total Investment</span>
                  <span className="text-2xl font-bold text-[#8d4b00]">₹{totalPrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="text-right text-xs text-[#77574d]">
                  <span>{attendees} x ₹{currentClass?.price?.toLocaleString('en-IN')}</span>
                  <span className="block text-[10px] text-green-700 font-semibold">
                    ✓ All apron, tools & baked goods included
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#3E2723] text-white font-bold py-4 rounded-xl hover:bg-opacity-95 transition-all shadow-md active:scale-95 text-xs uppercase tracking-widest mt-2 cursor-pointer flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">task_alt</span>
                Confirm Seat Registration (₹{totalPrice.toLocaleString('en-IN')})
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation View */
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 bg-green-100 text-green-800 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-[#8d4b00] bg-[#F2E8D5] px-3 py-1 rounded-full">
              Registration Request Confirmed
            </span>

            <h2 className="font-serif text-3xl text-[#3E2723] font-semibold">
              You're All Set, {fullName}!
            </h2>

            <p className="text-sm text-[#77574d] max-w-md mx-auto">
              We have reserved your station for <strong className="text-[#3E2723]">{currentClass?.title}</strong>.
            </p>

            <div className="bg-[#F2E8D5] p-5 rounded-2xl border border-[#77574d]/15 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between border-b border-[#77574d]/10 pb-2">
                <span className="text-[#77574d]">Booking Code:</span>
                <span className="font-mono font-bold text-[#3E2723]">{bookingCode}</span>
              </div>
              <div className="flex justify-between border-b border-[#77574d]/10 pb-2">
                <span className="text-[#77574d]">Batch:</span>
                <span className="font-semibold text-[#3E2723]">{selectedBatch}</span>
              </div>
              <div className="flex justify-between border-b border-[#77574d]/10 pb-2">
                <span className="text-[#77574d]">Attendees:</span>
                <span className="font-semibold text-[#3E2723]">{attendees} Person(s)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#77574d]">Studio Location:</span>
                <span className="font-semibold text-[#3E2723]">Sector 12, Vasundhara, Ghaziabad</span>
              </div>
            </div>

            <p className="text-xs text-[#77574d] italic">
              A confirmation email has been dispatched to <strong>{email}</strong> with kitchen guidelines & parking instructions.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/918587956987?text=Hi%20The%20Nikki's%20Cooking%20Classes!%20I%20just%20booked%20${encodeURIComponent(
                  currentClass?.title || ''
                )}%20(Code:%20${bookingCode}).`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                Ask Questions on WhatsApp
              </a>
              <button
                onClick={handleReset}
                className="bg-[#3E2723] text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider hover:bg-opacity-90 transition-opacity"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
