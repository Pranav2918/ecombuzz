import apiClient from './client'
import type { ApiResponse, PaginatedProducts, Product, ProductFilters } from '@/types'

export const productsApi = {
  getAll: (filters?: ProductFilters) =>
    apiClient.get<ApiResponse<PaginatedProducts>>('/products', { params: filters }),

  getBySlug: (slug: string) =>
    apiClient.get<ApiResponse<Product>>(`/products/${slug}`),

  getCategories: () =>
    apiClient.get<ApiResponse<string[]>>('/products/categories'),

  getById: (id: string) =>
    apiClient.get<ApiResponse<Product>>(`/products/id/${id}`),

  // Admin
  create: (data: Record<string, unknown>) =>
    apiClient.post<ApiResponse<Product>>('/products', data),

  update: (id: string, data: Record<string, unknown>) =>
    apiClient.put<ApiResponse<Product>>(`/products/${id}`, data),

  delete: (id: string) =>
    apiClient.delete<ApiResponse<null>>(`/products/${id}`),
}
