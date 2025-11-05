"use client";

import { useEffect, useState } from "react";
import { fetchConfig, postLog } from "../api/route";
import Link from "next/link";

export default function SubmitPage() {
  const [config, setConfig] = useState(null);
  const [celsius, setCelsius] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchConfig()
      .then((data) => {
        if (mounted) setConfig(data);
      })
      .catch((e) => console.error(e))
      .finally(() => {
        if (mounted) setInitialLoading(false);
      });
    return () => (mounted = false);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);
    if (!config) return setStatus("Missing config");
    if (!celsius) return setStatus("Enter celsius");

    const payload = {
      drone_id: config.drone_id,
      drone_name: config.drone_name,
      country: config.country,
      celsius: Number(celsius),
    };

    try {
      setLoading(true);
      await postLog(payload);
      setStatus("Submitted successfully");
      setCelsius("");
    } catch (err) {
      console.error(err);
      setStatus("Failed to submit");
    } finally {
      setLoading(false);
    }
  }

  const statusColor = status?.startsWith("Submitted")
    ? "text-green-600 dark:text-green-400"
    : "text-red-600 dark:text-red-400";

  if (initialLoading) {
    // 🌀 Minimal Clean Loading Screen
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 rounded-full border-4 border-gray-300 border-t-blue-500 animate-spin"></div>
          <p className="text-gray-600 dark:text-zinc-400">Loading configuration...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950 px-4 py-16">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-900 dark:shadow-none">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-zinc-50 mb-6">
          Submit Temperature Log
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-1">
              Temperature (°C)
            </label>
            <input
              type="number"
              step="0.1"
              value={celsius}
              onChange={(e) => setCelsius(e.target.value)}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-900 shadow-sm 
                         focus:border-blue-500 focus:ring-blue-500 
                         dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-blue-400 dark:focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white shadow-sm 
                       transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:ring-offset-2 dark:focus:ring-blue-400 disabled:cursor-not-allowed disabled:bg-gray-400 
                       dark:disabled:bg-zinc-700"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {status && (
          <p className={`mt-5 text-center text-sm font-medium ${statusColor}`}>
            {status}
          </p>
        )}

          <Link
            href="/"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
  );
}
