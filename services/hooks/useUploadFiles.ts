import { useMutation } from '@tanstack/react-query';
import apiService from '../apiService';

export interface UploadFile {
  path: string;
}

export default function useUploadFiles(
  onSuccess: (values: UploadFile) => void
) {
  return useMutation<UploadFile, Error, FormData>({
    mutationFn: (file: FormData) =>
      apiService.uploadFile<UploadFile, FormData>(file, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    onSuccess(data, variables, context) {
      onSuccess(data);
    },
  });
}
