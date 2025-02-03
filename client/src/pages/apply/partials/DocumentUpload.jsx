import React, { useState } from "react";
import { motion } from "framer-motion";
import { Upload, X, FileText, Info } from "lucide-react";

const DocumentUpload = ({ formData, setFormData }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    setFormData((prev) => ({
      ...prev,
      documents: [...(prev.documents || []), file],
    }));
  };

  const removeFile = (index) => {
    setFormData((prev) => ({
      ...prev,
      documents: prev.documents.filter((_, i) => i !== index),
    }));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-2xl shadow-sm"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Supporting Documents
        </h2>
        <div className="text-sm text-gray-500 flex items-center gap-2">
          <Info className="w-4 h-4" />
          Optional
        </div>
      </div>

      <div className="space-y-6">
        <div
          className={`relative border-2 border-dashed rounded-xl p-8 text-center ${
            dragActive
              ? "border-success-500 bg-success-50"
              : "border-gray-300 hover:border-success-500 hover:bg-success-50"
          } transition-colors duration-300`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            multiple
            onChange={handleChange}
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />

          <div className="space-y-4">
            <div className="flex justify-center">
              <Upload
                className={`h-12 w-12 ${
                  dragActive ? "text-success-600" : "text-gray-400"
                }`}
              />
            </div>
            <div>
              <p className="text-lg font-medium text-gray-700">
                Drag and drop your documents here
              </p>
              <p className="text-sm text-gray-500 mt-1">
                or click to browse from your computer
              </p>
            </div>
            <div className="text-xs text-gray-500">
              Supported formats: PDF, DOC, DOCX, JPG, JPEG, PNG
            </div>
          </div>
        </div>

        {/* Suggested Documents List */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">
            Suggested Documents:
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            While all documents are optional, providing any of the following can
            help speed up your application process:
          </p>
          <ul className="space-y-3">
            <li className="flex items-center text-sm text-gray-600">
              <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
              Valid Government-issued ID (Driver's License, Passport, etc.)
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
              Proof of Income (Pay stubs, W2, Tax Returns)
            </li>
            <li className="flex items-center text-sm text-gray-600">
              <div className="w-2 h-2 bg-success-500 rounded-full mr-3"></div>
              Background Check Authorization Form
            </li>
          </ul>
        </div>

        {/* Uploaded Files List */}
        {formData?.documents && formData.documents.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">
              Uploaded Files:
            </h3>
            <div className="space-y-2">
              {formData.documents.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-700">{file.name}</span>
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default DocumentUpload;
