import { message } from 'antd';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCategory, updateCategory, deleteCategory } from '../service';
import { CategoryType } from '../types';

export function useCreateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CategoryType) => createCategory(data),
    onSuccess: () => {
      message.success('Category created successfully!');
      queryClient.invalidateQueries(['category']);
    },
    onError: (error) => {
      message.error(`Error creating category: ${error}`);
    },
  });
}

export function useUpdateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: CategoryType }) => updateCategory(id, data),
    onSuccess: () => {
      message.success('Category updated successfully!');
      queryClient.invalidateQueries(['category']);
    },
    onError: (error) => {
      message.error(`Error updating category: ${error}`);
    },
  });
}

export function useDeleteCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteCategory(id),
    onSuccess: () => {
      message.success('Category deleted successfully!');
      queryClient.invalidateQueries(['category']);
    },
    onError: (error) => {
      message.error(`Error deleting category: ${error}`);
    },
  });
}
