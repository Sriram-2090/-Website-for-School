import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, CheckCircle, XCircle, DollarSign, Calendar, User, Mail, Phone, Search, ArrowRight, Edit2, UserCheck } from 'lucide-react';
import Section from '../ui/Section';
import { Button } from '../ui/Button';
import { scrollReveal } from '../../utils/animations';
import { lookupStudentByMobile } from '../../utils/studentApi';

export const FeePayment = () => {
  // Multi-step state
  const [currentStep, setCurrentStep] = useState(1); // 1: Lookup, 2: Select Child (if multiple), 3: Confirm, 4: Payment
  const [mobileNumber, setMobileNumber] = useState('');
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isLookingUp, setIsLookingUp] = useState(false);
  const [lookupError, setLookupError] = useState('');
  
  // Form data
  const [formData, setFormData] = useState({
    studentName: '',
    name: '',
    email: '',
    phone: '',
    program: '',
    amount: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  const programs = [
    { name: 'Playgroup (1.5 - 2.5 years)', fee: 25000 },
    { name: 'Nursery (2.5 - 3.5 years)', fee: 28000 },
    { name: 'LKG (3.5 - 4.5 years)', fee: 32000 },
    { name: 'UKG (4.5 - 6 years)', fee: 35000 }
  ];

  // Fix scroll blocking when payment modal is dismissed
  useEffect(() => {
    // Razorpay sometimes locks body scroll, ensure it's always scrollable
    if (showSuccess || showError) {
      // Small delay to let Razorpay cleanup first
      const timer = setTimeout(() => {
        document.body.style.overflow = 'unset';
        document.body.style.paddingRight = '0px';
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [showSuccess, showError]);


  // Handle mobile number lookup
  const handleLookup = async () => {
    if (!/^\d{10}$/.test(mobileNumber)) {
      setLookupError('Please enter a valid 10-digit mobile number');
      return;
    }

    setIsLookingUp(true);
    setLookupError('');

    try {
      const result = await lookupStudentByMobile(mobileNumber);
      setStudents(result.students);

      if (result.count === 1) {
        // Single child - auto-fill and go to confirmation
        fillFormData(result.students[0]);
        setCurrentStep(3);
      } else {
        // Multiple children - show selection
        setCurrentStep(2);
      }
    } catch (error) {
      setLookupError(error.message || 'Student not found. You can enter details manually.');
      // Allow manual entry
      setCurrentStep(3);
      setFormData({
        ...formData,
        phone: mobileNumber
      });
    } finally {
      setIsLookingUp(false);
    }
  };

  // Fill form with student data
  const fillFormData = (student) => {
    setSelectedStudent(student);
    setFormData({
      studentName: student.student_name,
      name: student.parent_name,
      email: student.parent_email,
      phone: student.mobile_number,
      program: student.program,
      amount: student.fee_amount
    });
  };

  // Handle child selection (for multiple children)
  const handleChildSelect = (student) => {
    fillFormData(student);
    setCurrentStep(3);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleProgramChange = (e) => {
    const selectedProgram = programs.find(p => p.name === e.target.value);
    setFormData({
      ...formData,
      program: e.target.value,
      amount: selectedProgram ? selectedProgram.fee : ''
    });
  };

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.program) {
      alert('Please fill all required fields');
      return;
    }

    const res = await loadRazorpay();

    if (!res) {
      alert('Razorpay SDK failed to load. Please check your internet connection.');
      return;
    }

    // Razorpay options
    const options = {
      key: 'rzp_test_1234567890', // Test key - replace with your actual key
      amount: formData.amount * 100, // Amount in paise
      currency: 'INR',
      name: 'Little Learners Montessori',
      description: `Tuition Fee - ${formData.program}${formData.studentName ? ` (${formData.studentName})` : ''}`,
      image: '/logo.png',
      handler: function (response) {
        setTransactionId(response.razorpay_payment_id);
        setShowSuccess(true);
        // Reset to step 1
        resetForm();
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone
      },
      notes: {
        program: formData.program,
        student_name: formData.studentName
      },
      theme: {
        color: '#c28f7d'
      },
      modal: {
        ondismiss: function() {
          setShowError(true);
          setTimeout(() => setShowError(false), 3000);
        }
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const resetForm = () => {
    setCurrentStep(1);
    setMobileNumber('');
    setStudents([]);
    setSelectedStudent(null);
    setFormData({
      studentName: '',
      name: '',
      email: '',
      phone: '',
      program: '',
      amount: ''
    });
    setLookupError('');
  };

  const startOver = () => {
    resetForm();
  };

  return (
    <Section id="fees" background="beige">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            {...scrollReveal}
            className="inline-block px-4 py-2 bg-montessori-terracotta-100 rounded-full text-montessori-terracotta-700 font-semibold text-sm mb-4"
          >
            Tuition Fees
          </motion.div>
          <motion.h2
            {...scrollReveal}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-montessori-beige-900 mb-6"
          >
            Pay Tuition Fees Online
          </motion.h2>
          <motion.p
            {...scrollReveal}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-montessori-beige-700 leading-relaxed"
          >
            Secure and convenient online payment for your child's educational journey.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Fee Structure */}
          <motion.div
            {...scrollReveal}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-serif font-bold text-montessori-beige-900 mb-6">
              Annual Fee Structure
            </h3>
            <div className="space-y-4">
              {programs.map((program, index) => (
                <motion.div
                  key={program.name}
                  {...scrollReveal}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-2 border-montessori-beige-200"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-montessori-beige-900 mb-1">
                        {program.name.split(' (')[0]}
                      </h4>
                      <p className="text-sm text-montessori-beige-600">
                        ({program.name.split('(')[1]?.replace(')', '')})
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-montessori-terracotta-600">
                        ₹{program.fee.toLocaleString('en-IN')}
                      </p>
                      <p className="text-xs text-montessori-beige-600">per year</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              {...scrollReveal}
              transition={{ delay: 0.9 }}
              className="mt-6 p-4 bg-montessori-sage-100 rounded-xl"
            >
              <p className="text-sm text-montessori-sage-800">
                <strong>Note:</strong> Fees include learning materials, activities, and snacks. 
                Registration fee of ₹5,000 applies for new admissions.
              </p>
            </motion.div>
          </motion.div>

          {/* Payment Flow */}
          <motion.div
            {...scrollReveal}
            transition={{ delay: 0.5 }}
            className="bg-white p-8 rounded-3xl shadow-2xl border border-montessori-beige-200"
          >
            {/* Step Indicator */}
            <div className="flex items-center justify-center mb-8 gap-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`h-2 flex-1 rounded-full transition-colors ${
                    currentStep >= step ? 'bg-montessori-terracotta-600' : 'bg-montessori-beige-200'
                  }`}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              {/* Step 1: Mobile Number Lookup */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl font-serif font-bold text-montessori-beige-900 mb-2">
                    Verify Your Details
                  </h3>
                  <p className="text-montessori-beige-600 mb-6">
                    Enter your registered mobile number to get started
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-montessori-beige-800 mb-2">
                        Mobile Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-montessori-beige-400" size={20} />
                        <input
                          type="tel"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          pattern="[0-9]{10}"
                          maxLength="10"
                          className="w-full pl-12 pr-4 py-3 border-2 border-montessori-beige-300 rounded-xl focus:outline-none focus:border-montessori-terracotta-500 transition-colors"
                          placeholder="Enter 10-digit mobile number"
                        />
                      </div>
                    </div>

                    {lookupError && (
                      <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                        <p className="text-sm text-orange-700">{lookupError}</p>
                        {lookupError.includes('manually') && (
                          <p className="text-xs text-orange-600 mt-1">
                            Continue below to enter your details manually.
                          </p>
                        )}
                      </div>
                    )}

                    <Button
                      onClick={handleLookup}
                      disabled={isLookingUp}
                      variant="primary"
                      size="lg"
                      className="w-full bg-montessori-terracotta-600 hover:bg-montessori-terracotta-700 text-white"
                    >
                      {isLookingUp ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <Search className="inline mr-2" size={20} />
                          Lookup Student
                        </>
                      )}
                    </Button>

                    <div className="text-center">
                      <p className="text-xs text-montessori-beige-500">
                        🔒 Your information is secure and encrypted
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Child Selection (Multiple Children) */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl font-serif font-bold text-montessori-beige-900 mb-2">
                    Select Student
                  </h3>
                  <p className="text-montessori-beige-600 mb-6">
                    We found {students.length} children registered with this mobile number
                  </p>

                  <div className="space-y-3">
                    {students.map((student) => (
                      <motion.button
                        key={student.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleChildSelect(student)}
                        className="w-full p-4 border-2 border-montessori-beige-300 rounded-xl hover:border-montessori-terracotta-500 hover:bg-montessori-terracotta-50 transition-all text-left"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-montessori-beige-900">
                              {student.student_name}
                            </p>
                            <p className="text-sm text-montessori-beige-600">
                              {student.program}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-montessori-terracotta-600">
                              ₹{student.fee_amount.toLocaleString('en-IN')}
                            </p>
                            <ArrowRight className="ml-auto mt-1 text-montessori-beige-400" size={16} />
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  <button
                    onClick={startOver}
                    className="mt-4 text-sm text-montessori-beige-600 hover:text-montessori-beige-900 underline"
                  >
                    ← Go back
                  </button>
                </motion.div>
              )}

              {/* Step 3: Confirm Details & Payment */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl font-serif font-bold text-montessori-beige-900 mb-2">
                    Confirm & Pay
                  </h3>
                  <p className="text-montessori-beige-600 mb-6">
                    Review your details before proceeding to payment
                  </p>

                  <form onSubmit={handlePayment} className="space-y-5">
                    {/* Student Name (if from database) */}
                    {selectedStudent && (
                      <div className="p-4 bg-montessori-sage-50 border border-montessori-sage-200 rounded-xl">
                        <div className="flex items-center gap-2 mb-1">
                          <UserCheck className="text-montessori-sage-600" size={18} />
                          <p className="text-sm font-semibold text-montessori-sage-800">Student</p>
                        </div>
                        <p className="font-bold text-montessori-beige-900">{formData.studentName}</p>
                      </div>
                    )}

                    {/* Parent Name */}
                    <div>
                      <label className="block text-sm font-semibold text-montessori-beige-800 mb-2">
                        Parent/Guardian Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-montessori-beige-400" size={20} />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border-2 border-montessori-beige-300 rounded-xl focus:outline-none focus:border-montessori-terracotta-500 transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-montessori-beige-800 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-montessori-beige-400" size={20} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border-2 border-montessori-beige-300 rounded-xl focus:outline-none focus:border-montessori-terracotta-500 transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-montessori-beige-800 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-montessori-beige-400" size={20} />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          pattern="[0-9]{10}"
                          className="w-full pl-12 pr-4 py-3 border-2 border-montessori-beige-300 rounded-xl focus:outline-none focus:border-montessori-terracotta-500 transition-colors"
                          placeholder="10-digit mobile number"
                        />
                      </div>
                    </div>

                    {/* Program Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-montessori-beige-800 mb-2">
                        Select Program *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-montessori-beige-400" size={20} />
                        <select
                          name="program"
                          value={formData.program}
                          onChange={handleProgramChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border-2 border-montessori-beige-300 rounded-xl focus:outline-none focus:border-montessori-terracotta-500 transition-colors appearance-none bg-white"
                        >
                          <option value="">Choose a program</option>
                          {programs.map(program => (
                            <option key={program.name} value={program.name}>
                              {program.name} - ₹{program.fee.toLocaleString('en-IN')}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Amount (Auto-filled) */}
                    <div>
                      <label className="block text-sm font-semibold text-montessori-beige-800 mb-2">
                        Amount to Pay
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-montessori-beige-400" size={20} />
                        <input
                          type="text"
                          value={formData.amount ? `₹${formData.amount.toLocaleString('en-IN')}` : ''}
                          readOnly
                          className="w-full pl-12 pr-4 py-3 border-2 border-montessori-beige-300 rounded-xl bg-montessori-beige-50 text-montessori-beige-900 font-bold text-lg"
                          placeholder="Select a program first"
                        />
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={startOver}
                        className="px-4 py-3 border-2 border-montessori-beige-300 rounded-xl hover:bg-montessori-beige-50 transition-colors text-montessori-beige-700 font-semibold"
                      >
                        <Edit2 className="inline mr-2" size={18} />
                        Start Over
                      </button>
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="flex-1 bg-montessori-terracotta-600 hover:bg-montessori-terracotta-700 text-white shadow-lg"
                      >
                        <CreditCard className="inline mr-2" size={20} />
                        Proceed to Payment
                      </Button>
                    </div>

                    <p className="text-xs text-center text-montessori-beige-600 mt-4">
                      🔒 Secure payment powered by Razorpay. Your data is encrypted and safe.
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600" size={48} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-montessori-beige-900 mb-3">
                Payment Successful!
              </h3>
              <p className="text-montessori-beige-700 mb-4">
                Thank you for your payment. Your transaction has been completed successfully.
              </p>
              <div className="bg-montessori-beige-100 p-4 rounded-xl mb-6">
                <p className="text-sm text-montessori-beige-600 mb-1">Transaction ID</p>
                <p className="font-mono font-bold text-montessori-beige-900">{transactionId}</p>
              </div>
              <Button
                onClick={() => setShowSuccess(false)}
                variant="primary"
                className="w-full bg-montessori-terracotta-600 hover:bg-montessori-terracotta-700"
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Modal */}
      <AnimatePresence>
        {showError && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-8 right-8 bg-red-500 text-white px-6 py-4 rounded-xl shadow-2xl z-50 flex items-center gap-3"
          >
            <XCircle size={24} />
            <p className="font-semibold">Payment cancelled or failed. Please try again.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default FeePayment;
