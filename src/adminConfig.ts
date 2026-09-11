export const PRIMARY_ADMIN_UID = '3d5K6bFJfnaI0ufavRADKZ3Dzwo2'

export function getAdminUids() {
  const configuredUids = (import.meta.env.VITE_ADMIN_UIDS ?? '')
    .split(',')
    .map((uid: string) => uid.trim())
    .filter(Boolean)

  return Array.from(new Set([PRIMARY_ADMIN_UID, ...configuredUids]))
}