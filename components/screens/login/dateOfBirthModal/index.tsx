import DownArrow from "@/components/ui/DownArrow";
import React, { useEffect, useState } from "react";

interface Props {
  setDateOfBirthModal: (value: boolean) => void; 
  setUniversityDetailModal: (value: boolean) => void;
  setDateOfBirth: (value: string) => void;
  dateOfBirth: string;
}

const DateOfBirthModal = ({
  setDateOfBirthModal,
  setUniversityDetailModal,
  setDateOfBirth,
  dateOfBirth,
}: Props) => {
  const currentYear = new Date().getFullYear();
  const startYear = 2000;
  const endYear = currentYear - 15;

  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => startYear + i
  );
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [days, setDays] = useState<number[]>([]);

  useEffect(() => {
    if (selectedYear && selectedMonth) {
      const monthIndex = months.indexOf(selectedMonth);
      const daysInMonth = new Date(
        Number(selectedYear),
        monthIndex + 1,
        0
      ).getDate();
      setDays(Array.from({ length: daysInMonth }, (_, i) => i + 1));
    }
  }, [selectedMonth, selectedYear]);

  const handleSaveDate = () => {
    console.log("hey")
    if (selectedYear && selectedMonth && selectedDay) {
      const formattedDate = `${selectedDay} ${selectedMonth}, ${selectedYear}`;
      setDateOfBirth(formattedDate);
      if (dateOfBirth) {
        setDateOfBirthModal(false);
        setUniversityDetailModal(true);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="flex flex-col items-center bg-white p-10 z-50 w-full h-screen">
        <div className="flex flex-col items-center justify-around bg-white rounded-2xl h-full z-50 container relative">
          <div className="flex flex-col items-center gap-10">
            <div className="text-2xl">What Is Your Birth Date?</div>
            <div className="flex gap-4 items-center h-14 z-50">
              {/* Year Selector */}
              <select
                value={selectedYear || ""}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="border p-2 rounded-lg flex items-center gap-1"
              >
                <option value="" disabled>
                  Year
                </option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              {/* Month Selector */}
              <select
                value={selectedMonth || ""}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="border p-2 rounded-lg flex items-center gap-1"
              >
                <option value="" disabled>
                  Month
                </option>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              {/* Day Selector */}
              <select
                value={selectedDay || ""}
                onChange={(e) => setSelectedDay(e.target.value)}
                className="border p-2 rounded-lg flex items-center gap-1"
                disabled={!selectedMonth}
              >
                <option value="" disabled>
                  Day
                </option>
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="sm:w-1/2 w-[95%]">
            <div
              className="flex items-center justify-end w-full cursor-pointer"
              onClick={handleSaveDate}
            >
              Next
              <div className="-rotate-90">
                <DownArrow />
              </div>
            </div>
            <div className="progress w-full bg-gray-100 h-1 rounded-md overflow-hidden mt-2">
              <div className="sm:w-40 w-20 bg-blue-500 h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateOfBirthModal;
