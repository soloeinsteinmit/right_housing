import { memo, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Input, Textarea } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { Divider } from "@heroui/divider";
import { Send, Clock, Calendar, MapPin } from "lucide-react";
import axios from "axios";
import { toast, Toaster } from "sonner";
import usePulseAnimation, {
  PULSE_COLORS,
} from "../../../hooks/usePulseAnimation";
import {
  Autocomplete,
  AutocompleteSection,
  AutocompleteItem,
} from "@heroui/autocomplete";
import { Avatar } from "@heroui/avatar";
import { states } from "./states";
import endpoint from "../../../config.js";

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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

const STORAGE_KEY = "volunteer_form_data";

const loadFormData = () => {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : initialFormState;
  } catch (error) {
    console.error("Error loading form data:", error);
    return initialFormState;
  }
};

const saveFormData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving form data:", error);
  }
};

const clearFormData = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Error clearing form data:", error);
  }
};

const FormHeader = memo(() => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      Join Our Volunteer Team
    </h2>
    <p className="text-gray-600">
      Fill out the form below to start your journey as a volunteer. We'll get
      back to you within 48 hours.
    </p>
  </div>
));

FormHeader.displayName = "FormHeader";

const PersonalInfoFields = memo(({ formData, onChange }) => (
  <>
    <p className="text-lg font-bold">Personal Info</p>
    <div className="grid md:grid-cols-2 gap-6 ">
      <Input
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={onChange}
        required
        variant="bordered"
        isRequired
      />
      <Input
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={onChange}
        required
        variant="bordered"
        isRequired
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
        isRequired
      />
      <Input
        label="Phone"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={onChange}
        required
        variant="bordered"
        isRequired
      />
    </div>
  </>
));

PersonalInfoFields.displayName = "PersonalInfoFields";

const AddressFields = memo(({ formData, onChange }) => {
  const [stateValue, setStateValue] = useState("");
  const [selectedState, setSelectedState] = useState(formData.state || null);

  const handleStateSelection = (stateKey) => {
    const selectedStateObj = states.find(
      (state) => state.abbreviation === stateKey
    );
    setSelectedState(stateKey);
    onChange({
      target: {
        name: "state",
        value: selectedStateObj
          ? `${selectedStateObj.name} ${selectedStateObj.abbreviation}`
          : "",
      },
    });
  };

  const handleStateInput = (value) => {
    setStateValue(value);
  };

  return (
    <>
      <p className="text-lg font-bold">Address</p>
      <div className="space-y-6">
        <Input
          label="Street Address"
          name="address"
          value={formData.address}
          onChange={onChange}
          variant="bordered"
          isRequired
        />
        <div className="grid md:grid-cols-3 gap-6">
          <Input
            label="City"
            name="city"
            value={formData.city}
            onChange={onChange}
            variant="bordered"
            isRequired
          />
          <Autocomplete
            className="max-w-xs"
            defaultItems={states}
            label="Select State"
            variant="bordered"
            isRequired
            selectedKey={selectedState}
            onSelectionChange={handleStateSelection}
            onInputChange={handleStateInput}
          >
            {(state) => (
              <AutocompleteItem
                key={state.abbreviation}
                startContent={
                  <Avatar
                    alt={state.name}
                    className="w-6 h-6"
                    src={`https://flagcdn.com/${state.abbreviation.toLowerCase()}.svg`}
                  />
                }
              >
                {state.name}
              </AutocompleteItem>
            )}
          </Autocomplete>
          <Input
            label="ZIP Code"
            name="zipCode"
            value={formData.zipCode}
            onChange={onChange}
            isRequired
            variant="bordered"
          />
        </div>
      </div>
    </>
  );
});

AddressFields.displayName = "AddressFields";

