"use client";

import {
  format,
  subDays,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  subMonths,
} from "date-fns";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import "react-day-picker/style.css";
import { Check } from "lucide-react";
import { DateRange, DayPicker, OnSelectHandler } from "react-day-picker";

const shortcuts = [
  { label: "Today", range: () => ({ from: new Date(), to: new Date() }) },
  {
    label: "Yesterday",
    range: () => {
      const yesterday = subDays(new Date(), 1);
      return { from: yesterday, to: yesterday };
    },
  },
  {
    label: "Last 7 days",
    range: () => ({ from: subDays(new Date(), 7), to: new Date() }),
  },
  {
    label: "Last 14 days",
    range: () => ({ from: subDays(new Date(), 14), to: new Date() }),
  },
  {
    label: "Last 30 days",
    range: () => ({ from: subDays(new Date(), 30), to: new Date() }),
  },
  {
    label: "This Week",
    range: () => ({ from: startOfWeek(new Date()), to: endOfWeek(new Date()) }),
  },
  {
    label: "Last Week",
    range: () => {
      const lastWeekStart = subDays(startOfWeek(new Date()), 7);
      const lastWeekEnd = subDays(endOfWeek(new Date()), 7);
      return { from: lastWeekStart, to: lastWeekEnd };
    },
  },
  {
    label: "This Month",
    range: () => ({
      from: startOfMonth(new Date()),
      to: endOfMonth(new Date()),
    }),
  },
  {
    label: "Last Month",
    range: () => {
      const lastMonthDate = subMonths(new Date(), 1);
      return {
        from: startOfMonth(lastMonthDate),
        to: endOfMonth(lastMonthDate),
      };
    },
  },
];

export default function DateRangePicker({
  onClick,
  onCancel,
  initialRange,
}: {
  onClick?: (range: DateRange) => void;
  onCancel?: () => void;
  initialRange?: DateRange;
}) {
  const [range, setRange] = useState<DateRange | undefined>(initialRange);
  const [selectedShortcut, setSelectedShortcut] = useState<string | null>(null);

  useEffect(() => {
    setRange(initialRange);
  }, [initialRange]);

  const handleSelect: OnSelectHandler<DateRange> = (selected) => {
    if (selected) {
      setRange(selected);
    }
  };

  const handleShortcut = (
    label: string,
    rangeFn: () => { from: Date; to: Date }
  ) => {
    const newRange = rangeFn();
    setRange(newRange);
    setSelectedShortcut(label);
  };

  return (
    <div className="border rounded-md p-6 max-w-4xl mx-auto bg-white">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="w-full md:w-auto">
          {/* Input Range */}
          <div className="flex items-center justify-end space-x-2 mb-4 text-sm">
            <input
              type="text"
              value={range?.from ? format(range.from, "d / M / yyyy") : ""}
              readOnly
              className="border rounded px-2 py-1 w-28 text-center"
              tabIndex={-1}
            />
            <span>-</span>
            <input
              type="text"
              value={range?.to ? format(range.to, "d / M / yyyy") : ""}
              readOnly
              className="border rounded px-2 py-1 w-28 text-center"
              tabIndex={-1}
            />
          </div>
          <DayPicker
            animate
            mode="range"
            selected={range}
            required
            onSelect={handleSelect}
            numberOfMonths={window.innerWidth < 768 ? 1 : 2}
            navLayout="around"
            showOutsideDays
            classNames={{
              month_caption: "flex justify-center py-2 mb-3 items-center",
              button_previous:
                "absolute top-3 left-4 inline-flex items-center justify-center",
              months: "relative flex gap-3 max-w-fit",
              today: "text-indigo-500",
              selected: "!bg-indigo-400 text-white",
              chevron: "text-gray-300 size-4",
              caption_label: "font-normal text-sm",
              weekday: "text-gray-500 text-sm font-normal",
              outside: "text-gray-500",
              range_end: "rounded-r-md",
              range_start: "rounded-l-md",
              day_button: "text-sm cursor-pointer",
              day: "size-9 text-center",
            }}
          />
        </div>
        {/* Shortcut sidebar */}
        <div className="w-full md:w-auto mt-6 md:mt-0 flex flex-col items-end space-y-4 text-sm text-gray-700">
          {shortcuts.map(({ label, range: rangeFn }) => (
            <button
              key={label}
              onClick={() => handleShortcut(label, rangeFn)}
              className={cn(
                "flex items-center gap-2 focus:outline-none cursor-pointer",
                label === selectedShortcut
                  ? "text-indigo-500"
                  : "text-gray-700 hover:text-indigo-500"
              )}
              type="button"
            >
              {label === selectedShortcut && <Check className="size-3" />}
              {label}
            </button>
          ))}

          {/* Footer Buttons */}
          <div className="mt-auto flex space-x-5 justify-between pt-4">
            <button
              type="button"
              className="text-gray-600 font-medium cursor-pointer"
              onClick={() => onCancel?.()}
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-gradient-to-r from-indigo-400 to-indigo-500 text-white px-4 py-3 text-xs rounded-md hover:bg-indigo-800 cursor-pointer"
              disabled={!range?.from || !range?.to}
              onClick={() => onClick?.(range!)}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
