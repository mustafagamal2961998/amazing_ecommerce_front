export const BASE_URL = 'http://192.168.1.93:8000/api/'
export const GET_SECTIONS = `${BASE_URL}dashboard/sections/`
export const GET_CATEGORIES = `${BASE_URL}dashboard/categories/`
export const TRASHEDS_CATEGORIES = `${GET_CATEGORIES}trasheds`
export const RESTORE_CATEGORY = `${TRASHEDS_CATEGORIES}remove/`
export const FORCE_DELETE_CATEGORY = `${TRASHEDS_CATEGORIES}force/delete/`