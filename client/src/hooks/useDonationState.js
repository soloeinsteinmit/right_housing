import { useState, useCallback } from 'react';

export const useDonationState = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("one-time");
  const [showImpact, setShowImpact] = useState(false);
  const [error, setError] = useState(null);

  const handleAmountSelect = useCallback((amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
    setShowImpact(true);
    setError(null);
  }, []);

  const handleCustomAmount = useCallback((e) => {
    const value = e.target.value;
    if (value === "" || /^\d+(\.\d{0,2})?$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null);
      setShowImpact(false);
      setError(null);
    }
  }, []);

  const validateAmount = useCallback(() => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (!amount || amount < 1) {
      setError("Please enter a valid donation amount");
      return false;
    }
    return true;
  }, [selectedAmount, customAmount]);

  return {
    selectedAmount,
    customAmount,
    donationType,
    showImpact,
    error,
    handleAmountSelect,
    handleCustomAmount,
    setDonationType,
    validateAmount,
  };
};
