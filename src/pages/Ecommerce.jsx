import React from "react";
import { GoDotFill } from "react-icons/go";

import { Stacked, Button, SparkLine } from "../components";
import { earningData, SparklineAreaData } from "../data/dummy";

const Ecommerce = () => {
  return (
    <div className="mt-10 px-4">
      {/* TOP SECTION */}
      <div className="flex flex-wrap lg:flex-nowrap gap-6">
        {/* EARNINGS CARD */}
        <div className="flex-1 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white rounded-2xl p-6 shadow-xl">
          <p className="text-sm opacity-80">Total Earnings</p>
          <h2 className="text-3xl font-bold mt-2">$75,450</h2>

          <div className="mt-6">
            <Button
              color="#2563eb"
              bgColor="#fff"
              text="Download Report"
              borderRadius="9999px"
            />
          </div>
        </div>

        {/* SMALL CARDS */}
        <div className="flex flex-wrap gap-4 flex-1 justify-center">
          {earningData.map(item =>
            <div
              key={item.title}
              className="bg-white dark:bg-[#1E293B] dark:text-gray-200 w-[160px] p-4 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div
                className="p-3 rounded-xl w-fit"
                style={{
                  backgroundColor: item.iconBg,
                  color: item.iconColor
                }}
              >
                {item.icon}
              </div>

              <p className="mt-4 text-lg font-semibold">
                {item.amount}
              </p>

              <p className="text-xs text-gray-400">
                {item.title}
              </p>

              <p
                className={`text-xs mt-1 ${item.pcColor === "green"
                  ? "text-green-500"
                  : "text-red-500"}`}
              >
                {item.percentage}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* REVENUE SECTION */}
      <div className="mt-8 bg-white dark:bg-[#1E293B] dark:text-gray-200 rounded-2xl p-6 shadow-sm">
        {/* HEADER */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h3 className="text-lg font-semibold">Revenue Overview</h3>

          <div className="flex gap-4">
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <GoDotFill className="text-purple-500" />
              Expense
            </div>

            <div className="flex items-center gap-1 text-sm">
              <GoDotFill className="text-blue-500" />
              Budget
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-8 flex flex-wrap lg:flex-nowrap gap-10">
          {/* LEFT */}
          <div className="flex-1">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-3xl font-bold">$95,445</h2>
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  +23%
                </span>
              </div>
              <p className="text-gray-400 text-sm">Budget</p>
            </div>

            <div className="mt-6">
              <h2 className="text-3xl font-bold">$50,475</h2>
              <p className="text-gray-400 text-sm">Expense</p>
            </div>

            {/* SPARKLINE */}
            <div className="mt-6 bg-gray-50 dark:bg-[#0F172A] p-3 rounded-xl shadow-inner">
              <SparkLine data={SparklineAreaData} />
            </div>

            <div className="mt-6">
              <Button
                color="white"
                bgColor="#2563eb"
                text="Download Report"
                borderRadius="9999px"
              />
            </div>
          </div>

          {/* RIGHT CHART */}
          <div className="flex-1 flex justify-center">
            <Stacked width="100%" height={350} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
