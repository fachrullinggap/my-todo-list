"use client";

import { useRef } from "react";

export default function UncontrolledForm() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  console.log(firstNameRef)

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
        firstName: firstNameRef.current.value,
        lasName: lastNameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
    }

    console.info("Uncontrolled form submitted", data)

    firstNameRef.current.value = ""
    lastNameRef.current.value = ""
    emailRef.current.value = ""
    passwordRef.current.value = ""
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold"> Uncontrolled Register Form</h2>

      <label>First Name</label>
      <input
        ref={firstNameRef}
        className="w-full p-2 border rounded"
        placeholder="Masukkan nama depan"
      />

      <label>Last Name</label>
      <input
        ref={lastNameRef}
        className="w-full p-2 border rounded"
        placeholder="Masukkan nama belakang (opsional)"
      />

      <label>Email</label>
      <input
        ref={emailRef}
        type="email"
        className="w-full p-2 border rounded"
        placeholder="Tuliskan email aktif anda"
      />

      <label>Password</label>
      <input
        ref={passwordRef}
        type="password"
        className="w-full p-2 border rounded"
        placeholder="Tuliskan password anda"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
