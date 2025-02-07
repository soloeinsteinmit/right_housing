import { memo, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Input, Textarea } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { Send, Clock, Calendar, MapPin } from "lucide-react";
import usePulseAnimation, {
  PULSE_COLORS,
} from "../../../hooks/usePulseAnimation";

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const interestOptions = [
  "Housing Support",
  "Education & Training",
  "Community Outreach",
  "Administrative Support",
  "Maintenance & Repairs",
  "Resident Support",
];

const availabilityOptions = [
  "Weekday Mornings",
  "Weekday Afternoons",
  "Weekday Evenings",
  "Weekend Mornings",
  "Weekend Afternoons",
  "Weekend Evenings",
];

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  interests: [],
  availability: [],
  experience: "",
  motivation: "",
};

const FormHeader = memo(() => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      Join Our Volunteer Team
    </h2>
    <p className="text-gray-600">
      Fill out the form below to start your journey as a volunteer.
      We'll get back to you within 48 hours.
    </p>
  </div>
));

FormHeader.displayName = "FormHeader";

const PersonalInfoFields = memo(({ formData, onChange }) => (
  <>
    <div className="grid md:grid-cols-2 gap-6">
      <Input
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={onChange}
        required
        variant="bordered"
      />
      <Input
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={onChange}
        required
        variant="bordered"
      />
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={onChange}
        required
        variant="bordered"
      />
      <Input
        label="Phone"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={onChange}
        required
        variant="bordered"
      />
    </div>
  </>
));

PersonalInfoFields.displayName = "PersonalInfoFields";

const AddressFields = memo(({ formData, onChange }) => (
  <div className="space-y-6">
    <Input
      label="Street Address"
      name="address"
      value={formData.address}
      onChange={onChange}
      required
      variant="bordered"
    />
    <div className="grid md:grid-cols-3 gap-6">
      <Input
        label="City"
        name="city"
        value={formData.city}
        onChange={onChange}
        required
        variant="bordered"
      />
      <Input
        label="State"
        name="state"
        value={formData.state}
        onChange={onChange}
        required
        variant="bordered"
      />
      <Input
        label="ZIP Code"
        name="zipCode"
        value={formData.zipCode}
        onChange={onChange}
        required
        variant="bordered"
      />
    </div>
  </div>
));

AddressFields.displayName = "AddressFields";

const PreferenceFields = memo(({ formData, onSelectChange }) => (
  <div className="grid md:grid-cols-2 gap-6">
    <Select
      label="Areas of Interest"
      multiple
      name="interests"
      value={formData.interests}
      onChange={(value) => onSelectChange("interests", value)}
      required
      variant="bordered"
    >
      {interestOptions.map((option) => (
        <SelectItem key={option} value={option}>
          {option}
        </SelectItem>
      ))}
    </Select>

    <Select
      label="Availability"
      multiple
      name="availability"
      value={formData.availability}
      onChange={(value) => onSelectChange("availability", value)}
      required
      variant="bordered"
    >
      {availabilityOptions.map((option) => (
        <SelectItem key={option} value={option}>
          {option}
        </SelectItem>
      ))}
    </Select>
  </div>
));

PreferenceFields.displayName = "PreferenceFields";

const VolunteerForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const pulseVariant = usePulseAnimation({
    color: PULSE_COLORS.SUCCESS,
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSelectChange = useCallback((field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    // Here you would typically submit the form data to your backend
    console.log("Form submitted:", formData);
    // Show success message or redirect
  }, [formData]);

  return (
    <section className="py-20 bg-gray-50" id="volunteer-form">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariant}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <FormHeader />

            <form onSubmit={handleSubmit} className="space-y-8">
              <PersonalInfoFields
                formData={formData}
                onChange={handleInputChange}
              />
              
              <AddressFields
                formData={formData}
                onChange={handleInputChange}
              />

              <PreferenceFields
                formData={formData}
                onSelectChange={handleSelectChange}
              />

              <div className="space-y-6">
                <Textarea
                  label="Previous Volunteer Experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={4}
                  variant="bordered"
                />

                <Textarea
                  label="What motivates you to volunteer with us?"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  variant="bordered"
                />
              </div>

              <motion.button
                type="submit"
                variants={pulseVariant}
                initial="initial"
                animate="animate"
                whileTap="tap"
                className="w-full py-4 bg-success-600 text-white rounded-xl font-semibold inline-flex items-center justify-center gap-2 shadow-lg shadow-success-600/20"
              >
                Submit Application
                <Send className="w-5 h-5" />
              </motion.button>

              {/* Additional Information */}
              <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-success-600" />
                  <span>Response within 48 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-success-600" />
                  <span>Flexible scheduling</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-success-600" />
                  <span>Multiple locations available</span>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

VolunteerForm.displayName = "VolunteerForm";

export default memo(VolunteerForm);
