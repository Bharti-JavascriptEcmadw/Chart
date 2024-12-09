import React from "react";
import { useFormik } from "formik";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      subject: "",
      contactMethod: "",
      terms: false,
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) errors.name = "Name is required";
      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.message) errors.message = "Message is required";
      if (!values.subject) errors.subject = "Subject is required";
      if (!values.contactMethod)
        errors.contactMethod = "Please select a contact method";
      if (!values.terms) errors.terms = "You must accept the terms";
      return errors;
    },
    onSubmit: (values, { resetForm }) => {
      console.log("Form Submitted:", values);
      resetForm(); // Reset the form to initial values
    },
  });

  return (
    <div className="p-5 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </div>

        {/* Dropdown Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="" label="Select a subject" />
            <option value="general" label="General Inquiry" />
            <option value="support" label="Support" />
            <option value="feedback" label="Feedback" />
          </select>
          {formik.touched.subject && formik.errors.subject && (
            <div className="text-red-500 text-sm">{formik.errors.subject}</div>
          )}
        </div>

        {/* Radio Buttons */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Preferred Contact Method
          </label>
          <div className="flex space-x-4">
            <label>
              <input
                type="radio"
                name="contactMethod"
                value="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.contactMethod === "email"}
              />
              <span className="ml-2">Email</span>
            </label>
            <label>
              <input
                type="radio"
                name="contactMethod"
                value="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.contactMethod === "phone"}
              />
              <span className="ml-2">Phone</span>
            </label>
          </div>
          {formik.touched.contactMethod && formik.errors.contactMethod && (
            <div className="text-red-500 text-sm">
              {formik.errors.contactMethod}
            </div>
          )}
        </div>

        {/* Checkbox */}
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="terms"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.terms}
            />
            <span className="ml-2">
              I agree to the <a href="#" className="text-blue-500">terms and conditions</a>
            </span>
          </label>
          {formik.touched.terms && formik.errors.terms && (
            <div className="text-red-500 text-sm">{formik.errors.terms}</div>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
          {formik.touched.message && formik.errors.message && (
            <div className="text-red-500 text-sm">{formik.errors.message}</div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
