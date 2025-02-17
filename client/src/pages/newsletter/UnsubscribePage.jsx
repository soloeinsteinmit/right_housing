import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const UnsubscribePage = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = async () => {
      try {
        const response = await fetch(`/api/newsletter/unsubscribe/${token}`);
        const data = await response.json();

        if (response.ok) {
          setStatus({
            type: "success",
            message: "You have been successfully unsubscribed from our newsletter.",
          });
        } else {
          throw new Error(data.message || "Failed to unsubscribe");
        }
      } catch (error) {
        setStatus({
          type: "error",
          message:
            error.message || "Something went wrong. Please try again later.",
        });
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      unsubscribe();
    } else {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div className="min-h-screen bg-success-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-success-800 rounded-lg shadow-xl p-8"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-warning-400 mb-4">
            Newsletter Unsubscribe
          </h1>
          {isLoading ? (
            <p className="text-success-100">Processing your request...</p>
          ) : (
            <>
              <p
                className={`text-lg ${
                  status.type === "success"
                    ? "text-success-300"
                    : "text-red-400"
                }`}
              >
                {status.message}
              </p>
              {status.type === "success" && (
                <p className="mt-4 text-success-200">
                  We're sorry to see you go! You can always subscribe again through
                  our website if you change your mind.
                </p>
              )}
              <button
                onClick={() => navigate("/")}
                className="mt-6 px-6 py-2 bg-warning-500 hover:bg-warning-600 text-white rounded-full transition-colors"
              >
                Return to Homepage
              </button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default UnsubscribePage;
