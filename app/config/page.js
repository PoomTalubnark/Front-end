"use client";

import { useEffect, useState } from "react";
import { fetchConfig } from "../api/route";
import Link from "next/link";

export default function Config() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function loadConfig() {
      try {
        if (mounted) setLoading(true);
        const data = await fetchConfig();
        if (mounted) setConfig(data);
      } catch (err) {
        console.error(err);
        if (mounted) setError(err.message || "Failed to fetch");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadConfig();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading)
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-zinc-950">
        <p className="text-gray-600 dark:text-zinc-400 animate-pulse">
          Loading configuration...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-zinc-950">
        <p className="rounded-md bg-red-100 px-4 py-2 font-medium text-red-700 dark:bg-red-900/30 dark:text-red-400">
          Error: {error}
        </p>
      </div>
    );

  if (!config)
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-zinc-950">
        <p className="text-gray-600 dark:text-zinc-400">No configuration found.</p>
      </div>
    );

  const { drone_id, drone_name, light, country } = config;

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-lg rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-900 dark:shadow-none">
        <h1 className="mb-6 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-zinc-50">
          Drone Configuration
        </h1>

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-zinc-700 dark:bg-zinc-800/50">
          <table className="w-full border-collapse text-sm">
            <tbody>
              <ConfigRow label="Drone ID" value={drone_id} />
              <ConfigRow label="Drone Name" value={drone_name} />
              <ConfigRow label="Light" value={light} />
              <ConfigRow label="Country" value={country} />
            </tbody>
          </table>
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ConfigRow({ label, value }) {
  return (
    <tr className="border-b border-gray-200 last:border-0 dark:border-zinc-700">
      <td className="w-1/3 bg-white p-4 font-semibold text-gray-800 dark:bg-zinc-900 dark:text-zinc-50">
        {label}
      </td>
      <td className="p-4 text-gray-600 dark:text-zinc-400">{value}</td>
    </tr>
  );
}
