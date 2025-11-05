"use client";

import { useEffect, useState } from "react";
import { fetchLogs } from "../api/route";

export default function LogsPage() {
  const [allLogs, setAllLogs] = useState([]);
  const [paginatedLogs, setPaginatedLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [logsPerPage] = useState(10);

  useEffect(() => {
    let mounted = true;

    async function loadLogs() {
      try {
        if (mounted) setLoading(true);
        const data = await fetchLogs();
        const arr = Array.isArray(data) ? data : data.data || [];
        arr.sort((a, b) => new Date(b.created) - new Date(a.created));
        if (mounted) setAllLogs(arr);
      } catch (err) {
        console.error(err);
        if (mounted) setError(err.message || "Failed to load logs");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadLogs();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const indexOfLastLog = currentPage * logsPerPage;
    const indexOfFirstLog = indexOfLastLog - logsPerPage;
    setPaginatedLogs(allLogs.slice(indexOfFirstLog, indexOfLastLog));
  }, [allLogs, currentPage, logsPerPage]);

  const totalPages = Math.ceil(allLogs.length / logsPerPage);

  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  if (loading)
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-zinc-950">
        <p className="text-gray-600 dark:text-zinc-400 animate-pulse">
          Loading logs...
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

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-900 dark:shadow-none">
        <h1 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-zinc-50">
          Drone Logs
        </h1>

        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-gray-50 dark:border-zinc-700 dark:bg-zinc-800/50">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-white text-gray-800 dark:bg-zinc-900 dark:text-zinc-100">
                <Th>Created</Th>
                <Th>Country</Th>
                <Th>Drone ID</Th>
                <Th>Drone Name</Th>
                <Th>Celsius</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-zinc-700">
              {paginatedLogs.length > 0 ? (
                paginatedLogs.map((r, i) => (
                  <tr
                    key={i}
                    className="even:bg-white odd:bg-gray-50 dark:even:bg-zinc-900 dark:odd:bg-zinc-800/40"
                  >
                    <Td>{new Date(r.created).toLocaleString()}</Td>
                    <Td>{r.country}</Td>
                    <Td>{r.drone_id}</Td>
                    <Td>{r.drone_name}</Td>
                    <Td>{r.celsius}</Td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="p-6 text-center text-gray-500 dark:text-zinc-400"
                  >
                    No logs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {allLogs.length > logsPerPage && (
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400 dark:disabled:bg-zinc-700"
            >
              ← Previous
            </button>
            <span className="text-sm text-gray-700 dark:text-zinc-400">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400 dark:disabled:bg-zinc-700"
            >
              Next →
            </button>
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <a
            href="/"
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

function Th({ children }) {
  return (
    <th className="p-3 text-left text-xs font-semibold uppercase tracking-wide">
      {children}
    </th>
  );
}

function Td({ children }) {
  return (
    <td className="p-3 text-sm text-gray-700 dark:text-zinc-300 whitespace-nowrap">
      {children}
    </td>
  );
}
