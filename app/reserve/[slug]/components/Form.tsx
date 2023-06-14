"use client";
import useReservation from "@/hooks/useReservation";
import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

const Form = ({
  slug,
  date,
  partySize,
}: {
  slug: string;
  date: string;
  partySize: string;
}) => {
  const [inputs, setInputs] = useState({
    booker_firstName: "",
    booker_lastName: "",
    booker_phone: "",
    booker_email: "",
    booker_occasion: "",
    booker_request: "",
  });

  const [day, time] = date.split("T");
  const [didBook, setDidBook] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const { error, loading, createReservation } = useReservation();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (
      inputs.booker_firstName &&
      inputs.booker_lastName &&
      inputs.booker_email &&
      inputs.booker_phone
    )
      return setDisabled(false);
    return setDisabled(true);
  }, [inputs]);

  const handleClick = async () => {
    const booking = await createReservation({
      slug,
      time,
      partySize,
      day,
      ...inputs,
      setDidBook,
    });
  };

  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
      {didBook ? (
        <div>
          <h1>You are all booked up</h1>
          <p>We will be glad to see you!</p>
        </div>
      ) : (
        <>
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            placeholder="First name"
            name="booker_firstName"
            value={inputs.booker_firstName}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            placeholder="Last name"
            name="booker_lastName"
            value={inputs.booker_lastName}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            placeholder="Phone number"
            name="booker_phone"
            value={inputs.booker_phone}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            placeholder="Email"
            name="booker_email"
            value={inputs.booker_email}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            placeholder="Occasion (optional)"
            name="booker_occasion"
            value={inputs.booker_occasion}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            className="border rounded p-3 w-80 mb-4"
            placeholder="Requests (optional)"
            name="booker_request"
            value={inputs.booker_request}
            onChange={handleChangeInput}
          />
          <button
            className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300"
            disabled={disabled || loading}
            onClick={handleClick}
          >
            {loading ? (
              <CircularProgress color="inherit" />
            ) : (
              "Complete reservation"
            )}
          </button>
          <p className="mt-4 text-sm">
            By clicking “Complete reservation” you agree to the OpenTable Terms
            of Use and Privacy Policy. Standard text message rates may apply.
            You may opt out of receiving text messages at any time.
          </p>
        </>
      )}
    </div>
  );
};

export default Form;
