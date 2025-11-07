// Simple API client using fetch. Configure the base URL with VITE_API_BASE_URL
// Example: VITE_API_BASE_URL=http://localhost:3000

// Vite exposes env vars on import.meta.env; use a safe any-cast to avoid TS complaints in this repo setup
export const apiBase = (import.meta as any).env?.VITE_API_BASE_URL ?? "";

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const url = `${apiBase}${path}`;

  const defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const opts: RequestInit = {
    credentials: "include",
    ...options,
    headers: {
      ...defaultHeaders,
      ...(options.headers ?? {}),
    },
  };

  const res = await fetch(url, opts);

  // Try to parse JSON when possible
  const text = await res.text();
  const body = text ? JSON.parse(text) : null;

  if (!res.ok) {
    // Normalize error shape
    const message = (body as any)?.error ?? (body as any)?.message ?? res.statusText;
    throw new Error(message || "API request failed");
  }

  return body as T;
}

// Types matching Rails resources (adjust as your API returns)
export type User = {
  id: number;
  name: string;
  email?: string;
  role?: string;
  department_id?: number;
};

export type Department = { id: number; name: string };

export type Shift = {
  id: number;
  name: string;
  start_time: string;
  end_time: string;
};

export type Leave = {
  id: number;
  user_id: number;
  start_date: string;
  end_date: string;
  reason?: string;
  status?: "pending" | "approved" | "rejected";
};

// All endpoints point to Rails namespace /api/v1 and correct pluralization (leafes)
export const getUsers = async (): Promise<User[]> => request<User[]>("/api/v1/users", { method: "GET" });

export const getDepartments = async (): Promise<Department[]> => request<Department[]>("/api/v1/departments", { method: "GET" });

export const getShifts = async (): Promise<Shift[]> => request<Shift[]>("/api/v1/shifts", { method: "GET" });

export const getLeaves = async (): Promise<Leave[]> => request<Leave[]>("/api/v1/leafes", { method: "GET" });

export default { request, getUsers, getDepartments, getShifts, getLeaves };