const PreferenceFields = memo(({ formData, onSelectChange }) => {
  const [interests, setInterests] = useState(new Set(formData.interests || []));
  const [availability, setAvailability] = useState(
    new Set(formData.availability || [])
  );

  useEffect(() => {
    onSelectChange("interests", Array.from(interests));
  }, [interests, onSelectChange]);

  useEffect(() => {
    onSelectChange("availability", Array.from(availability));
  }, [availability, onSelectChange]);

  return (
    <>
      <p className="text-lg font-bold">Preferences</p>
      <div className="grid md:grid-cols-2 gap-6">
        <Select
          label="Areas of Interest"
          selectedKeys={interests}
          onSelectionChange={setInterests}
          variant="bordered"
          isRequired
          selectionMode="multiple"
        >
          {interestOptions.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </Select>

        <Select
          label="Availability"
          selectedKeys={availability}
          onSelectionChange={setAvailability}
          variant="bordered"
          isRequired
          selectionMode="multiple"
        >
          {availabilityOptions.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </Select>
      </div>
    </>
  );
});

PreferenceFields.displayName = "PreferenceFields";

const VolunteerForm = () => {
  const [formData, setFormData] = useState(loadFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const pulseVariant = usePulseAnimation({
    color: PULSE_COLORS.SUCCESS,
  });

  useEffect(() => {
    saveFormData(formData);
  }, [formData]);

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

  const validateForm = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "address",
      "city",
      "zipCode",
      "interests",
      "availability",
      "experience",
      "motivation",
    ];

    const missingFields = requiredFields.filter((field) => {
      const value = formData[field];
      return Array.isArray(value) ? value.length === 0 : !value;
    });

    if (missingFields.length > 0) {
      toast.error("Please fill in all required fields");
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    return true;
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      setIsSubmitting(true);

      try {
        // const apiUrl = import.meta.env.VITE_API_URL.replace(/\/$/, ""); // Remove trailing slash if present
        const apiUrl = endpoint.replace(/\/$/, ""); // Remove trailing slash if present
        await toast.promise(
          axios.post(`${apiUrl}/api/volunteer/submit`, formData, {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }),
          {
            loading: "Submitting your application...",
            success: () => {
              // Clear form data from localStorage and reset state
              clearFormData();
              setFormData(initialFormState);
              return "Application submitted successfully! We'll be in touch within 48 hours.";
            },
            error: (error) => {
              console.error("Form submission error:", error);
              return (
                error.response?.data?.message ||
                "Failed to submit application. Please try again later."
              );
            },
          },
          {
            duration: 5000,
          }
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  return (
    <section className="py-20 bg-gray-50" id="volunteer-form">
      <Toaster
        position="top-center"
        expand={true}
        richColors
        toastOptions={{
          style: {
            fontSize: "16px",
            fontWeight: "500",
          },
          className: "my-toast-class",
          duration: 4000,
        }}
      />
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

            <form onSubmit={handleSubmit} className="space-y-6">
              <PersonalInfoFields
                formData={formData}
                onChange={handleInputChange}
              />

              <Divider />

              <AddressFields formData={formData} onChange={handleInputChange} />

              <Divider />

              <PreferenceFields
                formData={formData}
                onSelectChange={handleSelectChange}
              />

              <Divider />

              <div className="space-y-6">
                <p className="text-lg font-bold">Experience & Motivation </p>
                <Textarea
                  label="Previous Volunteer Experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={4}
                  variant="bordered"
                  isRequired
                />

                <Textarea
                  label="What motivates you to volunteer with us?"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows={4}
                  variant="bordered"
                  isRequired
                />
              </div>

              <motion.button
                type="submit"
                // variants={pulseVariant}
                // initial="initial"
                // animate="animate"
                // whileTap="tap"
                disabled={isSubmitting}
                className={`w-full py-4 bg-success-600 text-white transition-color duration-300 hover:bg-success-700 rounded-xl font-semibold inline-flex items-center justify-center gap-2 shadow-lg shadow-success-600/20 ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </div>
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
